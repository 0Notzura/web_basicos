document.addEventListener("DOMContentLoaded",()=>{
    let squares=document.querySelectorAll(".square")
    let buton=document.querySelector("button")
    console.log(squares)
    squares.forEach((square)=>
    {
        square.addEventListener("click",controle)
    })    
    buton.addEventListener("click",reiniciar)
})
function controle(e){
    if(ganhador==-1){
        target=e.target
        console.log(target.id)
        preenche(target.id)
        ganhou()
        estilo(target)
    }
    setTimeout(()=>{
        if(ganhador==0){
            alert("O jogador 0 ganhou")
        }
        if(ganhador==1){
            alert("O jogador 1 ganhou")
        }
    },10)
}
function estilo(alvo){
    let posicao=alvo.id
    let s=tabuleiro[posicao]
    alvo.innerHTML=`<div class=${s}></div>`
}

function reiniciar(){
    let squares=document.querySelectorAll(".square")
    squares.forEach((square)=>{
        square.innerHTML=""
    })
    limpatab()
}