class CartIcon extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          position: relative;
        }
        .cart-container {
          position: relative;
          cursor: pointer;
        }
        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: #6b46c1;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
        }
      </style>
      <div class="cart-container">
        <i data-feather="shopping-cart"></i>
        <span class="cart-count">1</span>
      </div>
    `;
  }
}

customElements.define('cart-icon', CartIcon);
