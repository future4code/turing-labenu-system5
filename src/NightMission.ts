import { Mission } from "./Mission";
import moment from 'moment'
import { Student } from './students'
import { Teacher } from './Teacher'

moment.locale("pt-br")

export class NightMission extends Mission{
    constructor(
        id: string,
        startDate: string,
        endDate: string,
        listOfTeacher: Teacher[],
        studentList: Student[],
        currentModule: number|undefined
    ){
        super(id, startDate, endDate, listOfTeacher, studentList, currentModule)
        
    }

    public setName(name: string): void{
        if(name.indexOf("-na-night") !== -1){
            super.setName(name)
        }
    }
}