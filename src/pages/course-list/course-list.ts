import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'course-list.html'
})
export class CourseList {
  URL:string = "http://localhost:8081/course-catalog/api/courses";
  courses: any;

  constructor(public navCtrl: NavController, public http: Http) {
    this.loadList(this.URL);
  }

  badgeColor(level: string) {
    let color: String = "";
    if (level.toLowerCase() == 'basico') {
      color = 'secondary';
    }
    if (level.toLowerCase() == 'avanzado') {
      color = 'danger'
    }
    return color;
  }

  loadList(url: string) {
    this.http.get(url)
      .map(res => res.json()).subscribe(data => {
      this.courses = data;
    });
  }

  orderList(order: String) {
    this.loadList(this.URL + "?order=" + order);
  }
}
