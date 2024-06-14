type Shape = Circle | Rectangle;

type Circle = {
  readonly radius: number;
};

type Rectangle = {
  readonly width: number;
  readonly height: number;
};
const circle: Circle = {
  radius: 5,
};

const rectangle: Rectangle = {
  width: 3,
  height: 4,
};
const calculateArea = (shape: Shape) => 'radius' in shape ? Math.PI * shape.radius ** 2 : shape.width * shape.height;

console.log(calculateArea(circle)); // Output: Area of the circle: 78.53981633974483
console.log(calculateArea(rectangle)); // Output: Area of the rectangle: 12
