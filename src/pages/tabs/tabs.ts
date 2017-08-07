import { Component } from '@angular/core';

import { CourseList } from '../course-list/course-list';
import { NewCourse } from '../new-course/new-course';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CourseList;
  tab2Root = NewCourse;

  constructor() {

  }
}
