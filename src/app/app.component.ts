import { Component, OnInit } from '@angular/core';
import { Developer } from './models/developer.model';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DevSkills';
mydeveloper!:Developer
ngOnInit(): void {
  this.mydeveloper= new Developer(
    'Yannick',
    'Minck',
    'Male',
    37,
    'futur dev' ,
    [],

  )
}
}
