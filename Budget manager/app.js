"use strict";
var budgetName;
var budgetMontant;
var spentName;
var spentMontant;
var totalSpent;

/* fonction ayant pour but de demander le nom du budget */
function nomBudget() {
  budgetName = window.prompt("Quel nom voulez vous attribuer à votre Budget?");
  document.write("<h2>" + budgetName + "</h2>");
}

/* fonction ayant pour but de demander le montant du budget */
function askBudget() {
  budgetMontant = parseInt(window.prompt("A combien se monte votre budget?"));
  /* si la saisie ne correspond pas à un chiffre, elle est demandée à nouveau */
  if (isNaN(budgetMontant)) {
    alert("Votre saisie est incorrecte, veuillez saisir un chiffre.");
    return askBudget();
  } else if (budgetMontant <= 0) {
    /* Et si la saisie est inférieure ou égale à 0, on demande une nouvelle saisie */
    alert("Votre budget ne peut pas être inférieur ou égal à 0");
    return askBudget();
  }
  document.write("<h2>" + budgetMontant + "€ </h2>");
}

/* fonction ayant pour but de demander le nom et le montant d'une dépense */
function spent() {
  spentName = window.prompt("Quel nom voulez vous attribuer à cette dépense?");
  document.write("<h2>" + spentName + "</h2>");

  spentMontant = parseInt(
    window.prompt("Quel est le montant de cette dépense?")
  );

  /* Tant que la saisie n'est pas un chiffre ou est inférieure ou égale à 0, on demande une nouvelle saisie*/
  while (isNaN(spentMontant) || spentMontant <= 0) {
    alert("Votre saisie est incorrecte, veuillez saisir un chiffre.");
    spentMontant = parseInt(
      window.prompt("Quel est le montant de cette dépense?")
    );
  }
  document.write("<h2>" + spentMontant + "€ </h2>");
}

/* fonction ayant pour but de calculer le montant disponible restant dans le budget */
function total() {
  totalSpent = budgetMontant - spentMontant;
  document.write(
    "<h1>Il vous reste " + totalSpent + "€ dans votre budget</h1>"
  );
}

/* c'est la fonction principale qui rassemble l'ensemble des fonction dans l'ordre prévu */
function init() {
  nomBudget();
  askBudget();
  spent();
  total();
}

/* on lance la fonction init au chargement du DOM */
init();
