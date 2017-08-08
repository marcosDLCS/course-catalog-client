import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'new-course.html'
})
export class NewCourse {

  private newForm : FormGroup;
  teachers:any;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private http : Http ) {
    this.newForm = this.formBuilder.group({
      active: ['true', Validators.required],
      teacher: ['', Validators.required],
      name: ['', Validators.required],
      level: ['', Validators.required],
      hours: ['', Validators.required]
    });
    this.http.get("http://localhost:8081/course-catalog/api/teachers")
      .map(res => res.json()).subscribe(data => {
      this.teachers = data;
      console.log("This is my response - [teachers] : " + JSON.stringify(this.teachers));
    });
  }

  postForm(){
    console.log(this.newForm.value)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions(headers);
    this.http.post("http://localhost:8081/course-catalog/api/courses", this.newForm.value, options)
      .subscribe(
        data => {
          console.log("RESPONSE: " + data);
        },
        err => {
          console.log("ERROR: ", err);
        }
      );
  }

}
