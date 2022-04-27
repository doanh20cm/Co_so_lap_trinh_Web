function validateForm() {
    let x = document.forms["myForm"]["sdt"].value;
    let y = document.forms["myForm2"]["pass"].value;
    if (x == "" || y == "") {  
      alert("số điện thoại/email hoặc mật khẩu không được để trống");
      
      return false;

    }
     if(x == "admin123@gmail.com" && y == "admin"){
      alert("đăng nhập thành công");
      window.location.href = "home.html";
      return true;
    }
    else{
        alert("đăng nhập thất bại");
        return false;
        }
  }
 