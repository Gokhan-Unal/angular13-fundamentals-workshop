import { Component, OnInit } from '@angular/core';

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

  selectedCourse = null;

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course) {
    this.selectedCourse = course;
  }
  deleteCourse(id) {
    this.courses = this.courses.filter((course) => course.id !== id);
  }
}
