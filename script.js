// ============================================
// GSAP REGISTRATION
// ============================================

gsap.registerPlugin(ScrollTrigger);

// ============================================
// NAVIGATION
// ============================================

const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// HERO ANIMATIONS
// ============================================

const heroTitle = document.querySelector('.hero-title');
const heroSubtitle = document.querySelector('.hero-subtitle');
const ctaButton = document.querySelector('.cta-button');
const heroText = document.querySelector('.hero-text');
const scrollIndicator = document.querySelector('.scroll-indicator');

// Hero entrance animation
gsap.timeline()
    .set(heroText, { opacity: 1 })
    .from(heroTitle.querySelectorAll('.line'), {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out'
    })
    .from(heroSubtitle, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.5')
    .from(ctaButton, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.3')
    .from(scrollIndicator, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.5');

// Background orbs animation
const orbs = document.querySelectorAll('.gradient-orb');
orbs.forEach((orb, index) => {
    gsap.to(orb, {
        x: `+=${(index + 1) * 50}`,
        y: `+=${(index + 1) * 30}`,
        rotation: 360,
        duration: 20 + (index * 5),
        repeat: -1,
        ease: 'none',
        yoyo: true
    });
});

// Parallax effect on scroll
gsap.to('.hero-background', {
    y: -100,
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    }
});

// ============================================
// SECTION ANIMATIONS
// ============================================

// Section headers animation
gsap.utils.toArray('.section-header').forEach(header => {
    const number = header.querySelector('.section-number');
    const title = header.querySelector('.section-title');
    
    gsap.timeline({
        scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    })
    .from(number, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    })
    .from(title, {
        x: -30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.4');
});

// ============================================
// ABOUT SECTION
// ============================================

const aboutBlocks = document.querySelectorAll('.about-block');
const aboutImage = document.querySelector('.about-image');

gsap.utils.toArray(aboutBlocks).forEach((block, index) => {
    gsap.from(block, {
        scrollTrigger: {
            trigger: block,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: 'power3.out'
    });
});

gsap.from(aboutImage, {
    scrollTrigger: {
        trigger: aboutImage,
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
});

// Image reveal effect
gsap.to('.image-reveal', {
    scrollTrigger: {
        trigger: '.about-image',
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 1
    },
    clipPath: 'inset(0% 0% 0% 0%)',
    ease: 'none'
});

// ============================================
// PORTFOLIO SECTION
// ============================================

const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach((item, index) => {
    // Entrance animation
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        y: 80,
        opacity: 0,
        duration: 1,
        delay: index * 0.1,
        ease: 'power3.out'
    });
    
    // Hover effect
    const portfolioImage = item.querySelector('.portfolio-image');
    const portfolioContent = item.querySelector('.portfolio-content');
    
    item.addEventListener('mouseenter', () => {
        gsap.to(portfolioImage, {
            scale: 1.05,
            duration: 0.6,
            ease: 'power2.out'
        });
        
        gsap.to(portfolioContent, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(portfolioImage, {
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
        });
        
        gsap.to(portfolioContent, {
            y: 20,
            opacity: 0.8,
            duration: 0.4,
            ease: 'power2.out'
        });
    });
    
    // Lightbox click
    item.addEventListener('click', () => {
        openLightbox(item);
    });
});

// ============================================
// EXPERIENCE/TIMELINE SECTION
// ============================================

const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        delay: index * 0.15,
        ease: 'power3.out'
    });
    
    // Marker animation
    const marker = item.querySelector('.timeline-marker');
    gsap.from(marker, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        scale: 0,
        duration: 0.5,
        delay: index * 0.15 + 0.3,
        ease: 'back.out(1.7)'
    });
});

// Timeline line animation
// NOTE: animating pseudo-elements (like ::before) directly via JS selectors is invalid
// and can throw errors in the browser which stops the rest of the script from running.
// To avoid runtime errors we skip direct pseudo-element animation here. If you
// want an animated timeline line, add a real element (e.g. `.timeline-line`) in
// the DOM and animate that, or use GSAP's CSSRulePlugin.

// ============================================
// TEAM SECTION
// ============================================

const teamCards = document.querySelectorAll('.team-card');

teamCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        delay: index * 0.1,
        ease: 'power3.out'
    });
});


// ============================================
// CONTACT SECTION
// ============================================

const contactInfo = document.querySelector('.contact-info');
const contactForm = document.querySelector('.contact-form');

gsap.from(contactInfo, {
    scrollTrigger: {
        trigger: contactInfo,
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from(contactForm, {
    scrollTrigger: {
        trigger: contactForm,
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// Form input animations
const formInputs = document.querySelectorAll('.form-input');
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    input.addEventListener('blur', () => {
        gsap.to(input, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Form submission
const contactFormElement = document.getElementById('contactForm');
contactFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitButton = contactFormElement.querySelector('.submit-button');
    const originalText = submitButton.innerHTML;
    
    // Animation
    gsap.to(submitButton, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
        onComplete: () => {
            submitButton.innerHTML = '<span>Message Sent ✓</span>';
            gsap.to(submitButton, {
                backgroundColor: 'var(--color-red)',
                duration: 0.3
            });
            
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                gsap.to(submitButton, {
                    backgroundColor: 'transparent',
                    duration: 0.3
                });
                contactFormElement.reset();
            }, 2000);
        }
    });
});

// ============================================
// SOCIAL BAR
// ============================================

const socialBar = document.querySelector('.social-bar');

gsap.from(socialBar, {
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        toggleActions: 'play none none none'
    },
    x: 50,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: 'power3.out',
    onComplete: () => {
        socialBar.style.opacity = '1';
    }
});

// Social links hover animation
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ============================================
// LIGHTBOX
// ============================================

const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxTitle = document.querySelector('.lightbox-title');
const lightboxDescription = document.querySelector('.lightbox-description');

function openLightbox(item) {
    const title = item.querySelector('.portfolio-title').textContent;
    const description = item.querySelector('.portfolio-description').textContent;
    const category = item.querySelector('.portfolio-category').textContent;
    
    lightboxTitle.textContent = title;
    lightboxDescription.textContent = `${category} · ${description}`;
    
    lightbox.classList.add('active');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Animation
    gsap.from('.lightbox-content', {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out'
    });
}

function closeLightbox() {
    gsap.to('.lightbox-content', {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// ============================================
// SMOOTH SCROLLING ENHANCEMENTS
// ============================================

// CTA Button scroll
const ctaButtonElement = document.querySelector('.cta-button');
if (ctaButtonElement) {
    ctaButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        const workSection = document.querySelector('#work');
        if (workSection) {
            workSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// ============================================
// PARALLAX EFFECTS
// ============================================

// Parallax for sections
gsap.utils.toArray('section').forEach((section, index) => {
    if (index > 0) {
        gsap.to(section, {
            y: -50,
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    }
});

// ============================================
// CURSOR EFFECT (Optional Enhancement)
// ============================================

// Add custom cursor effect on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .portfolio-item, .form-input');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        document.body.style.cursor = 'pointer';
    });
    
    element.addEventListener('mouseleave', () => {
        document.body.style.cursor = 'default';
    });
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images (if you add real images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// INITIALIZATION
// ============================================

// Set initial states
gsap.set('.hero-text', { opacity: 0 });
gsap.set(portfolioItems, { opacity: 0 });
gsap.set(timelineItems, { opacity: 0 });
gsap.set(aboutBlocks, { opacity: 0 });
gsap.set(aboutImage, { opacity: 0 });
gsap.set(contactInfo, { opacity: 0 });
gsap.set(contactForm, { opacity: 0 });

// Refresh ScrollTrigger on load
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});

