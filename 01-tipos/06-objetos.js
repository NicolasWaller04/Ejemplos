//personaje de TV
let nombre = "Tanjiro";
let anime = "Kimetsu no Yaiba";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Kimetsu no Yaiba",
    edad: 16,
};

console.log(personaje);
console.log(personaje.anime);
console.log(personaje["nombre"]);

personaje.edad = 15;
personaje["edad"] = 15;

console.log(personaje["edad"]);

delete personaje.anime;
console.log(personaje);