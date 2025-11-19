// Huvud JavaScript-fil för Lyxcopy webshop

// Grundläggande funktionalitet
document.addEventListener('DOMContentLoaded', function() {
    initWebsite();
});

function initWebsite() {
    // Ladda produkter på startsidan
    if (document.getElementById('featuredProducts')) {
        loadFeaturedProducts();
    }

    // Ladda alla produkter på produktsidan
    if (document.getElementById('allProducts')) {
        loadAllProducts();
    }

    // Kontaktformulär
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Checkout formulär
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }

    // Uppdatera varukorgsräknare
    updateCartCounter();
}

// Ladda utvalda produkter på startsidan
function loadFeaturedProducts() {
    const productsGrid = document.getElementById('featuredProducts');
    const featuredProducts = window.products.slice(0, 3); // Visa första 3 produkterna

    productsGrid.innerHTML = featuredProducts.map(product => `
        <div class="product-card">
            <div class="product-icon">${product.icon}</div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">${product.price} kr</div>
            <button class="cta-button" onclick="addToCart(${product.id})">
                Lägg i Varukorg
            </button>
        </div>
    `).join('');
}

// Ladda alla produkter på produktsidan
function loadAllProducts() {
    const productsGrid = document.getElementById('allProducts');
    
    productsGrid.innerHTML = window.products.map(product => `
        <div class="product-card">
            <div class="product-icon">${product.icon}</div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">${product.price} kr</div>
            <button class="cta-button" onclick="addToCart(${product.id})">
                Lägg i Varukorg
            </button>
        </div>
    `).join('');
}

// Lägg till produkt i varukorg
function addToCart(productId) {
    const product = window.products.find(p => p.id === productId);
    if (!product) return;

    let cart = getCart();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart(cart);
    updateCartCounter();
    
    // Visa bekräftelse
    alert(`${product.name} har lagts i varukorgen!`);
}

// Hämta varukorg från localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('lyxcopy_cart') || '[]');
}

// Spara varukorg till localStorage
function saveCart(cart) {
    localStorage.setItem('lyxcopy_cart', JSON.stringify(cart));
}

// Uppdatera varukorgsräknare
function updateCartCounter() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartLinks = document.querySelectorAll('.cart-link');
    cartLinks.forEach(link => {
        link.textContent = `🛒 Varukorg (${totalItems})`;
    });
}

// Hantera kontaktformulär
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        message: document.getElementById('contactMessage').value,
        timestamp: new Date().toISOString()
    };

    // Sparar till localStorage (i en riktig app skulle detta skickas till en server)
    const contacts = JSON.parse(localStorage.getItem('lyxcopy_contacts') || '[]');
    contacts.push(formData);
    localStorage.setItem('lyxcopy_contacts', JSON.stringify(contacts));

    alert('Tack för ditt meddelande! Vi återkommer inom 24 timmar.');
    e.target.reset();
}

// Hantera checkout
function handleCheckout(e) {
    e.preventDefault();
    
    const cart = getCart();
    if (cart.length === 0) {
        alert('Din varukorg är tom!');
        return;
    }

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;

    if (!email || !name) {
        alert('Vänligen fyll i alla obligatoriska fält.');
        return;
    }

    // Skapa order
    const order = {
        id: 'LYX-' + Date.now(),
        email: email,
        name: name,
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toISOString(),
        status: 'pending'
    };

    // Spara order
    const orders = JSON.parse(localStorage.getItem('lyxcopy_orders') || '[]');
    orders.push(order);
    localStorage.setItem('lyxcopy_orders', JSON.stringify(orders));

    // Rensa varukorg
    localStorage.removeItem('lyxcopy_cart');
    updateCartCounter();

    // Redirect till success-sida
    window.location.href = 'success.html?order=' + order.id;
}

// Visa ordrar på success-sidan
function displayOrderOnSuccess() {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('order');
    
    if (orderId && document.getElementById('orderNumber')) {
        document.getElementById('orderNumber').textContent = orderId;
    }
}

// Kör när sidan laddas
if (document.getElementById('orderNumber')) {
    displayOrderOnSuccess();
}
