
function modifier_taille(){
	var largeur= document.getElementById("largeur_image").value;
	var longueur= document.getElementById("longueur_image").value;
	var svgdoc= document.dessin.getSVGDocument();
	var svg= (svgdoc.getElementsByTagName("svg"))[0];
	svg.setAttributeNS(null, "width", largeur);
	svg.setAttributeNS(null, "height", longueur);
}