type Circle = {
  type: 'circle';
  radius: number;
};

type Rectangle = {
  type: 'rectangle';
  width: number;
  height: number;
};
const calculateArea = (shape: Circle | Rectangle) => {
  if ('radius' in shape) {
    // shape is narrowed down to Circle
    const area = Math.PI * shape.radius ** 2;
    console.log('Area of the circle:', area);
  } else {
    // shape is narrowed down to Rectangle
    const area = shape.width * shape.height;
    console.log('Area of the rectangle:', area);
  }
};

const circle: Circle = {
  type: 'circle',
  radius: 5,
};

const rectangle: Rectangle = {
  type: 'rectangle',
  width: 3,
  height: 4,
};

calculateArea(circle); // Output: Area of the circle: 78.53981633974483
calculateArea(rectangle); // Output: Area of the rectangle: 12
