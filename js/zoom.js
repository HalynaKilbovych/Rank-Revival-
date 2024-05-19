document.addEventListener("DOMContentLoaded", function() {
    const featureImgs = document.querySelectorAll('.feature-img');

    featureImgs.forEach(featureImg => {
        const zoomLens = featureImg.querySelector('.zoom-lens');
        const img = featureImg.querySelector('img');

        featureImg.addEventListener('mousemove', (e) => moveLens(e, featureImg, zoomLens, img));
        featureImg.addEventListener('mouseleave', () => resetLens(zoomLens, img));
    });

    function moveLens(e, featureImg, zoomLens, img) {
        const { left, top, width, height } = featureImg.getBoundingClientRect();
        const lensSize = zoomLens.offsetWidth / 2;
        let x = e.pageX - left - window.pageXOffset - lensSize;
        let y = e.pageY - top - window.pageYOffset - lensSize;

        // Prevent lens from being positioned outside the image
        if (x > width - lensSize * 2) x = width - lensSize * 2;
        if (x < 0) x = 0;
        if (y > height - lensSize * 2) y = height - lensSize * 2;
        if (y < 0) y = 0;

        zoomLens.style.left = `${x}px`;
        zoomLens.style.top = `${y}px`;
        zoomLens.style.visibility = 'visible';

        // Zoom effect
        const zoomLevel = 2; // Adjust zoom level as needed
        img.style.transformOrigin = `${((x + lensSize) / width) * 100}% ${((y + lensSize) / height) * 100}%`;
        img.style.transform = `scale(${zoomLevel})`;
    }

    function resetLens(zoomLens, img) {
        zoomLens.style.visibility = 'hidden';
        img.style.transform = 'scale(1)';
        img.style.transformOrigin = 'center center'; // Reset transform origin
    }

    // Intersection Observer for feature items
    const featureItems = document.querySelectorAll('.feature-item');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the item is visible
            }
        });
    }, observerOptions);

    featureItems.forEach(item => {
        observer.observe(item);
    });
});