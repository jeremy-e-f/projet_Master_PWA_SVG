

function creer_form_figure(monElement, type_figure){

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

// bouton valider
var tr= document.createElement("tr");
table.appendChild(tr);

var td= document.createElement("td");
td.setAttribute("class","bouton_menu");
td.setAttribute("className","bouton_menu");
td.setAttribute("colspan","2");
tr.appendChild(td);

var input= document.createElement("input");
input.setAttribute("type","button");
input.setAttribute("value","Creer");
input.setAttribute("onclick","creer_figure(); return false;");
td.appendChild(input);

}