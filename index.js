class Cats {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

//create methods

eats() {
    console.log(`${this.name} eats catnip`);
}

plays() {
    console.log(`${this.name} is ${this.color} and plays alot`);
}
sleep() {
    console.log(`${this.name} is ${this.age} years old and sleeps alot`);
}
}
//instances
const cat1 = new Cats('Hero', 'tan', 3);
const cat2 = new Cats('Russian', 'blue-gray', 5);

console.log(cat1, cat2);

//invoke methods from both instances
cat1.eats();
cat1.plays();
cat1.sleep();

cat2.eats();
cat2.plays();
cat2.sleep();

//Pirates properties
class Pirate {
    constructor(name, age, weapon) {
        this.name = name;
        this.age = age;
        this.weapon = weapon;
    }


//Methods
steal() {console.log(`${this.name} loves to fight`);
}

sail() {
console.log(`${this.name} is ${this.age} sails alot at sea`);
}

fight() {
console.log(`${this.name} has ${this.weapon} at sea`);
}
}
//instances
const jollyRoger = [
    new Pirate ('Jack', 25, 'sword'),
    new Pirate ('Sparrow', 31, 'hook'),
    new Pirate ('John', 27, 'gunpowder')
]

const blackPearl = [
    new Pirate ('Parrot', 25, 'Knife'),
    new Pirate ('Hawk', 31, 'gun'),
    new Pirate ('Hook', 27, 'oar')  
]

jollyRoger.forEach((pirate) => {
    console.log(`name: ${pirate.name}, age:${pirate.age}, weapon:${pirate.weapon}`);

});

blackPearl.forEach((pirate) => {
    console.log(`name: ${pirate.name}, age:${pirate.age}, weapon:${pirate.weapon}`);

});