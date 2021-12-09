const calculateRectangleArea = (length, width) => {
  const rectangleArea = length * width;
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return rectangleArea;
  }
};
const calculateTriangleArea = (base, height) => {
  const triangleArea = (base * height) / 2;
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    return triangleArea;
  }
};
const calculateCircleArea = (radius) => {
  const circleArea = Math.pow(radius, 2) * 3.14159265;
  if (radius < 0) {
    return undefined;
  } else {
    return circleArea;
  }
};
