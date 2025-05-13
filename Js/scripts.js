document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuButton.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    
    // Smooth scrolling para enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Cerrar el menú móvil si está abierto
                navMenu.classList.remove('show');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const service = document.getElementById('service').value;
            
            if (!name || !email || !message || !service) {
                alert('Por favor complete todos los campos obligatorios.');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Por favor ingrese un correo electrónico válido.');
                return;
            }
            
            // Aquí iría el código para enviar el formulario
            // Por ahora solo mostraremos un mensaje de éxito
            alert('Gracias por su mensaje. Nos pondremos en contacto con usted pronto.');
            contactForm.reset();
        });
    }
    
    // Función para validar email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Efecto de scroll para el header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Animación para las tarjetas de servicios al aparecer
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });
});
