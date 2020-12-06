//1-many dependency
class Subject {
    constructor() {
        this.observers =[];
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !==observer);
    }

    emit(action) {
        this.observers.forEach(obs => {
            obs.update(action);
        })
    }
}

class Observer {
    constructor(state = 1) {
        this.state = state;
        this.initialState = state;
    }
    update(action) {
        switch (action.type) {
            case 'INCREMENT' :
                this.state = ++this.state
                break
            case 'DECREMENT' :
                this.state = --this.state;
                break
            case 'ADD':
                this.state += action.payload
                break
            default:
                this.state = this.initialState
        }
    }
}

const stream$ = new Subject();

const obs1 = new Observer();
const obs2 = new Observer(77);

stream$.subscribe(obs1);
stream$.subscribe(obs2);

stream$.emit({type: 'INCREMENT'});
stream$.emit({type: 'DECREMENT'});
stream$.emit({type: 'ADD', payload: 10});


console.log(obs1.state);
console.log(obs2.state);