import fetch from 'node-fetch'
setTimeout(() => console.log('Hello'), 10);

fetch('https://gorest.co.in/public/v2/users')
    .then(response => response.json())
    .then (data => console.log(data))

console.log('What soup');

