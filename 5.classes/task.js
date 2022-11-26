class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this.state = 0;
        } else if (newState > 100) {
            this.state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library  extends PrintEditionItem {
    constructor (name) {
        super();
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (this.state > 30) {
            if (this.books === undefined) {
                this.books = [book];
            } else {
                this.books.push(book);
            }
        }
    }

    findBookBy(type, value) {
        const item = this.books.find(
            (book) => book[type] === value
        );
        return item || null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(
            (book) => book.name === bookName
        );
        return this.books.splice(index, 1)[0] || null;
    }
}




class Student {
    constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  setSubject (subjectName) {
    this.subject = subjectName;
  }

  getAverage() {
    let sum = 0;
    let count = 0;
    const arr = this.marks;
    Object.keys(arr).forEach(function(key){
        sum += arr[key].reduce((previous, current) => previous += current, 0);
        count += arr[key].length;
    });
    return sum / count;
  }

  getAverageBySubject(subject) {
    let sum = this.marks.subject.reduce((previous, current) => previous += current, 0);
    return sum / this.marks.subject.length;
  }

  addMark (mark, subject) {
    if (mark > 5 && mark < 1){
        console.log('Ошибка, оценка должна быть числом от 1 до 5')
    } else {
        if(this.marks === undefined){ 
            this.marks = {subject: [mark]}; 
        } else {
            this.marks.subject.push(mark); 
        }
    }
  }

  exclude (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}
  
  
  
  
  
  
  
  
  
  