export class Book {
     code:string;
    name:string;

    constructor(code: string, name: string) {
        this.code = code;
        this.name = name;
    }

    getcode(): string {
        return this.code;
    }

    getname(): string {
        return this.name;
    }

    setname(name: string) {
        this.name = name;
    }
}

