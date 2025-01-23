const BALLS_COUNT = 12;
const WALL_THICKNESS = 0.01;
const SMALLEST_BALL_OUTER_DIAMETER = 0.5;

let totalVolume = 0;

for (let i = 0; i < BALLS_COUNT; i++) {
    let innerRadius = (SMALLEST_BALL_OUTER_DIAMETER / 2) + WALL_THICKNESS * (i - 1);
    let sphereVolume = 4 / 3 * Math.PI * Math.pow(innerRadius, 3);
    totalVolume += sphereVolume;
}

console.log('totalVolume :>> ', totalVolume);