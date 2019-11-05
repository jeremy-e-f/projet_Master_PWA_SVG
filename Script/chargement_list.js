function chargement_list(){
	var select= document.getElementById("type_figure");
	var type_figure= select.options[select.selectedIndex].getAttribute("name");
	list_figure("type", type_figure);
}