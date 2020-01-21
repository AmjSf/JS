/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
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
        temp='<span>'+monarray[elem]+'</span>'
        document.getElementById("target").innerHTML+=temp
    }
    
    console.log(document.getElementById("target").querySelectorAll("span")[1])
    for (i = 0; i < document.getElementById("target").querySelectorAll("span").length; i+=5){
        document.getElementById("target").querySelectorAll("span")[i].style.fontSize = "20px"
        if(i+1<document.getElementById("target").querySelectorAll("span").length){
            document.getElementById("target").querySelectorAll("span")[i+1].style.fontSize = "30px"
        }
        if(i+2<document.getElementById("target").querySelectorAll("span").length){
            document.getElementById("target").querySelectorAll("span")[i+2].style.fontSize = "40px"
        }
        if(i+3<document.getElementById("target").querySelectorAll("span").length){
            document.getElementById("target").querySelectorAll("span")[i+3].style.fontSize = "50px"
        }
        if(i+4<document.getElementById("target").querySelectorAll("span").length){
            document.getElementById("target").querySelectorAll("span")[i+4].style.fontSize = "60px"
        }
        
    }
            

})();
