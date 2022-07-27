const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('ul');
const list = ingredients.map((ingredient)=> `<li class="item">${ingredient}</li>`)
ul.insertAdjacentHTML('beforeend', list.join(''));
console.log(ul)