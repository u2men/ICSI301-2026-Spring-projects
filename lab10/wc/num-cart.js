class NumCart extends HTMLElement {
    #items = new Map();


    constructor() {
        super();
    }
    #render() {
        this.innerHTML = `
        <section class="num-cart">
            <h2>Cart</h2>
            <p>Count: ${this.getAttribute('count')}</p>
            <div class="items">
            ${[...this.#items.values()].map(item => `<num-product bgcolor="#556677" count="1" mode="compact" number="${item.number}" type="${item.type}" text="${item.text}"></num-product>`).join('')}
            </div>
        </section>`;
    }
    AddProduct(item) {
        if (this.#items.has(item.number)) {
            this.#items.get(item.number).count += 1;
            this.querySelector(`num-product[number='${item.number}']`)
                ?.setAttribute('count', this.#items.get(item.number).count);
        }
        else {
            this.#items.set(item.number, item);
            this.#render();
        }
    }
    connectedCallback() {
        window.addEventListener('productAdded', (event) => {
            this.AddProduct(event.detail);
        });
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(name, oldVal, newVal) {
    }

    adoptedCallback() {
    }

}

window.customElements.define('num-cart', NumCart);