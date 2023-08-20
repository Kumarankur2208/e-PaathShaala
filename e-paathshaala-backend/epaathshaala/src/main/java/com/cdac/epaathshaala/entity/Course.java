package com.cdac.epaathshaala.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long course_id;

    private String courseName;
    private String courseDescription;

    @ManyToOne
    @JoinColumn(name = "faculty_id")
    private User faculty;

    private BigDecimal price;

    private String duration; // e.g., "8 weeks"
    private String level; // e.g., "Beginner", "Intermediate", "Advanced"
    private String category; // e.g., "Programming", "Mathematics", "Science"

    // Other additional columns you might want to add
    private boolean isFeatured; // Indicates if the course is featured on the platform
//    private String prerequisites; // Any prerequisites for the course

    
    @OneToMany(mappedBy = "course")
    private List<Lecture> lectures;
    
    // Constructors, getters, setters

}
