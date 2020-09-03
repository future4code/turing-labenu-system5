import {FileManager} from './fileManager'
import {Student} from './students'
import moment from 'moment'

const newStudent: Student = new Student('1', 'Mateus', 'mat@gmail.com', moment('10/10/2020', 'DD/MM/YYYY'), ['dançar', 'comer'])

const fm = new FileManager('students.json')
console.log(fm.readFileFromJson())
fm.setFilePath('students.json')
fm.writeFileInJson(newStudent)