<?php
	header("Content-Type: text/xml");
	
	function generer_xml(){
		session_start();
		
		$case= $_SESSION['case'];
		$type_figures= $_SESSION['type_figures'];
		$attributs_name= $_SESSION['attributs_name'];
		$attributs_value= $_SESSION['attributs_value'];	
		
		 echo "<?xml version='1.0' encoding='ISO-8859-1'?>";
		 /*echo "<?xml-stylesheet type='text/xsl' href='figure.xsl'?>";*/
		 echo "
		 <!DOCTYPE root[
			<!ELEMENT root (figure+) > 
			<!ELEMENT figure (attribut+)>
			<!ATTLIST figure type CDATA #REQUIRED>
				<!ELEMENT attribut (#PCDATA) >
				<!ATTLIST attribut nom CDATA #REQUIRED>
		 ]>";
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
		 
	generer_xml();
?>