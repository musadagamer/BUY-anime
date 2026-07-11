const sidebarBtn = document.getElementById('sidebarBtn');
const sidebar = document.getElementById('sidebar');
const searchInput = document.getElementById('productSearch');
const productsGrid = document.getElementById('productsGrid');

const products = [
    {
        name: 'Shadow Samurai',
        description: 'Poseable figure with sword and armor.',
        price: 'From $45',
        imageClass: 'anime1'
    },
    {
        name: 'Galaxy Guardian',
        description: 'Light-up base and collector’s box.',
        price: 'From $58',
        imageClass: 'anime2'
    },
    {
        name: 'Hero Spirit',
        description: 'Deluxe figure with extra hands.',
        price: 'From $50',
        imageClass: 'anime3'
    },
    {
        name: 'Neon Dragon',
        description: 'Glow-effect figure with a dramatic pose.',
        price: 'From $62',
        imageClass: 'anime4'
    },
    {
        name: 'Storm Knight',
        description: 'Battle-ready armor and collectible shield.',
        price: 'From $54',
        imageClass: 'anime5'
    },
    {
        name: 'Moon Ranger',
        description: 'Limited edition with silver detailing.',
        price: 'From $48',
        imageClass: 'anime6'
    },
    {
        name: 'Cosmic Ninja',
        description: 'Fast-moving figure with interchangeable blades.',
        price: 'From $57',
        imageClass: 'anime7'
    },
    {
        name: 'Ember Titan',
        description: 'Huge statue-style figure with flaming base.',
        price: 'From $70',
        imageClass: 'anime8'
    },
    {
        name: 'Prism Fox',
        description: 'Stylish figure with color-shifting accessories.',
        price: 'From $53',
        imageClass: 'anime9'
    },
    {
        name: 'Titan Blade',
        description: 'Premium figure with a display stand and extra blades.',
        price: 'From $66',
        imageClass: 'anime10'
    }
];

function renderProducts(filter = '') {
    const query = filter.toLowerCase().trim();
    const matches = products.filter((product) => {
        const haystack = `${product.name} ${product.description}`.toLowerCase();
        return haystack.includes(query);
    });

    productsGrid.innerHTML = '';

    if (matches.length === 0) {
        productsGrid.innerHTML = '<p class="no-results">No products found.</p>';
        return;
    }

    matches.forEach((product) => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image ${product.imageClass}"></div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span>${product.price}</span>
        `;
        productsGrid.appendChild(card);
    });
}

sidebarBtn.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    sidebar.setAttribute('aria-hidden', String(!isOpen));
    sidebarBtn.setAttribute('aria-expanded', String(isOpen));
});

searchInput.addEventListener('input', (event) => {
    renderProducts(event.target.value);
});

renderProducts();
