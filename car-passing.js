const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35,
  },
];

const speed = 38;

const carPassing = (cars, speed) => {
  const passObject = {};
  passObject["time"] = Date.now();
  passObject["speed"] = speed;
  cars.push(passObject);
  return cars;
};

carPassing(cars, speed);
