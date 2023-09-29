/* function đăng nhập */
function login() {
    let users=JSON.parse(localStorage.getItem("users"))||[];
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    for (let i = 0; i < users.length; i++) {
        if(users[i].email==email && users[i].password==password){
            localStorage.setItem("userId",users[i].id)
            window.location.href="../index.html"
        }
    }
    console.log("đăng nhập thất bại!");
}