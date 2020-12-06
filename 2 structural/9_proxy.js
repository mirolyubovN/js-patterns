function networkFetch(url) {
    return `${url} - server response`;
}

const cache = new Set();

const proxyFetch = new Proxy(networkFetch, {
    apply(target, thisArg, argArray) {
        const url = argArray[0];
        if(cache.has(url)) {
            return `${url} - cached response`
        } else {
            cache.add(url);
            return Reflect.apply(target, this.arg, argArray);
        }
    }
});

console.log(proxyFetch('google.com'));
console.log(proxyFetch('react.io'));
console.log(proxyFetch('google.com'));
