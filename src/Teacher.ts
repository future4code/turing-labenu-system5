import { User } from "./user";

export enum TEACHER_SPECIALTY {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND",
  }
  
  export class Teacher implements User{
    constructor(
      public id: string,
      public name: string,
      public email: string,
      public specialties: TEACHER_SPECIALTY[]
    ) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.specialties = specialties;
    }
  }