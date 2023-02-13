let arr1: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2: number[] = [0, 2, 3, 5, 7, 8, 9, 10];
let arr3: number[] = [];
let i: number = 0;
while (i <= 10) {
    arr1.indexOf(i);
    if ( arr2.indexOf(i)== -1) {
        arr3.push(i);
    }
        i++;
}
console.log(arr3);