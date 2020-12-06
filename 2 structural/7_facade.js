class Complaints {
    constructor() {
        this.complaints = [];
    }
    reply(complaint) {

    }
    add(complaint) {
        this.complaints.push(complaint);
        return this.reply(complaint);
    }
}

class ProductComplains extends Complaints {
    reply({id, customer, details}) {
        return `Product: ${id}: ${customer} (${details})`;
    }
}
class ServiceComplains extends Complaints {
    reply({id, customer, details}) {
        return `Service: ${id}: ${customer} (${details})`;
    }
}

class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now();
        let complaint;

        switch (type) {
            case 'Product':  {
                complaint = new ProductComplains();
                break;
            }
            case 'Service':  {
                complaint = new ServiceComplains();
                break;
            }
        }
        return complaint.add({id, customer, details});
    }
}

const registry = new ComplaintRegistry();

console.log(registry.register('Nikita', 'Service', 'Problems with accessibility'));
console.log(registry.register('Masha', 'Product', 'Tastes bad'));