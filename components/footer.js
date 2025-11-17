class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #1a202c;
                    color: white;
                    padding: 2rem 0;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    display: inline-block;
                    background: linear-gradient(90deg, #9f7aea, #d6bcfa);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .footer-section h3 {
                    font-size: 1.25rem;
                    margin-bottom: 1rem;
                    position: relative;
                    padding-bottom: 0.5rem;
                }
                
                .footer-section h3::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 40px;
                    height: 2px;
                    background-color: #9f7aea;
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .footer-links li {
                    margin-bottom: 0.75rem;
                }
                
                .footer-links a {
                    color: #cbd5e0;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                
                .footer-links a:hover {
                    color: #9f7aea;
                }
                
                .social-icons {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-icons a {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: rgba(255, 255, 255, 0.1);
                    color: white;
                    transition: all 0.3s;
                }
                
                .social-icons a:hover {
                    background-color: #9f7aea;
                    transform: translateY(-3px);
                }
                
                .copyright {
                    text-align: center;
                    padding-top: 2rem;
                    margin-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    color: #a0aec0;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }
                    
                    .footer-section {
                        margin-bottom: 1.5rem;
                    }
                }
            </style>
            
            <div class="footer-container">
                <div class="footer-section">
                    <div class="footer-logo">𝐋𝐘𝐗𝐂𝐎𝐏𝐘</div>
                    <p class="text-gray-400">Skapa framtidens 3D-design med vårt innovativa team av experter.</p>
                </div>
                
                <div class="footer-section">
                    <h3>Kontakt</h3>
                    <ul class="footer-links">
                        <li><i data-feather="mail" class="mr-2"></i> info@lyxcopy.com</li>
                        <li><i data-feather="phone" class="mr-2"></i> +46 123 456 789</li>
                        <li><i data-feather="map-pin" class="mr-2"></i> Stockholm, Sverige</li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Snabblänkar</h3>
                    <ul class="footer-links">
                        <li><a href="/">Hem</a></li>
                        <li><a href="product.html">Produkter</a></li>
                        <li><a href="contact.html">Kontakt</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Följ oss</h3>
                    <div class="social-icons">
                        <a href="#"><i data-feather="facebook"></i></a>
                        <a href="#"><i data-feather="instagram"></i></a>
                        <a href="#"><i data-feather="twitter"></i></a>
                        <a href="#"><i data-feather="linkedin"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="copyright">
                &copy; ${new Date().getFullYear()} LYXCOPY. Alla rättigheter reserverade.
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
