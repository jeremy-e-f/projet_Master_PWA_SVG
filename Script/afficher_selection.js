function afficher_selection(){
	
	clear_image();
	
	var monElement= document.getElementById("list_figure");
	
	var case_a_cocher= monElement.getElementsByTagName("div");
	
	for(var i= 0; i< case_a_cocher.length; i++){
		case_id= case_a_cocher[i].firstChild;
		if(case_id.checked)
			generer_figure('./fonction/generer_xml_id.php?id='+case_id.value, 'false');
	}

}