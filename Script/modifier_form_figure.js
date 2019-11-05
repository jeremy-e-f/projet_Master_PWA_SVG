function traitement_modif(retour, monElement){
//alert(retour);

// vider le div!
	while(monElement.hasChildNodes())
		monElement.removeChild(monElement.firstChild);

var form= document.createElement("form");
form.setAttribute("method","post");
form.setAttribute("action","");
monElement.appendChild(form);

var fieldset= document.createElement("fieldset");
form.appendChild(fieldset);

var legend= document.createElement("legend");
legend.appendChild(document.createTextNode("Options"));
fieldset.appendChild(legend);

var table= document.createElement("table");
table.setAttribute("id","options");
fieldset.appendChild(table);

// On remplit le formulaire
var fig= (retour.getElementsByTagName("figure"))[0];
var type_figure= fig.getAttribute("type");
var attributs= fig.getElementsByTagName("attribut");
var id= attributs[0].firstChild.nodeValue;

switch(type_figure){
		case "rect": 
					var tableaux_des_noms_attributs= ["x", "y", "width", "height", "rx", "ry", "fill", "fill-opacity", "stroke", "stroke-width", "stroke-dasharray", "style"];
					var tableaux_des_attributs=      ["x", "y", "width", "height", "rx", "ry", "fill", "fill-opacity", "stroke", "stroke-width", "stroke-dasharray", "style"];
					var tableaux_des_obligations=    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
		break;
		case "circle":
					var tableaux_des_noms_attributs= ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "stroke-width", "style"];
					var tableaux_des_attributs=      ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "stroke-width", "style"];
					var tableaux_des_obligations=    [1, 1, 1, 0, 0, 0, 0, 0];
		break;
		case "ellipse":
					var tableaux_des_noms_attributs= ["cx", "cy", "rx", "ry", "fill", "fill-opacity", "stroke", "stroke-width", "style"];
					var tableaux_des_attributs=      ["cx", "cy", "rx", "ry", "fill", "fill-opacity", "stroke", "stroke-width", "style"];
					var tableaux_des_obligations=    [1, 1, 1, 1, 0, 0, 0, 0, 0];
		break;
		case "line": 
					var tableaux_des_noms_attributs= ["x1", "y1", "x2", "y2", "stroke", "stroke-width", "style"];
					var tableaux_des_attributs=      ["x1", "y1", "x2", "y2", "stroke", "stroke-width", "style"];
					var tableaux_des_obligations=    [1, 1, 1, 1, 1, 0, 0];
		break;
		case "polyline": 
					var tableaux_des_noms_attributs= ["points", "fill", "fill-opacity", "stroke", "stroke-width", "style"];
					var tableaux_des_attributs=      ["points", "fill", "fill-opacity", "stroke", "stroke-width", "style"];
					var tableaux_des_obligations=    [1, 0, 0, 0, 0, 0];
		break;
		case "polygon": 
					var tableaux_des_noms_attributs= ["points", "fill", "fill-opacity", "stroke", "stroke-width", "style"];
					var tableaux_des_attributs=      ["points", "fill", "fill-opacity", "stroke", "stroke-width", "style"];
					var tableaux_des_obligations=    [1, 0, 0, 0, 0, 0];
		break;
		case "path": 
					var tableaux_des_noms_attributs= ["d", "fill", "fill-opacity", "stroke", "stroke-width", "style"];
					var tableaux_des_attributs=      ["d", "fill", "fill-opacity", "stroke", "stroke-width", "style"];
					var tableaux_des_obligations=    [1, 0, 0, 0, 0, 0];
		break;
		case "text":
					var tableaux_des_noms_attributs= ["x", "y", "texte", "font-family", "font-size", "font-weight", "fill", "fill-opacity","style"];
					var tableaux_des_attributs=      ["x", "y", "text", "font-family", "font-size", "font-weight", "fill", "fill-opacity","style"];
					var tableaux_des_obligations=    [1, 1, 1, 0, 0, 0, 0, 0, 0];
		break;
		case "image": 
					var tableaux_des_noms_attributs= ["x", "y", "width", "height", "source", "title"];
					var tableaux_des_attributs=      ["x", "y", "width", "height", "xlink:href", "title"];
					var tableaux_des_obligations=    [1, 1, 1, 1, 1, 0];
		break;
		default:
				alert(type_figure);
				return;
	}
	inserer_form(table, tableaux_des_noms_attributs, tableaux_des_attributs, tableaux_des_obligations);
	
// On remplit le formulaire
	for(var j= 1; j< attributs.length; j++){
		var attr= attributs[j];
		if(attr.firstChild!= null){
			var nom_attribut= attr.getAttribute("nom");
			var valeur_attribut= attr.firstChild.nodeValue;
			//alert("attribut nom= "+nom_attribut+" valeur= "+valeur_attribut);
			document.getElementById(nom_attribut).value= valeur_attribut;
		}
	}

// bouton valider
var tr= document.createElement("tr");
table.appendChild(tr);

var td= document.createElement("td");
td.setAttribute("class","bouton_menu");
td.setAttribute("className","bouton_menu");
tr.appendChild(td);

var input= document.createElement("input");
input.setAttribute("type","button");
input.setAttribute("value","Modifier");
input.setAttribute("onclick","modifier_figure("+id+"); return false;");
td.appendChild(input);

var td= document.createElement("td");
td.setAttribute("class","bouton_menu");
td.setAttribute("className","bouton_menu");
tr.appendChild(td);

var input= document.createElement("input");
input.setAttribute("type","button");
input.setAttribute("value","Cloner");
input.setAttribute("onclick","cloner_figure("+id+"); return false;");
td.appendChild(input);
}

function recherche_figure_id(id){
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
					monElement.innerHTML= "OK!";
					traitement_modif(retour, document.getElementById("menu"));
				}else
					monElement.innerHTML= "Erreur reçue :"+xhr.status+" attribut= "+attribut+" valeur= "+valeur;
				}
	}
	
	// envoyer la requête

		xhr.open("GET", "./fonction/generer_xml_id.php?id="+id, true);
		xhr.send(null);
}