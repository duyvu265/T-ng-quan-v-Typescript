let arr1: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2: number[] = [0, 2, 3, 5, 7, 8, 9, 10];
let arr3: number[] = [];
let i: number = 0;
while (i > arr1.length) {
    arr1.indexOf(arr2[i]);
    if ( arr1.indexOf(arr2[i])!= -1) {
        i++;
    } else {
        arr3.push(arr1[i])
    }

}
console.log(arr3);