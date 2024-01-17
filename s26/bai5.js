
let n = parseInt(prompt("Nhập số lượng phần tử trong mảng:"));
let vonglap = [];
for (let i = 0; i < n; i++) {
    let element = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
    vonglap.push(element);
}
vonglap.reverse();
console.log("Mảng sau khi đảo ngược:", vonglap);

