var apple = {
  name: "apple",
  price: 1
};
var orange = {
  name: "orange",
  price: 2
};
var banana = {
  name: "banana",
  price: 1
};
var coconut = {
  name: "coconut",
  price: 3
};

var groceryItems = [];

groceryItems.splice(0, 0, apple, orange, banana, coconut);

var total = 0;
var tax = 0;
groceryItems.forEach(function(x) {
  console.log("Name: " + x.name);
  console.log("Price: " + x.price);
  total += x.price;
  tax += x.price * 0.06;
});

console.log("Total: " + total);
console.log("Tax: " + tax);
console.log("Price with Tax: " + (total + tax));
