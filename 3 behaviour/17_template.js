class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    responsibilities() {}
    work() {
        return `${this.name} is responsible for ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this.name} got paid ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    responsibilities() {
        return `frontend`;
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    responsibilities() {
        return `testing`;
    }
}

const dev = new Developer('Nikita', 150000);
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Tester('Masha', 100000);
console.log(tester.getPaid());
console.log(tester.work());