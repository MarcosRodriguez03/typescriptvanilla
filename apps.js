"use strict";
//hovering over a variable will let you know its current type 
// and how you can assign a type to it if you havent already
let num1 = 7;
//you can still declare variables with a type without intializing them
let str;
// we want to avoid type any because it defeats the whole purpose of typescript
let any;
function mappingGrades(data) {
    console.log(data.name);
    return data.grades.map((ele) => {
        return ele;
    });
}
//typing a funciton
function funk() {
    return 'true';
}
//typing an arrow funtion 
//giving arrowfunction variable the type of an arrow function that returns a string
const arrowFunction = () => {
    return 'string';
};
let student1 = {
    name: "Jessie",
    grades: [100, 100, 100],
    email: 'Jessies email',
    pet: 'snail'
};
//once a type is declared you cant change it
// type Jessie = {
// }
function createStudent(data) {
    let newStudent = {
        name: data.name,
        grades: data.grades,
        email: data.email,
        pet: data.pet
    };
}
