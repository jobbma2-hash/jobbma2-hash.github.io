// CoinSub API
const API_KEY = "DIN_COIN_SUB_API_KEY"; // byt mot din egen

// Hantera köp-knappar
document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = {
      name: btn.dataset.name,
      price: btn.dataset.price,
      currency: "USD"
    };

    // Spara produkt i localStorage för checkout-sidan
    localStorage.setItem('product', JSON.stringify(product));

    // Gå till checkout
    window.location.href = "checkout.html";
  });
});

// Checkout-sida
if (window.location.href.includes("checkout.html")) {
  const product = JSON.parse(localStorage.getItem('product'));

  async function createPayment() {
    try {
      const response = await fetch("https://api.coinsub.com/v1/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          amount: product.price,
          currency: product.currency,
          name: product.name,
          callback_url: "https://jobbma2-hash.github.io/thank-you.html"
        })
      });

      const data = await response.json();

      const paymentDiv = document.getElementById("payment-info");
      paymentDiv.innerHTML = `
        <p>Betala med CoinSub:</p>
        <a href="${data.payment_url}" target="_blank">Gå till betalning</a>
      `;
    } catch (err) {
      console.error("Fel vid betalning:", err);
    }
  }

  createPayment();
}
