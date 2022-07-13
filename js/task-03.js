const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");

const galleryList = images
  .map(({url, alt}) => `<li class ='item'><img src =${url} alt=${alt} width='350'></img></li>`
  ).join("")

console.log(galleryList);
list.style.display = 'flex'
list.style.listStyle = 'none'
list.style.justifyContent = 'space-between'
list.insertAdjacentHTML("beforeend", galleryList);
