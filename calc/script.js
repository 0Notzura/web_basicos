let adulto=document.getElementById("adulto")
let crianca=document.getElementById("crianca")
let duracao=document.getElementById("duracao")

let resultado=document.getElementById("resultado")


function calc(){
    let vadultos=adulto.value
    let vcrianca=crianca.value
    console.log(vadultos)
    let vduracao=duracao.value
    let qtdtotalcarne=qtdcarne(vduracao)*vadultos+qtdcarne(vduracao)*(vcrianca/2)
    let qtdtotalcerveja=qtdcreveja(vduracao)*vadultos
    let qtdtotalbebida=qtdrefri(vduracao)*vadultos+qtdrefri(vduracao)*(vcrianca/2)
    resultado.innerHTML=`<p>${qtdtotalcarne}g de carne<\p>`
    resultado.innerHTML+=`<p>${qtdtotalcerveja}ml de cerveja<\p>`
    resultado.innerHTML+=`<p>${qtdtotalbebida}ml de bebidas<\p>`

}
function qtdcarne(duracao){
    if(duracao>=6){
        return 650;
    }
    else{
        return 400;
    }
}
function qtdcreveja(duracao){
    if(duracao>=6){
        return 2000;
    }
    else{
        return 1200;
    }
}
function qtdrefri(duracao){
    if(duracao>=6){
        return 1500;
    }
    else{
        return 1000;
    }
}