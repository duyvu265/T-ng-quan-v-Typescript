let n: number;
let numbers: number[] = [];
let m:number=0;
function hienthi() {

    if (n == 0) {
        console.log(n + "khong phai la so fibonaci");
    } else if (n == 1) {
        console.log(n + "la so fibonaci");
    } else if (n == 2) {
        console.log(n + "la so fibonaci");
    } else if (n > 2) {
        function fibonacci(num) {
            let a = 1, b = 0, tong;

            while (num > 0) {
                tong = a;
                a = a + b;
                b = tong;
                num--;
            }numbers.push(a+b);
            console.log(numbers)
        }
        fibonacci(n);
    }
    for (let i = 0; i < numbers.length ; i++) {
        m+=numbers[i];
    }
    console.log(m)

}

hienthi()

