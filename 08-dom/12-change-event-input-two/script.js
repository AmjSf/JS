/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function num(array){
        let count = 0;
        for(var i = 0; i < array.length; ++i){
            if(parseInt(array[i])){
                count++;
            }
        }
        if (count>=2){
            return true
        }
        else{
            return false
        }
        
    }
    document.getElementsByName("pass-one")[0].addEventListener('input',() => {
        console.log(num(document.getElementsByName("pass-one")[0].value))
        console.log(document.getElementsByName("pass-one")[0].value)
        if(document.getElementsByName("pass-one")[0].value.length>=8 && num(document.getElementsByName("pass-one")[0].value)){
            document.getElementById("validity").innerHTML = "Ok"
        }
        else{
            document.getElementById("validity").innerHTML = "Pas ok"
        }
            
    })
})();
