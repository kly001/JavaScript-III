/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global (Window) Binding: the value of 'this' will be the
        window/console object.
* 2. Implicit Binding: the object to the left of the dot when 
       when a function is called. 
* 3. New Binding: the specific instance of the object that is 
       created and returned by the constructor function.
* 4. Explicit Binding: 'this' is defined when the 'call' or 
      'apply' method is called.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayColor (color) {
    console.log(this);
    return color;
}
sayColor("magenta");


// Principle 2

// code example for Implicit Binding
const myLocation = {
    borough: "Queens",
    sayState: function(state) {
        console.log(`I live in ${this.borough} in the state of ${state}.`);
        console.log(this);
    }
};
myLocation.sayState("New York");
myLocation.sayState("Delaware");


// Principle 3

// code example for New Binding
function PizzaTopping(topping){
    this.crustType = "Thin crust";
    this.topping = topping;
    this.declare = function() {
        console.log(`${this.crustType} pizza tastes great with ${this.topping}. `) 
        console.log(this);
    };
}
const meat = new PizzaTopping("pepperoni");
const veggie = new PizzaTopping("spinach");
veggie.declare();
meat.declare();


// Principle 4

// code example for Explicit Binding

