const numberOfBalls = 12;
const thicknessOfWalls = 0.01;
const smallestBallOuterDiameter = 0.5;

let totalVolume = 0;

for (let i = 0; i < numberOfBalls; i++) {
    let innerRadius = (smallestBallOuterDiameter / 2) + thicknessOfWalls * (i - 1);
    let sphereVolume = 4 / 3 * Math.PI * innerRadius;
    totalVolume += sphereVolume;
}

console.log('totalVolume :>> ', totalVolume);