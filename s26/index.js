// Cách 1: Array literal
const cources = ["HTML", 1, null, NaN, underfine];

console.log(cources);

// Cách 2: Dùng đối tượng Array
const array = new Array("HTML", "CSS");
console.log(array);

// Kiểm tra độ dài của mảng
const arrayLength = cources.length;
console.log("Độ dài của mảng: ", arrayLength);

// Truy xuất vào các phần tử của mảng
console.log(cources[1]);

// Lặp qua các phần tử của mảng
for (let i = 0; i < cources.length; i++) {
    // i tượng trưng cho index (vị trí)
    console.log(cources[i]);
}

// Một số công thức làm việc với mảng
// 1. Thêm phần tử vào cuối mảng
cources.push("Javascript");
console.log("Mảng sau khi push: ", cources);

// 2. Xóa phần tử ở cuối mảng
const itemDelete = cources.pop();
console.log("Phần tử vừa xóa: ", itemDelete);
console,log("Mảng sau khi pop: ", cources);

// 3. Thêm phần tử ở đầu mảng
cources.unshift("PHP");
console.log("Mảng sau khi unshift: ", cources);

// 4. Xóa phần tử đầu mảng
const itemDelete1 = cources.shift();
console.log("Phần tử vừa xóa: ", itemDelete1);
console.log("Mảng sau khi shift: ", cources);

// 5. Chuyển đổi mảng thành chuỗi
const arrayConvertoString = cources.toString();
console.log("Mảng sau khi toString: ", arrayConvertoString);

// 6. Chuyển đôi mảng thành chuỗi join()
const newArray = array.join("-");
console.log("Mảng sau khi join: ", newArray);
