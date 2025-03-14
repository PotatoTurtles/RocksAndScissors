        let playerMove = 0;

        let button1 = document.querySelector('.Rock');
        playerMove = button1.addEventListener('click', ()=>{playerMove = "Rock"; console.log(playerMove);});
        let button2 = document.querySelector('.Paper');
        button2.addEventListener('click',()=>{playerMove = "Paper"; console.log(playerMove);});
        let button3 = document.querySelector('.Scissor');
        button3.addEventListener('click',()=>{playerMove = "Scissor"; console.log(playerMove);});

        let allBubble = document.querySelector('body');

        let textPrompt = document.querySelector('.textPrompt');
        let roundScore = document.querySelector('.roundScore');
        let result = document.querySelector('.result');

        let playTally = 0;
        let compTally = 0;

        roundScore.textContent = `Round ${playTally+compTally+1}... BEGINNN: Play Wins: ${playTally}     Machine Wins: ${compTally}`
        textPrompt.textContent = 'Would you like to play Rock, Paper, or Scissors?'
        allBubble.addEventListener('click',()=>{
            if(playerMove){
                if(playTally+compTally<5){ 
                    roundScore.textContent = `Round ${playTally+compTally+1}... BEGINNN: Play Wins: ${playTally}     Machine Wins: ${compTally}`;
                    getWin(playerMove);
                    if(playTally+compTally>=5){
                        roundScore.textContent = `Round ${playTally+compTally}: Play Wins: ${playTally}     Machine Wins: ${compTally}`
                        textPrompt.textContent = 'Reload tab to play again.'
                        if(playTally>compTally){
                            result.textContent="Overall: You Won!!!";
                        }
                        else{
                            result.textContent="Overall: You Lost :(";
                        }
                    }
                    else{
                        roundScore.textContent = `Round ${playTally+compTally+1}... BEGINNN: Play Wins: ${playTally}     Machine Wins: ${compTally}`
                    }
                }
                else{
                    result.textContent="Only 5 rounds are allowed.";
                }
                
            }
            playerMove=0;
        });

        

        function getWin(playerChoice, computerChoice = convertChoice()){
            let displayMoves = `You Played: ${playerChoice} ------ Machine Played: ${computerChoice} ------ `;
            if(playerChoice==computerChoice){
                displayMoves+= 'Tie.';
            }
            else if(playerChoice == "Rock"){
                if(computerChoice == "Paper"){
                    displayMoves+= 'Computer Won this Round.';
                    compTally++;
                }
                else{
                    displayMoves+= 'You Won this Round!';
                    playTally++;
                }
            }
            else if(playerChoice == "Paper"){
                if(computerChoice == "Scissor"){
                    displayMoves+= 'Computer Won this Round.';
                    compTally++;
                }
                else{
                    displayMoves+= 'You Won this Round!';
                    playTally++;
                }
            }
            else{
                if(computerChoice == "Rock"){
                    displayMoves+= 'Computer Won this Round.';
                    compTally++;
                }
                else{
                    displayMoves+= 'You Won this Round!';
                    playTally++;
                }
            }
            result.textContent=displayMoves;
        }
        function convertChoice(choose = getRandChoice()){
            if(choose==1){
                return "Rock"
            }
            else if(choose==2){
                return "Paper"
            }
            return "Scissor"
        }
        function getRandChoice(){
            return Math.floor(Math.random()*3)+1
        }
        