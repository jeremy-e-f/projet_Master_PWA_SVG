
function creer_image(retour, clear_screen){
	var chkbox= document.getElementById("xslt");
	if(chkbox.checked)
		creer_image_xslt(retour, clear_screen);
	else
		creer_image_js(retour, clear_screen);
}

// Création de l'image directement en recréant l'arbre du DOM avec du javascript à partir du document XML généré
function creer_image_js(retour, clear_screen){
	//alert(retour);
	var svgns = "http://www.w3.org/2000/svg";
	var svgdoc= document.dessin.getSVGDocument();
	var svg= (svgdoc.getElementsByTagName("svg"))[0];
	var monElement= document.getElementById("statut");
	
	// vider le div!
	monElement.removeChild(monElement.firstChild);
	monElement.appendChild(document.createTextNode("Construction JavaScript!"));
	
	// on vide le svg
	if(clear_screen== "true")
		while(svg.hasChildNodes())
			svg.removeChild(svg.firstChild);
	
	var figures= retour.getElementsByTagName("figure");
	//alert("nombre de figures: "+figures.length);
	
	for(var i= 0; i< figures.length; i++){
		var fig= figures[i];
		if(fig!= null){
			//alert("type de figure: \""+fig.getAttribute("type")+"\"");
			var type= document.createElementNS(svgns, fig.getAttribute("type"));
			var attributs= fig.getElementsByTagName("attribut");
			//alert("nombre d'attributs: "+attributs.length);
			for(var j= 0; j< attributs.length; j++){
				attr= attributs[j];
				if(attr.firstChild!= null){
					var nom_attribut= attr.getAttribute("nom");
					var valeur_attribut= attr.firstChild.nodeValue;
					switch(nom_attribut){
						case "identifiant": 
							type.setAttribute("id", valeur_attribut);
							break;
						case "text": 
							type.appendChild(document.createTextNode(valeur_attribut));
							break;
						case "title":
							var sub= document.createElementNS(svgns, "title");
							sub.appendChild(document.createTextNode(valeur_attribut));
							type.appendChild(sub);
							break;
						default:
							type.setAttribute(nom_attribut, valeur_attribut);
						}
					//alert("< "+nom_attribut+"= "+"\""+valeur_attribut+"\" >");
					}
				}
			svg.appendChild(type);
			}
	}
	
	monElement.removeChild(monElement.firstChild);
	monElement.appendChild(document.createTextNode("Créé avec JavaScript!"));
}

// Création de l'image en générant le svg avec un processeur xslt, on insère directement le groupe de figures générées!
function creer_image_xslt(retour, clear_screen){
	//alert(retour);
	var monElement= document.getElementById("statut");
	
	// vider le div!
	monElement.removeChild(monElement.firstChild);
	monElement.appendChild(document.createTextNode("Construction XSLT!"));

	var doc = xsltProcessor.transformToDocument(retour, document);
	doc.contenttype = "image/svg+xml";
	var g= (doc.getElementsByTagName("g"))[0];
	
	var svgdoc= document.dessin.getSVGDocument();
	var svg= (svgdoc.getElementsByTagName("svg"))[0];
	
	// on vide le svg
	if(clear_screen== "true")
		while(svg.hasChildNodes())
			svg.removeChild(svg.firstChild);
	
	svg.appendChild(g);
	
	// vider le div!
	monElement.removeChild(monElement.firstChild);
	monElement.appendChild(document.createTextNode("Créé avec XSLT!"));
}
