/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    let d=new Date()
    const mois=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre']
    const jours=['Samedi','Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi']
    document.getElementById('target').innerHTML=jours[d.getDay()]+' '+d.getDate()+' '+mois[d.getMonth()]+' '+d.getFullYear()+', '+d.getHours()+'h'+d.getMinutes()
    
})();
