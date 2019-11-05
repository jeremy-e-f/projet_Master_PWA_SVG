<?php
	header("Content-Type: text/xml");
	
	function ajouter_figure(){
		session_start();
		
		if(isset($_GET['type_figure']))
			$type= $_GET['type_figure'];
		else{
			echo "Le type de la figure doit passer en paramètres!";
			exit();
			}
			
		$case= $_SESSION['case'];
		$type_figures= $_SESSION['type_figures'];
		
		$attributs_name= $_SESSION['attributs_name'];
		$attributs_value= $_SESSION['attributs_value'];
		
		$type_figures[$case]= $type;
		
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
		$case++;
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
		 /*echo "<?xml-stylesheet type='text/xsl' href='./Fonction/creer_image.xsl'?>";*/
		 echo "<root>";
		 for($i= 0; $i< $case; $i++)
			if(isset($type_figures[$i])){
				echo "<figure type=\"".$type_figures[$i]."\">";
				for($j= 0; isset($attributs_name[$i][$j]); $j++)
						echo "<attribut nom=\"".$attributs_name[$i][$j]."\">".$attributs_value[$i][$attributs_name[$i][$j]]."</attribut>";
				echo "</figure>";
			}
		 echo "</root>";
		 }
		 
	ajouter_figure();
?>