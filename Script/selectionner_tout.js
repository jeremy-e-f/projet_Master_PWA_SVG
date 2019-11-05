function selectionner_tout(){
	
	var monElement= document.getElementById("list_figure");
	
	var case_a_cocher= monElement.getElementsByTagName("div");
	
	for(var i= 0; i< case_a_cocher.length; i++){
		case_id= case_a_cocher[i].firstChild;
		case_id.checked= true;
	}

}