function displayTableContent(){
  var tableau = ['HTML', 'CSS', 'JS', 'BOOSTRAP'];
  tableau.sort();
  const lowercase = tableau.map ( function (langage) { return langage.toLowerCase( ) });
  alert(lowercase + ' ');
}
/**************** Fonction d'origine Cécile
****** Ajout de la variable lowercase qui avec la méthode map() crée un nouveau tableau
avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
tous les éléments du tableau sont ensuite mis en minuscule.

function displayTableContent(){
  var tableau = ['HTML', 'CSS', 'JS', 'BOOSTRAP'];
  alert(document.getElementById('d1').innerHTML = tableau);
}
*/
/******************* Correction Émilie ***********************************/
// L'objet global array est utilisé pour créer des tableaux
// function displayArray(){
  // initialisation du tableau
//   var table = ['php', 'html', 'css', 'boostrap'];
//   //var btn = document.getElementById('d1').innerHTML;
// // sort : méthode JS qui opère le tri du tableau selon l'ordre alhabétique du tableau
//   table.sort();
//   table.toLowerCase();
//   alert(document.getElementById('d1').innerHTML = table);
//  ou console.log(table[0]);
//  alert(table[0]);
// }
// alert("nom de la variable"[0].toUpperCase());

/************************ Correction Adèle *********************
avec la méthode array.map
const uppercase = table.map (langage => langage.toUpperCase( ) )

console.log(uppercased) = BOOTSTRAP, HTML, CSS..

const uppercase = table.map ( function (langage) { return langage.toUpperCase( ) })
*/
