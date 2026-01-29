const car = {
    brand: "BMW",
    color: "Black",
    price: 14500000,
    hybrid: true,
    range: function(){
        console.log("this is function");
    }
}
// console.log(car.color); //->Dot notation. output single property value. Most usefull


// const bracket = car['price'];
// console.log(bracket); //->bracket notaion, output single property value.


//update property value
// car.color = "Yellow"; //->dot notation
// console.log(car.color);

// upcolor = car['color']="red"; //->bracket notation
// console.log(upcolor);

// const keys = Object.keys(car); //find all property
// console.log(keys);

// const nae = Object.values(car)//find all value from a object
// console.log(nae)

// const keys = Object.values(car);
// console.log(keys)
const key = Object.keys(car)
for(const newVariable of key){
    console.log(newVariable, ":" , car[key]);
}