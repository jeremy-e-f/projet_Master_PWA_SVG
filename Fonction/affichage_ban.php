<?php

	function affichage_ban(){
		echo '<table id="tab_present">
				<tr>
					<td>Rectangle</td>
					<td>Cercle</td>
					<td>Ellipse</td>
				</tr>
				<tr>
					<td id="rect" class="image_mini_ban"></td>
					<td id="circ" class="image_mini_ban"></td>
					<td id="ellips" class="image_mini_ban"></td>
				</tr>
				<tr>
					<td>Ligne</td>
					<td>Poly-ligne</td>
					<td>Polygone</td>
				</tr>
				<tr>
					<td id="line" class="image_mini_ban"></td>
					<td id="polyline" class="image_mini_ban"></td>
					<td id="polygone" class="image_mini_ban"></td>
				</tr>
			</table>';
	
	}

?>