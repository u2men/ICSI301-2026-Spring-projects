

function render() {
    let retHTML = ``;
    for (let index = 0; index < 5; index++) {
        
        retHTML += `
        <article class="product-card">
            <h2>Title ${index}</h2>
            <p>asdfasdfasdf</p>
        </article>`;    
    }
    return retHTML;

}