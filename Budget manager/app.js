"use strict";

function budget() {
  let budgetName = window.prompt(
    "Quel nom voulez vous attribuer à votre Budget?"
  );
  document.write("<h2>" + budgetName + "</h2>");
}

function askBudget() {
  let budgetMontant = parseInt(
    window.prompt("A combien se monte votre budget?")
  );
  if (isNaN(budgetMontant)) {
    alert("ce n'est pas un chiffre");
    return askBudget();
  }
  document.write("<h2>" + budgetMontant + "€ </h2>");
}

function init() {
  budget();
  askBudget();
}

init();
