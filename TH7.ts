  export class QLsach {
    code: number;
   name: string;

    constructor(code: number, name: string) {
        this.code = code;
        this.name = name;
    }
    getname(): string {
        return this.name;
    }
    setname(value: string):void {
        this.name = value;
    }

    getcode(): number {
        return this.code;
    }
}



