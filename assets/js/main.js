const pokemonListElement = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

const pokemonList = 
    `<section class="content">
        <h1>Pokedex</h1>

        <ol id="pokemonList" class="pokemons">
        </ol>

        <div class="pagination">
            <button id="loadMoreButton" type="button">
                Load More
            </button>
        </div>
    </section>`;

function convertPokemonToLi(pokemon) {
    return `
        <button class="card-btn">
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        </button>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonListElement.innerHTML += newHtml
        const btnCard = document.getElementsByClassName("card-btn");
        console.log(btnCard);
        for(let index = 0; index < btnCard.length; index +=1) {
            btnCard[index].addEventListener('click', (event) => {
            event.preventDefault();
            details = true;
            const number = index;
            pokeApi.getPokemonInformation(number).then((data) => console.log(data))
        })
        }
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})