class OldCalc {
    operations(term1, term2, operation) {
        switch (operation) {
            case 'mult' : return term1 * term2;
            case 'div' : return  term1 / term2;
            default: return NaN;
        }
    }
}

class NewCalc {
    mult(term1, term2) {
        return term1 * term2;
    }
    div(term1, term2) {
        return term1 / term2;
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc();
    }
    operations(term1, term2, operation) {
        switch (operation) {
            case 'mult' : return this.calc.mult(term1, term2);
            case 'div' : return  this.calc.div(term1, term2);
            default: return NaN;
        }
    }
}
const oldCalc = new OldCalc();
console.log(oldCalc.operations(25, 5, 'div'))

const newCalc = new NewCalc();
console.log(newCalc.div(25, 5));

const calcAdapter = new CalcAdapter();
console.log(calcAdapter.operations(25, 5, 'div'));