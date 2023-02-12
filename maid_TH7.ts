import {QLsach} from "./TH7";
import {bookmanager} from "./bookmanager";

let book1 = new QLsach(123, "sach1");
let book2 = new QLsach(1234, "sach2");
let book3 = new QLsach(12345, "sach1");
let book4 = new QLsach(123456, "sach1");
let booknamager1 = new bookmanager();
booknamager1.add(book1);
booknamager1.add(book2);
booknamager1.add(book3);
booknamager1.add(book4);
booknamager1.update(1234566,"sach5");