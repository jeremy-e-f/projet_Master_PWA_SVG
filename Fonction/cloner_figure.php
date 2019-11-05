<?php
	header("Content-Type: text/xml");
	
	function cloner_figure_XML(){
		session_start();
		
		// On réinitialise tous les attributs
		if(isset($_SESSION['case']))
			$case= $_SESSION['case'];
		
		if(isset($_SESSION['type_figures']))
			$type_figures= $_SESSION['type_figures'];
		
		if(isset($_SESSION['attributs_name']))
			$attributs_name= $_SESSION['attributs_name'];
	
		if(isset($_SESSION['attributs_value']))
			$attributs_value= $_SESSION['attributs_value'];
		
		if(isset($_GET['id']))
			$type_figures[$case]= $type_figures[$_GET['id']];
		else{
			 echo ("erreur: id de la figure à passer en paramètres!!");
			 exit();
			 }
		
	// On enregistre l'identifiant de la figure
		$attributs_name[$case][0]= "identifiant";
		$attributs_value[$case][$attributs_name[$case][0]]= $case;
		
		for($i= 1; isset($_GET["champ".$i]); $i++){
			$attributs_name[$case][$i]=$_GET["champ".$i];
			$attributs_value[$case][$attributs_name[$case][$i]]=$_GET["valeur".$i];
			//echo " champ= ".$_GET["champ".$i]." & valeur= ".$_GET["valeur".$i];
		}
		 
		 // mise à jour des données contenues dans les variables de session
		$_SESSION['case']++;
		$_SESSION['type_figures']= $type_figures;
		$_SESSION['attributs_name']= $attributs_name;
		$_SESSION['attributs_value']= $attributs_value;
		
		 echo "<?xml version='1.0' encoding='ISO-8859-1'?>";
		  echo "
		 <!DOCTYPE root[
			<!ELEMENT root (figure+) > 
			<!ELEMENT figure (attribut+)>
			<!ATTLIST figure type CDATA #REQUIRED>
				<!ELEMENT attribut (#PCDATA) >
				<!ATTLIST attribut nom CDATA #REQUIRED>
		 ]>";
		 /*echo "<?xml-stylesheet type='text/xsl' href='figure.xsl'?>";*/
		 echo "<root>";
		 echo "<figure type=\"".$type_figures[$case]."\">";
		 for($i= 0; isset($attributs_name[$case][$i]); $i++)
						echo "<attribut nom=\"".$attributs_name[$case][$i]."\">".$attributs_value[$case][$attributs_name[$case][$i]]."</attribut>";
				echo "</figure>";
		 echo "</root>";
		 }
		 
	cloner_figure_XML();
?>