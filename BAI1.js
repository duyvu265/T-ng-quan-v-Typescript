// let n:number;
// let numbers: number[] = [];
// function hienthi() {
//
//     if (n==0){
//         console.log(n +"khong phai la so fibonaci");
//     }else if (n==1){
//         console.log(n+"la so fibonaci");
//     }else if (n==2){
//         console.log(n+"la so fibonaci");
//     }else if (n>2){
//
//
//     }
//
// }
function fibonacci(num) {
    var a = 1, b = 0, temp;
    while (num > 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    console.log(b);
}
var num = 50;
