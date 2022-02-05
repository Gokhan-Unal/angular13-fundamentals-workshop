import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [];

  selectedCourse = emptyCourse;
  originalTitle = '';

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  selectCourse(course) {
    this.selectedCourse = { ...course };
    this.originalTitle = course.title;
  }
  deleteCourse(id) {
    this.courses = this.courses.filter((course) => course.id !== id);
  }

  saveCourse(course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
    console.log('Saving course', course);
  }

  fetchCourses() {
    this.coursesService.all().subscribe((result) => {
      this.courses = result;
    });
  }

  updateCourse(course) {
    this.coursesService
      .update(course)
      .subscribe((result) => this.fetchCourses());
  }

  createCourse(course) {
    this.coursesService
      .create(course)
      .subscribe((result) => this.fetchCourses());
  }

  reset() {
    this.selectedCourse = { ...emptyCourse };
  }
}
