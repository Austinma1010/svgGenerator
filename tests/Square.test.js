const shape = require('../lib/shapes')
const {Square} = shape;
describe('Square', () => {
    describe('getColor', () => {
        it('should return a string with given color', () => {
            const square = new Square();
            square.setColor('blue');
            expect(square.getColor()).toEqual('rect x="100" y="60" width="100" height="100" stroke="black" fill="blue"');
        })
    })

    describe('getText', () => {
        it('should return a string containing given 3 digit string', () => {
            const square = new Square();
            square.setText('ama');
            expect(square.getText()).toEqual('text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ama');
        })
    })
})