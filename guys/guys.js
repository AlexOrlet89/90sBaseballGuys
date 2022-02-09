import { guys } from '../data.js';
import { findByID } from '../utils.js';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const dude = findByID(id, guys);
console.log(guys); //gives array
console.log(params.get('id')); //gives 1
console.log(findByID(params.get('id'), guys)); //gives object with id of one
console.log(dude); //undefined
console.log(id); //1

const picture = document.getElementById('picture'); 
const name = document.getElementById('name');
const fact = document.getElementById('fact'); 
const title = document.querySelector('title');

name.textContent = `${dude.name}`;
fact.textContent = `${dude.fact}`;
title.textContent = `hey, it's ${dude.name}`;
picture.src = `/assets/${dude.name}.jpg`;