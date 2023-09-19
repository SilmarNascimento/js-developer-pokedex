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

const backToPageList = (cardContainer) => {
  contentList.style.display = '';
  const cardElement = document.getElementById('card-details')
  cardElement.parentNode.removeChild(cardElement);

    
}

const createCard = (pokeObj) => {
    const imageURL = pokeObj.sprites.other.dream_world.front_default;
    return `
    <section id="card-details">
        <div class="btn-header">
            <button id="back-to-list" type="button">
                <--
            </button>
            <button id="favorit-list" type="button">
                <3
            </button>   
        </div>
        <div>
            <h1>${pokeObj.name}</h1>
            <span>${pokeObj.types.map(({type}) => `<li class="type ${type.name}">${type.name}</li>`).join('')}</span>
            <span>${pokeObj.id}</span>
            <img src="${imageURL}" alt="imagem do pokemon">
        </div>
        <section>
            <h2>Status</h2>
            <ul>
                ${pokeObj.stats.map(({stat, base_stat}) => {
                    const statusName = stat.name;
                    const statusValue = base_stat;
                    return `<li>${statusName}: ${statusValue}</li>`;
                }).join('')}
            </ul>
            <h2>Abilities</h2>
                <ul>
                    ${pokeObj.abilities.map((ability) => `<li>${ability.name}</li>`).join('')}
                </ul>
        </section>
    </section>
    `
}
