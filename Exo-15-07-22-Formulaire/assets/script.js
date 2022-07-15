function afficher1() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let total = `${nom} ${prenom}`
    document.getElementById("result").value = total;
}
