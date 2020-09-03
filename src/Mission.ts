import moment from 'moment'

export abstract class Mission{
    protected name: string = ""

    constructor(
        protected id: string,
        protected startDate: moment.Moment,
        protected endDate: moment.Moment,
        protected listOfTeacher: Teacher[] = [],
        protected studentList: Student[] =[],
        protected currentModule: number | undefined= undefined
    ){ }

    public getId():string{
        return this.id
    }

    public getName(name: string): string{
        return this.name
    }

    public getStartDate(): moment.Moment{
        return this.startDate
    }

    public getEndDate(): moment.Moment{
        return this.endDate
    }

    // public addTeacher(teacher: string): void{
    //     this.listOfTeacher.push(teacher)
    // }

    // public addStudent(student: string): void{
    //     this.studentList.push(student)
    // }

    public setName(name:string): void{
        this.name = name
    }

}