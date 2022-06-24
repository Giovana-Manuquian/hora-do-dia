function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#f9dd90'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'fototarde.jpg'
        document.body.style.background = '#986349'
    } else {
        // BOA NOIE!
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#2d617b'
    }
}
