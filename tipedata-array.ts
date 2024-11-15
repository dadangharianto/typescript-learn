//aray
let names: string[] = ["Dadang", "Dario", "Harianto"];
let numbers: Array<number> = [1, 2, 3, 4, 5];

// console.log(names[1]);

//mengubah array
names[1] = "Rudy";

// console.log(names[1]);

// console.log(numbers[4]);

//tuple
let student: [string, string, number] = ["1001", "Dadang", 70];
let product: [string, number] = ["Handphone", 1200000];

// console.log(student[1]);
// console.log(product[0]);

// menambah array
let namesLagi: Array<string> = [];
namesLagi.push("Dadang");
namesLagi.push("Harianto");
namesLagi.push("Rudy");

// console.log(namesLagi);

namesLagi.push("Khannedy");

// console.log(namesLagi);

//menghapus data array
delete namesLagi[0];
console.log(namesLagi);
