<?php
function initialiser_session(){
		// initialiser_session
		session_start();
		
		// Derniere case
		if(isset($_SESSION['case'])== true){
			unset($_SESSION['case']);
		}
		$_SESSION['case'] = 0;
		
		// Tableau: type des figures
		if(isset($_SESSION['type_figures'])== true){
			unset($_SESSION['type_figures']);
		}
		$_SESSION['type_figures'] = array();
		
		//Tableau: nom des attributs
		if(isset($_SESSION['attributs_name'])== true){
			unset($_SESSION['attributs_name']);
		}
		$_SESSION['attributs_name'] = array();

		//Tableau: valeur des attributs
		if(isset($_SESSION['attributs_value'])== true){
			unset($_SESSION['attributs_value']);
		}
		$_SESSION['attributs_value'] = array();
	}
	?>