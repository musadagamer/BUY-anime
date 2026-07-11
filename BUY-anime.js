const sidebarBtn = document.getElementById('sidebarBtn');
const sidebar = document.getElementById('sidebar');
const searchInput = document.getElementById('productSearch');
const productsGrid = document.getElementById('productsGrid');

const products = [
    {
        name: 'JJK chibi ',
        description: 'JJK chibi figure gojo and geto',
        price: 'From pkr 1700 50% discount',
        imageClass: 'anime1'
    },
    {
        name: 'saturo gojo ',
        description: 'premium collectible saturo gojo action figure 24% off',
        price: 'From pkr 2500',
        imageClass: 'anime2'
    },
    {
        name: 'jjk keyboard and mousepad',
        description: 'gojo and geto keyboard and mousepad',
        price: 'From pkr 1500 35% off',
        imageClass: 'anime3'
    },
    {
        name: 'tanjiro action figure',
        description: 'tanjiro demon slayer premium collectible',
        price: 'From pkr 3000 90% off',
        imageClass: 'anime4'
    },
    {
        name: 'uchicha itachi ',
        description: 'itachi uchicha premium action figure naruto',
        price: 'from  pkr 5500 50% off',
        imageClass: 'anime5'
    },
    {
        name: 'itachi uchicha',
        description: 'small itachi action figure.',
        price: 'From pkr 3500',
        imageClass: 'anime6'
    },
    {
        name: 'sasuke uchicha',
        description: 'sasuke uchicha premium action figure',
        price: 'From pkr 3500',
        imageClass: 'anime7'
    },
    {
        name: 'itachi anbu',
        description: 'uchicha itachi anbu style',
        price: 'From pkr 3000',
        imageClass: 'anime8'
    },
    {
        name: 'out of stock',
        description: 'Stylish figure with color-shifting accessories.',
        price: 'From $53',
        imageClass: 'anime9'
    },
    {
        name: 'out of stock',
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

const sidebarShell = document.getElementById('sidebarShell');
const sidebarBtn = document.getElementById('sidebarBtn');

sidebarBtn.addEventListener('click', () => {
  const isOpen = sidebarShell.classList.toggle('open');
  sidebarBtn.setAttribute('aria-expanded', String(isOpen));
  document.getElementById('sidebar').setAttribute('aria-hidden', String(!isOpen));
});

renderProducts();
