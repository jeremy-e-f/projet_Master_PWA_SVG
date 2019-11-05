<?php
	header("Content-Type: text/xml");
	
	function generer_xml_id(){
		session_start();
		
		if(isset($_GET['id']))
			$id= $_GET['id'];
		else{
			echo ("erreur: id de la figure à passer en paramètres!!");
			exit();
			}
			
		$case= $_SESSION['case'];
		$type_figures= $_SESSION['type_figures'];
		$attributs_name= $_SESSION['attributs_name'];
		$attributs_value= $_SESSION['attributs_value'];

		 echo "<?xml version='1.0' encoding='ISO-8859-1'?>";
		  echo "
		 <!DOCTYPE root[
			<!ELEMENT root (figure*) > 
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
		 
	generer_xml_id();
?>