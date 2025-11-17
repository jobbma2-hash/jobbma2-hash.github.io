
// Enhanced Hero Slideshow Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Slideshow functionality
    const heroSlides = document.querySelectorAll('#hero-slideshow .slide');
    const heroDots = document.querySelectorAll('#hero-slideshow .indicator-dot');
    if (heroSlides.length > 0) {
        let currentHeroSlide = 0;
        const heroSlideInterval = setInterval(nextHeroSlide, 4000);
        
        // Pause on hover
        const heroContainer = document.getElementById('hero-slideshow');
        heroContainer.addEventListener('mouseenter', () => clearInterval(heroSlideInterval));
        heroContainer.addEventListener('mouseleave', () => {
            heroSlideInterval = setInterval(nextHeroSlide, 4000);
        });
function nextHeroSlide() {
            heroSlides[currentHeroSlide].classList.remove('slide-active');
            heroSlides[currentHeroSlide].style.opacity = 0;
            heroDots[currentHeroSlide].classList.remove('bg-primary-500');
            heroDots[currentHeroSlide].classList.add('bg-white');
            
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            
            heroSlides[currentHeroSlide].classList.add('slide-active');
            heroSlides[currentHeroSlide].style.opacity = 1;
            heroDots[currentHeroSlide].classList.remove('bg-white');
            heroDots[currentHeroSlide].classList.add('bg-primary-500');
        }

        // Dot click functionality
        heroDots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = parseInt(this.dataset.slide);
                
                if (slideIndex !== currentHeroSlide) {
                    clearInterval(heroSlideInterval);
                    
                    heroSlides[currentHeroSlide].classList.remove('slide-active');
                    heroSlides[currentHeroSlide].style.opacity = 0;
                    heroDots[currentHeroSlide].classList.remove('bg-primary-500');
                    heroDots[currentHeroSlide].classList.add('bg-white');
                    
                    currentHeroSlide = slideIndex;
                    
                    heroSlides[currentHeroSlide].classList.add('slide-active');
                    heroSlides[currentHeroSlide].style.opacity = 1;
                    heroDots[currentHeroSlide].classList.remove('bg-white');
                    heroDots[currentHeroSlide].classList.add('bg-primary-500');
                }
            });
        });
        // Enhanced slide activation with animation
        heroSlides.forEach((slide, index) => {
            slide.style.transition = 'opacity 1s ease, transform 1s ease';
            if(index === 0) {
                slide.style.opacity = 1;
                slide.style.transform = 'scale(1.05)';
                slide.classList.add('slide-active');
                heroDots[0].classList.add('bg-primary-500');
            } else {
                slide.style.opacity = 0;
                slide.style.transform = 'scale(1)';
            }
        });

        function nextHeroSlide() {
            heroSlides[currentHeroSlide].style.opacity = 0;
            heroSlides[currentHeroSlide].style.transform = 'scale(1)';
            heroDots[currentHeroSlide].classList.remove('bg-primary-500');
            heroDots[currentHeroSlide].classList.add('bg-white');
            
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            
            heroSlides[currentHeroSlide].style.opacity = 1;
            heroSlides[currentHeroSlide].style.transform = 'scale(1.05)';
            heroDots[currentHeroSlide].classList.remove('bg-white');
            heroDots[currentHeroSlide].classList.add('bg-primary-500');
        }
}

    // Product Slideshow
    const productSlideshows = document.querySelectorAll('.product-slideshow');
    productSlideshows.forEach(slideshow => {
        const images = slideshow.querySelectorAll('img');
        if (images.length > 1) {
            let currentIndex = 0;
            
            setInterval(() => {
                images[currentIndex].style.opacity = 0;
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].style.opacity = 1;
            }, 3000);
        }
    });
    // Enhanced Add to Cart functionality with loading animation
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.dataset.product;
            const price = this.dataset.price;
            
            // Add loading state
            const originalText = this.innerHTML;
            this.innerHTML = `
                <span class="inline-flex items-center">
                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Bearbetar...
                </span>
            `;
            this.disabled = true;

            // Store in sessionStorage
            sessionStorage.setItem('cartProduct', product);
            sessionStorage.setItem('cartPrice', price);
            
            // Simulate processing delay
            setTimeout(() => {
                window.location.href = 'checkout.html';
            }, 1000);
        });
    });
// Fake notifications animation
    const fakeNotifications = document.querySelectorAll('.fake-notification');
    fakeNotifications.forEach((notification, index) => {
        notification.style.animationDelay = `${0.3 + (index * 0.3)}s`;
    });
        // Enhanced payment button with loading animation
        const paymentButton = document.getElementById('payment-button');
        if (paymentButton) {
            paymentButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Add loading state
                this.innerHTML = `
                    <span class="relative z-10 inline-flex items-center">
                        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Bearbetar betalning...
                    </span>
                `;
                this.disabled = true;
                
                // Simulate payment processing
                setTimeout(() => {
                    window.location.href = 'thank-you.html';
                }, 2000);
            });
        }

        // 3D hover effect for product cards
const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const x = e.offsetX;
            const y = e.offsetY;
            const { width, height } = card.getBoundingClientRect();
            const middleX = width / 2;
            const middleY = height / 2;
            const angleX = (y - middleY) / 10;
            const angleY = (middleX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
});
