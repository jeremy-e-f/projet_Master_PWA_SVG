

function inserer_form(table, tableaux_des_noms_attributs, tableaux_des_attributs, tableaux_des_obligations){

	for(var i= 0; i< tableaux_des_attributs.length; i++){
		var tr= document.createElement("tr");
		table.appendChild(tr);

		var td= document.createElement("td");
		td.setAttribute("class","champ");
		td.appendChild(document.createTextNode(tableaux_des_noms_attributs[i]));
		tr.appendChild(td);
		
		var td= document.createElement("td");
		td.setAttribute("class","contenu");
		tr.appendChild(td);
		
		var div= document.createElement("div");
		td.appendChild(div);
		
		var input= document.createElement("input");
		input.setAttribute("type","text");
		input.setAttribute("name",tableaux_des_attributs[i]);
		input.setAttribute("id",tableaux_des_attributs[i]);
		if(tableaux_des_obligations[i]== 1)
			input.setAttribute("class","obligatoire");
		else
			input.setAttribute("class","facultatif");
		div.appendChild(input);
	
	}
}