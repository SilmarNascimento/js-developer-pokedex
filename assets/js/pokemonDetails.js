let details = false;
const [contentList] = document.getElementsByClassName("content");

const createPokemonDetailsCard = (pokeObj) => {
  contentList.style.display = 'none';
  const cardContainer = document.createElement('div');
  cardContainer.innerHTML = createCard(pokeObj);
  document.body.appendChild(cardContainer);
  const backpageBtn = document.getElementById('back-to-list');
  backpageBtn.addEventListener('click', backToPageList)
}

const backToPageList = () => {
  contentList.style.display = '';
  const cardElement = document.getElementById('card-details')
  cardElement.parentNode.removeChild(cardElement);

    
}

const createCard = (pokeObj) => {
    const imageURL = pokeObj.sprites.other.dream_world.front_default;
    return `
    <section id="card-details">
        <section class="header">
            <div class="btn-header">
                <button id="back-to-list" type="button">
                    <--
                </button>
                <button id="favorit-list" type="button">
                    <3
                </button>   
            </div>
            <div class="text-header">
                <h1 id="name">${pokeObj.name}</h1>
                <span># ${pokeObj.id}</span>    
            </div>
            <div class="type-card">
                <span class="types">${pokeObj.types.map(({type}) => `<li class="type ${type.name}">${type.name}</li>`).join('')}</span>
            </div>
            <img src="${imageURL}" alt="imagem do pokemon">
        </section>
        <section class="text">
            <h2>status</h2>
            <ul>
            ${pokeObj.stats.map(({stat, base_stat}) => {
                const statusName = stat.name;
                const statusValue = base_stat;
                return `<li>${statusName}: ${statusValue}</li>`;
            }).join('')}
            </ul>
            <h2>abilities</h2>
            <ul>
                ${pokeObj.abilities.map(({ability}) => `<li>${ability.name}</li>`).join('')}
            </ul>
        </section>
    </section>
    `
}
