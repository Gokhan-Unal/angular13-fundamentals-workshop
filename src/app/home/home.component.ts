import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courseLessons = [];

  selectedLesson = null;

  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }

  constructor(private lessonService: LessonsService) {}

  ngOnInit() {
    this.courseLessons = this.lessonService.lessons;
  }
}
