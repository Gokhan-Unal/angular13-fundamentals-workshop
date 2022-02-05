import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

const BASE_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Course[]>(this.getUrl());
  }

  find(id) {
    return this.http.get<Course>(this.getUrlWithID(id));
  }

  create(course) {
    return this.http.post<Course>(this.getUrl(), course);
  }

  update(course) {
    return this.http.put<Course>(this.getUrlWithID(course.id), course);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithID(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }
}
