var menu_icono = document.querySelector(".menu-icono");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menu_icono.onclick = function(){
	sidebar.classList.toggle("small-sidebar");
	container.classList.toggle("large-container");
}