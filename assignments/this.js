/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding is when a function with "this" is called without (context?), it defaults to the window object 
* 2. implicit binding is when you call a function, whatever is left of the function is what "".this" is referring to.
* 3. new binding is when the "new" keyword makes "this" refer to the new object being created...   ???
* 4. explicit binding is when you use".call()", ".apply()", and ".bind()" to assign what you want "this" to refer to.
*
* write out a code example of each explanation above
*/

//                                      Principle 1
//                               code example for Window Binding (done)

// const sayAge = function() {
//     console.log(this.age);
// }
// const me = {
//     age: 23
// }
// sayAge(); // logs "undefined"

//                                      Principle 2
//                              code example for Implicit Binding (done)

// const me = {
//     name: 'Clark',
//     age: 23,
//     sayName: function(){
//         console.log(this.name);
//     }
// }
// me.sayName();  // logs "Clark"

//                                      Principle 3
//                              code example for New Binding

const Person = function(name, age , favColor) {
    this.name = name;
    this.age = age;
    this.favColor = favColor;
}
const joe = new Person("Joe", 35, "blue");
console.log(joe);

//                                      Principle 4
//                               code example for Explicit Binding (done)

// const introduce = function(lang1, lang2, lang3){
//     console.log(`Hello, i'm ${this.name} and I speak ${lang1}, ${lang2}, and ${lang3}.`);
// }

// const bob = {
//     name: 'Bobby',
//     age: 30
// }
//  let languages = ['english', 'spanish', 'german']
// // introduce.call(bob, languages[0], languages[1], languages[2]);
// introduce.apply(bob, languages);
// // let newFn = introduce.bind(bob, languages[0], languages[1], languages[2]);
// // newFn();