
<?php

function affichage_barre(){
echo '
<form method="post" action="">
<fieldset>
<legend>Action</legend> 
<table>
<tr>
	<td>
	<select id="type_figure" onchange="chargement_menu_creer(); return false;" >
		<option name="rect">Rectangle</option>
		<option name="circle">Cercle</option>
		<option name="ellipse">Ellipse</option>
		<option name="line">Ligne</option>
		<option name="polyline">Ligne brisée</option>
		<option name="polygon">Polygone</option>
		<option name="path">Path</option>
		<option name="text">Texte</option>
		<option name="image">Image</option>
	</select>
	</td>
	<td>
	<a href="#" onclick="chargement_menu_creer(); return false;">
		<input type="button" value="Nouveau"/>
	</a>
	</td>
	<td>
	<a href="#" onclick="chargement_list(); return false;">
		<input type="button" value="Lister"/>
	</a>
	</td>
	<td>
	<a href="#" onclick="list_figure(\'identifiant\',\'all\'); return false;">
		<input type="button" value="Lister toutes"/>
	</a>
	</td>
</tr>
</table>
</fieldset>
</form>';
}
?>
