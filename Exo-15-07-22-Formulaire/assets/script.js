function afficher1() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let total = `${nom} ${prenom}`
    document.getElementById("result").value = total;
}

// autre soluce avec des name="" : f[2].onclick = function ()
            // {f.nom_prenom.value = f[0].value +" "+ f[1].value}