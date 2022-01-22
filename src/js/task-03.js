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
const galleryEl = document.querySelector('.gallery');
const innerGallery = images.map((element) => `<li class="item"><img class="img" src="${element.url}" alt="${element.alt}"></li>`).join("");
galleryEl.insertAdjacentHTML("beforeend", innerGallery);
const itemEl = document.querySelectorAll('.item');
const imgEl = document.querySelectorAll('.img');
galleryEl.style.display = "flex";
galleryEl.style.listStyle = "none";
galleryEl.style.padding = "0px";
imgEl.forEach(element => {
  element.style.width = "400px";
  element.style.height = "230px";
})
itemEl.forEach(element => {
  element.style.width = "400px"; 
  element.style.height = "230px"; 
  element.style.marginLeft = "20px";
});
console.log(itemEl);