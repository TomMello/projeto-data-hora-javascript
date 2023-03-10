function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12){
        //Bom Dia!
        msg.innerHTML = `Agora são ${hora} da manhã.`
        img.src = 'manha.png'
        document.body.style.background = `#a97172`
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        msg.innerHTML = `Agora são ${hora} da tarde.`
        img.src = 'tarde.png'
        document.body.style.background = '#656738'
    } else {
        //Boa Noite!
        msg.innerHTML = `Agora são ${hora} da noite.`
        img.src = 'noite.png'
        document.body.style.background = `#28303d`
    }

}


