// Varukorgs-specifik JavaScript

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('cartItems')) {
        loadCartItems();
    }
    
    if (document.getElementById('orderItems')) {
        loadOrderSummary();
    }
});

// Ladda varukorgsprodukter
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cart = getCart();

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <h3>Din varukorg är tom</h3>
                <p>Lägg till produkter för att fortsätta</p>
                <a href="products.html" class="cta-button">Handla Nu</a>
            </div>
        `;
        updateCartTotal(0);
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="item-price">${item.price} kr</div>
            </div>
            <div class="item-controls">
                <div class="quantity-controls">
                    <button onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    Ta bort
                </button>
            </div>
        </div>
    `).join('');

    updateCartTotal();
}

// Minska kvantitet
function decreaseQuantity(productId) {
    let cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item && item.quantity > 1) {
        item.quantity--;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    
    saveCart(cart);
    loadCartItems();
    updateCartCounter();
}

// Öka kvantitet
function increaseQuantity(productId) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity++;
    }
    
    saveCart(cart);
    loadCartItems();
    updateCartCounter();
}

// Ta bort från varukorg
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    
    saveCart(cart);
    loadCartItems();
    updateCartCounter();
}

// Uppdatera totalsumma
function updateCartTotal() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const totalElement = document.getElementById('cartTotal');
    if (totalElement) {
        totalElement.textContent = total + ' kr';
    }
}

// Ladda ordersammanfattning på kassa-sidan
function loadOrderSummary() {
    const orderItemsContainer = document.getElementById('orderItems');
    const orderTotalElement = document.getElementById('orderTotal');
    const cart = getCart();

    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '<p>Inga produkter i varukorgen</p>';
        orderTotalElement.textContent = '0 kr';
        return;
    }

    orderItemsContainer.innerHTML = cart.map(item => `
        <div class="order-item">
            <span>${item.name} x${item.quantity}</span>
            <span>${item.price * item.quantity} kr</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    orderTotalElement.textContent = total + ' kr';
}

// Hjälpfunktioner (är också i script.js men behövs här också)
function getCart() {
    return JSON.parse(localStorage.getItem('lyxcopy_cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('lyxcopy_cart', JSON.stringify(cart));
}

function updateCartCounter() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartLinks = document.querySelectorAll('.cart-link');
    cartLinks.forEach(link => {
        link.textContent = `🛒 Varukorg (${totalItems})`;
    });
}
