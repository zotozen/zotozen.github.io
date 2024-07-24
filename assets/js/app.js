document.querySelector('.menu-toggle').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.nav-links').classList.toggle('active');
});