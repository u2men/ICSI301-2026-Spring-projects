export default class Product { 
    constructor(prod) {
        this.id = prod.id;
        this.name = prod.title;
        this.price = prod.price;
        this.pics = prod.images;
        this.category = prod.category;
    }
    renderSlim() { 
        return `<article class="product">
            <h2>Essence Mascara Lash Princess</h2>
            <p>${ this.price }</p>
        </article>`;
        return `
        <article class="product">
            <h2>${this.name}</h2>
            <p>${this.price}</p>
        </article>
        `;
    }
    render() {
        return `
        <article class="product">
            <h2>${this.name}</h2>
            <p>${this.price}</p>
            <p>${this.category}</p>
            <div>
            ${ this.pics
            .map(p => "<img src='" + p + "'>")
            .reduce((acc, curr) => acc + curr, "") }
            </div>
        </article>
        `;
    }
}

async function DownloadProducts() { 
    // fetch("https://dummyjson.com/products")
    //     .then(res => res.json())
    //     .then(data => { const products = data.products; })
    //     .catch(error => console.error(error));
    
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
}

function filterProducts(category, products) { 
    return products.filter(p => p.category === category && p.price < 100);
}

let age = 12;
export { DownloadProducts, filterProducts }