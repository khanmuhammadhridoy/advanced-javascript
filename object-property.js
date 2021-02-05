const student = [
    {id: 1, name:'name1'},
    {id: 2, name:'name2'},
    {id: 3, name:'name3'},
    {id: 4, name:'name4'}
]
// getting name with for loops
/*
studentName = [];
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    // console.log(element);
    const studentsName = element.name;
    studentName.push(studentsName);
}
console.log(studentName);
*/

// getting name with map
const studentName = student.map(element=>element.name);
const studentId = student.map(element=>element.id);
const studentIdL3 = student.filter(element=>element.id);

console.log(studentName);
console.log(studentId);
console.log(studentIdL3);