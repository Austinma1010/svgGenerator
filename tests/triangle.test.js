const shape = require('../lib/shapes')
const {Triangle} = shape;
describe('Triangle', () => {
    describe('getColor', () => {
        it('should return a string with given color', () => {
            const triangle = new Triangle();
            triangle.setColor('blue');
            expect(triangle.getColor()).toEqual('polygon points="150, 18 244, 182 56, 182" fill="blue"');
        })
    })

    describe('getText', () => {
        it('should return a string containing given 3 digit string', () => {
            const triangle = new Triangle();
            triangle.setText('ama');
            expect(triangle.getText()).toEqual('text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ama');
        })
    })
})