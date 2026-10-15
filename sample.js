let strong=[40,10,5,20,30]
let res=strong.sort((a,b)=>a-b) 
console.log(res);

let number=[10,20,30,40]
let res1=number.reduce((total,sum)=>total+sum,0)
console.log(res1);

let numbers=[10,20,30,40,50]
let a=numbers.slice(1,3)
let b=numbers.splice(2,1)
console.log(a)
console.log(b)

let num=[10,20,15,5]
let result=num.some((n)=>{return n>20})
console.log(result)

let num1=[10,20,15,5]
let resultt=num1.every((n)=>{return n<30})
console.log(result)

const employee = {
  name: "Arun",
  salary: 30000,
}

console.log(employee.name)
console.log(employee["salary"])

employee.salary = 35000
console.log(employee.salary)

employee.city = "Chennai"
delete employee.city
console.log(employee)

const student = {
    name: "Priya",
    age: 20,
    address: {
        City: "Chennai",
        State: "Tamil Nadu"
    }
}
console.log(student.name)
console.log(student["age"])
console.log(student.address.City) 

const student1 = {
    name: "Priya",
    age: 21,
    course: "React"
}
const {name, age, course} = student1
console.log(name)
console.log(age)
console.log(course)