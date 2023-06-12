import { Skill } from '../models/skill.model';


export class Developer {
    constructor(
        public firstName:string,
        public lastName: string,
        public gender: string,
        public age:number,
        public bio:string,
        public skills:Skill[]

    ){}
}