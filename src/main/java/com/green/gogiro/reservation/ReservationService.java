package com.green.gogiro.reservation;

import static com.green.gogiro.common.Const.*;
import static com.green.gogiro.exception.AuthErrorCode.*;

import com.green.gogiro.butchershop.ButcherShopMapper;
import com.green.gogiro.common.MyFileUtils;
import com.green.gogiro.common.ResVo;
import com.green.gogiro.entity.UserEntity;
import com.green.gogiro.entity.shop.ShopEntity;
import com.green.gogiro.entity.shop.ShopReservationEntity;
import com.green.gogiro.exception.AuthErrorCode;
import com.green.gogiro.exception.RestApiException;
import com.green.gogiro.reservation.model.*;
import com.green.gogiro.security.AuthenticationFacade;
import com.green.gogiro.shop.ShopMapper;
import com.green.gogiro.shop.ShopRepository;
import com.green.gogiro.shop.model.ShopModel;
import com.green.gogiro.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ReservationService {
    private final ReservationMapper mapper;
    private final ShopMapper shopMapper;
    private final ButcherShopMapper butMapper;
    private final MyFileUtils myFileUtils;
    private final AuthenticationFacade authenticationFacade;
    private final ReservationRepository repository;
    private final UserRepository userRepository;
    private final ShopRepository shopRepository;

    //Mybatis 1.예약 등록
    @Transactional
    public ResVo postReservation1(ReservationInsDto dto) {
        ShopModel entity = shopMapper.selShopEntity(dto.getIshop());
        if (entity == null) {
            throw new RestApiException(VALID_SHOP);
        }
        dto.setIuser((int)authenticationFacade.getLoginUserPk());
        mapper.insReservation(dto);
        return new ResVo(dto.getIreser());
    }
    //JPA 1.예약 등록
    @Transactional
    public ResVo postReservation2(ReservationInsDto dto){
        ShopEntity shopEntity=shopRepository.getReferenceById((long)dto.getIshop());
        if(shopEntity.getIshop().intValue()==0){
            throw new RestApiException(VALID_SHOP);
        }
        ShopReservationEntity entity= new ShopReservationEntity();
        entity.setIuser(userRepository.getReferenceById(authenticationFacade.getLoginUserPk()));
        entity.setIshop(shopEntity);
        entity.setDate(LocalDateTime.parse(dto.getDate()));
        entity.setRequest(dto.getRequest());
        entity.setHeadCount(dto.getHeadCount());
        repository.save(entity);
        return new ResVo(entity.getIreser().intValue());
    }
    //Mybatis 2.픽업 등록
    @Transactional
    public ResVo postPickup1(PickupInsDto dto) {
        List<Integer> menuList = butMapper.selButcherMenu(dto.getIbutcher());
        List<Integer> list= menuList.stream().filter(item->{
            for(PickupMenuDto menu: dto.getMenus()){
                if(item==menu.getIbutMenu()){
                    return true;
                }
            }
            return false;
        }).toList();
        if(list.size()!=dto.getMenus().size()){
            throw new RestApiException(AuthErrorCode.INVALID_MENU_OR_COUNT);
        }
        dto.setIuser((int)authenticationFacade.getLoginUserPk());
        mapper.insPickup(dto);
        for (PickupMenuDto m : dto.getMenus()) {
            PickupMenuDto menu = PickupMenuDto.builder()
                    .ipickup(dto.getIpickup())
                    .ibutMenu(m.getIbutMenu())
                    .count(m.getCount())
                    .build();
            mapper.insPickupMenu(menu);
        }
        return new ResVo(dto.getIpickup());
    }
    //JPA 2.픽업 등록
    @Transactional
    public ResVo postPickup2(){
        return null;
    }
    public ResVo cancelReservation(CancelDto dto) {
        dto.setIuser((int)authenticationFacade.getLoginUserPk());
        Integer checkReservation = mapper.checkReservation(dto);
        if (checkReservation == null) {
            throw new RestApiException(AuthErrorCode.INVALID_RESERVATION);
        }
        if (dto.isReservation()) {
            mapper.cancelReservation(dto);
        } else {
            mapper.cancelPickup(dto);
        }
        return new ResVo(SUCCESS);
    }

    public ResVo putReservation(ReservationUpdDto dto) {
        if (dto.getDate().equals("0000-00-00 00:00:00")) {
            throw new RestApiException(AuthErrorCode.NOT_DATE);
        }
        dto.setIuser((int)authenticationFacade.getLoginUserPk());
        mapper.updReservation(dto);
        return new ResVo(SUCCESS);
    }
    @Transactional
    public ReviewPicsInsVo postReview(ReviewDto dto) {
        ReviewPicsInsVo vo = new ReviewPicsInsVo();
        vo.setCheckShop(dto.getCheckShop());
        dto.setIuser((int)authenticationFacade.getLoginUserPk());

        Integer check = mapper.checkReservationController(dto);
        if (check != null) {
            if (check == dto.getIuser()) {
                mapper.insReview(dto);
                String target = (dto.getCheckShop() == 0 ? "/shop/" : "/butcher/")
                        + dto.getIshop() + "/review/" + dto.getIreview() + "/";

                vo.setIreview(dto.getIreview());

                for (MultipartFile file : dto.getFiles()) {
                    String saveFileNm = myFileUtils.transferTo(file, target);
                    vo.getPics().add(saveFileNm);
                }
                mapper.insReviewPics(vo);
            }
            return vo;
        } else
            //해당 유저의 예약 혹은 픽업이 아닌 경우
            throw new RestApiException(INVALID_RESERVATION);
    }
}

