const menu=document.getElementById("menu");
const mobileLinks =document.getElementById("mobile-links");

menu.addEventListener("click",()=>{
    mobileLinks.classList.toggle("open");
})