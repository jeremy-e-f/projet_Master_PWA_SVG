var xsltProcessor= new XSLTProcessor();

function initialiser_page(){
	
	// Initialisation du processeur XSLT
	var xslStylesheet;

	var myXMLHTTPRequest = new XMLHttpRequest();
	myXMLHTTPRequest.open("GET", "./Fonction/creer_image.xsl", false);
	myXMLHTTPRequest.send(null);

	xslStylesheet= myXMLHTTPRequest.responseXML;
	xsltProcessor.importStylesheet(xslStylesheet);

	new Draggable("list_figure", { scroll: window });
}