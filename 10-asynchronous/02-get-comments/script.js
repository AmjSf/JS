/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'an_array et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let an_array=[]
    function comm(error, comment) {
        an_array.forEach(element => {
            element["comments"] = comment
        });
        console.log(an_array)
    }
    
    function getcom(error, article) {
        an_array = article;
        article.forEach(element => {
            window.lib.getComments(element.id, comm)
        });
    }
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts(getcom)
    });
    
    
})();
