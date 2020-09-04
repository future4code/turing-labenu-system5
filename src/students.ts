import { User } from './User'
import moment from 'moment'

moment.locale("pt-br")


export class Student implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: string,
        public hobbies: string[]
    ) {
        this.id = id
        this.name = name
        this.email = email
        this.birthDate = birthDate
        this.hobbies = hobbies
    }
    // public getAge(): moment.Moment {
    //     const today = moment()
    //     const birthDate = moment(this.birthDate, "DD/MM/YYYY")
        // const age = today.diff(birthDate, "years")
        // return today.diff(birthDate, "years")
        // return moment().diff(this.birthDate, "years")
    }
// }

