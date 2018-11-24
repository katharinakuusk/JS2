class Hamburger {
    constructor (size, stuffing) {

        this.size = size;
        this.stuffing = [stuffing];
    }
}

/*Hamburger.prototype.addStuffing = function (newStuffing) {
    let arr = this.stuffing;
    let newArr = arr.concat(newStuffing); 
    let newSet = new Set ([arr]);
    this.stuffing = newSet;
} */

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
var t = hamb1.countCost();
var d = hamb1.countEnergy();
/*hamb1.addStuffing(parameters.stuffing.salad);
hamb1.addStuffing(parameters.stuffing.potato); */