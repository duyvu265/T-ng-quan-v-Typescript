import {Book} from "./TH7";
import {QL_sach} from "./bookmanager";

let book1 = new Book('B001','Lập trình Java');
let book2 = new Book('B002','Lập trình PHP');
let book3 = new Book('B003','Lập trình TypeScript');
let bookmanager=new QL_sach();
bookmanager.add(book1);
bookmanager.add(book2);
bookmanager.add(book3);

bookmanager.update('B001',"sach1");
console.log(bookmanager.getlist())
