class MySum {
    constructor(initialValue = 77) {
        this.sum = initialValue;
    }
    add(value) {
        this.sum += value;
        return this;
    }
}

const sum1 = new MySum();
console.log(sum1.add(3).add(10).add(9).sum);