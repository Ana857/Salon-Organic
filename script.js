function setUp(){
    document.getElementById(".link_taskbabr").onclick = setServices;
}
function setServices(){
    let menuServices = document.getElementById("menu-services")
    menuServices.className = "menuSevices"
}
setUp()