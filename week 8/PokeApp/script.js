const content = document.querySelector('.container');
const gen1 = document.querySelector('.btn1');
const gen2 = document.querySelector('.btn2');

let pokemon = [];

const fetchData = () => {

    const promises = [];
    for (let i = 1; i < 905; i++) {

    const url = `http://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promises).then(results => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites.other['official-artwork'].front_default,
            type: data.types.map((type) => type.type.name)
        }));
        pokeCards(pokemon);
        console.log(pokemon);
    });
};

const pokeCards = (pokemon) => {
    const cards = pokemon.map((poke) => {
        return `<div class="poke-card">
        <div class="img-wrapper"><img src="${poke.image}"></div>
        <div class="title"><h3>${poke.name}</h3></div>
        <div class="type"><p>${poke.type}</p></div>
        </div>`;
    }).join('');
content.innerHTML = cards;
};

fetchData();

gen1.addEventListener('click', fetchData);
