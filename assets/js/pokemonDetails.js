let details = false;

const btnCard = document.getElementsByClassName('btn-card');
console.log(btnCard);
for(let index = 0; index < btnCard.length; index +=1) {
  console.log('entrei aqui');
  btnCard[index].addEventListener('click', (event) => {
    event.preventDefault();
    details = true;
    const { target } = event;
    const number = index;
    console.log(number);
  })
}