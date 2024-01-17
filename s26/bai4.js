let a = prompt("Nhập số a");
let b = prompt("Nhập số b");
let array = []; 
let n = 0;

for (let i = 1; i <= a; i++) {
    if (i % b == 0) {
        array[n] = i;
        n++;
    }
}

for (let i = 1; i <= b; i++) {
    if (i % a == 0) {
        array[n] = i;
        n++;
    }
}

if (n == 0) {
    console.log("Không có phần tử nào thỏa mãn");
} else {
    console.log("Các phần tử thỏa mãn là:");
    for (let i = 0; i < n; i++) {
        console.log(array[i]);
    }
}
