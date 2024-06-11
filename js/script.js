const jogar = document.querySelector('.jogar1')   //buscar elemento e colocar numa variavél
const loja = document.querySelector('.loja')
const balao1 = document.querySelector('.amarelo')
const balao2  = document.querySelector('.amarelo2')
const monkey = document.querySelector('.monkeyb')
const dia1 = document.querySelector('.dia1')
const dia2 = document.querySelector('.dia2')
const placar = document.querySelector('.placar')
const vida = document.querySelector('.vida')

balao1.addEventListener('click',subir)
jogar.addEventListener('click', clicou)
balao2.addEventListener('click', subir2)
balao2.addEventListener('click', clicou2)
balao2.addEventListener('click', clicou3)
balao2.addEventListener('click', clicou4)

var c = -1; // variavel para zera os pontos 

var v = 3 // quantidade de vida inicial
vida.innerHTML = v + ' Vidas'

function clicou (){ //quando o botão jogar e clicado e muda de skin e some com (jogar e loja) e aparece com monkey e balão1
    jogar.setAttribute('src', './botoes/jogar2.svg')
    setTimeout(function () {
        jogar.style.width = '0px' //sumir
        loja.style.width = '0px'
    }, 200)
    setTimeout(function () {
        monkey.style.width = '120px'
        dia1.style.width = '240px'
        dia1.innerHTML = 'Escolha a cor do balão'
        balao1.style.width = '100px'
    }, 400)
    setTimeout(function(){
        monkey.setAttribute('src', './monkey/monkey-a.svg')
        dia1.style.width = '0px'
        dia1.innerHTML = ''
    },1500)
}
function subir (){ // animação balão1 mostra (balão2, placar e vidas)
    balao1.classList.add('subir')
    setTimeout(function () {
        balao1.style.width = '0px'
        monkey.style.width = '0px'
        
    }, 800)
    
    setTimeout(function () {
        vida.style.bottom = '2px'
        placar.style.bottom = '727px'
        balao2.style.width = '70px'
    }, 1200)
    
}

function clicou2() { //contador de pontos
    updateDisplay(++c);
    
}

function updateDisplay(val) { // mostra o valor do placar
    
    document.querySelector('.placar').innerHTML = val + ` Pontos`;
    
}
function subir2 (){ // animação do balão2(subir, trocar fantasia e aumentar velocidade)
    
    balao2.setAttribute('src', './balao2/estouro.png')
    setTimeout (function(){
    
    balao2.style.top = '900px'
    balao2.style.transition = '0s linear'
    balao2.setAttribute('src', './balao2/amarelo.png')
    },100)
    


    setTimeout(function(){
        if(c >= -1){
            balao2.style.transition = `5s linear`
       }if (c >= 15){
            balao2.style.transition = `4s linear` 
        } if(c >= 30){
            balao2.style.transition = `3.5s linear`
        }if(c >= 45){
            balao2.style.transition = `3s linear`
        }if(c >= 60){
            balao2.style.transition = `2.5s linear`
        }if(c >= 75){
            balao2.style.transition = `2s linear`
        }if(c >= 90){
            balao2.style.transition = `1.5 linear`
        }if(c >= 100){
            balao2.style.transition = `1s linear`
        }

        var e = '-35px'
        balao2.style.top = `${e}`
    },500)

}


function getRandomArbitrary(min, max) { // gera um numero aleatorio entre dois numeros
    return Math.random() * (max - min) + min;
}
function clicou3(){ // vai para uma posição lateral aleatoria gerada acima
    
    setTimeout(function(){
        var x = getRandomArbitrary(-160, 160)
        balao2.style.left = `${x}px`
    
    },100)
}

function clicou4 (){ // verifica se o balão passou do limite da tela
const perdeuponto = setInterval(() =>{
    const topo = balao2.offsetTop
   
    if(-35 >= topo ){
        balao2.style.transition = '0s linear'
        balao2.style.top = '455px'
        balao2.style.left= '0px'
        v--
        document.querySelector('.vida').innerHTML = v + ` Vidas`;
        if (v == 0){
        setTimeout(function(){
            vida.style.bottom = '-100px'
            placar.style.bottom = '827px'
        },2000)
        monkey.style.width = '120px'
        dia2.style.width = '240px'
        dia2.innerHTML = 'Você fez ' + placar.innerHTML
        balao2.style.width = '0px'
        setTimeout(function(){
            monkey.setAttribute('src', './monkey/monkey-c.svg')
            dia2.innerHTML= 'Fim de jogo'
        },2000)
        setTimeout(function () {
            monkey.style.width = '0px'
            dia2.style.width = '0px'
            dia2.innerHTML = ''
            location.reload()
        }, 5000)
        }
        clearInterval(perdeuponto)
    }
    
    }, 1)
}