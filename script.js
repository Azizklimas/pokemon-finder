const typeColors = {
fire:"#f08030",
water:"#6890f0",
grass:"#78c850",
electric:"#f8d030",
psychic:"#f85888",
ice:"#98d8d8",
dragon:"#7038f8",
dark:"#705848",
fairy:"#ee99ac",
normal:"#a8a878",
fighting:"#c03028",
flying:"#a890f0",
poison:"#a040a0",
ground:"#e0c068",
rock:"#b8a038",
bug:"#a8b820",
ghost:"#705898",
steel:"#b8b8d0"
}

const typeBackgrounds = {
fire:"#ffe5d6",
water:"#e3ecff",
grass:"#e6f7e6",
electric:"#fff6cc",
psychic:"#ffd6e7",
ice:"#e6ffff",
dragon:"#ece0ff",
dark:"#e0e0e0",
fairy:"#ffe6f2",
normal:"#f2f2f2",
fighting:"#ffd6d6",
flying:"#f0ecff",
poison:"#f2e6ff",
ground:"#f5e6cc",
rock:"#ede1c6",
bug:"#eef5cc",
ghost:"#ece6ff",
steel:"#f0f0f5"
}

async function getPokemon(){

let name = document.getElementById("pokemonInput").value.toLowerCase()

if(name === "") return

fetchPokemon(name)

}

async function fetchPokemon(name){

let card = document.getElementById("pokemonCard")

card.innerHTML = `<p class="loading">Loading...</p>`

let url = "https://pokeapi.co/api/v2/pokemon/" + name

try{

let response = await fetch(url)
let data = await response.json()

let image = data.sprites.front_default
let type = data.types[0].type.name
let height = data.height
let weight = data.weight

let color = typeColors[type] || "#777"
let background = typeBackgrounds[type] || "#ffffff"

card.innerHTML = `
<div style="background:${background}; padding:20px; border-radius:12px;">
<h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
<img src="${image}">
<div class="type" style="background:${color}">
${type}
</div>
<p><strong>Height:</strong> ${height}</p>
<p><strong>Weight:</strong> ${weight}</p>
</div>
`

}

catch{

card.innerHTML = `<p>Pokémon not found</p>`

}

}

function randomPokemon(){

let id = Math.floor(Math.random()*898)+1
fetchPokemon(id)

}

document.getElementById("pokemonInput")
.addEventListener("keypress",function(event){

if(event.key === "Enter"){
getPokemon()
}

})