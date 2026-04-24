class NumHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <header>
            <h1>Number Facts</h1>
            <ul><li><a href="index.html">Home</a></li>
                <li><a href="trivia.html">Trivia</a></li>
                <li><a href="math.html">Math</a></li>
                <li><a href="date.html">Date</a></li>
            </ul>
        </header>
        `;
    }

    connectedCallback() {
    }    

    // attributeChangedCallback(name, oldVal, newVal) {
    // }


}

window.customElements.define('num-header', NumHeader);