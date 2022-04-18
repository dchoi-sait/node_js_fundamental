const url = require('url');

const mUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(mUrl.href);

// Host (root domain)
console.log(mUrl.host);

// Hostname
console.log(mUrl.hostname);

// Pathname
console.log(mUrl.pathname);

//Serialzied query
console.log(mUrl.search);

// Params object
console.log(mUrl.searchParams);

// Add param
mUrl.searchParams.append('abc', '123');
console.log(mUrl.searchParams);

//loop through params
mUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));