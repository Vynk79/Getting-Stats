/* objectif: Demander à l'utilisateur d'indiquer une série de nombres entiers
et de terminer par un 0 pour clore cette liste.
Indiquer
1 combien de nombres ont été renseignés
2 Le plus petit et le plus grand nombre de cette liste
3 la somme de ces nombres
4 La moyenne de ces nombres
*/

//VARIABLES
let nombre = 0, rang = 0, somme = 0, moyenne = 0, minimum = 0, maximum = 0, liste = [];
//DEBUT ALGO
//Valeur de base N
nombre = 1; 
//Valeur de base rang
rang = 0;
//Condition pour terminer la liste
while (nombre != 0) {
    nombre = prompt('Veuillez saisir un nombre - 0 pour terminer la liste') ;
    liste[rang] = nombre ;
    if (nombre!=0) {
    console.log('Vous venez d\'entrer le nombre ' + nombre);
                   }
    rang++ ;
               }

// ne pas compter le O qui termine la liste
rang = rang-1;
console.log(rang +' nombres saisis');
//Retirer le 0 (dernière valeur) de la liste
liste.pop();
//Valeur du minimum et du maximum
minimum = liste[0];
maximum = liste[0];
for (let i=0 ; i < liste.length ; i++){
   if (minimum > liste[i]) {
       minimum = liste[i];
}
   if (maximum < liste[i]) {
    maximum = liste[i];
   }
}
console.log('compris entre ' + minimum + ' et ' + maximum);
//Calcul de la somme (Boucle)
for (let i=0;i<liste.length;i++)
    {somme += liste[i]++}
    console.log('pour une somme de ' + somme);
// Calcul Moyenne
moyenne = somme/rang
console.log('et une moyenne de ' + moyenne);
//Afficher les informations dans une pop up
recap = `
${rang} nombres saisies
Compris entre ${minimum} et ${maximum}
Pour une somme de ${somme}
Et une moyenne de ${moyenne}
`
alert(recap)

/*Ancienne methode pour afficher le recap) alert(rang + ' nombres saisis' + "\n" + 'Compris entre ' + minimum + ' et ' + maximum + '\n' + 'Pour une somme de ' + somme + '\n' + 'Et une moyenne de ' + moyenne)*/

//FIN ALGO




