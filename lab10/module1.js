export default function test() {
    bday = "2002-01-01";
    appSettings.a = 10;
}
let age = 10;
let tursunUdur = "2000-01-01";
export function Phone({name, price, desc}) {
    return `
    <style>
        .phone{
            border: 1px solid black;
            padding: 10px;
            border-radius: 8px;
            h2{color: blue;}
            .price{font-size:2rem; color: green;}
            .desc{color: gray;}
        }
    </style>
    <article class="phone">
        <h2>${name}</h2>
        <p class="price">Price: ${price}$</p>
        <p class="desc">${desc}</p>
    </article>`;
}
export { age, tursunUdur };