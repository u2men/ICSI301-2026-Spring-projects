import { $ } from './xframework.js';

function renderCats(cats) {

    let catsHTML = "";
    // for (let i = 0; i < cats.length; i++) {
    //     const newCat = new Category(cats[i]);
    //     catsHTML += newCat.render();
    // }

    // cats.forEach(c => catsHTML += (new Category(c)).render());

    catsHTML = cats
        .map(c => (new Category(c)).render())
        .join("");
    // .reduce()((a,b) => a+b, "");

    $("#categories")
        .innerHTML = catsHTML;

    console.log(products);
}

class Category {
    constructor(name) {
        this.name = name;
    }
    render() {
        return `<button class="category-btn">${this.name}</button>`;
    }

}

let baseUrl = "https://dummyjson.com/";

export { renderCats, baseUrl };
