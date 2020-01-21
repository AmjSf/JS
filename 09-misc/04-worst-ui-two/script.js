/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let inc=parseInt(document.getElementById('part-one').innerHTML)
    document.getElementById('part-one').addEventListener('click',() => {
        if(inc<=document.getElementById('part-one').getAttribute('data-max')){
            
            document.getElementById('part-one').innerHTML = inc
            inc+=1
        }else{
            inc=460
            console.log("else")
            console.log(inc)
        }
        document.getElementById('target').innerHTML ='+'+ document.getElementById('part-one').innerHTML + document.getElementById('part-two').innerHTML + document.getElementById('part-three').innerHTML + document.getElementById('part-four').innerHTML
    })
    let two=parseInt(document.getElementById('part-two').innerHTML)
    document.getElementById('part-two').addEventListener('click',() => {
        if(two<=document.getElementById('part-two').getAttribute('data-max')){
            
            if(two<10){
                document.getElementById('part-two').innerHTML = "0"+two
            }else{
                document.getElementById('part-two').innerHTML = two
            }
            two+=1
        }else{
            two=0
            console.log("else")
            console.log(two)
        }
        document.getElementById('target').innerHTML ='+'+ document.getElementById('part-one').innerHTML + document.getElementById('part-two').innerHTML + document.getElementById('part-three').innerHTML + document.getElementById('part-four').innerHTML
    })
    let three=parseInt(document.getElementById('part-three').innerHTML)
    document.getElementById('part-three').addEventListener('click',() => {
        if(three<=document.getElementById('part-three').getAttribute('data-max')){
            
            if(three<10){
                document.getElementById('part-three').innerHTML = "0"+three
            }else{
                document.getElementById('part-three').innerHTML = three
            }
            three+=1
        }else{
            three=0
            console.log("else")
            console.log(three)
        }
        document.getElementById('target').innerHTML ='+'+ document.getElementById('part-one').innerHTML + document.getElementById('part-two').innerHTML + document.getElementById('part-three').innerHTML + document.getElementById('part-four').innerHTML
    })
    let four=parseInt(document.getElementById('part-four').innerHTML)
    document.getElementById('part-four').addEventListener('click',() => {
        if(four<=document.getElementById('part-four').getAttribute('data-max')){
            if(four<10){
                document.getElementById('part-four').innerHTML = "0"+four
            }else{
                document.getElementById('part-four').innerHTML = four
            }
            four+=1
        }else{
            four=0
            console.log("else")
            console.log(four)
        }
        document.getElementById('target').innerHTML ='+'+ document.getElementById('part-one').innerHTML + document.getElementById('part-two').innerHTML + document.getElementById('part-three').innerHTML + document.getElementById('part-four').innerHTML 
    })
})();
