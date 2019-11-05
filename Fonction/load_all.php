<?php
		echo '
			<!-- CSS -->
			<link type="text/css" rel="stylesheet" href="./Style/style.css" />
			
			<!--Fonctions JavaScript -->
			<script type="text/javascript" src="./Script/scriptaculous/lib/prototype.js"></script>
			<script type="text/javascript" src="./Script/scriptaculous/src/scriptaculous.js"></script>
			<script type="text/javascript" src="./Script/initialiser_page.js"></script>
			<script type="text/javascript" src="./Script/chargement_option.js"></script>
			<script type="text/javascript" src="./Script/creer_figure.js"></script>
			<script type="text/javascript" src="./Script/inserer_form.js"></script>
			<script type="text/javascript" src="./Script/modifier_taille.js"></script>
			<script type="text/javascript" src="./Script/chargement_fonction_php.js"></script>
			<script type="text/javascript" src="./Script/generer_figure.js"></script>
			<script type="text/javascript" src="./Script/list_figure.js"></script>
			<script type="text/javascript" src="./Script/chargement_list.js"></script>
			<script type="text/javascript" src="./Script/recherche.js"></script>
			<script type="text/javascript" src="./Script/creer_form_figure.js"></script>
			<script type="text/javascript" src="./Script/modifier_form_figure.js"></script>
			<script type="text/javascript" src="./Script/modifier_figure.js"></script>
			<script type="text/javascript" src="./Script/creer_image.js"></script>
			<script type="text/javascript" src="./Script/clear_image.js"></script>
			<script type="text/javascript" src="./Script/supprimer_selection.js"></script>
			<script type="text/javascript" src="./Script/afficher_selection.js"></script>
			<script type="text/javascript" src="./Script/selectionner_tout.js"></script>
			<script type="text/javascript" src="./Script/deselectionner_tout.js"></script>
			<script type="text/javascript" src="./Script/cloner_figure.js"></script>
			
		';
		
		// Fonctions PHP 
		include("./Fonction/affichage_barre.php");
		include("./Fonction/affichage_option_gen.php");
		include("./Fonction/affichage_ban.php");
		include("./Fonction/fonction_initialiser_session.php");
		include("./Fonction/aff_recherche.php");
		if(isset($_SESSION['case'])== false){
		// initialiser_session
			initialiser_session();
		}
?>