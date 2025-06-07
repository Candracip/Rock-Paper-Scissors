const choices = ['batu', 'kertas', 'gunting'];
let playerScore = 0;
let computerScore = 0;

function Play(playerchoice){
    if(playerScore >= 5 || computerScore >= 5) return;
    const computerChoice = choices[Math.floor(Math.random()* choices.length)] ;
    let result = '';
    if(playerchoice === computerChoice){
        result  = 'SERI !!!';
    }else if(
        (playerchoice === 'batu' && computerChoice === 'gunting') ||
        (playerchoice === 'gunting' && computerChoice === 'kertas') ||
        (playerchoice === 'kertas' && computerChoice === 'batu')
    ){
        result=  'KAMU MENANG !!!';
        playerScore ++;
    }else{
        result = 'KAMU KALAH !!!';
        computerScore ++;
    }

    if(playerScore === 5 || computerScore === 5){
        document.getElementById("result").innerText = playerScore === 5 ? "GAME OVER, YOU WIN" : "GAME OVER, COMPUTER WINS";
        
        //semua button bakal off kecuali reset button
        document.querySelectorAll("button:not(#resetBtn)").forEach(button => button.disabled = true);
        return;// menghentikan kode selanjutnya
    }

    
    
    document.getElementById('result').innerText = `Your Choose : ${playerchoice}, Computer Choose : ${computerChoice},
    
    ${result}.`;

    document.getElementById('skor').innerText = `Score :
    you = ${playerScore}, Computer = ${computerScore}`;
    }
function reset(){
    playerScore = 0;
    computerScore = 0;
    
    //for enable buttons again
    document.querySelectorAll("button").forEach(button => button.disabled = false);
    document.getElementById('result').innerText = '';
    document.getElementById('skor').innerText = `Score :
     you = ${playerScore}, computer = ${computerScore}`;
}

