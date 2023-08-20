package com.cdac.epaathshaala.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cdac.epaathshaala.entity.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    // You can add custom query methods if needed
	 List<Course> findByCategory(String category);
}
