let details = false;

const createPokemonDetailsCard = (pokeObj) => {
  console.log(pokeObj);
  const [contentList] = document.getElementsByClassName("content");
  console.log(contentList);
  contentList.style.display = 'none';
  const cardContainer = document.createElement('div');
  cardContainer.innerHTML = createCard(pokeObj);
  document.body.appendChild(cardContainer)
}

const createCard = (pokeObj) => {
    const imageURL = pokeObj.sprites.other.dream_world.front_default;
    return `
    <section>
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
            <span>${pokeObj.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}</span>
            <span>${pokeObj.id}</span>
            <img src="${imageURL}" alt="imagem do pokemon">
        </div>
        <section>
            <h2>Status</h2>
            <ul>
                ${pokeObj.stats.map((status) => {
                    const statusName = Object.keys(status.stat)[0];
                    const statusValue = Object.values(status.stat)[0];
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
