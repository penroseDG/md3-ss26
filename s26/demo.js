// console.log(" Hello world ");

// let student1 = " Xuân Đức ";
// let student2 = " Thái Anh ";
// let student3 = " Đắc Sơn ";

// // khai báo 

// // Array construction function
// let numberList = new Array( 10, 20 , 30 , 40 , 50 );

// let randomList = [ true , false , 19 , 20 , " Đức cớp " , " Thái Anh ", []]

// let studentList = new Array( student1, student2 , student3  );

// console.log(" Danh sách sinh viên " , studentList);

// console.log(" Danh sách số numbers : " , numberList);
 
// console.log(" Danh csach ssii");

// let student = [    
//     " Dũng Hoàng Tử Long Biên"; 
//     " Đức Mèn Mén";
//     " Phúc Nem + Tử Vi";
//     " Linh xe ôm ";
//     " Fank xích lô";    
// ]
 
// console.log( ' DANH SACH STUDENT = ',student );


// // thuộc tính length của mảng - length - size 

// console.log(" danh sách số lượng phần tử của ",student);

 

//  //1. read 
//  // read one 
//   console.log( " xuân đức ăn ", foodList[2]);
// //  read all 
// for( let i = 0 ; i < foodList.length ; i++){
    //     // foodList[i] ---> foodList[0 -> 5]
    //     console.log(`Món ăn ${i}`, foodList[i]);
    // }
    //  for( let food of foodList){
        //     console.log(" Từng món ăn " , food );
        //  }
        
        // for( let index in foodList ){
//     console.log(`Mon an ${index}` ,foodList(index));
// }

            // // thêm đầu 
            // foodList.unshift(" Mắm tôm ");
            // console.log(" Danh sách đã được thêm mới : ", foodList );

            // // thêm cuối 
            // foodList.push(" Chè khoán ");
            // console.log(" Danh sách đã được thêm vào : ", foodList);

            // // thêm vào vị trí bất kì 
            // foodList.splice(2, 0 ,"BBh");
            // console.log(" danh sách đã được thêm mới : " ,foodList )  ;
            
let foodList = [
    " Thịt Chó ",//0 
    " Tiểu Hổ ",// 1
    " Pịa ",//2
    " Mèn Mén ",//3
    " Nem Chua ",//4
    " Phở Chua "  // - foodList.length- [5]
];

console.log(" Danh sách món ăn ", foodList );
// gán 
foodList[5] = "Bún chua";
console.log(" Danh sách foodList sau khi được cập nhật ", foodList );
// xóa đầu 
foodList.shift
console.log(" DANH SACH SAU KHI DC CAP NHAT : ", foodList );
// xoá cuối 
foodList.pop(" dah achs abxys ", foodList);
// xóa vị trí bất kì 
