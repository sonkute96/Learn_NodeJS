

// khai bao function trong Node js

// co 3 kieu khai bao

// kieu 1

function tinhTong(a,b){
  return a + b;
}

var sum = tinhTong(10,6);

console.log(sum);


// -------- cach 2


function hello(){
  console.log("welcome to KhoaPham.vn");
}


function goiHam(fn){


// fn la tham so

  fn();  // fn co () la fn co hanh dong nao do


}

// ------- cach 3

var tong = function (){
  console.log("Lap trinh node js");
}

// tong la 1 bien = 1 cai function

// goi ham tong bang cach them ()


tong();
