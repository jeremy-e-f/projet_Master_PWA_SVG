function traitement_list(retour, attribut, valeur){
	//alert(retour);
	
	var monElement= document.getElementById("list_figure");
	
	// vider le div!
	while(monElement.hasChildNodes())
		monElement.removeChild(monElement.firstChild);
		
	//monElement.appendChild(document.createTextNode("En test!"));
	
	var figures= retour.getElementsByTagName("figure");
	//alert("nombre de figures: "+figures.length);
	
	var table_gen= document.createElement("table");
	monElement.appendChild(table_gen);
	
	var tr= document.createElement("tr");
	table_gen.appendChild(tr);
	
	var td= document.createElement("td");
	td.setAttribute("id", "liste_figures");
	td.setAttribute("class", "title");
	td.setAttribute("className", "title");
	td.appendChild(document.createTextNode("Liste des figures:"));
	tr.appendChild(td);
	
	var tr= document.createElement("tr");
	table_gen.appendChild(tr);
	
	var td= document.createElement("td");
	td.setAttribute("align", "center");
	tr.appendChild(td);
	
	var input= document.createElement("input");
	input.setAttribute("type","button");
	input.setAttribute("onclick","Effect.SlideUp('liste_reductible'); return false;");
	input.setAttribute("value", "Enrouler liste");
	td.appendChild(input);
	
	var input= document.createElement("input");
	input.setAttribute("type","button");
	input.setAttribute("onclick","Effect.SlideDown('liste_reductible'); return false;");
	input.setAttribute("value", "Dérouler liste");
	td.appendChild(input);
	
	var tr= document.createElement("tr");
	table_gen.appendChild(tr);
	
	var td= document.createElement("td");
	tr.appendChild(td);
	
	var table= document.createElement("table");
	table.setAttribute("id", "liste_reductible");
	td.appendChild(table);
	
	var tr= document.createElement("tr");
	table.appendChild(tr);
	
	var td= document.createElement("td");
	tr.appendChild(td);
	
	var input= document.createElement("input");
	input.setAttribute("type","button");
	input.setAttribute("onclick","selectionner_tout(); return(false);");
	input.setAttribute("value", "sélectionner tout");
	td.appendChild(input);
	
	var input= document.createElement("input");
	input.setAttribute("type","button");
	input.setAttribute("onclick","deselectionner_tout(); return(false);");
	input.setAttribute("value", "désélectionner tout");
	td.appendChild(input);
	
	var match_attribut= new Boolean(false);
	var v= new Boolean(true);
	
	for(var i= 0; i< figures.length; i++){
		var fig= figures[i];
		if(fig!= null){
			var attributs= fig.getElementsByTagName("attribut");
			var type= fig.getAttribute("type");
			var id= (attributs[0]).firstChild.nodeValue;
			// filtre sur les données en entrée
			v= true;
			match_attribut= false;
			
			if(attribut== "type")
				match_attribut= (type== valeur);
			else{
				// On recherche l'attribut correspondant!
				for(var j= 0; ((j< attributs.length) && (!match_attribut) && (v)) ; j++){
					attr= attributs[j];
					if(attr.firstChild!= null){
						var nom_attribut= attr.getAttribute("nom");
						var valeur_attribut= attr.firstChild.nodeValue;
						
						v= (attribut!= nom_attribut);
						match_attribut= ((!v) && ((valeur== valeur_attribut)||(valeur== "all")));
						//alert("< "+nom_attribut+"= "+"\""+valeur_attribut+"\" >");
						}
					}
				}
				
			if(match_attribut== true){
				var tr= document.createElement("tr");
				table.appendChild(tr);
				var td= document.createElement("td");
				td.setAttribute("class", "figure");
				td.setAttribute("className", "figure");
				tr.appendChild(td);
				
				aff_resume_figure(td, id, type, attribut, valeur);
				}
			}
		
		}
	
	var tr= document.createElement("tr");
	table.appendChild(tr);
	
	var td= document.createElement("td");
	tr.appendChild(td);
	
	if(match_attribut== true){
		var input= document.createElement("input");
		input.setAttribute("type","button");
		input.setAttribute("onclick","afficher_selection(); return(false);");
		input.setAttribute("value", "afficher selection");
		td.appendChild(input);
		
		var input= document.createElement("input");
		input.setAttribute("type","button");
		input.setAttribute("onclick","supprimer_selection(); list_figure('"+attribut+"','"+valeur+"'); return(false);");
		input.setAttribute("value", "supprimer selection");
		td.appendChild(input);
	}else
		td.appendChild(document.createTextNode("Pas d'éléments correspondants à la sélection!"));
}

// Affichage propriété des figures
function aff_resume_figure(element, id, type, attribut, valeur){
	var table1= document.createElement("table");
	element.appendChild(table1);
	
	var tr= document.createElement("tr");
	table1.appendChild(tr);
	
	var td= document.createElement("td");
	td.appendChild(document.createTextNode("Figure n°"+ id));
	tr.appendChild(td);
	
	var td= document.createElement("td");
	td.appendChild(document.createTextNode("Sélectionner"));
	tr.appendChild(td);
	
	var div= document.createElement("div");
	td.appendChild(div);
	
	var input= document.createElement("input");
	input.setAttribute("type","checkbox");
	input.setAttribute("value",id);
	div.appendChild(input);
	
	var tr= document.createElement("tr");
	table1.appendChild(tr);
	
	var td= document.createElement("td");
	td.appendChild(document.createTextNode("Type de figure:"));
	tr.appendChild(td);
	
	var td= document.createElement("td");
	td.appendChild(document.createTextNode(type));
	td.setAttribute("colspan", "2");
	tr.appendChild(td);
	
	var tr= document.createElement("tr");
	table1.appendChild(tr);
	
	var td= document.createElement("td");
	td.setAttribute("colspan", "2");
	tr.appendChild(td);
	
	var table2= document.createElement("table");
	td.appendChild(table2);
	
	var tr= document.createElement("tr");
	table2.appendChild(tr);
		
	var td= document.createElement("td");
	tr.appendChild(td);
	
	var input= document.createElement("input");
	input.setAttribute("type","button");
	input.setAttribute("onclick","generer_figure(\'./fonction/generer_xml_id.php?id="+id+"\', \'true\'); return(false);");
	input.setAttribute("value", "afficher");
	td.appendChild(input);
		
	var td= document.createElement("td");
	tr.appendChild(td);
	
	var input= document.createElement("input");
	input.setAttribute("type","button");
	input.setAttribute("onclick","recherche_figure_id('"+id+"'); return(false);");
	input.setAttribute("value", "modifier");
	td.appendChild(input);
		
	var td= document.createElement("td");
	tr.appendChild(td);
	
	var input= document.createElement("input");
	input.setAttribute("type","button");
	input.setAttribute("onclick","chargement_fonction_php(\'./fonction/supprimer_figure.php?id="+id+"\'); generer_figure(\'./fonction/generer_xml.php\', \'true\'); list_figure('"+attribut+"','"+valeur+"'); return(false);");
	input.setAttribute("value", "supprimer");
	td.appendChild(input);
}

function list_figure(attribut, valeur){
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
					var retour= xhr.responseXML;
					traitement_list(retour, attribut, valeur);
				}else
					monElement.innerHTML= "Erreur reçue :"+xhr.status+" attribut= "+attribut+" valeur= "+valeur;
				}
	}
	
	// envoyer la requête

		xhr.open("GET", "./fonction/generer_xml.php", true);
		xhr.send(null);
}