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

const {
  name: studentName,
  city="Chennai"
}=student1;
console.log(studentName);
console.log(city);

const orginal={
    name:"Neiran",
    age:20,
}
const updated={
    ...orginal,
    age:21,
    city:"Chennai"
}
console.log(orginal)
console.log(updated)

//spread - combine operators
const personal={
  name:"John",
  age:30,
}
const professional={
  company:"ABC Corp",
  job:"Developer"
}
const combined={
  ...personal,
  ...professional
}
console.log(combined)

//in array
const first=[1,2,3]
const second=[4,5,6]

const combinedArray=[...first,...second]
console.log(combinedArray)

const copy =[...first]
console.log(copy)

//optional chaining
const user={
  name:"John",
  address:{
    city:"New York",
    state:"NY"
  }
}

const username=null;
const ageValue =0;
const city1 = undefined;

console.log(username??"Guest");
console.log(ageValue??18);
console.log(city1??"Chennai");
console.log(user.address?.city);

console.log(0 || 100);
console.log(0 ?? 100);

console.log(false || true);
console.log(false ?? true);
console.log("" ?? "Guest");
console.log("" ||"Guest");

/*|| vs ??*/

console.log(0||100);
console.log(0??100);

console.log(false||true)
console.log(false??true)

console.log(""??"Guest")
console.log(""||"Guest")

const a1=null
const b1=undefined
console.log(a1??18)
console.log(b1??18)


