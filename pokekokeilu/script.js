const content = document.querySelector('.container');

let pokeData = [];

const fetchData = () => {

    for (let i = 1; i < 11; i++) {
        const url = `http://pokeapi.co/api/v2/pokemon/${i}`;

fetch(url).then((response) => response.json())
  .then((data) => {
    pokeData = data.results;
    pokeCards(pokeData); 
});
};
};

const pokeCards = () => {
    const cards = pokeData.map((pokemon) => {
        return `<div class="poke-card">
        <div class="img-wrapper"><img src="${pokemon.sprites['front-default']}"></div>
        <div class="title"><h3>${pokemon.name}</h3></div>
        </div>`;
    }).join('');

    content.innerHTML = cards;
};

fetchData();
