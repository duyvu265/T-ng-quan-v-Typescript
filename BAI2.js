var arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = [0, 2, 3, 5, 7, 8, 9, 10];
var arr3 = [];
var i = 0;
while (i > arr1.length) {
    arr1.indexOf(arr2[i]);
    if (i != -1) {
        i++;
    }
    else {
        arr3.push(arr1[i]);
    }
}
