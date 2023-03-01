// console.log("Hello TypeScript");

// function add(a:number, b:number) {
//     return a + b;
// }

// const sum = add(2, 3);

// console.log(sum)

// Boolean
let muted: boolean = true;

//Números
let age = 6
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador/denominador;

//String
let nombre: string = "Carlos";
let saludo = "Me llamo " + nombre;

// console.log(saludo);

//Arreglos
let people: string[] = [];
people = ["Isabel", "NIcole", "Raul"];
// people.push("9000")
let peopleAndNumbers: Array < number| string > = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(9901);
// console.log(peopleAndNumbers);

// Enum
enum Color {

    Rojo = "Rojo",

    Verde = "Verde",

    Azul = "Azul",

    Amarillo = "Amarillo",
}

let colorFavorito: Color = Color.Amarillo;
// console.log(`Mi color favorito es ${colorFavorito}`);

// Any

let comodin: any = "Joker"
comodin = {
    type: "Wildcard",
}

// Object

let someObject: object = {
    type: "Wildcard",
}