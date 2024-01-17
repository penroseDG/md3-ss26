let a = [1001, 1010, 1011, 0, 1, 10, 101];
let b = parseInt(prompt("Nhập giá trị cần tìm: "));

let result = a.indexOf(b);

if (result === -1) {
  console.log("Phần tử không tồn tại");
} else {
  console.log(`Vị trí của phần tử trong mảng là: ${result}`);
}
