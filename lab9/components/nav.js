import link from './link.js';

export default function nav(items) {
    return `<nav class="nav">
        <ul>
            ${items
            .map(r => `<li>${link(r)}</li>`)
            .join('')}
        </ul>
    </nav>`;
}