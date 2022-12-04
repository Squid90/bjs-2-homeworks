function parseCount (number) {
    let element = Number.parseInt(number);
        if (Object.is(element, NaN) === true) {
            throw new Error("Невалидное значение");
        } 
    return element;
}

function validateCount (number) {
    try {
        return parseCount (number);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;

        if(this.side1 + this.side2 < this.side3 || this.side2 + this.side3 < this.side1 || this.side1 + this.side3 < this.side2) {
            throw new Error("Треугольник с такими сторонами не существует");
        };
    }
    
    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    getArea() {
        let semiPerimetr = this.getPerimeter() / 2;
        let area = Math.sqrt(semiPerimetr * (semiPerimetr - this.side1) * (semiPerimetr - this.side2) * (semiPerimetr - this.side3));
        return +area.toFixed(3);
    }
}


function getTriangle (side1, side2, side3) {

    const triangle = {
        getArea() { 
            return 'Ошибка! Треугольник не существует';
        },
        getPerimeter() { 
            return 'Ошибка! Треугольник не существует';
        }
    };


    try {
        return new Triangle(side1, side2, side3);
    } catch (error) {
        return triangle;
    }
}