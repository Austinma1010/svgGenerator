class Circle {
    constructor(text, color) {
        this.text = text;
        this.color = color;
        
    }
    getColor() {
        return `circle cx="150" cy="100" r="80" fill="${this.color}"`
    }
   
    getText() {
        return `text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}`
    }

}

class Triangle {
    constructor(text, color) {
        this.text = text;
        this.color = color;
        
    }
    getColor() {
        return `polygon points="150, 18 244, 182 56, 182" fill="${this.color}" `
    }
   
    getText() {
        return `text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}`

    }
}

class Square {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }

    getColor() {
        return `rect x="100" y="60" width="100" height="100" stroke="black" fill="${this.color}"`
    }
   
    getText() {
        return `text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}`

    }
}

module.exports = {
    Circle,
    Triangle,
    Square
};