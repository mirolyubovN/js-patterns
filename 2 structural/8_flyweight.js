class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }
    create(model, price) {
     const candidate = this.getCar(model);

     if (candidate) {
         return candidate;
     } else {
         const newCar = new Car(model, price);

         this.cars.push(newCar);
         return newCar;
     }
    }
    getCar(model) {
        return this.cars.find(car => car.model === model);
    }
}

const factory = new CarFactory();

const tesla3 = factory.create('Tesla', 40000);
console.log(tesla3);

const teslaS = factory.create('Tesla', 90000);
console.log(teslaS);

console.log(tesla3 === teslaS); // tesla was cached