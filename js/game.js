//rock papper scissors game try your hands on it
//  alert("hello")
let hello = confirm("would you like to play a game ");
let choices =["rock","papper","scissors"];
let computer =choices[(Math.floor(Math.random()*choices.length))];
/* console.log(choices.length)
console.log(Math.floor(Math.random()*choices.length +1));
console.log(computer);
console.log(Math.floor(Math.random()*5)+1)
console.log(Math.floor(Math.random(choices)*3+1)); */

if(hello){
    let player1 =prompt("please enter: rock ,papper or scissors");
    console.log("the let play rock,paper,scissors!!");
    console.log("you entered "+"" + player1);
    console.log("computer used "+""+ computer);

    if(player1===computer){
        console.log("it's a tie");
    }
    else if(player1==="rock"){
        if(computer==="scissors"){
        console.log("player1 wins") }
        else{
            console.log("computer wins");
        }
    }
    else if(player1==="papper"){
        if(computer==="rock"){
        console.log("player1 wins") }
        else{
            console.log("computer wins");
        }
    }
    else if (player1==="scissors"){
        if(computer==="papper"){
        console.log("player1 wins") }
        else{
            console.log("computer wins");
        }
    }

   
  
}else{
    console.log("maybe next time")
}  

    
    ///rock papper scissors using switch case
/* confirm("want to play a game");
let player1 =prompt("enter rock , papper, or scissors");
let computer= "rock" ;

switch(player1){
    
    case computer :
    console.log("its a tie")
    break;

    case "rock":
        if(computer ==="scissors"){
            console.log("player1 wins")
        }else{
            console.log("computer wins")
        }
        break;
    case "papper":
        if(computer ==="rock"){
            console.log("player1 wins")
        }else{
            console.log("computer wins")
        }
        break;

      case "scissors":
        if(computer ==="papper"){
            console.log("player1 wins")
        }else{
            console.log("computer wins")
        }
        break;

        default:{
            console.log("maybe nexttime")
        }

} */

  
 
//