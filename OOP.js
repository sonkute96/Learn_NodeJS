

var person = { // person la 1 bien ma co kieu la 1 class
  ho : "Pham",
  ten: "Minh Son",
  sex: "nam",
  act : function(){
    console.log("hello world, toi ten la "+this.ho + " " + this.ten);
  }
}

person.act(); // act nhu 1 ham static


console.log(person["ten"]); // truy cap vao thuoc tinh cua class
