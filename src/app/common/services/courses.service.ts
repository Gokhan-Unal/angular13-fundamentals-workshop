import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: Course[] = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: '2',
      title: 'Angular 13 Advanced',
      description: 'Learn advanced topics of Angular 13',
      percentComplete: 45,
      favorite: false,
    },
  ];
  constructor() {}
}
