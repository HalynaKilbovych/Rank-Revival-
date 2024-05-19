document.addEventListener('DOMContentLoaded', function() {
    const featureItems = document.querySelectorAll('.feature-item');

    function handleScroll() {
        featureItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemTop < windowHeight - 100) {
                item.classList.add('visible');
                if ((index + 1) % 2 === 0) {
                    item.classList.remove('appear-left');
                } else {
                    item.classList.add('appear-left');
                }
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});
