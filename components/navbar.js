class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
        }
        nav {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: white;
        }
        .logo-icon {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background: linear-gradient(135deg, #6b46c1 0%, #9f7aea 100%);
        }
        .nav-links {
          display: none;
          gap: 2rem;
        }
        .nav-links a {
          color: white;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        .nav-links a:hover {
          color: #9f7aea;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #9f7aea;
          transition: width 0.3s;
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        .cta-btn {
          background: linear-gradient(135deg, #6b46c1 0%, #9f7aea 100%);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-weight: 500;
          transition: all 0.3s;
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(107, 70, 193, 0.3);
        }
        .mobile-menu-btn {
          display: block;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.9);
        }
        .mobile-menu a {
          color: white;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: background 0.3s;
        }
        .mobile-menu a:hover {
          background: rgba(107, 70, 193, 0.2);
        }
        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
          .mobile-menu-btn {
            display: none;
          }
        }
      </style>
      <nav>
        <a href="index.html" class="logo">
          <div class="logo-icon">
            <i data-feather="box"></i>
          </div>
          <span>LYXCOPY</span>
        </a>
        
        <div class="nav-links">
          <a href="index.html">Hem</a>
          <a href="product.html">Produkter</a>
          <a href="#services">Tjänster</a>
          <a href="about.html">Om oss</a>
          <a href="contact.html" class="cta-btn">Kontakt</a>
        </div>
        
        <button class="mobile-menu-btn" id="mobileToggle">
          <i data-feather="menu"></i>
        </button>
      </nav>
      
      <div class="mobile-menu" id="mobileMenu">
        <a href="index.html">Hem</a>
        <a href="product.html">Produkter</a>
        <a href="#services">Tjänster</a>
        <a href="about.html">Om oss</a>
        <a href="contact.html">Kontakt</a>
      </div>
    `;

    // Initialize feather icons
    feather.replace();

    // Mobile menu toggle
    const mobileToggle = this.shadowRoot.getElementById('mobileToggle');
    const mobileMenu = this.shadowRoot.getElementById('mobileMenu');
    
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.style.display === 'flex';
      mobileMenu.style.display = isOpen ? 'none' : 'flex';
      mobileToggle.innerHTML = isOpen ? '<i data-feather="menu"></i>' : '<i data-feather="x"></i>';
      feather.replace();
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
