/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let x=document.getElementsByTagName("img")[0].getAttribute("data-hover")
    function myf(){
        document.getElementsByTagName("img")[0].setAttribute("src",x) 
    }
    document.getElementsByTagName("img")[0].addEventListener("mouseover", myf);
    
})();
