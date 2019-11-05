<?php
	header("Content-Type: text/xml");
	
	function modifier_figure_XML(){
		session_start();
		
		if(isset($_GET['id']))
			$id= $_GET['id'];
		else{
			echo ("erreur: id de la figure à passer en paramètres!!");
			exit();
			}
		
		if(isset($_SESSION['case']))
			$case= $_SESSION['case'];
		
		if(isset($_SESSION['type_figures']))
			$type_figures= $_SESSION['type_figures'];
		
		if(isset($_SESSION['attributs_name']))
			$attributs_name= $_SESSION['attributs_name'];
	
		if(isset($_SESSION['attributs_value']))
			$attributs_value= $_SESSION['attributs_value'];
		
		// On réinitialise tous les attributs
		for($i= 0; isset($attributs_name[$id][$i]); $i++){
				if(isset($attributs_value[$id][$attributs_name[$id][$i]]))
					unset($attributs_value[$id][$attributs_name[$id][$i]]);
				unset($attributs_name[$id][$i]);
		}
		
		// On enregistre l'identifiant de la figure
		$attributs_name[$id][0]= "identifiant";
		$attributs_value[$id][$attributs_name[$id][0]]= $id;
		
		for($i= 1; isset($_GET["champ".$i]); $i++){
			$attributs_name[$id][$i]=$_GET["champ".$i];
			$attributs_value[$id][$attributs_name[$id][$i]]=$_GET["valeur".$i];
			//echo " champ= ".$_GET["champ".$i]." & valeur= ".$_GET["valeur".$i];
		}
		 
		 // mise à jour des données contenues dans les variables de session
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
		if(isset($type_figures[$id])){
				echo "<figure type=\"".$type_figures[$id]."\">";
				for($j= 0; isset($attributs_name[$id][$j]); $j++)
						echo "<attribut nom=\"".$attributs_name[$id][$j]."\">".$attributs_value[$id][$attributs_name[$id][$j]]."</attribut>";
				echo "</figure>";
			}
		 echo "</root>";
		 }
		 
	modifier_figure_XML();
?>