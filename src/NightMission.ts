import { Mission } from "./Mission";
import moment from 'moment'

export class NightMission extends Mission{
    constructor(
        id: string,
        name: string,
        startDate: moment.Moment,
        endDate: moment.Moment,
        listOfTeacher: Teacher[],
        studentList: Student[],
        currentModule: number|undefined
    ){
        super(id, startDate, endDate, listOfTeacher, studentList, currentModule)
        this.name = name
    }

    public setName(name: string): void{
        if(name.indexOf("-na-night") !== -1){
            super.setName(name)
        }
    }
}