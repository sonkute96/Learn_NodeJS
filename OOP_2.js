

function KhoaHoc(ten,hocPhi){

  this.Ten = ten;

  this.HocPhi = hocPhi;
}

// khoa hoc co 1 hanh dong la mota
KhoaHoc.prototype.mota = function (){
  console.log("Hello " +this.Ten + " " + this.HocPhi);
}


var nodejs = new KhoaHoc("Lap trinh Node js", 200000);

nodejs.mota();
