//função que roda quando a página carregar

function carregar(){
var msg = document.getElementById("msg")
var img = document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()


msg.innerHTML = `Agora são ${hora} horas.`

if(hora >= 0 && hora < 12){
    img.scr = "fotomanha.png"
    document.body.style.background = "#f4be3c"
    //bom dia
}else if(hora >= 12 && hora <= 18){
    img.src = "fototarde.png"
    document.body.style.background = "#dc7156"
    //boa tarde
}else{
    img.src = "fotonoite.png"
    document.body.style.background = "#1b203c"
    //boa noite
}
}