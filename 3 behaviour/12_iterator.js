class Iterator {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }
    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    return {
                        done: true,
                        value: void 0
                    }
                }
            }
        }
    }
}

function* generator(arr) {
    let index = 0;

    while(index < arr.length) {
        yield arr[index++];
    }
}

const iterator = new Iterator(['This', 'is', 'iterator']);

for (const val of iterator) {
    console.log('Value: ', val)
}

const gen = generator(['This', 'is', 'generator']);

for (const val of gen) {
    console.log('Value: ', val)
}
