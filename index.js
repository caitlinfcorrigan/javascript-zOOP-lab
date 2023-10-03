console.log("zoop! 🦄")

class Animal {
    // Properties
    constructor(name, species, age, gender){
        this.name = name;
        this.species = species;
        this. age = age;
        this.gender = gender;
    }
    // Methods
    describe = function() {
        console.log(this);
    }
    feed = function() {
        return console.log(`${this.name} is eating`);
    }
    makeSound = function() {
        console.log(`${this.name} is making a sound`)
    }
    move = function(){
        console.log(`${this.name} is moving`)
    }
}

const testAnimal = new Animal("myFirstAnimal", "Cat", 5, "male");
const testAnimal2 = new Animal("secondAnimal", "Cat", 5, "male");
// testAnimal.describe()
// testAnimal.feed()
// testAnimal.makeSound()
// testAnimal.move()

// Mammal subclass
class Mammal extends Animal {
    constructor(name, species, age, gender, furColor) {
        super(name, species, age, gender)
        this.furColor = furColor;
    }
    feed = function() {
        return console.log(`${this.name} is drinking milk`)
    }
    makeSound = function() {
        console.log(`${this.name} is growling`)
    }
    move = function(){
        console.log(`${this.name} is walking`)
    }
}

const lion = new Mammal("Simba", "Lion", 5, "male", "golden");
// lion.describe()
// lion.feed()
// lion.makeSound()
// lion.move()

// Class of Zoo
class Zoo {
    // Pass in an array of animals to the Zoo class when instantiating
    constructor(animals){
        this.animals = animals;
    }
    addAnimal = function(animals){
        this.animals.push(animals);
    }
    displayAnimals = function(){
        this.animals.forEach(function(animal){
            console.log(animal)
        })
    }
    feedAnimals = function() {
        this.animals.forEach(function(animal){
            // Printing feed() and undefined result for Animals (not mammals)
            animal.feed();
            
        })
    }
    listenToAnimals = function() {
        this.animals.forEach(function(animal){
            animal.makeSound();
        })
    }
    watchAnimals = function(){
       this.animals.forEach(function(animal){
        animal.move();
       }) 
    }
}
const animalArray = [testAnimal,testAnimal2]
const myZoo = new Zoo(animalArray)
myZoo.addAnimal(lion)
// myZoo.displayAnimals()
myZoo.feedAnimals()
myZoo.listenToAnimals()
myZoo.watchAnimals()
