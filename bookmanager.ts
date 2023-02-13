import {Book} from "./TH7";

export class QL_sach {
    book: Book[] = [];

    constructor() {
    }

    add(book: Book): void {
        this.book.push(book);
    }

    getlist(): Book[] {
        return this.book;
    }

    delete(code: string, name: string): void {
        let indexdelete = this.timkiem(code);
        if (indexdelete != -1) {
            this.book.splice(indexdelete, 1);
        } else {
            throw new Error('delete error')
        }
    }

    update( code: string,name: string) {
        console.log(code)
        let indexup = this.timkiem(code);
        console.log(indexup)
        if (indexup != -1) {
            this.book[indexup].setname(name);
        } else {
            throw new Error('update error')
        }
    }

    timkiem(code: string) {
        let i = -1;
        this.book.forEach((book, index) => {
            if (book.code === code) {
                i = index;
            }
        })
        return i;
    }

}