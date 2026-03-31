export default function products(prods) {
    return `<h1>Products Page</h1>
    <div class="products">
        ${prods
        .map(p => `
            <article>
                <h2>${p.name}</h2>
                <p>Price: ₮${p.price}</p>
            </article>`)
        .join('')}
    </div>`;
}