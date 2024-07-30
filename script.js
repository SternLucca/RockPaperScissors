var pontoPlayer = 0;
var pontoCPU = 0;
const restart = document.getElementById("Restart");
var winAudio = new Audio('venceu.mp3');
var defeatAudio = new Audio('perdeu.mp3');
var tieAudio = new Audio('empate.mp3');
function game() {
console.log('Restart');
var min = 1;
var max = 3;
var cpuChoice = Math.floor(Math.random() * (max - min + 1)) + min;
var playerChoice = 0;
var cpuChoiceString = 'PlaceHolder';
var playerChoiceString = 'PlaceHolder';
var escolhaPlayer = document.getElementById("escolhaPlayer");
var escolhaCPU = document.getElementById("escolhaCPU");
const vs = document.getElementById("vs");
escolhaCPU.innerHTML = ' ͏';
vs.innerHTML = ' ͏';
escolhaPlayer.innerHTML = ' ͏';
function showResults (){
    escolhaPlayer.innerHTML = playerChoiceString;
    vs.innerHTML = 'VS';
    escolhaCPU.innerHTML = cpuChoiceString;
    escolhaCPU.classList.add('fade_in3');
    escolhaPlayer.classList.add('fade_in');
    vs.classList.add('fade_in2');
}
console.log(cpuChoice);
function player1(){
    playerChoice = 1;
    console.log(playerChoice)
}
function player2(){
    playerChoice = 2;
    console.log(playerChoice)
}
function player3(){
    playerChoice = 3;
    console.log(playerChoice)
}
function empate(){
    console.log("Empate!");
    tieAudio.play();
}
function venceu(){
    console.log("Você venceu!");
    winAudio.play();
}
function perdeu(){
    console.log("Que pena! Você perdeu!");
    defeatAudio.play();
}
const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
pedra.addEventListener('click', player1);
papel.addEventListener('click', player2);
tesoura.addEventListener('click', player3);
const checagem = setInterval (()=>{
    if (cpuChoice == 1 && playerChoice == 1){
        empate();
        cpuChoiceString = 'Rock';
        playerChoiceString = 'Rock';
        showResults();
        console.log('CPU: ' +  pontoCPU);
        console.log('Player: ' +  pontoPlayer);
        clearInterval(checagem);
    }
    if (cpuChoice == 2 && playerChoice == 2){
        empate();
        playerChoiceString = 'Paper';
        cpuChoiceString = 'Paper';
        showResults();
        console.log('CPU: ' +  pontoCPU);
        console.log('Player: ' +  pontoPlayer);
        clearInterval(checagem);
    }
    if (cpuChoice == 3 && playerChoice == 3){
        empate();
        cpuChoiceString = 'Scissors';
        playerChoiceString = 'Scissors';
        showResults();
        console.log('CPU: ' +  pontoCPU);
        console.log('Player: ' +  pontoPlayer);
        clearInterval(checagem);
    }
    if (cpuChoice == 1 && playerChoice == 2){
        venceu();
        cpuChoiceString = 'Rock';
        playerChoiceString = 'Paper';
        showResults();
        pontoPlayer = pontoPlayer + 1;
        console.log('CPU: ' +  pontoCPU);
        console.log('Player: ' +  pontoPlayer);
        document.querySelector('.playerP').innerHTML = 'Player: ' + pontoPlayer;
        clearInterval(checagem);
    }
    if (cpuChoice == 2 && playerChoice == 3){
        venceu();
        cpuChoiceString = 'Paper';
        playerChoiceString = 'Scissors';
        showResults();
        pontoPlayer = pontoPlayer + 1;
        console.log('CPU: ' +  pontoCPU);
        console.log('Player: ' +  pontoPlayer);
        document.querySelector('.playerP').innerHTML = 'Player: ' + pontoPlayer;
        clearInterval(checagem);
    }
    if (cpuChoice == 3 && playerChoice == 1){
        venceu();
        cpuChoiceString = 'Scissors';
        playerChoiceString = 'Rock';
        showResults();
        pontoPlayer = pontoPlayer + 1;
        console.log('CPU: ' +  pontoCPU);
        console.log('Player: ' +  pontoPlayer);
        document.querySelector('.playerP').innerHTML = 'Player: ' + pontoPlayer;
        clearInterval(checagem);
    }
    if (cpuChoice == 1 && playerChoice == 3){
        perdeu();
        cpuChoiceString = 'Rock';
        playerChoiceString = 'Scissors';
        showResults();
        pontoCPU = pontoCPU + 1;
        console.log('CPU: ' +  pontoCPU);
        console.log('Player: ' +  pontoPlayer);
        document.querySelector('.cpuP').innerHTML = 'CPU: ' + pontoCPU;
        clearInterval(checagem);
    }
    if (cpuChoice == 2 && playerChoice == 1){
        perdeu();
        cpuChoiceString = 'Paper';
        playerChoiceString = 'Rock';
        showResults();
        pontoCPU = pontoCPU + 1;
        console.log('CPU: ' +  pontoCPU);
        console.log('Player: ' +  pontoPlayer);
        document.querySelector('.cpuP').innerHTML = 'CPU: ' + pontoCPU;
        clearInterval(checagem);
    }
    if (cpuChoice == 3 && playerChoice == 2){
        perdeu();
        cpuChoiceString = 'Scissors';
        playerChoiceString = 'Paper';
        showResults();
        pontoCPU = pontoCPU + 1;
        console.log('CPU: ' +  pontoCPU);
        console.log('Player: ' +  pontoPlayer);
        document.querySelector('.cpuP').innerHTML = 'CPU: ' + pontoCPU;
        clearInterval(checagem);
    }
}, 10);
}
game();
restart.addEventListener('click', game);