let details = false;

const createPokemonDetailsCard = (pokeObj) => {
  console.log(pokeObj);
  const contentList = document.getElementsByClassName("content");
  console.log(contentList);
  contentList[0].style.display = 'none';
}

const createCard = (pokeObj) => {
    return `
    <section>
    <div>
        <h1>${pokeObj.name}</h1>
        <span>${pokeObj.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}</span>
        <span>${pokeObj.id}</span>
        <img src="" alt="imagem do pokemon">
    </div>
    <section>
        <ul>
            ${pokeObj.abilities.map((ability) => `<li>${ability.name}</li>`).join('')}
        </ul>
    </section>
    </section>
    `
}
