
function chargement_menu_creer(){
	var monElement= document.getElementById("menu");
	var select= document.getElementById("type_figure");
	var type_figure= select.options[select.selectedIndex].getAttribute("name");
	creer_form_figure(monElement, type_figure);
}