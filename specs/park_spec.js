const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {
    let tRex, dippy, raptor, tRex2, park;
    beforeEach(function () {
        tRex = new Dinosaur("Tyrannosaurus Rex", "Carnivore", 50);
        tRex2 = new Dinosaur("Tyrannosaurus Rex", "Carnivore", 48);
        dippy = new Dinosaur("Diplodicus", "Herbivore", 35);
        raptor = new Dinosaur("Raptor", "Carnivore", 45);
        park = new Park("Dennis Nedry's Ultimate Family Fun Time Experience", 2999);
        park.dinosaurs.push(tRex, dippy);
    });

    it('should have a name', function () {
        const actual = park.name;
        const expected = "Dennis Nedry's Ultimate Family Fun Time Experience"
        assert.strictEqual(actual, expected);
    });

    it('should have a ticket price', function () {
        const actual = park.ticketPrice;
        assert.strictEqual(actual, 2999);
    });

    it('should have a collection of dinosaurs', function () {
        const actual = park.dinosaurs;
        assert.deepStrictEqual(actual, [tRex, dippy]);
    });

    it('should be able to add a dinosaur to its collection', function () {
        park.addDinosaur(raptor);
        const actual = park.dinosaurs;
        assert.deepStrictEqual(actual, [tRex, dippy, raptor]);
    });

    it('should be able to remove a dinosaur from its collection', function () {
        park.removeDinosaur(tRex);
        const actual = park.dinosaurs;
        assert.deepStrictEqual(actual, [dippy]);
    });

    it('should be able to find the dinosaur that attracts the most visitors', function () {
        const actual = park.bestDinosaur();
        assert.deepStrictEqual(actual, tRex);
    });

    it('should be able to find all dinosaurs of a particular species', function () {
        park.addDinosaur(tRex2);
        const actual = park.findBySpecies("Tyrannosaurus Rex");
        assert.deepStrictEqual(actual, [tRex, tRex2]);
    });

    it('should be able to calculate the total number of visitors per day', function () {
        const actual = park.totalVisitors();
        assert.strictEqual(actual, 85);
    });

    it('should be able to calculate the total number of visitors per year', function () {
        const actual = park.visitorsInAYear();
        assert.strictEqual(actual, 31025);
    });

    it('should be able to calculate total revenue for one year', function () {
        const actual = park.yearlyRevenue();
        assert.strictEqual(actual, 93043975)
    });

});
