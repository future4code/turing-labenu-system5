import moment from 'moment'
import { Student } from './Students'
import { Teacher } from './Teacher'

moment.locale("pt-br")

export abstract class Mission{
    private name: string = ""

    constructor(
        protected id: string,
        protected startDate: string,
        protected endDate: string,
        protected listOfTeacher: Teacher[] = [],
        protected studentList: Student[] =[],
        protected currentModule: number | undefined = undefined
    ){ }

    public getId():string{
        return this.id
    }

    public getName(name: string): string{
        return this.name
    }

    public getStartDate(): string{
        return this.startDate
    }

    public getEndDate(): string{
        return this.endDate
    }

    public addTeacher(teacher: Teacher): void{
        this.listOfTeacher.push(teacher)
    }

    public addStudent(student: Student): void{
        this.studentList.push(student)
    }

    public setName(name:string): void{
        this.name = name
    }

    public getListOfTeacher():Teacher[]{
        return this.listOfTeacher
    }

}