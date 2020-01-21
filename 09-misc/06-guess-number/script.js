/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let num=Math.floor(Math.random() * 100) + 1  
    let answer=1000
    let tries=0
    let txt="Trouver le bon chiffre"
    while(num!==parseInt(answer)){
        tries++
        answer=prompt(txt+'         '+tries+' Essais')
        if (parseInt(answer)<num){
            txt='Plus grand'
        }else if(parseInt(answer)>num){
            txt='Plus petit'
        }else{
            txt='Bravo!!!!'
        }
        
    }
    alert(txt+' en '+tries+' Essais')
})();
