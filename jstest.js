function setupEventListeners() {
    const articles = document.getElementsByClassName("");
    console.log(`Articles = ${articles.length}`);
    for (let i = 0; i < articles.length; i++) {
        articles[i]
            .addEventListener("click",
                function () {
                    this
                        .classList
                        .toggle("selected");
                });
    }











}

