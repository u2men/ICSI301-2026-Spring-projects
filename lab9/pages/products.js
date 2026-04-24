import  product  from "../components/product.js";

const prods = [{ id: 1, name: "Product 1", price: 100 },
    {id:2, name: "Product 2", price: 200},
    { id: 3, name: "Product 3", price: 300 }];
    
export default function products() {
    return `<style>
    .products article{border:1px solid black; margin:10px; padding:10px;}
    </style>
    <h1>Products Page</h1>
    <div class="products">
        ${prods.map(p => product(p)).join('')}
    </div>`;
}