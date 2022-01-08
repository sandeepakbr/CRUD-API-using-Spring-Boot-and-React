package com.springrest.springrest.services;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	CourseDao courseDao;
	//List<Course> list;
	
	public CourseServiceImpl() {
		//list = new ArrayList<Course>();
		//list.add(new Course(145,"Java core Course" , "this course is for beginer"));
		//list.add(new Course(4343,"Java advanse Course" , "this course is for experience"));
	}
	@Override
	public List<Course> getCourse() {
		
		return courseDao.findAll();
	}
	@Override
	public Course getCourseById(long courseId) {
		//Course c=null;
		//for(Course course:list) {
		//	if(course.getCourseId()== courseId) {
		//		c=course;
			//}
		//}
		return courseDao.getOne(courseId);
	}
	
	@Override
	public Course addCourse(Course course) {
		 courseDao.save(course);
		return course;
	}
	
	@Override
	public Course updateCourse(Course course) {
		// TODO Auto-generated method stub
		//list.forEach(e->{
		//	if(e.getCourseId() == course.getCourseId()) {
			//	e.setTitle(course.getTitle());
			//	e.setDescription(course.getDescription());
			//}
		//});
		courseDao.save(course);
		return course;
	}
	@Override
	public void deleteCourse(long parseLong) {
		// TODO Auto-generated method stub
		Course entity = courseDao.getOne(parseLong);
		courseDao.delete(entity);
		//list=this.list.stream().filter(e->e.getCourseId() != parseLong).collect(Collectors.toList());
	}
	

}
