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


    
	public Long getCourse_id() {
		return course_id;
	}


	public void setCourse_id(Long course_id) {
		this.course_id = course_id;
	}


	public String getCourseName() {
		return courseName;
	}


	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}


	public String getCourseDescription() {
		return courseDescription;
	}


	public void setCourseDescription(String courseDescription) {
		this.courseDescription = courseDescription;
	}


	public User getFaculty() {
		return faculty;
	}


	public void setFaculty(User faculty) {
		this.faculty = faculty;
	}


	public BigDecimal getPrice() {
		return price;
	}


	public void setPrice(BigDecimal price) {
		this.price = price;
	}


	public String getDuration() {
		return duration;
	}


	public void setDuration(String duration) {
		this.duration = duration;
	}


	public String getLevel() {
		return level;
	}


	public void setLevel(String level) {
		this.level = level;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public boolean isFeatured() {
		return isFeatured;
	}


	public void setFeatured(boolean isFeatured) {
		this.isFeatured = isFeatured;
	}


	public List<Lecture> getLectures() {
		return lectures;
	}


	public void setLectures(List<Lecture> lectures) {
		this.lectures = lectures;
	}
    
    // Constructors, getters, setters
    
    

}
