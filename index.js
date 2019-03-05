const lines = require('./lines');

const getRandomLine = () => lines[Math.floor(Math.random() * (lines.length - 1))];

console.log(getRandomLine());
