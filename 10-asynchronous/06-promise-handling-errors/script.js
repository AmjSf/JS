/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var promised = lib.getPersons().then(value => {
            // fulfillment
            console.log(value)
          }, reason => {
            // rejection
            console.error("Y a une erreur mec")
          });
    });
})();
