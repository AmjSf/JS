/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let monstring=document.getElementById("target").innerHTML
    let monarray=monstring.split("")
    document.getElementById("target").innerHTML=''
    console.log(monarray)
    let temp=0
    for (elem in monarray){
        temp='<span class=lettre style=transition-duration:0.5s >'+monarray[elem]+'</span>'
        document.getElementById("target").innerHTML+=temp
    }
    for (i = 0; i < (document.getElementById("target").querySelectorAll("span").length); i++){
        document.getElementsByClassName('lettre')[i].style.opacity = "0"
    }
    let z=0
    function vis(){
        
    }
    var i = 0, howManyTimes = document.getElementById("target").querySelectorAll("span").length;
    function f() {
        console.log(i)
        document.getElementsByClassName('lettre')[i].style.opacity = "1"
        i++;
        if( i < howManyTimes ){
            setTimeout( f, 500 );
        }
    }
    f();   
})();
