// De aframe.io-voorbeeldpagina laadt een kant-en-klare sky.jpg.
// Om deze pagina volledig zelfstandig (geen externe afbeeldingen) te
// houden, tekenen we hier zelf een simpele 360°-hemel op een <canvas>
// en gebruiken die als texture voor de <a-sky>.
function maakHemelAfbeelding() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Verticale kleurovergang: donkerblauw bovenaan -> lichter bij de horizon
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#0b1220');
    gradient.addColorStop(0.55, '#2b4270');
    gradient.addColorStop(0.75, '#7a92c4');
    gradient.addColorStop(1, '#dbe4f5');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Wat sterren in het bovenste, donkere deel
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 250; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.5;
    const r = Math.random() * 1.3;
    ctx.globalAlpha = Math.random() * 0.8 + 0.2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    }
    ctx.globalAlpha = 1;

    return canvas.toDataURL('image/png');
    }

document.getElementById('sky-texture').src = maakHemelAfbeelding();

// Verberg de hint na een paar seconden
setTimeout(() => {
      const hint = document.getElementById('hint');
      if (hint) hint.style.opacity = '0';
    }, 4000
);