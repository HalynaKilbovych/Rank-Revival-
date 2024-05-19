
        document.addEventListener("DOMContentLoaded", function() {
            const heroImg = document.querySelector('.hero-img');
            const wrapBig = document.querySelector('.hero-img--wrap-big');
            const wrapSmall = document.querySelector('.hero-img--wrap-small');
            
    
            setTimeout(() => {
                heroImg.classList.add('show');
            }, 100);
            
            
            setTimeout(() => {
                wrapBig.classList.add('show');
            }, 200); 
            
        
            setTimeout(() => {
                wrapSmall.classList.add('show');
            }, 800);
        });

