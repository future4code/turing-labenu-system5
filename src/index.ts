import { Student } from "./Students";
import moment from 'moment'
import { Teacher, TEACHER_SPECIALTY } from "./Teacher";
import { FullTimeMission } from "./FullTimeMission";
import { NightMission } from "./NightMission";
import { FileManager } from "./FileManager";
import { Mission } from "./Mission";

moment.locale("pt-br")


const kamila: Student = new Student('1', "Kamila", "kamila@gmail.com", moment("23/04/1988", "DD/MM/YYYY").format("DD/MM/YYYY"), ["Jogar", "Assistir filmes/séries"])

console.log(kamila)

const lais: Student = new Student('2', 'Lais', 'lais@gmail.com', moment('10/10/1995', 'DD/MM/YYYY').format("DD/MM/YYYY"), ['dançar', 'comer'])

console.log(lais)

const soter: Teacher = new Teacher("3", "Soter", "soter@gmail.com", [TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.REDUX, TEACHER_SPECIALTY.TESTES])

console.log(soter)

const mateus: Teacher = new Teacher("4", "Mateus", "mateus@gmail.com", [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TESTES])

console.log(mateus)

const amanda: Teacher = new Teacher("5", "Amanda", "amanda@gmail.com", [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TESTES])

console.log(amanda)

const caio: Teacher = new Teacher("6", "Caio", "caio@gmail.com", [TEACHER_SPECIALTY.CSS])

console.log(caio)

const turing: FullTimeMission = new FullTimeMission("7", moment("18/05/2020", "DD/MM/2020").format("DD/MM/YYYY"), moment("13/11/2020","DD/MM/YYYY").format("DD/MM/YYYY"), [soter, caio], [kamila], 3)
turing.setName("Turing")
console.log(turing)

const mello: FullTimeMission = new FullTimeMission("8", moment("18/04/2020", "DD/MM/2020").format("DD/MM/YYYY"), moment("13/10/2020","DD/MM/YYYY").format("DD/MM/YYYY"), [mateus, amanda], [lais], 4)
mello.setName("Mello")
console.log(mello)

const tang: NightMission = new NightMission("9", moment("18/07/2020", "DD/MM/2020").format("DD/MM/YYYY"), moment("13/12/2020","DD/MM/YYYY").format("DD/MM/YYYY"), [caio], [lais], 1)
tang.setName("Tang-na-night")
console.log(tang)

const fm = new FileManager("./teachers.json")

const teachers = fm.readFileFromJson()

teachers.push(amanda, mateus, soter, caio)

fm.writeFileInJson(teachers)

fm.setFilePath("students.json")

const students = fm.readFileFromJson()

students.push(kamila, lais)

fm.writeFileInJson(students)

fm.setFilePath("missions.json")

const missions = fm.readFileFromJson()

missions.push(turing, mello, tang)

fm.writeFileInJson(missions)

console.log(`A idade da ${kamila.name} é: ${kamila.getAge('1')}`)