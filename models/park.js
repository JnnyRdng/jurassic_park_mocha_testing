const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur) {
    const dinosaursToKeep = [];
    for (let dino of this.dinosaurs) {
        if (dino !== dinosaur) {
            dinosaursToKeep.push(dino);
        }
    }
    this.dinosaurs = dinosaursToKeep;
}

Park.prototype.bestDinosaur = function () {
    let bestDinosaur;
    let bestVisitors = 0;
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > bestVisitors) {
            bestDinosaur = dinosaur;
            bestVisitors = dinosaur.guestsAttractedPerDay;
        }
    }
    return bestDinosaur;
}

Park.prototype.findBySpecies = function (species) {
    const found = [];
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            found.push(dinosaur);
        }
    }
    return found;
}

Park.prototype.totalDailyVisitors = function () {
    let total = 0;
    for (let dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
    }
    return total;
}

Park.prototype.visitorsInAYear = function () {
    return this.totalDailyVisitors() * 365;
}

Park.prototype.yearlyRevenue = function () {
    return this.visitorsInAYear() * this.ticketPrice;
}

Park.prototype.removeDinosaursBySpecies = function (species) {
    const toRemove = this.findBySpecies(species);
    for (let dinosaur of toRemove) {
        this.removeDinosaur(dinosaur);
    }
}

Park.prototype.dietTypesOfDinosaurs = function () {
    const dietTypes = { Carnivore: 0, Herbivore: 0, Omnivore: 0 };
    for (let dinosaur of this.dinosaurs) {
        dietTypes[dinosaur.diet]++;
    }
    return dietTypes;
}

module.exports = Park;