const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingridientsListEl = document.querySelector('#ingredients');
ingredients.forEach(element => {
  let ingridientEl = document.createElement('li');
  ingridientEl.classList.add('item');
  ingridientEl.textContent = element;
  ingridientsListEl.append(ingridientEl);
});
