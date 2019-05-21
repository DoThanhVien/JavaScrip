// // let user = {};
// // user.name = "john";
// // user.surname = "Smith";
// // user.name = "Pete";
// // delete user.name;
// // alert(`${user.name}` +` `+`${user.surname}`);
// ///----Bài 1----///
// // let salaries = {
// //     John: 100,
// //     Ann: 160,
// //     Pete: 130
// //   };
// //   let sum = 0;
// // function isEmpty(obj) {
// //     for (let key in obj) {   
// //       return false;
// //     }
// //     return true;
// // }

// // if(isEmpty (salaries)) {
// //    alert(`Kết quả là ${sum}`);
// // }else {
// //     for(let luong in salaries) {
// //         sum = sum + salaries[luong];
// //     }
// //     alert(`Kết quả là ${sum}`);
// //}
// ///----Bài 2----///
// // let menu = {
// //     width: 200,
// //     height: 300,
// //     title: "My menu"
// //   };

// // function multiplyNumeric(object ) {
// //     for(let type in object) {
// //         if(typeof object [type] == 'number') {
// //             object[type] = object[type] * 2;
// //             alert(object[type]);
// //         }else {
// //         alert(object [type] );
// //         }
// //     }
// // }
// // multiplyNumeric(menu);

// ///----mảng--//
 
// let nhanVien = {
//   name : "vien",
//   luong  : 3000
// };

// let nhanVien1 = {
//   name : "tinh",
//   luong : 4000
// };

// let nhanVien2 = {
//   name : "duy",
//   luong: 5000
// };


// // let tgLuong = 0;

// // for(let i = 0; i < arrNV.length; i++) {
// //     tgLuong = tgLuong + arrNV[i].luong;
// //     console.log(tgLuong);
// // }
function addNv(ht,luong){
  let nhanVien3={}
  nhanVien3.name=ht;
  nhanVien3.luong=luong;
};
 
// let arrNV = [nhanVien,nhanVien1,nhanVien2];
// arrNV.splice(2,0,nhanVien3)
// console.log(arrNV);
// // function deleteArr(arr=[]) {
// //   let viTri =prompt("nhập Vị Trí cần xóa");
// //   for(let i = 0 ; i < arr.length ; i++) {
// //     if(viTri == i){
// //       arr.splice(i,viTri);
// //     }
// //     console.log(arrNV[i]);
// //   }
// // }
// // deleteArr(arrNV);