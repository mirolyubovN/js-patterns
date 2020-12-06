class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `https://${this.ip}:${this.port}`;
    }
}
function aws(server) { //decorator
    server.isAws = true;
    server.awsInfo = function() {
        return server.url;
    }
    return server;
}
function azure(server) {
    server.isAzure = true;
    server.port += 500;
    return server;
}
const s1 = aws(new Server('12.34.56.78', 7777));
console.log(s1.awsInfo());

const s2 = azure(new Server('34.56.78.90', 8080));
console.log(s2.port);