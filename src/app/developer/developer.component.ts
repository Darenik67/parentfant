import { Component, OnInit } from '@angular/core';
import { Developer,} from '../models/developer.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit{
ngOnInit(): void {
  
}
  mydeveloper:Developer= new Developer(
        "Yannick",
        "Minck",
        "male",
         37,
         "futur dev",
        [{name:"html",logo:"logo", site:"js"}]
    )
}