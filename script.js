document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Dark Mode Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- 2. Mobile Menu ---
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const navOverlay = document.querySelector('.mobile-nav-overlay');
    const navLinks = document.querySelectorAll('.mobile-nav-overlay a');

    function toggleMenu() {
        navOverlay.classList.toggle('active');
    }

    menuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    navLinks.forEach(link => link.addEventListener('click', toggleMenu));

    // --- 3. UTM Tracking & WhatsApp Injection ---
    const urlParams = new URLSearchParams(window.location.search);
    let utmSource = urlParams.get('utm_source') || 'organico';
    let utmMedium = urlParams.get('utm_medium') || 'site';
    
    // Salva no LocalStorage para persistência
    if(urlParams.has('utm_source')) {
        localStorage.setItem('last_utm_source', utmSource);
    } else {
        utmSource = localStorage.getItem('last_utm_source') || 'organico';
    }

    // Atualiza todos os links do WhatsApp na página
    const waLinks = document.querySelectorAll('a[href*="wa.me"]');
    waLinks.forEach(link => {
        let originalText = "Olá, gostaria de mais informações.";
        // Tenta pegar o texto original se existir na URL
        if(link.href.includes('text=')) {
             // Decodifica URI component para pegar o texto base
             try {
                 originalText = decodeURIComponent(link.href.split('text=')[1].replace(/\+/g, ' '));
             } catch(e) {}
        }
        
        const newText = `Olá, vim pelo site (${utmSource}). ${originalText}`;
        link.href = `https://wa.me/5511980313428?text=${encodeURIComponent(newText)}`;
        
        // Adiciona evento de tracking
        link.addEventListener('click', () => {
            trackEvent('whatsapp_click', utmSource);
        });
    });

    // --- 4. Cookie Banner (LGPD) ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');
    
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieBanner.style.display = 'block';
            // Pequeno delay para animação CSS funcionar
            setTimeout(() => cookieBanner.classList.add('show'), 100);
        }, 2000);
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('show');
        setTimeout(() => cookieBanner.style.display = 'none', 400);
        enableMarketingScripts();
    });

    rejectBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'false');
        cookieBanner.classList.remove('show');
        setTimeout(() => cookieBanner.style.display = 'none', 400);
    });

    // Função simulada para habilitar scripts pesados apenas após aceite
    function enableMarketingScripts() {
        console.log("Scripts de marketing ativados.");
        // Aqui você dispararia eventos específicos do GTM se necessário
    }

    // --- 5. Form Submission Simulation ---
    const form = document.getElementById('contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const msg = document.getElementById('message').value;
            
            // Simula envio e abre mailto como fallback robusto sem backend
            const subject = `Contato Site: ${name}`;
            const body = `Nome: ${name}%0D%0AEmail: ${email}%0D%0AMensagem: ${msg}`;
            
            alert(`Obrigado, ${name}! Estamos redirecionando para seu e-mail para confirmar o envio.`);
            window.location.href = `mailto:vempraka@gmail.com?subject=${subject}&body=${body}`;
            
            form.reset();
            trackEvent('form_submit');
        });
    }

    // --- 6. Tracking Helper ---
    window.trackEvent = function(action, label) {
        // Envia para dataLayer do GTM se existir
        if(window.dataLayer) {
            window.dataLayer.push({
                'event': action,
                'event_category': 'engagement',
                'event_label': label
            });
        }
        console.log(`Tracked: ${action} - ${label}`);
    };
});