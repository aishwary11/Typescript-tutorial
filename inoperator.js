var calculateArea = function (shape) {
    if ('radius' in shape) {
        // shape is narrowed down to Circle
        var area = Math.PI * Math.pow(shape.radius, 2);
        console.log('Area of the circle:', area);
    }
    else {
        // shape is narrowed down to Rectangle
        var area = shape.width * shape.height;
        console.log('Area of the rectangle:', area);
    }
};
var circle = {
    type: 'circle',
    radius: 5,
};
var rectangle = {
    type: 'rectangle',
    width: 3,
    height: 4,
};
calculateArea(circle); // Output: Area of the circle: 78.53981633974483
calculateArea(rectangle); // Output: Area of the rectangle: 12
