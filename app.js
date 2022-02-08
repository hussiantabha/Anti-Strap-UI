let x = document.getElementsByClassName("links")

let ham = document.getElementById("hamburger-nav")
let sb = document.querySelector(".sidebar")
let xIcon = document.querySelector(".x-icon")
let sidebarLink = document.querySelector(".sidebar-links")
ham.addEventListener("click",()=>{
    sb.classList.toggle("sidebar-active")
    xIcon.classList.toggle("x-icon-active")
})
xIcon.addEventListener("click",()=>{
    sb.classList.toggle("sidebar-active")
    xIcon.classList.toggle("x-icon-active")
    console.log(sb,xIcon)
})
sidebarLink.addEventListener("click",()=>{
    console.log(sb);  
    if(sb.classList.contains("sidebar-active") === true){
        sb.classList.remove("sidebar-active")
        console.log("in")
    }
})