//user input
/* alert("hello world"); */
/* confirm("ok === true\ncancle ===false"); */
/* let myBoolean = confirm("ok === true\ncancle ===false");
console.log(myBoolean); */

let name = prompt ("please enter your name: ");
/* console.log(name); */

//null = false /zero /undefined/ boolean false
// to check for null we use the nullish koleskian operator
/* console.log(name ?? "you did'nt enter your name."); */
if (name){
    console.log(name);
}else{
   console.log( "you did'nt enter your name")
}