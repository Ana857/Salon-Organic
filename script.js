let button=document.querySelector(".mobile_menu")
let list=document.querySelector(".list_taskbar")

button.addEventListener("click", list_show)
function list_show () {
    list.classList.toggle("show_list_mobile")
    console.log(123)
}

let plus_btn=document.querySelector(".plus_icon")
let list_mobile=document.querySelector(".list_services")

plus_btn.addEventListener( "click" , icon_show )
function icon_show () {
    list_mobile.classList.toggle("show_services_list_mobile")
    console.log(1)
}
console.log()