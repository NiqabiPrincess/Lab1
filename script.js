let studentName = "Zainab"; //string
let studentAge = 22; //int
isEnrolled = true; //boolean

console.log(`My name is ${studentName} my age is ${studentAge} and the fact I'm enrolled is ${isEnrolled}`)

//Array
let foods = ['Spring Rolls', ' Butter Chicken', ' Kebabs'];
console.log(`My fav foods include: ${foods}`)

//Object
const me = {
    firstName: 'Zainab',
    lastName: 'Aamir',
    age: 22,
    female: true }

const lipstick = {
    brand: 'e.l.f',
    shadeName: 'Standing Ovation',
    colour: 'pinkish nude',
    price: 12.13,
    discontinue: false }

console.log(`My fav lipstick is from the brand ${lipstick.brand} and in the shade ${lipstick.shadeName}. It is a ${lipstick.colour} and costs $ ${lipstick.price}. The fact that it is discontinued is ${lipstick.discontinue} `)

//Arithmetic Operators
let a = 5;
let x = 11;
console.log(a + x)
console.log(x - a)
console.log(a * x)
console.log(x / a)
console.log(x % a)

//Comparison Operators
console.log(`a equals 5 is`, a == 5)
console.log(`x equals 10 is `,x === 10)
console.log(`a is not equal to x is`, a != x)
console.log(`a is smaller than x is`, a < x)
console.log(`x is bigger than a is`,x > a)
console.log(`a is smaller than or equal to x is`,a <= x)
console.log(`x is bigger than or equal to a is`,x >= a)

//Logical Operators

let poison = false;
let potion = true;
console.log(poison && potion)
console.log(poison || potion)
console.log(!poison)
