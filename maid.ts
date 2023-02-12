import {booklist} from "./TH6";

let book: booklist[] = [];
book.push(new booklist("người cầm cái", "nguyễn văn A", true));
book.push(new booklist("làm giầu từ 2 bàn tay trắng", "nguyễn văn B", false));
book.push(new booklist("Tử tù", "nguyễn văn C", true));

book.forEach((a) => {
    console.log(a);
})