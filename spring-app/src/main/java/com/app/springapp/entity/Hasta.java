package com.app.springapp.entity;

import jakarta.persistence.*;

import lombok.Data;

import java.time.Instant;
import java.util.Date;

@Entity
@Data
public class Hasta {
    @Id
    @SequenceGenerator(name = "kbs_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "kbs_seq")
    private Long hasta_id;
    private String hasta_first_name;
    private String hasta_last_name;
    private Date hasta_birthdate;
}

