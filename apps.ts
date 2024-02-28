//hovering over a variable will let you know its current type 
// and how you can assign a type to it if you havent already
let num1: number = 7;

//you can still declare variables with a type without intializing them
let str: string;

// we want to avoid type any because it defeats the whole purpose of typescript
let any;

function mappingGrades(data: { name: string, grades: number[] }) {
    console.log(data.name)
    return data.grades.map((ele) => {
        return ele
    })
}

//typing a funciton
function funk(): string {
    return 'true';
}

//typing an arrow funtion 
//giving arrowfunction variable the type of an arrow function that returns a string
const arrowFunction: () => string = () => {
    return 'string'
}



let student1: IStudent = {
    name: "Jessie",
    grades: [100, 100, 100],
    email: 'Jessies email',
    pet: 'snail'
}

type Jessie = {
    name: string,
    hobby: string

}

// we can call our interface later to add to it
interface IStudent {
    pet: string
}

//once a type is declared you cant change it
// type Jessie = {

// }


//we can use interfaes to create our own type
interface IStudent {
    name: string,
    grades: number[],
    email: string
}


function createStudent(data: IStudent) {
    let newStudent: IStudent = {
        name: data.name,
        grades: data.grades,
        email: data.email,
        pet: data.pet
    }
}


