import { Component,OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Skill } from '../models/skill.model';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  @Input() myskill!: Skill;



  

}
 