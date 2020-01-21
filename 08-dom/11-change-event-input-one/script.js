/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("pass-one").setAttribute("maxlength",10);
    document.getElementsByName("pass-one")[0].addEventListener('input',() => {
        document.getElementById("counter").innerHTML =document.getElementsByName("pass-one")[0].value.length+'/10'
    })
})();
