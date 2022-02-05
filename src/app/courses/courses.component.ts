import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';

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
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'Angular 13 Advanced',
      description: 'Learn advanced topics of Angular 13',
      percentComplete: 45,
      favorite: false,
    },
  ];

  selectedCourse = emptyCourse;
  originalTitle = '';

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course) {
    this.selectedCourse = { ...course };
    this.originalTitle = course.title;
  }
  deleteCourse(id) {
    this.courses = this.courses.filter((course) => course.id !== id);
  }

  saveCourse(course) {
    console.log('Saving course', course);
  }

  reset() {
    this.selectedCourse = { ...emptyCourse };
  }
}
