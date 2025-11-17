// Mobilmeny toggle
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.querySelector('header nav');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// Hantera köp-knappar på produkt-sidan
document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = {
      name: btn.dataset.name,
      price: btn.dataset.price,
      currency: "USD"
    };
    localStorage.setItem('product', JSON.stringify(product));
    window.location.href = "checkout.html";
  });
});

// Coinbase checkout
if (window.location.href.includes("checkout.html")) {
  const product = JSON.parse(localStorage.getItem('product'));
  const paymentDiv = document.getElementById("payment-info");

  // Lägg till Coinbase Commerce-knapp
  const checkoutButton = document.createElement('coinbase-commerce-checkout');
  checkoutButton.setAttribute('checkout-id', 'DIN_CHECKOUT_ID'); // byt mot ditt Coinbase Commerce checkout-ID
  checkoutButton.style.display = 'block';
  checkoutButton.style.marginTop = '1rem';
  paymentDiv.innerHTML = `<p>Betala med Coinbase:</p>`;
  paymentDiv.appendChild(checkoutButton);
}
