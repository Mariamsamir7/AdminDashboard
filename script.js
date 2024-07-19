const menuBtn = document.querySelector("#menu-btn");
const slideMenu = document.querySelector("#aside");
const closeBtn =document.querySelector("#closeBtn");
const themeSwitcher = document.querySelector(".switch-theme")
// show slidbar
menuBtn.addEventListener("click", ()=>{
slideMenu.style.display="block";
})
// close slidbar
closeBtn.addEventListener("click", ()=>{
    slideMenu.style.display="none";
    })
// switch-theme
themeSwitcher.addEventListener("click",()=>{
document.body.classList.toggle("dark-theme-details")

themeSwitcher.querySelector("span:nth-child(1)").classList.toggle("active");
themeSwitcher.querySelector("span:nth-child(2)").classList.toggle("active");

})