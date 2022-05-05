class Ninja {
    constructor(name, health = 10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    
    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }
    
    showStats() {
        console.log(`Name:    ${this.name}`);
        console.log(`Health:  ${this.health}`);
        console.log(`Speed:   ${this.speed}`);
        console.log(`Stength: ${this.strength}`);
        return this;
    }
    
    drinkSake() {
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Nenji");
ninja1.sayName().showStats().drinkSake().showStats();



class Sensei extends Ninja{
    constructor(name, health , speed, strength)
    health = 200;
    wisdom = 10;
    speed= 10; 
    strength = 10;
    wisdom = 10;

    speakWisdom(){
        this.drinkSake(
            console.log("With great power comes great responsbility")
        )
        }

}

// class Ninja {
//     constructor(name, health = 10) {
//         //we can define the properties that every olympian will have upon creation here inside the constructor
//         this.name = name;
//         this.health = health;
//         this.speed = 3;
//         this.strength = 3;

//     }
//     sayName() {
//         console.log(this.name);
//         return this;
//     }
//     showStats() {
//         let stats =
//         console.log(`Ninja: ${this.name}`)
//         console.log (`Strength: ${this.strength}`)
//         console.log (`Speed: ${this.speed}`)
//         console.log (`Health: ${this.health}`)

//         console.log(stats)
//     }

//     drinkSake() {
//         console.log(`${this.name} drank sake.`);
//         this.health += 10;
//         return this;
//     }
// }

// const ninja = new Ninja("Nenji");
// ninja.sayName().showStats().drinkSake().showStats();
