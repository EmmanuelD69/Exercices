# Salaire et prime

Mini calculateur permettant de connaitre le salaire net à partir du salaire brut. L'utilisateur peut également saisir s'il a bénéficié d'une prime ce mois-ci.

## Étapes

1. Demander à l’utilisateur de saisir son salaire brut habituel (peut être à virgule)
2. Lui demander si ce mois ci il bénéficie d’une prime (`window.confirm`)
3. S’il bénéficie d’une prime, lui demander d’en saisir le montant
4. Afficher le montant total (avec ou sans prime) ainsi que le salaire net et le montant des charges (23% du brut)
5. Si l’utilisateur bénéficiait d’une prime, lui indiquer quel est le montant des charges qu’il paye habituellement`

## Affichage 
### Sans prime
>Pour un salaire brut de 1000€, vous bénéficiez d'un net de 770€.<br>
Le montant des charges s'élève donc à 230€.

### Avec prime
>Pour un salaire brut avec prime de 1100€, vous bénéficiez d'un net de 847€.<br>
Le montant des charges s'élève donc à 253€ au lieu des 230€ habituels.