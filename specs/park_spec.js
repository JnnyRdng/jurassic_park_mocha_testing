const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {
    let tRex, dippy, raptor, park;
    beforeEach(function () {
        tRex = new Dinosaur("Tyrannosaurus Rex", "Carnivore", 50);
        dippy = new Dinosaur("Diplodicus", "Herbivore", 35);
        raptor = new Dinosaur("Raptor", "Carnivore", 45);
        park = new Park("Dennis Nedry's Ultimate Family Fun Time Experience", 2999);
    })

    it('should have a name', function () {
        const actual = park.name;
        const expected = "Dennis Nedry's Ultimate Family Fun Time Exeperience"
        assert.strictEqual(actual, expected);
    });

    it('should have a ticket price');

    it('should have a collection of dinosaurs');

    it('should be able to add a dinosaur to its collection');

    it('should be able to remove a dinosaur from its collection');

    it('should be able to find the dinosaur that attracts the most visitors');

    it('should be able to find all dinosaurs of a particular species');

    it('should be able to calculate the total number of visitors per day');

    it('should be able to calculate the total number of visitors per year');

    it('should be able to calculate total revenue for one year');

});
