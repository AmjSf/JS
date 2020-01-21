/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
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
    let x=0
    for (z = 0; z < 10; z++){
        node.insertRow()
        for (i = 0; i < 11; i++) {
            tabM=i.toString()+'*'+(z+1).toString()+'='+(i*(z+1)).toString()
            node.getElementsByTagName('tr')[z].insertCell()
            node.getElementsByTagName('td')[x].innerHTML = tabM
            x++
          }
    }
    


    document.getElementById("target").appendChild(node)
    console.log(document.getElementById("target"))
})();
