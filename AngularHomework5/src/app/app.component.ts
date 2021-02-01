import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];

  name = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
  age = new FormControl('', [Validators.required, Validators.minLength(1), Validators.min(1), Validators.max(120)]);


  myForm = new FormGroup({
    name: this.name, age: this.age
  });


  formAction(): void {
    this.users.push(new User(this.myForm.controls.name.value, this.myForm.controls.age.value));
    this.name.reset();
    this.age.reset();

  }
}

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
