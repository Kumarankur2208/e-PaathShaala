package com.cdac.epaathshaala.entity;

import javax.persistence.*;

@Entity
@Table(name = "course_enrollments")
public class CourseEnrollment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long enrollment_id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private User student;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    private String transaction_id;

    private boolean isApproved; // Indicates if the enrollment is approved
    private boolean isCompleted; // Indicates if the course is completed by the student

    // Constructors, getters, setters

}
