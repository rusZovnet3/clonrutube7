var menu_icono = document.querySelector(".menu-icono");
var sidebar = document.querySelector(".sidebar");

menu_icono.onclick = function(){
	sidebar.classList.toggle("small-sidebar");
}