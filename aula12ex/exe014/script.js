function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'fotomanha.jpg';
        document.body.style.background = 'rgba(248, 115, 5, 0.75)'; // Laranja suave
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = 'fototarde.jpg';
        document.body.style.background = '#2e3503'; // Verde escuro
    } else {
        // Boa noite!
        img.src = 'fotonoite.jpg';
        document.body.style.background = '#030335'; // Azul escuro
    }
}

