// var generateName = require('sillyname');
// import generateName from 'sillyname';
// var sillyName = generateName();

// console.log(`My name is  ${sillyName}`); 

//var generateName = require ('superhero');
import superheroes, { randomSuperhero } from "superheroes";
const name = randomSuperhero();

console.log(`I am ${name}!`);