package com.cdac.epaathshaala.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "quiz_completions")
public class QuizCompletion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long quiz_completion_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;

    private Integer quiz_score;
    private Date completion_date;

    private boolean isPassed; // Indicates if the quiz is passed by the user
//    private boolean isGraded; // Indicates if the quiz is graded

    // Constructors, getters, setters

}
