package com.green.gogiro.entity.butcher;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "t_butcher_tag")
public class ButcherTagEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "BIGINT UNSIGNED")
    private Long itag;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ibutcher", nullable = false)
    private ButcherEntity butcherEntity;

    @Column(length = 10, nullable = false)
    private String tag;

}
