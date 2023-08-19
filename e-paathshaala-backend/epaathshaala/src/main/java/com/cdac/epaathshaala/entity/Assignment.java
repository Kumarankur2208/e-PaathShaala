package com.cdac.epaathshaala.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "assignments")
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long assignment_id;

    private String assignment_title;
    private String assignment_description;
    private Date deadline;

    @ManyToOne
    @JoinColumn(name = "faculty_id")
    private User faculty;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    private boolean isActive; // Indicates if the assignment is currently active
    private boolean isGraded; // Indicates if the assignment is graded
    private boolean isPublished; // Indicates if the assignment is published and accessible to students

    // Constructors, getters, setters

}
