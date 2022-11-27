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
    constructor(cathet1, cathet2, hypotenuse) {
        this.cathet1 = cathet1;
        this.cathet2 = cathet2;
        this.hypotenuse = hypotenuse;
    }

    checkTriangle() {
       if(this.cathet1 + this.cathet2 < this.hypotenuse) {
        throw new Error("Такого треугольника не существует");
       }     
    }

    validateTriangle() {
        try {
            return checkTriangle();
        } catch (error) {
            return error;
        }
    }

    getPerimeter() {
        let perimetr = this.cathet1 + this.cathet2 + this.hypotenuse;
        return +perimetr.toFixed(3);
    }

    getArea() {
        let semiPerimetr = this.getPerimeter() / 2;
        let area = Math.sqrt(semiPerimetr * (semiPerimetr - this.cathet1) * (semiPerimetr - this.cathet2) * (semiPerimetr - this.hypotenuse));
        return +area.toFixed(3);
    }
}

function getTriangle (cathet1, cathet2, hypotenuse) {
    try {
         return new Triangle (cathet1, cathet2, hypotenuse);
    } catch (error) {
        
        throw new Error("Ошибка! Треугольник не существует");
    }
}