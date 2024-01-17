import { Cours } from "./cours.model";
import { Student } from "./student.model";
import { Teacher } from "./teacher.model";

export class Group {
  id?: number;
  name?: string;
  course?: Cours;
  teacher?: Teacher;
  students?: Student[];

  constructor(id?: number, name?: string, cour?: Cours, teacher?: Teacher, students?: Student[]) {
    this.id = id;
    this.name = name;
    this.course = cour;
    this.teacher = teacher;
    this.students = students;
  }
}

