const content = document.querySelector('.container');

let pokeData = [];

const fetchData = () => {

fetch('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0')
  .then((response) => response.json())
  .then((data) => {

    const fetches = data.results.map(item => {
        return fetch(item.url).then(res => res.json())
    });

    Promise.all(fetches).then((res => {
        pokeData = res;
        pokeCards(res);
        console.log(pokeData);
        localStorage.setItem('pokedata', JSON.stringify(pokeData))
    }));
});
};

const pokeCards = () => {
    const cards = pokeData.map((pokemon) => {
        return `<div class="poke-card">
        <div class="img-wrapper"><img src="${pokemon.sprites.other['official-artwork'].front_default}"></div>
        <div class="title"><h3>${pokemon.name}</h3></div>
        </div>`;
    }).join('');
    content.innerHTML = cards;
};

fetchData();
