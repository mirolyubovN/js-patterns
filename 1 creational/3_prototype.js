const car = {
    wheels: 4,
    init() {
        console.log(`I have ${this.wheels} wheels. My owner is ${this.owner}`);
    }
};

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Nikita'
    }
});

console.log(carWithOwner.__proto__ === car);
carWithOwner.init()