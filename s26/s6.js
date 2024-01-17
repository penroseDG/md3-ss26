let mang = [-2, 5, -8, 10, -3, 7, 1];
let n = mang.length;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (mang[i] > mang[j]) {
            let d = mang[i];
            mang[i] = mang[j];
            mang[j] = d;
        }
    }
}
console.log("Mảng sau khi di chuyển các phần tử âm lên đầu và dương về cuối:");
console.log(mang);
