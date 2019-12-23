"use strict";

/* fonction ayant pour but de demander le nom du budget */
function budget() {
  let budgetName = window.prompt(
    "Quel nom voulez vous attribuer à votre Budget?"
  );
  document.write("<h2>" + budgetName + "</h2>");
}

/* fonction ayant pour but de demander le montant du budget */
function askBudget() {
  let budgetMontant = parseInt(
    window.prompt("A combien se monte votre budget?")
  );
  /* si l'entrée ne correspond pas à un chiffre, elle est demandée à nouveau */
  if (isNaN(budgetMontant)) {
    alert("ce n'est pas un chiffre");
    return askBudget();
  }
  document.write("<h2>" + budgetMontant + "€ </h2>");
}

/* c'est la fonction principale qui rassemble l'ensemble des fonction dans l'ordre prévu */
function init() {
  budget();
  askBudget();
}

/* on lance la fonction init au chargement du DOM */
init();
