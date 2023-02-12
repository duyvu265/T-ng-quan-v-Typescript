import {QLsach} from "./TH7";

export class bookmanager {
    book: QLsach[] = [];

    constructor() {
    }

    add(book: QLsach): void {
        this.book.push(book);
    }
    getlist(): QLsach[]{
     return this.book
    }
    detele(code:number):void{
        let vitrixoa=this.timkiem(code);
        if (vitrixoa!=-1){
            this.book.splice(vitrixoa,1)
        }else {
            console.log("lỗi");
        }
    }update(code:number,name:string){
        let vitriup =this.timkiem(code);
        if (vitriup !=-1){
            this.book[vitriup].setname(name);
        }else {
            console.log("lỗi");
        }
    }timkiem(code:number){
        let a=-1;
        this.book.forEach((book,vitri)=>{
            if (book.code===code){
                a=vitri;
            }return a
        })
    }
}

