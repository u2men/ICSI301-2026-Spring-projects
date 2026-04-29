class NumProduct extends HTMLElement {
    static get observedAttributes() {
        return ['text', 'type', 'count'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case "text":
                this.baraaniiNer = newVal ?? 'Baraa';
                this.render();
                break;
            case "type":
                this.turul = newVal ?? 'N/A';
                this.render();
                break;
            case "count":
                this.too = newVal ?? '1';
                if (this.gorim != 'full')
                    this.querySelector('span')
                        .textContent = this.too;
            default:
                break;
        }
    }

    constructor() {
        super();

    }
    render() {
        this.innerHTML = `
        <article class=${this.cls}>
        ${this.gorim === 'full' ? `<img src="${this.zurag}" alt="${this.baraaniiNer}">` : ''}
        <h2>${this.baraaniiNer}</h2>
        ${this.gorim === 'full' ?
                `<p>Number: ${this.id}</p>
                <p>Type: ${this.turul}</p>
                <button>Add to Cart</button>` : `
                <div>
                    <button class="sub"> - </button>
                    <span>${this.too}</span>
                    <button class="add"> + </button>
                </div>`}
          <num-like-btn></num-like-btn>
        </article>`;
    }
    addToCart() {
        const productAdded = new CustomEvent('productAdded', {
            detail: {
                number: this.id,
                type: this.turul,
                text: this.baraaniiNer
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(productAdded);
        // document
        //     .querySelector('num-cart')
        //     .AddProduct({
        //         number: this.id,
        //         type: this.turul,
        //         text: this.baraaniiNer
        //     });
    }
    connectedCallback() {
        this.id = this.getAttribute('number') ?? 'N/A';
        this.turul = this.getAttribute('type') ?? 'N/A';
        this.baraaniiNer = this.getAttribute('text') ?? 'Baraa';
        this.gorim = this.getAttribute('mode') ?? 'full';
        this.too = this.getAttribute('count') ?? '1';
        this.backgroundColor=this.getAttribute('bgcolor') ?? '#eee';
        this.zurag = this.getAttribute('img') ?? 'https://picsum.photos/150/100';
        this.cls=this.getAttribute('cls') ?? '';
        
        this.render();
        if (this.gorim === 'full')
            this.querySelector('button')
                .addEventListener('click', () => this.addToCart());
        else { 
            this.querySelector('.add')
                .addEventListener('click',
                    () => {
                this.too = parseInt(this.too) + 1;
                this.querySelector('span').textContent = this.too;        
                        // this.setAttribute('count', this.too);
            });
            this.querySelector('.sub')
                .addEventListener('click', () => {
                this.too = parseInt(this.too) - 1;
                if (this.too < 0) this.too = 0;
                this.querySelector('span').textContent = this.too;
                    // this.setAttribute('count', this.too);
            }
            );
        }
    }
}

window.customElements.define('num-product', NumProduct);