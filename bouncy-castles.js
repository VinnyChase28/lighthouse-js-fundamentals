// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  let volume = (4 / 3) * PI * Math.pow(radius, 3);
  return volume;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let volume = (1 / 3) * (PI * radius * radius * height);
  return volume;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let volume = height * width * depth;
  return volume;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let sum = 0;
  for (let i = 0; i < solids.length; i++) {
    if (solids[i].type === "sphere") {
      sum += (4 / 3) * PI * Math.pow(solids[i].radius, 3);
    }
    if (solids[i].type === "cone") {
      sum +=
        (1 / 3) * (PI * solids[i].radius * solids[i].radius * solids[i].height);
    }
  }
  return sum;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
