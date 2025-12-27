
        // دالة تشغيل الإنترو والتبديل
        window.addEventListener('load', () => {
            const intro = document.getElementById('intro-screen');
            const main = document.getElementById('main-site');

            setTimeout(() => {
                intro.style.opacity = '0';
                setTimeout(() => {
                    intro.style.display = 'none';
                    main.style.display = 'block';
                    setTimeout(() => main.style.opacity = '1', 50);
                }, 1000);
            }, 3500); 
        });