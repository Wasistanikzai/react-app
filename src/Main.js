// function sum(number){
//     return number+number;
// }

// let sum=function(number){
//     return number+number
// }

// let sum = (number) => {
//     return number+number;
// }
// let sum =(number)=>number+number;

let allowAge=(age)=>{
    if(age>21){
        return "You are legally allow to drink";
    }else{
        return "Your Not allow to drink";
    }
}
console.log(allowAge(20));