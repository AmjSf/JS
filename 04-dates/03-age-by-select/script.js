/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

    let day=parseInt(document.getElementById('dob-day').value)
    let month=parseInt(document.getElementById('dob-month').value)
    let year=parseInt(document.getElementById('dob-year').value)
    let born= new Date (year,month,day)
    let now =new Date()
    let timebetween=now.getTime()-born.getTime()
    let agems=new Date(timebetween)
    let age=Math.abs(agems.getUTCFullYear()-1970)
    alert('You are '+age+' years old')
    })
})();
