/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let node=document.createElement("table")
    let col=document.createElement("td")
    node.insertRow()
    for (i = 0; i < 10; i++) {
        node.getElementsByTagName('tr')[0].insertCell()
        node.getElementsByTagName('td')[i].innerHTML = 'test'
      }
    
    document.getElementById("target").appendChild(node)
    console.log(document.getElementById("target"))
})();
