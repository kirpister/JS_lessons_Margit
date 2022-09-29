const content = document.querySelector('.container');

let pokeData = [];

const fetchData = () => {

fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
  .then((response) => response.json())
  .then((data) => {
    pokeData = data.results;
    pokeCards();
});
};
  
const pokeCards = () => {
    const cards = pokeData.map((pokemon) => {
        return `<div class="poke-card">
        <div class="img-wrapper"><img src="kisi2.png"></div>
        <div class="title"><h3>${pokemon.name}</h3></div>
        </div>`;
    }).join('');

    content.innerHTML = cards;
};

fetchData();


// return fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// });