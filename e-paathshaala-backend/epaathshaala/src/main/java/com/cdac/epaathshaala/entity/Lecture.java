package com.cdac.epaathshaala.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "lectures")
public class Lecture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long lectureId;

    private String lectureTitle;
    private String lectureDescription;
    private String videoUrl; // URL of the video lecture

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    // Constructors, getters, setters
}
