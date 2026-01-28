const car = {
    brand: "BMW",
    color: "Black",
    price: 14500000,
    hybrid: true,
    range: function(){
        console.log("this is function");
    }
}
console.log(car.color); //Dot notation. output single property value. Most usefull


const bracket = car['price'];
console.log(bracket); //bracket notaion, output single property value.


//update property value
car.color = "Yellow"; //dot notation
console.log(car.color);

upcolor = car['color']="red";
console.log(upcolor);