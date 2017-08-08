import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'course-list.html'
})
export class CourseList {

  courses: any;

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get("http://localhost:8081/course-catalog/api/courses")
      .map(res => res.json()).subscribe(data => {
      this.courses = data;
      console.log("This is my response: " + JSON.stringify(this.courses));
    });
  }

  badgeColor(level: String) {
    let color: String = "";
    if (level.toLowerCase() == 'basico'){
      color = 'secondary';
    }
    if (level.toLowerCase() == 'avanzado'){
      color = 'danger'
    }
    return color;
  }
}
