const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
      dinosaur1 = new Dinosaur("velociraptor", "carnivore", 150);
      dinosaur2 = new Dinosaur("stegosaurus", "herbivore", 120);
      park = new Park('Jurassic Park', 100, [dinosaur1,dinosaur2]);
  })

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  })

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepEqual(actual, [dinosaur1, dinosaur2]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    dinosaur3 = new Dinosaur("pikachu", "berries", 3000);
    park.addDino(dinosaur3);
    const actual = park.dinosaurs;
    assert.deepEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
