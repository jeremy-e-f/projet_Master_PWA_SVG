
function generer_figure(fonction_xml, clear_screen){
	var xhr;
	var monElement= document.getElementById("statut");
	
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
							alert("requête impossible à envoyer");
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
					creer_image(retour, clear_screen);
				}else
					monElement.innerHTML= "Erreur reçue :"+xhr.status+" option= "+ type_figure;
				}
	}
	
	// envoyer la requête

		xhr.open("GET", fonction_xml, true);
		xhr.send(null);
}