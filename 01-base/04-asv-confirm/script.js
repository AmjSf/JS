/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let status=true
    while(status==true){
        let nom=prompt("What is you surname?")
        let prenom=prompt("What is you firstname?")
        let age=prompt("How old are you?")
        let rep=confirm("Est-ce que vous etes bien "+nom+" "+prenom+" et vous etes agés de "+age)
        if (rep){
            status=false
        }
    }
    // your code here
})();
