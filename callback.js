function display(callback){
  console.log("Hello");
  callback();
}
function message(){
  console.log("Welcome");
}
display(message)


const students=["Deva","Arun","Divya","Rahul","sneha"];
console.log(students[0], students[4] );
students.push("dp");
console.log(students);
students.pop(students[0,4]);
console.log(students);

const numbers=[1,2,3,4,5];
numbers.splice(1,2);
console.log(numbers);

console.log(numbers.includes(1));

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 800 },
  { name: "Headphones", price: 1200 },
  { name: "Smartwatch", price: 13000 }
];

console.log(products.filter(product => product.price > 1000));
console.log( products.map(product => product.name));
console.log(products.reduce((sum, product) => sum + product.price, 0));