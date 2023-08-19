package com.cdac.epaathshaala.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "assignment_submissions")
public class AssignmentSubmission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long submission_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "assignment_id")
    private Assignment assignment;

    private String assignment_grade;
    private Date submission_date;

    private boolean isGraded; // Indicates if the assignment submission is graded
    private String feedback; // Faculty feedback on the assignment

    // Constructors, getters, setters

}
