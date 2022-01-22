const categoryEl = document.querySelector('#categories');
const categoryItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemEl.length}`);
categoryItemEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    let elementUl = element.lastElementChild;
    console.log(`Elements: ${elementUl.children.length}`);
});
