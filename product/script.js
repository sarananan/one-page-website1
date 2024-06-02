let mobiles=document.querySelector(".moble-product");
let hambuger=document.querySelector('.hamburgur');
hambuger.onclick=show;
let secondmenu=document.querySelector(".header-navbar-2")
function show(){
    secondmenu.classList.toggle("tog");
}
let mobileproduct=[
    {
        name:"mobile1",
        img:"images/img1.jpg",
        price:2999
    },
    {
        name:"mobile1",
        img:"images/img5.jpg",
        price:2999
    },
    {
        name:"mobile1",
        img:"images/img2.jpg",
        price:2999
    },
    {
        name:"mobile1",
        img:"images/img3.jpg",
        price:2999
    },
    {
        name:"mobile1",
        img:"images/img4.jpg",
        price:2999
    },
    {
        name:"mobile1",
        img:"images/img5.jpg",
        price:2999
    }
]
let a=mobileproduct.map((res)=>{
    return res;
})
let b=[...new Set(a.map((res)=>{
        return res
}))]
mobiles.innerHTML=b.map((res)=>{
    var{name,img,price}=res
    return(`
    <div class="details-box">
    <img src=${img} alt="">
    <div class="foot">
    <h2>${name}</h2>
    <button>${price}</button>
    </div>
    </div>
    `)
}).join("")
// menu2.addEventListener("click",show)
// function show(){
//     alert(123)
// }
