export default function product({ name, price}) { 
    return `<article>
                <h2>${name}</h2>
                <p>Price: ₮${price}</p>
            </article>`;
}