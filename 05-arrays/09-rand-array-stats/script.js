/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let num=[1,2,3,4,5,6,7,8,9,10]
    let min=101
    let max=0
    let sum=0
    document.getElementById("run").addEventListener("click", () => {
        for (i = 0; i < num.length; i++){
            idof="n-"+(i+1).toString()
            document.getElementById(idof).innerHTML = num[i]
            sum+=num[i]
            if (num[i]<min){
                min=num[i]
            }
            if (num[i]>max){
                max=num[i]
            }
            if (i==9){
                let moy=sum/10
                document.getElementById("average").innerHTML = moy
                document.getElementById("sum").innerHTML = sum
                document.getElementById("max").innerHTML = max
                document.getElementById("min").innerHTML = min
            }
        }
    })
    
})();
