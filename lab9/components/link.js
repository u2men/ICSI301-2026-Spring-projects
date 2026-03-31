export default function link({ item, lnk }) { 
    return `
    <link rel="stylesheet" href="./components/link.js.css">
    <a class="link" href="${lnk}">${item}</a>`
}

