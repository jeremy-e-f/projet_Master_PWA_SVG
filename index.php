<?xml version="1.0"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>SVG</title>
		<?php
			include('./Fonction/load_all.php');
		?>
	</head>
	
	<body>
			<div id="baniere">
			<!-- banniere -->
			
			</div>
			<div id="corps">
				<div id="panel">
					<!-- Mini bannière -->
					<div id="mini_ban">
					<?php
						affichage_ban();
						?>
					</div>
					<!-- Options générales -->
					<div id="option_gen">
					<?php
						affichage_options_generales();
						?>
					<!-- RECHERCHE -->
					<div id="recherche">
					<?php
						aff_recherche();
						?>
					</div>
					<!-- BARRE -->
					<div id="barre">
					<?php
						affichage_barre();
						?>
					</div>
					</div>
					<!-- MENU -->
					<div id="menu">
						
					</div>
					<!-- STATUT -->
					<div id="statut">
						
					</div>
				</div>
				<!-- CONTENU -->
				<div id="image"> 
					<embed src="./fig.svg"
						type="image/svg+xml"
						pluginspage="http://www.adobe.com/svg/viewer/install/main.html"
						name="dessin" />
				</div>
				<!-- Liste de s figures-->
				<div id="list_figure">
				
				</div>
				<script type="text/javascript">
					initialiser_page();
				</script>
				
			</div>
			<!-- Bas de page -->
			
			<div id="foot">
				Par FROMINVILLE Jérémy-E.
			</div>
	</body>
</html>