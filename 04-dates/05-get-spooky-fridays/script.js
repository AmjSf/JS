/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const mois=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre']
    const jours=['Samedi','Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi']
    document.getElementById("run").addEventListener("click", () => {
        let d=new Date(document.getElementById('year').value)
        let year=document.getElementById('year').value
        console.log(d.getUTCFullYear())
        for (i = 0; i < 12; i++) {
            d=new Date(year,i,13)
            if(d.getDay()==5){
                console.log(i)
                console.log(mois[i])
            }
          }
    })
})();
