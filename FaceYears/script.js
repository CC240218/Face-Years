function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var tempo = ''
    var data = new Date()
   var horas = data.getHours()
    
if(horas >= 0 && horas < 12){
    img.src= 'img/fotomanhã.jpg'
    document.body.style.background = 'white'
    tempo = 'Manhã'
}
else if(horas >=12 && horas <=18 ){
    img.src = 'img/fototarde.jpg'
    document.body.style.background = 'orange'
    tempo = 'Tarde'
}else{
    img.src = 'img/fotonoite.jpg'
    document.body.style.background = 'black'
    tempo = 'noite'
}
msg.innerHTML = `Agora são ${horas} Horas da ${tempo}`
}
function verificar(){ //FaceYears
var data = new Date()
var ano = data.getFullYear()
var formano = document.getElementById('txtano')
var resul = document.getElementById('resul')
if (formano.value.length==0) {
    window.alert('[ERRO] Preencha o formulario')
}else{
var radsex = window.document.getElementsByName('radsexo')
var idade = ano -(formano.value)//O VScode entende que é uma conversão implicita devido aos "()". Não precisou da palavra "Number" para converter.
var img = document.getElementById('img')
var genero =''
if (radsex[0].checked) {
    genero= 'Masculino'
    if (idade >=1 && idade <=4) {
       img.src = 'img/macacobebe.jpg'
    }else if(idade  == 0){
        img.src = 'img/gravida.jpg'
        
    }else if (idade >=5 && idade <=11){
img.src = 'img/homemcriança.jpg'
    }else if (idade >=12 && idade <=16) {
        img.src ='img/homemadolescente.jpg'
    }else if (idade >=17 && idade <=29) {
        img.src ='img/homemjovem.jpg'
    }else if (idade>=30&&idade<=39 ) {
        img.src ='img/homemadulto.jpg'
    }else{
        img.src ='img/homemvelho.jpg'
    }
}else if (radsex[1].checked){
    genero= 'Feminino'
    if (idade >=1 && idade <=4) {
        img.src = 'img/macacobebe.jpg'
    }else if(idade  == 0){
        img.src = 'img/gravida.jpg'
       
     }else if (idade >=5 && idade <=11){
 img.src = 'img/mulhercriança.jpg'
     }else if (idade >=12 && idade <=16) {
         img.src ='img/mulheradolescente.jpg'
     }else if (idade >=17 && idade <=29) {
         img.src ='img/mulherjovem.jpg'
         img.style.borderRadius = '150pt'
     }else if (idade>=30&&idade<=39 ) {
         img.src ='img/mulheradulta.jpg'
         img.style.borderRadius = '200pt'
     }else{
         img.src ='img/mulhervelha.jpg'
     }
}
if (idade == 0) {
    resul.innerHTML = 'Você ainda não nasceu!!!'
}else{
    resul.innerHTML = `Uma pessoa do gênero ${genero} com idade ${idade}`
}
}
}