class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(this.name, this.health, this.speed, this.strength)
    }
    drinkSake() {
        this.health += 10
    }
}
class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom() {
        this.drinkSake();
        console.log("Patience is a virtue, but never pay full price for late pizza.")

    }
}
// const ninja1 = new Ninja("Logan", 10, 2, 1)
// const ninja1 = new Ninja("Hyabusa", 10);
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();

const sensei1 = new Sensei("Chuck");
sensei1.speakWisdom();
sensei1.showStats();