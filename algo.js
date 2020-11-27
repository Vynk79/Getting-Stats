/* objectif: Demander à l'utilisateur d'indiquer une série de nombres entiers
et de terminer par un 0 pour clore cette liste.
Indiquer
1 combien de nombres ont été renseignés
2 Le plus petit et le plus grand nombre de cette liste
3 la somme de ces nombres
4 La moyenne de ces nombres
*/

//VARIABLES
let N = 0, rang = 0, somme = 0, moyenne = 0, minimum = 0, maximum = 0, listeN = [];
//DEBUT ALGO
//Valeur de base N
N = 1; 
//Valeur de base rang
rang = 0;
//Condition pour terminer la liste
while (N != 0) {
    N = Number (prompt('Veuillez saisir un nombre - Entrez 0 pour terminer la liste')) ;
    listeN[rang] = N ;
    if (N!=0) {
    console.log('Vous venez d\'entrer le nombre ' + N);
              }
    rang++ ;
               }
// ne pas compter le O qui termine la liste
rang = rang-1;
console.log(rang +' nombres saisis');
//Retirer le 0 de la liste
listeN.pop();
//Valeur du minimum et du maximum
minimum = Math.min(...listeN);
maximum = Math.max(...listeN);
console.log('compris entre ' + minimum + ' et ' + maximum);
//Calcul de la somme (Boucle)
for (let i=0;i<listeN.length;i++)
    {somme += listeN[i]++}
    console.log('pour une somme de ' + somme);
// Calcul Moyenne
moyenne = somme/rang
console.log('et une moyenne de ' + moyenne);
//Afficher les informations dans une pop up
alert(rang + ' nombres saisis' + "\n" + 'Compris entre ' + minimum + ' et ' + maximum + '\n' + 'Pour une somme de ' + somme + '\n' + 'Et une moyenne de ' + moyenne)
//FIN ALGO




