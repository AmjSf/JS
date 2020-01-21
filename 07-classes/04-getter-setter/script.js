/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person{
        constructor(firstname,lastname){
            this.firstname=firstname
            this.lastname=lastname
        }
        set name(astring){
            let an_array=astring.split(" ")
            this.firstname=an_array[0]
            this.lastname=an_array[1]
        }

        get name(){
            return `${this.firstname} ${this.lastname}!`
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        let aguy= new Person("Soufiane","Amjahad")
        console.log(aguy.name)
        aguy.name ="Hugo Bricoult"
        console.log(aguy.name)

    })
})();
