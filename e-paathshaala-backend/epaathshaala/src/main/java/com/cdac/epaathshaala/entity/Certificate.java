package com.cdac.epaathshaala.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "certificates")
public class Certificate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long certificate_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;

    @ManyToOne
    @JoinColumn(name = "assignment_id")
    private Assignment assignment;

    private Integer quiz_score;
    private String assignment_grade;
    private Date issuance_date;

    private String certificate_url; // URL to the generated certificate file

    // Constructors, getters, setters

}
