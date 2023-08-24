const box = document.getElementsByClassName('box');
const result = document.getElementById('result');
const message = document.getElementById('message');

let text = 'O';
let c=0;

for (let i=0;i<box.length;i++){
    box[i].addEventListener('click',handleClick)
}

function handleClick(e){
    if (!e.target.innerText){
    c++;
    text = text=='O'?'X':'O';
    e.target.innerHTML = `<h2>${text}</h2>`
    }
    checkit();
}

function checkit(){
    if(box[0].innerText+box[1].innerText+box[2].innerText=='XXX'||
    box[3].innerText+box[4].innerText+box[5].innerText=='XXX'||
    box[6].innerText+box[7].innerText+box[8].innerText=='XXX'||
    box[0].innerText+box[3].innerText+box[6].innerText=='XXX'||
    box[1].innerText+box[4].innerText+box[7].innerText=='XXX'||
    box[2].innerText+box[5].innerText+box[8].innerText=='XXX'||
    box[0].innerText+box[4].innerText+box[8].innerText=='XXX'||
    box[2].innerText+box[4].innerText+box[6].innerText=='XXX'){
        
        showResult('X WON');
    }
    else if(box[0].innerText+box[1].innerText+box[2].innerText=='OOO'||
    box[3].innerText+box[4].innerText+box[5].innerText=='OOO'||
    box[6].innerText+box[7].innerText+box[8].innerText=='OOO'||
    box[0].innerText+box[3].innerText+box[6].innerText=='OOO'||
    box[1].innerText+box[4].innerText+box[7].innerText=='OOO'||
    box[2].innerText+box[5].innerText+box[8].innerText=='OOO'||
    box[0].innerText+box[4].innerText+box[8].innerText=='OOO'||
    box[2].innerText+box[4].innerText+box[6].innerText=='OOO'){
        
        showResult('O WON');
    }

    else if(c==9){
        showResult("IT'S A DRAW!")
    }
}

function showResult(r){
    message.innerText = r
    result.style.visibility='visible';
}

document.getElementById('button').addEventListener('click',() => {
    location.reload()
}
)