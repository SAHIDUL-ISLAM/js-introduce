/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let Burger = 500;
let cokeprice;
if(Burger>500){
    cokeprice=0;
    console.log("Congrats! You got a free coke");
}else{
    cokeprice =30;
    console.log("You have to pay coke price");
}
let payable = Burger + cokeprice;
console.log("Now, You need to pay total: ", payable, "TK")