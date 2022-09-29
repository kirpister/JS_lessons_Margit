const content = document.querySelector('.container');


const fetchPokemon = () => {

    const promises = [];
    for (let i = 1; i < 150; i++) {

    const url = `http://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
    }
   
    Promise.all(promises).then(results => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', ')
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    const pokemonHTML = pokemon.map(poke => `
    <div class="poke-card">
        <img src="${poke.image}" />
        <h3>${poke.name}</h3>
        <p>${poke.type}</p>
    </div>
    `);
    content.innerHTML = pokemonHTML;
};

fetchPokemon();

