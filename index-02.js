const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);


const minAge = ages[0];
const maxAge = ages[ages.length - 1];


const middle = Math.floor(ages.length / 2);
let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[middle - 1] + ages[middle]) / 2;
} else {
    medianAge = ages[middle];
}


const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;


const rangeOfAges = maxAge - minAge;


const minAverageDifference = Math.abs(minAge - averageAge);
const maxAverageDifference = Math.abs(maxAge - averageAge);

console.log('Sorted Ages:', ages);
console.log('Min Age:', minAge);
console.log('Max Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Range of Ages:', rangeOfAges);
console.log('Min - Average:', minAverageDifference);
console.log('Max - Average:', maxAverageDifference);
