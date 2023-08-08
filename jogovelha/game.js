let tabuleiro=["","","","","","","","",""]
let jogador=0
let ganhador=-1
let simbolo=["o","x"]
let formaswin=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

function preenche(alvo){
    if(tabuleiro[alvo]==""){
    tabuleiro[alvo]=simbolo[jogador]
    if(jogador==0)
        jogador++
    else
        jogador--
    console.log(tabuleiro[alvo])
    }
    else{
        console.log("repita")
    }
}
function ganhou(){
    let i,j
    for(i=0;i<8;i++){
        if(tabuleiro[formaswin[i][0]]!="" && tabuleiro[formaswin[i][0]]==tabuleiro[formaswin[i][1]] && tabuleiro[formaswin[i][1]]==tabuleiro[formaswin[i][2]]){
            if(tabuleiro[formaswin[i][0]]=="o")
                ganhador=0
            else
                ganhador=1
        }
    }
}
function limpatab(){
    /* for(i=0;i<9;i++)
        tabuleiro[i]="" */
    tabuleiro=tabuleiro.map(()=>{
        return ""
    })
    ganhador=-1
}