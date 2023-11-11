const { mean } = require('./notation');

const scores = [85, 90, 92, 88, 95];
const averageScore = mean(scores);

console.log(`Average Score: ${averageScore}`);
