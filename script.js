  var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });

// JavaScript для бургер-меню
        const hamburger = document.getElementById('hamburger');
        const sideMenu = document.getElementById('sideMenu');
        const overlay = document.getElementById('overlay');
        
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('hamburger--active');
            sideMenu.classList.toggle('side-menu--active');
            overlay.classList.toggle('overlay--active');
            
            // Блокировка прокрутки body при открытом меню
            document.body.style.overflow = sideMenu.classList.contains('side-menu--active') ? 'hidden' : '';
        });
        
        // Закрытие меню при клике на overlay
        overlay.addEventListener('click', function() {
            hamburger.classList.remove('hamburger--active');
            sideMenu.classList.remove('side-menu--active');
            overlay.classList.remove('overlay--active');
            document.body.style.overflow = '';
        });
        
        // Закрытие меню при клике на пункт меню (опционально)
        const menuItems = document.querySelectorAll('.side-menu a');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('hamburger--active');
                sideMenu.classList.remove('side-menu--active');
                overlay.classList.remove('overlay--active');
                document.body.style.overflow = '';
            });
        });
        