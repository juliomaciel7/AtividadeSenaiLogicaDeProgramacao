"use strict";
// lista de peças
const listaDePecas = ["Pastilha de freio", "Correia dentada", "Bico injetor", "Filtro de óleo", "Bomba de combustível", "Limpador de vidro"];
let pesoPeca = 500;
if (pesoPeca > 100) {
    console.log("Você pode cadastrar mais peças!");
}
else {
    console.log("Não é permitido cadastrar peças com peso inferior a 100 gramas!");
}
let nomeDaPeca = "Disco de freio";
switch (nomeDaPeca.length < 3) {
    case true:
        console.log("Erro! O nome da peça contém menos que 3 caracteres!");
        break;
    case false:
        console.log("O nome da peça tem mais que três caracteres");
        break;
    default:
        console.log(`Qual a quantidade de caracteres da palavra ${nomeDaPeca} `);
}
function teacher(person, date) {
    console.log(`Olá, professor ${person}, hoje é ${date.toDateString()}, e eu fiz a atividade usando TypeScript. Espero que tenha gostado. A aula foi muito top! Tamu junto! `);
}
teacher("Caique", new Date());
