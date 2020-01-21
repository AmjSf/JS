/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    //mes fonctions sont inutiles et j'adore ca
    let two=parseInt(document.getElementById('part-two').value)
    function r(){
        if(two<=document.getElementById('part-two').getAttribute('data-max')){
            if(two<10){
                document.getElementById('part-two').value = "0"+two
            }else{
                document.getElementById('part-two').value = two
            }
            two+=1
            document.getElementById('target').innerHTML ='+'+document.getElementById('part-one').value+document.getElementById('part-two').value+document.getElementById('part-three').value+document.getElementById('part-four').value
        }else{
            two=0
        }
        if( twoT ){
            setTimeout( r, 50 );
        }
    }
    let three=parseInt(document.getElementById('part-three').value)
    function s(){
        if(three<=document.getElementById('part-three').getAttribute('data-max')){
            if(three<10){
                document.getElementById('part-three').value = "0"+three
            }else{
                document.getElementById('part-three').value = three
            }
            three+=1
            document.getElementById('target').innerHTML ='+'+document.getElementById('part-one').value+document.getElementById('part-two').value+document.getElementById('part-three').value+document.getElementById('part-four').value
        }else{
            three=0
        }
        if( threeT ){
            setTimeout( s, 50 );
        }
    }
    let four=parseInt(document.getElementById('part-four').value)
    function t(){
        if(four<=document.getElementById('part-four').getAttribute('data-max')){
            if(four<10){
                document.getElementById('part-four').value = "0"+four
            }else{
                document.getElementById('part-four').value = four
            }
            document.getElementById('target').innerHTML ='+'+document.getElementById('part-one').value+document.getElementById('part-two').value+document.getElementById('part-three').value+document.getElementById('part-four').value
            four+=1
        }else{
            four=0
        }
        if( fourT ){
            setTimeout( t, 50 );
        }
    }
    let one=parseInt(document.getElementById('part-one').value)
    function u(){
        if(one<=document.getElementById('part-one').getAttribute('data-max')){
            if(one<10){
                document.getElementById('part-one').value = "0"+one
            }else{
                document.getElementById('part-one').value = one
            }
            document.getElementById('target').innerHTML ='+'+document.getElementById('part-one').value+document.getElementById('part-two').value+document.getElementById('part-three').value+document.getElementById('part-four').value
            one+=1
        }else{
            one=460
        }
        if( oneT ){
            setTimeout( u, 50 );
        }
    }
    let twoT=false
    let threeT=false
    let fourT=false
    let oneT=false
    document.getElementById('fix-part-two').addEventListener('click',() => {
        twoT=!twoT
        r()
    })
    document.getElementById('fix-part-three').addEventListener('click',() => {
        threeT=!threeT
        s()
    })
    document.getElementById('fix-part-four').addEventListener('click',() => {
        fourT=!fourT
        t()
    })
    document.getElementById('fix-part-one').addEventListener('click',() => {
        oneT=!oneT
        u()
        
    })
})();
