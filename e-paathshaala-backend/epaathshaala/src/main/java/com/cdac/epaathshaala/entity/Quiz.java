package com.cdac.epaathshaala.entity;

import javax.persistence.*;

@Entity
@Table(name = "quizzes")
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long quiz_id;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    private String quiz_name;

    private int max_score; // Maximum achievable score for the quiz
//    private boolean isGraded; // Indicates if the quiz is graded
    private boolean isActive; // Indicates if the quiz is currently active
    private boolean isPublished; // Indicates if the quiz is published and accessible to students

    // Constructors, getters, setters

}
