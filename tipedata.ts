let isMarried: boolean = true;

//error
// isMarried = "Dadang";

//correct
isMarried = false;

let age: number = 20;

//error
// age = true;
// age = 'Dadang';

//correct
age = 10;

let firstName: string = "Dadang";
let lastName: string = "Harianto";
let fullName: string = firstName + " " + lastName;
//error
// firstName = true;

// correct
firstName = "Lorem";

//string subtitute
// let sayHalo: string = "Hello " + fullName + ", Selamat Pagi";
//==>
let sayHalo: string = `Hello ${fullName}, Selamat Pagi`;

console.log(sayHalo);
