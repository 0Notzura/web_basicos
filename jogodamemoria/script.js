const tab=document.getElementById("tabuleiro")
const divj1=document.getElementById("jogador1")
const divj2=document.getElementById("jogador2")
const body=document.body
const FRONT="front"
const BACK="back"
const CARD="card"
const techs=["boi","burro","cachorro","cavalo","galinha","gato","ovelha","pato","porco","vaca"]
let cards=[]
let first=null
let second=null
let lock=false
let player1=0
let player2=0
let turno=true
let audio=document.getElementById("som")
startgame()

function startgame(){
    cards=createcards()
    shuffle(cards)
    cratetabcards(cards)
}

function cratetabcards(cards){
    cards.forEach(card => {
        let element=document.createElement("div")
        element.id=card.id
        element.classList.add(CARD)
        element.addEventListener("click",flip)
        
        createface(FRONT,card,element)
        createface(BACK,card,element)
        tab.appendChild(element)
    });
}
function createface(face,card,element){
    let cardface=document.createElement("div")
    cardface.classList.add(face)
    if(face==FRONT){
        img=document.createElement("img")
        img.src="img/"+card.tech+".png"
        cardface.appendChild(img)
    }
    /* else
        cardface.innerHTML="&lt/&gt" */
    
    element.appendChild(cardface)
}

function shuffle(cards){
    let i
    let r=0
    let aux
    for(i=0;i<20;i++){
        r=parseInt(Math.random() * 20)
        aux=cards[r]
        cards[r]=cards[i]
        cards[i]=aux
    }
}

function createcards(){
    let tech
    for(tech of techs){
        cards.push(createpair(tech))
    }
    return cards.flatMap(pair=>pair)
}
function createpair(tec){
    return[{
        tech:tec,
        id:createid(tec),
        flipped:false
    },{
        tech:tec,
        id:createid(tec),
        flipped:false
    }]
}
function createid(tec){
    return tec+"."+parseInt(Math.random()*1000)
}
function flip(){
    if (atribui(this) != false) setTimeout(check, 500);
    
}


/* function criaplacar(){
    let div1=document.createElement("div")
    let j1=document.createElement("p")
    let p1=document.createElement("p")
    let div2=document.createElement("div")
    let j2=document.createElement("p")
    let p2=document.createElement("p")
    j1.innerText="jogador 1 :"
    p1.innerText="0"
    div1.id="jogador1"
    div1.classList.add("bcb")
    div1.appendChild(j1)
    div1.appendChild(p1)
    body.appendChild(div1)
    j2.innerText="jogador 2 :"
    p2.innerText="0"
    div2.id="jogador2"
    div2.appendChild(j2)
    div2.appendChild(p2)
    body.appendChild(div2)
}
 */

function atribui(element){
    let card=(cards.filter(card=>
        card.id===element.id
    )[0])
    if(card.flipped || lock)
        return false
    if(first==null){
        card.flipped=true
        first=card
        element.classList.add("flip")
        return false
        }

    else{
        card.flipped=true
        second=card
        lock=true
        element.classList.add("flip")
        if(first.tech==second.tech){
            return true
        }
    }
}
function check(){
    if(second==null)
        return false
    if(first.tech==second.tech){
        first=null
        second=null
        lock=null
        if(turno){
            player1++
            divj1.children[1].innerText=player1

        }
        else{
            player2++
            divj2.children[1].innerText=player2
        }
    }
    else{
        turno=!turno
        first.flipped=false
        second.flipped=false
        let card1=document.getElementById(first.id)
        let card2=document.getElementById(second.id)
        card1.classList.remove("flip")
        card2.classList.remove("flip")
        console.log(card1)
        console.log(card2)
        first=null
        second=null
        lock=null
        if(turno==false){
            divj1.classList.remove("bcb")
            divj2.classList.add("bcb")
        }
        else{
            divj2.classList.remove("bcb")
            divj1.classList.add("bcb")
        }
    }
    if(player1+player2==10){
        gameover()
    }
    /* else{
        let card1=document.getElementById(first.id)
        let card2=document.getElementById(second.id)
        card1.classList.remove("flip")
        card2.classList.remove("flip")
        first=null
        second=null
        lock=null
    } */
}
function gameover(){
    let over=document.createElement("div")
    let h1=document.createElement("h1")
    let button=document.createElement("button")
    over.id="gameover"
    button.innerText="reestart"
    button.addEventListener("click",reestart)
    if(player1>player2)
        h1.innerText="Parabens primeiro jogador,voce ganhou"
    else if(player1<player2)
        h1.innerText="Parabens segundo jogador,voce ganhou"
    else
        h1.innerText="UAU,voces empataram"

    over.appendChild(h1)
    over.appendChild(button)
    body.appendChild(over)
    console.log("mgkotrgmtklmrtlk")
}
function reestart(){
    let over=document.getElementById("gameover")
    first=null
    second=null
    lock=false
    player1=0
    player2=0
    turno=true
    tab.innerHTML=""
    over.parentNode.removeChild(over);
    cards=[]
    startgame()
}
console.log(tab)

