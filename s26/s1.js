                                                                      
let mang = [1, 'abc', 3, 'def', 5, 6, 'ghi'];
let tonTaiSoNguyen = false; 
for (let i = 0; i < mang.length; i++) {
    if (Number.isInteger(mang[i])) {
        console.log('Số nguyên trong mảng:', mang[i]);
        tonTaiSoNguyen = true;                         
    }
}
if (!tonTaiSoNguyen) {
    console.log('Trong mảng không tồn tại số nguyên');
}          