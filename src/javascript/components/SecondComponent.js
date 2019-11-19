//Mfrachets createElement function: https://mfrachet.github.io/create-frontend-framework/templating/template-literals.html#our-first-html-elements
const createElement = tagName => (strings, ...args) => ({
    type: tagName, // this will be useful for the next chapter
    template: strings.reduce(
      (acc, currentString, index) => acc + currentString + (args[index] || ""),
      ""
    )
  });
//mFrachets p function:
const p = createElement("p");
//mFrachets using custom function name:
export const User = ({firstName, lastName}) => {
 p`Hello ${firstName} ${lastName}`
}
//My Attempt
class trialComponent extends HTMLElement {
    constructor(tagName, strings, args){
        super();
        this.attachShadow({mode: open})
        this.tagName = tagName
        this.strings = strings
        this.args = args
    }

    createElement() {
        this.tagName => (strings, ...args) => {
            
        }
    }
}
customElements.define('user-section', User)
//COULDI: day5 define an array of what I am already going to add in the innerhtml of the webcomponent and then render it on the connected call back? is there a way to not need to do that?
//COULDI: day5 create a way of making a custom component that does what mfrachet does and then build out my boiler plate components as child classes from there?
//COULDI: day6 use a factory pattern in order to create custom tag names within new components?
//HOWDOI: day6 define a class that I don't know the name of yet?
//HOWDOI: day5 make a curried function into a method in js? perhaps https://stackoverflow.com/questions/42898930/create-es6-class-methods-from-other-class-methods
//HOWDOI: day5 make a class constructor with an ...args method?
//QUESTION: maybe I'm doing this the wrong way around? Perhaps I define the tagname at the mounter rather than within the component class itself?? I think the way I'm going about it here I'm going to have to mount the curried function to the class component and then mount the class component to the DOM, its going to take up too much time
//QUESTION: day5 why does he use {} with the ({}) in the USER arguments?
//CONCEPT: day5 What this approach is missing is being able to use the custom tag name within the element
//QUESTION: does a custom element need a class or can we simply define it as a function? - Check the component mounter file in order to see where I've thought of this more