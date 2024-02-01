const shape = require('../lib/shapes')
const {Circle} = shape;
describe('Circle', () => {
    describe('getColor', () => {
        it('should return a string with given color', () => {
            const circle = new Circle();
            circle.setColor('blue');
            expect(circle.getColor()).toEqual('circle cx="150" cy="100" r="80" fill="blue"');
        })
    })

    describe('getText', () => {
        it('should return a string containing given 3 digit string', () => {
            const circle = new Circle();
            circle.setText('ama');
            expect(circle.getText()).toEqual('text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ama');
        })
    })
})