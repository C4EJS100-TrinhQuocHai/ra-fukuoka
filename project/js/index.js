/* 
    render đổ danh sách sản phẩm bằng js
 */
//  function hiển thị danh sách sản phẩm
let productList=[
    {
        name:"bánh 1",
        price:60000,
        id:65375465,
        src:"./assets/images/anh1.webp",
        stock:15,
    },
    {
        name: "bánh 2",
        price: 54000,
        id: 678578,
        src: "./assets/images/anh2.jpg",
        stock: 5,
    },
    {
        name: "bánh 3",
        price: 59000,
        id: 324545346,
        src: "./assets/images/anh3.jpg",
        stock: 8,
    },
    {
        name: "bánh 4",
        price: 82000,
        id: 676757,
        src: "./assets/images/anh4.jpg",
        stock: 4,
    },
    {
        name: "bánh 5",
        price: 90000,
        id: 65345334,
        src: "./assets/images/anh5.jpg",
        stock: 3,
    }
    
]
// lưu sản phẩm trên local
localStorage.setItem("productList", JSON.stringify(productList));
let products = JSON.parse(localStorage.getItem("productList"));
function renderProducts() {
    let text="";
    for (let i = 0; i < products.length; i++) {
        text+=
        `
            <div class="product-item">
                <img src="${products[i].src}" alt="">
                <p>${products[i].name}</p>
                <p> ${products[i].price} </p>
                <p><button onclick="addToCart()">mua</button></p>
            </div>
   `
    }
    document.getElementsByClassName("product-list")[0].innerHTML=text
}
renderProducts();
// function đi mua hàng
function addToCart() {
    let checkLogin=localStorage.getItem("userId");
    if (checkLogin){
        // đã đăng nhập mới cho đi mua hàng
        alert("đi mua hàng bình thường!")
    }else{
        // chưa đăng nhập không thể mua hàng
        alert("bạn phải đăng nhập để đi mua hàng!")
    }
}