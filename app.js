let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let usercount=document.querySelector("#User-score");
let compcount=document.querySelector("#comp-score");

const generateChoice=()=>{
    const arr=["rock","paper","scissors"];
    let genChoice=Math.floor(Math.random()*3);
    return arr[genChoice];
}

choices.forEach((choice)=>{
    
    choice.addEventListener("dblclick",()=>{
        const choiceID=choice.getAttribute("id");
        playGame(choiceID);
    })
})

const playGame=(choiceID)=>{
    console.log("user choice=",choiceID)
    let compChoice=generateChoice();
    console.log("computer choice=",compChoice)

    if(choiceID===compChoice){
        draw();
    }else{
        let userWin=true;
        if(choiceID==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(choiceID==="paper"){
            userWin=compChoice==="rock"?true:false;
        }else(choiceID==="scissors")
            userWin=compChoice==="paper"?true:false;
        showWinner(userWin,choiceID,compChoice);
    }
}

const draw=()=>{
    console.log("Its a DRAW")
    msg.style.backgroundColor="black"
    msg.innerText="Its a DRAW"
    
}

const showWinner=(userWin,choiceID,compChoice)=>{
    if(userWin){
        console.log("You WON!");
        msg.style.backgroundColor="green"
        msg.innerText=`You WIN! Your ${choiceID} beats ${compChoice}!`;
        userScore++;
        usercount.innerText=userScore;
        
    }else{
        console.log("You Lose!");
        msg.style.backgroundColor="red"
        msg.innerText=`You LOSE! ${compChoice} beats your ${choiceID} :(`;
        compScore++;
        compcount.innerText=compScore
        
    }
}
