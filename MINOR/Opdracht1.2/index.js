AFRAME.registerComponent('interactief-object', {
    init: function () {
        const element = this.el;
        const kleuren = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33E9'];
        let vergroot = false;

        element.addEventListener('click', function () {
        // Willekeurige nieuwe kleur
        const randomKleur = kleuren[Math.floor(Math.random() * kleuren.length)];
        element.setAttribute('color', randomKleur);

        // Wissel steeds tussen normale en vergrote schaal
        vergroot = !vergroot;
        element.setAttribute('scale', vergroot ? '1.4 1.4 1.4' : '1 1 1');
        });

        // Klein hover-effectje zodat duidelijk is dat het object klikbaar is
        element.addEventListener('mouseenter', function () {
        element.setAttribute('material', 'opacity', 0.7);
        });
        element.addEventListener('mouseleave', function () {
        element.setAttribute('material', 'opacity', 1);
        });
    }
});

// Verberg de hint na een paar seconden
setTimeout(() => {
    const hint = document.getElementById('hint');
    if (hint) hint.style.opacity = '0';
    }, 5000
);