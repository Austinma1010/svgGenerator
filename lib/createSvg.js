const shape = require('./shapes');
const {Circle, Triangle, Square} = shape

function generateSvg(data) {
    const {text, color, shape} = data
    if (shape == 'circle') {
        const circle = new Circle(text, color);
        svgColor = circle.getColor();
        svgText = circle.getText();

        const template = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${svgColor} />

<${svgText}</text>

</svg>`

return template;

    } 
    else if (shape == 'triangle') {
        const triangle = new Triangle(text, color);
        svgColor = triangle.getColor();
        svgText = triangle.getText();

        const template = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${svgColor} />

<${svgText}</text>

</svg>`

return template;

    }
    else if (shape == 'square') {
        const square = new Square(text, color);
        svgColor = square.getColor();
        svgText = square.getText();

        const template = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${svgColor} />

<${svgText}</text>

</svg>`

return template;

    }
}

module.exports = generateSvg;