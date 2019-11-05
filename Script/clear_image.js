function clear_image(){
	var svgdoc= document.dessin.getSVGDocument();
	var svg= (svgdoc.getElementsByTagName("svg"))[0];
	
	// on vide le svg
	while(svg.hasChildNodes())
		svg.removeChild(svg.firstChild);
	}