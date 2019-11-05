
function chargement_fonction_php(fonction){
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
					monElement.innerHTML= "La fonction "+fonction+" s'est bien ex�cut�e!: "+xhr.responseText;
				}else
					monElement.innerHTML= "Erreur :"+xhr.status+" fonction: "+fonction;
				}
	}
	
	// envoyer la requ�te

		xhr.open("GET", fonction, true);
		xhr.send(null);
}