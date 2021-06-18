document.addEventListener('DOMContentLoaded', function () {
    new Splide('#secondary-slider', {
        fixedWidth: 100,
        height: 60,
        gap: 10,
        rewind: true,
        cover: true,
        pagination: false,
    }).mount();
});