<?php
	function affichage_options_generales(){
		echo '<form method="post" action="">
				<fieldset>
				<legend>Taille de la fenêtre</legend> 
					<table align="center">
						<tr>
							<td>
								Largeur:
							</td>
							<td>
								Longueur:
							</td>
						</tr>
						<tr>
							<td>
								<input id="largeur_image" type="text" name="largeur"/>
							</td>
							<td>
								<input id="longueur_image" type="text" name="longueur"/>
							</td>
						</tr>
						<tr>
							<td colspan="2" align="center">
								<a href="#" onclick="modifier_taille(); return false;">
									<input type="button" value="Appliquer"/>
								</a>
							</td>
						</tr>
					</table>

				</fieldset>
				</form>
				
				<form method="post" action="">
				<fieldset>
				<legend>Options générales</legend> 
					<table align="center">
						<tr>
							<td>
								<a href="#" onclick="chargement_fonction_php('."'./Fonction/initialiser_session.php'".'); generer_figure(\'./fonction/generer_xml.php\', \'true\'); list_figure(\'identifiant\',\'all\'); return false;">
									<input id="reint_fen" type="button" value="Réinitialiser fenêtre"/>
								</a>
							</td>
							<td>
								<a href="#" onclick="generer_figure(\'./fonction/generer_xml.php\', \'true\'); return false;">
									<input id="gen_XML" type="button" value="Visualiser"/>
								</a>
							</td>
							<td align= "center">
								Visualiser avec XSLT: <input id="xslt" type="checkbox" />
							</td>
						</tr>
					</table>

				</fieldset>
				</form>
				';
}
?>