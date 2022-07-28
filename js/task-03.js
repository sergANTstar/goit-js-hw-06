const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const ul = document.querySelector('ul');
const list = images.map((image)=> `<li class="img"><img src="${image.url}" width="320" alt="${image.alt}"></li>`)
ul.insertAdjacentHTML('beforeend', list.join(''));

//ul.style.display = "flex";
//ul.style.listStyle = "none";
//ul.style.gap = "150px" ;

ul.classList.add("gallery-3")

