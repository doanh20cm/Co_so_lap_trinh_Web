function validateForm() {
    let x = document.forms["myForm"]["sdt"].value;
    let y = document.forms["myForm3"]["pass"].value;
    if (x == "" || y == "") {  
        alert("số điện thoại hoặc mật khẩu không được để trống");
        
        return false;
      }
        if(x != "" && y != ""){
        alert("đăng ký thành công");
        window.location.href = "home.html";
        return true;
      }
    }