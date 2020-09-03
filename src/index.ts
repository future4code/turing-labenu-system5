import { FileManager } from "./FileManager";
import { Teacher, TEACHER_SPECIALTY } from "./Teacher";

const newTeacher: Teacher = new Teacher('1', 'Amanda', 'amanda@labenu.com', [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TYPESCRIPT] );

const fileManager: FileManager = new FileManager('teachers.json');

const teachers = fileManager.readFile();

teachers.push(newTeacher);

fileManager.writeFile(teachers);

console.log(fileManager.readFile());
