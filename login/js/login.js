function verifierAdresse(){
	var adresse = document.getElementById("adresse").value;
		if(adresse.includes("@gmail.com") ||
			adresse.includes("@yahoo.com") ||
			adresse.includes("@hotmail.com") ||
			adresse.includes("@outlook.com") ||
			adresse.includes("@live.com")
			){
			return true;
		}else{
			alert("Vérifier votre adresse !")
		}
}
function verifierMdp(){
	var mdp = document.getElementById("mdp").value;
	if(mdp.length < 8){
		alert("Le mot de passe doit dépasser 8 caractères!");
	}else if (mdp.length >= 16) {
		alert("Le mot de passe ne doit pas dépasser 16 caractères!");
	}
	else{return true;}
}
function envoyer(){
	if(verifierAdresse() == true && verifierMdp()== true){
		window.location.assign("../sejours/sejours.html");
	}
}