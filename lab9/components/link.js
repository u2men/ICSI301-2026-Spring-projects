export default function link({ item, lnk }) { 
    return `
    <link rel="stylesheet" href="./components/link.js.css">
    <a class="main-nav-item" href="${lnk}">${item}</a>`
}

