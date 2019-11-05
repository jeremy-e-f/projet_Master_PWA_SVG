
<?php

function aff_recherche(){
echo '
<form method="post" action="">
<fieldset>
<legend>Recherche</legend> 
<table>
<tr>
	<td>
	</td>
	<td>
		Nom attribut:
	</td>
	<td>
		Valeur attribut:
	</td>
</tr>
<tr>
	<td>
		<a href="#" onclick="recherche(); return false;">
		<input type="button" value="Lancer"/>
		</a>
	</td>
	<td>
		<input type="text" id="attribut">
	</td>
	<td>
		<input type="text" id="valeur">
	</td>
</tr>
</table>
</fieldset>
</form>';
}
?>
