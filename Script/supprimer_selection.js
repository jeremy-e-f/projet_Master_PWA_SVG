function supprimer_selection(){

	var monElement= document.getElementById("list_figure");
	
	var case_a_cocher= monElement.getElementsByTagName("div");
	
	for(var i= 0; i< case_a_cocher.length; i++){
		case_id= case_a_cocher[i].firstChild;
		if(case_id.checked)
			chargement_fonction_php('./fonction/supprimer_figure.php?id='+case_id.value);
	}
	generer_figure('./fonction/generer_xml.php', 'true');

}