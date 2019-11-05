<?php

function supprimer_figure(){

	if(isset($_GET['id']))
			$id= $_GET['id'];
		else{
			echo ("erreur: id de la figure à passer en paramètres!!");
			exit();
			}
	
	session_start();
	
	if(isset($_SESSION['type_figures'])){
		$type_figures= $_SESSION['type_figures'];
		if(isset($type_figures[$id])){
			unset($type_figures[$id]);
			$_SESSION['type_figures']= $type_figures;
		}
	}
	
	if(isset($_SESSION['attributs_name']))
		$attributs_name= $_SESSION['attributs_name'];
	
	if(isset($_SESSION['attributs_value']))
		$attributs_value= $_SESSION['attributs_value'];
		
	for($i= 0; isset($attributs_name[$id][$i]); $i++){
			if(isset($attributs_value[$id][$attributs_name[$id][$i]]))
				unset($attributs_value[$id][$attributs_name[$id][$i]]);
			unset($attributs_name[$id][$i]);
	}
	$_SESSION['attributs_name']= $attributs_name;
	$_SESSION['attributs_value']= $attributs_value;
	echo "Suppression reussie de la figure n°".id." !";
}

supprimer_figure();
?>