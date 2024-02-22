package com.green.gogiro.entity.community;

import com.green.gogiro.entity.CreatedAtEntity;
import com.green.gogiro.entity.UserEntity;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "t_community_count")
public class CommunityCountEntity extends CreatedAtEntity {

    @EmbeddedId
    private CommunityCountIds communityCountIds;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("iuser")
    @JoinColumn(name = "iuser", nullable = false, columnDefinition = "BIGINT UNSIGNED")
    private UserEntity userEntity;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("iboard")
    @JoinColumn(name = "iboard", nullable = false, columnDefinition = "BIGINT UNSIGNED")
    private CommunityEntity communityEntity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ireport", nullable = false)
    private ReportEntity ireport;
}
