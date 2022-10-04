const content = document.querySelector('.container');

let pokeData = [];

const fetchData = () => {

const promises = [];

for (let i = 1; i < 11; i++) {

const url = `http://pokeapi.co/api/v2/pokemon/${i}`;

promises.push(fetch(url).then((response) => response.json()));
}

 Promise.all(promises).then((data) => {
    pokeData = data.results;
    pokeCards(pokeData);
});
};

const pokeCards = (pokeData) => {
    const cards = pokeData.map((pokemon) => {
        return `<div class="poke-card">
        <div class="img-wrapper"><img src="${data.sprites['front-default']}"></div>
        <div class="title"><h3>${pokemon.name}</h3></div>
        </div>`;
    }).join('');

    content.innerHTML = cards;
};

fetchData();

// official artwork 
