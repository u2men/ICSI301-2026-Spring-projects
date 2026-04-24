const rs=[{item:"Ger",lnk: "/" },{ item: "About", lnk: "/about" },{ item: "Products", lnk: "/products" },{ item: "Contact", lnk: "/contact" }];function l({ item, lnk }) {return `<a href="${lnk}">${item}</a>`
}
function n(i) {return `<nav><ul>${i.map(r => `<li>${l(r)}</li>`).join('')}</ul></nav>`;}
function rn() {return `<header>${n(rs)}</header><main>
            <h1>Welcome to my website</h1>
        <p>This is the main content of the website.</p>
    </main>
    <footer>
    <p>&copy; 2026 My Website</p>
</footer>`
}
document
    .querySelector("#app")
    .innerHTML = rn();