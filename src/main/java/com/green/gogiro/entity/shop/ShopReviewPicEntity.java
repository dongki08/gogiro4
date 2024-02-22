package com.green.gogiro.entity.shop;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.http.MediaType;

@Data
@Entity
@Table(name = "t_shop_review_pic")
public class ShopReviewPicEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ireview_pics", columnDefinition = "BIGINT UNSIGNED")
    private Long ireviewPics;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ireview", nullable = false)
    private ShopReviewEntity shopReviewEntity;

    @Column(length = 50, nullable = false)
    private String pic;


}
