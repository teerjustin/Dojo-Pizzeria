function pizzaOven(crustType, sauceType, cheeses, toppings){
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}
  
var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("hand tossed", "traditional", "mozzarella", ["mushroom", "sausage"]);
console.log(pizza3)

var pizza4 = pizzaOven("hand tossed", "traditional", "mozzarella", ["mushroom", "sausage", " onions", "basil"]);
console.log(pizza4)

var somePizza = {
  crustType: ["deep dish", "hand tossed"],
  sauceType: ["traditional", "marinara"],
  cheese: ["feta", "mozzarella"],
  toppings: ["mushroom", "sausage", "onions", "basil", "pepperoni", "sausage"]
}
console.log(somePizza)
console.log(somePizza.crustType)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomPizza(obj) {
var newObj = {};
newObj.crustType = obj.crustType[getRandomInt(2)];
newObj.sauceType = obj.sauceType[getRandomInt(2)];
newObj.cheese = obj.cheese[getRandomInt(2)];
newObj.toppings = obj.toppings[getRandomInt(2)];

//to confirm it works...
console.log("RANDOMPIZZA", newObj)
return newObj;
}

randomPizza(somePizza)