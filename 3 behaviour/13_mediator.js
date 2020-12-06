class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, recipient) {
        this.room.send(message, this, recipient)
    }

    recieve(message, from) {
        console.log(`From: ${from.name} to: ${this.name} message: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this; //conect user to chat room
    }
    send(message, from, to) {
        if (to) {
            to.recieve(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
               if(this.users[key] !== from) {
                   this.users[key].recieve(message, from);
               }
            });
        }
    }
}

const nikita = new User('Nikita');
const masha = new User('Masha');
const monya = new User('Monya');

const room = new ChatRoom();

room.register(nikita);
room.register(masha);
room.register(monya);

nikita.send('Hello Masha', masha);
masha.send('Sup', nikita);
monya.send(`It's dinner time!`);