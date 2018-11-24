class Hamburger {
    constructor (size, stuffing) {

        this.size = size;
        this.stuffing = [stuffing];
        this.topping = [];
    }
}

Hamburger.prototype.addTopping = function (newTopping) {
    let topping = this.topping;
    var result = topping.filter(item => item !== newTopping);
    result.push(newTopping);
    this.topping = result;
} 

Hamburger.prototype.countCost = function () {
    var cost = 0;
    for (let key in this) {
        if (this[key].price){
            cost += this[key].price;
        } else if (Array.isArray(this[key])) {
            this[key].forEach(function(item){
                if (item.price) {
                    cost += item.price;
                }
            })
        }
    }
    return cost;
}

Hamburger.prototype.countEnergy = function () {
    var energySum = 0;
    for (let key in this) {
        if (this[key].energy){
            energySum += this[key].energy;
        } else if (Array.isArray(this[key])) {
            this[key].forEach(function(item){
                if (item.energy) {
                    energySum += item.energy;
                }
            })
        }
    }
    return energySum;
}

var parameters = {
       
   size: {
       small: {price: 50, energy: 20}, 
       large: {price: 100, energy: 40}
    },

    stuffing: {
        cheese: {price: 10, energy: 20},
        salad: {price: 20, energy: 5},
        potato: {price: 15, energy: 10}
    },

    topping: {
        mayo: {price: 20, energy: 5},
        spice: {price: 15, energy: 0}
    }
}

var hamb1 = new Hamburger(parameters.size.large, parameters.stuffing.cheese);
/*hamb1.addTopping(parameters.topping.mayo);
hamb1.addTopping(parameters.topping.spice); 
hamb1.addTopping(parameters.topping.spice); 
hamb1.addTopping(parameters.topping.spice); 
hamb1.addTopping(parameters.topping.spice); 
hamb1.addTopping(parameters.topping.spice); */

var totCost = hamb1.countCost();
var totEn = hamb1.countEnergy();
var costPar = document.getElementById("cost");
costPar.innerHTML = "Total cost: " + totCost;
var energyPar = document.getElementById("energy");
energyPar.innerHTML = "Total energy: " + totEn;

