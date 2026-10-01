//rock papper scissors game try your hands on it
alert("hello")
let hello = confirm("would you like to play a game ");
let computer = "rock"


if(hello){
    let player1 =prompt("please enter: rock ,papper or scissors");
    console.log("the let play rock,paper,scissors!!");
    console.log("you entered "+"" + player1);

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
        

 
