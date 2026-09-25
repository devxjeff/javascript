/* let soup='chicken noodle soup'
let reply;
let customerIsbanned=true;
let crackers= true;

if(customerIsbanned){
    reply="no soup for you!";
}
else if(soup){
    reply = "here's your order of $(soup)";
}else{
    reply="sorry we're are out of $(soup)";
}
console.log(reply);

let scores=70;
let grade ;
 if(scores>=90){
    grade= "A";
 }
 else if(scores>=80){
    grade= "B"
 }
 else if(scores>=70){
    grade= "C"
 }
 else if(scores>=60){
    grade= "D"
 }
 else if(scores>=50){
    grade= "E"
 }
 else{
    if(scores>=49){
        grade= "IC";
    }
    else {
        grade= "FAIL"
    }
 }
 console.log(grade) */

 let playerone="rock";
 let computer="scissors";
let result;

 if(playerone===computer){
    result = "it's a tie";
 }
 else if(playerone==="papper"){
    if(computer==="scissors"){
        result="computer wins"
    }
    else{
        result="playerone wins";
    }
 }
 else if(playerone==="papper"){
    if(computer==="rock"){
        result="computer wins"
    }
    else{
        result="playerone wins";
    }
 }
 else if(playerone==="papper"){
    if(computer==="papper"){
        result="computer wins"
    }
    else{
        result="playerone wins";
    }
 }
 else if(playerone==="scissors"){
    if(computer==="scissors"){
        result="computer wins"
    }
    else{
        result="playerone wins";
    }
 }
 else if(playerone==="rock"){
    if(computer==="scissors"){
        result="computer wins"
    }
    else{
        result="playerone wins";
    }
 }
 else if(playerone==="rock"){
    if(computer==="papper"){
        result="computer wins"
    }
    else{
        result="playerone wins";
    }
 }
else{
  if(playerone==="rock"){
    if(computer==="scissors"){
        result="computer wins"
    }
    else{
        result="playerone wins";
    }  
}
}
 console.log(result)