package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Course;
import com.springrest.springrest.services.CourseService;



@RestController
public class MyController {
	
	@Autowired
	private CourseService courseService;
	
	@GetMapping("/home")
	public String home() {
		return "this is my home page";
	}
	
	@CrossOrigin
	@GetMapping("/cources")
	public List<Course> getCourse(){
		return this.courseService.getCourse();
		
	}
	@CrossOrigin
	@GetMapping("/cources/{courseId}")
	public Course getCourseById(@PathVariable long courseId){
		return this.courseService.getCourseById(courseId);
		
	}
	@CrossOrigin
	@PostMapping("/addCourse")
	public Course addCourse(@RequestBody Course course) {
		return this.courseService.addCourse(course);
	}
	@CrossOrigin
	@PutMapping("/updateCourse")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseService.updateCourse(course);
	}
	@CrossOrigin
	@DeleteMapping("/cources/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
		try {
			   this.courseService.deleteCourse(Long.parseLong(courseId));
			   return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
