/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    if (!localStorage.getItem("num")){
        localStorage.setItem('num',0)
    }
    document.getElementById("target").innerHTML = localStorage.getItem('num')
    document.getElementById("increment").addEventListener("click", () => {
        d=localStorage.getItem('num')
        d++
        localStorage.setItem('num',d)
        document.getElementById("target").innerHTML = d
    })
})();
