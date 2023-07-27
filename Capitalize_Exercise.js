/*Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

capitalize('eggplant') // "Eggplant"
capitalize('pamplemousse') // "Pamplemousse"
capitalize('squid') //"Squid"
*/

// DEFINE YOUR FUNCTION BELOW:
function capitalize(word){
    return word[0].toUpperCase()+word.slice(1);
    
    
}

SOLUTION #2:

// A bit more explicit solution:

function capitalize(word) {
  const firstLetterCapitalized = word[0].toUpperCase();
  const restOfTheString = word.slice(1);
  return firstLetterCapitalized + restOfTheString;
}
