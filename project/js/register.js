/* function tạo id */
function uuid() {
    return Math.floor(Math.random()*734738483784);
}
/* 

    TẠO FUNCTION ĐĂNG KÍ    
 */
let users = JSON.parse(localStorage.getItem("users"))||[];
function register() {
  
    let mail=document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

   let obj={
    email:mail,
    name:name,
    password: password,
    id:uuid(),
    cart:[],
   }
   let check= users.filter((item)=>{
    return item.email==mail
   })
   if(check.length==0){
    // tức là tài khoản chưa được đăng kí
    // trước khi push phải kiểm tra xem password có trùng confirm hay không
       if(confirmPassword  != password){
        // alert("mật khẩu không khớp!")
        document.getElementsByClassName("error")[0].style.display="block";
       }else{
           document.getElementsByClassName("error")[0].style.display = "none";
           users.push(obj);
           localStorage.setItem("users", JSON.stringify(users));
           //khi đăng kí thành công chuyển sang trang đăng nhập
           window.location.href = "../pages/login.html"
       }
   }else{
    alert("tài khoản đã tồn tại!")
   }
}
/* let arr=[4,5,6];
let check=arr.filter((item)=>{
    return item==44
})
console.log(check); */