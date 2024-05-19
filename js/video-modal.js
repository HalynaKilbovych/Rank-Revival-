document.getElementById('play-video').addEventListener('click', function(e) {
    e.preventDefault();
    var videoOverlay = document.getElementById('video-overlay');
    videoOverlay.classList.add('open');

    var iframe = document.createElement('iframe');
    iframe.width = '800';
    iframe.height = '500';
    iframe.src = 'https://www.youtube.com/embed/UxRby5oM8aY';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    videoOverlay.appendChild(iframe);
});

var overlays = document.querySelectorAll('.video-overlay, .video-overlay-close');
overlays.forEach(function(overlay) {
    overlay.addEventListener('click', function(e) {
        e.preventDefault();
        closeVideo();
    });
});

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 27) {
        closeVideo();
    }
});

function closeVideo() {
    var openOverlay = document.querySelector('.video-overlay.open');
    if (openOverlay) {
        openOverlay.classList.remove('open');
        var iframe = openOverlay.querySelector('iframe');
        if (iframe) {
            iframe.remove();
        }
    }
}