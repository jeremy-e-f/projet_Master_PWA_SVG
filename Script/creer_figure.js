
function creer_figure(){
	var xhr;
	var monElement= document.getElementById("statut");
	var tab_option= document.getElementById("options");
	
	// Type de figure
	var select= document.getElementById("type_figure");
	var type_figure= select.options[select.selectedIndex].getAttribute("name");
	
	// On r�cup�re les valeurs des attributs
	var chaine_des_attributs= "?type_figure="+ type_figure;
	var attributs= tab_option.getElementsByTagName("div");
	
	for(var i= 0; i< attributs.length; i++){
			var j= i+1;
			var attr= attributs[i].firstChild;
			var champ= attr.getAttribute("name");
			var valeur= attr.value;
			//alert("attribut nom= "+champ+" valeur= "+valeur);
			var caractere_obligatoire= attr.getAttribute("class"); 
			chaine_des_attributs+= "&champ"+j+"="+champ;
			
		if((caractere_obligatoire== "obligatoire")&&(valeur== "")){
			alert("Veuillez a ce que les champs obligatoires soient remplis! \""+champ+"\" !");
			return;
		}
		chaine_des_attributs+= "&valeur"+j+"="+valeur;
	}
	
	if(window.XMLHttpRequest())
		xhr= new XMLHttpRequest();
	else
		if(window.ActiveXObject){
			try{
				xhr= new ActiveXObjet("Msxml2.XMLHTTP");
				}catch(e){
					try{
						xhr= new ActiveXObject("Microsoft.XMLHTTP");
						}catch(e){ 
							alert("requ�te impossible � envoyer");
						}
					}
				}else{
					// error 
				}
				
	// vider le div!
	while(monElement.hasChildNodes())
		monElement.removeChild(monElement.firstChild);
	
	xhr.onreadystatechange= function(){
		monElement.innerHTML= "... Chargement!";
		if(xhr.readyState== 4){
				if(xhr.status== 200){
					retour= xhr.responseXML;
					creer_image(retour, "true");
				}else
					monElement.innerHTML= "Erreur re�ue :"+xhr.status+" option= "+ type_figure;
				}
	}
	
	// envoyer la requ�te
		//alert(chaine_des_attributs);
		xhr.open("GET", "./fonction/ajouter_figure.php"+chaine_des_attributs, true);
		xhr.send(null);
}