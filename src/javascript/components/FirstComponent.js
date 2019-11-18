//CONCEPT: Day4 I'm trying to create my own 'create element' function but using a web component:
// Frachets Code:
// const createElement = tagName => (strings, ...args) => ({
//     type: tagName, // this will be useful for the next chapter
//     template: strings.reduce(
//       (acc, currentString, index) => acc + currentString + (args[index] || ""),
//       ""
//     )
//   });
  
//   const p = createElement("p");
  
//   const firstName = "Marvin";
//   const lastName = "Frachet";
  
//   const { template } = p`Hello ${firstName} ${lastName} !`;
//   console.log(template);
//QUESTION: day5 is there a way I can somehow combine our approaches that I can use custom tag names, and the ease of mfrachets function to mount the components? i.e. marry the business ease with the cleaner approach of using a curried function? and is this even necessary??  -- See SecondComponent.js
// My Code:
class FirstComponent extends HTMLElement {
    //TODO: Create a vanilla form of JSX
        constructor(firstName, lastName){
            super();
            this.attachShadow({mode: 'open'})
            //bind arguements
            this.firstName = firstName
            this.lastName = lastName
        }
        
        connectedCallback() {
            this.shadowRoot.innerHTML = `Hello ${this.firstName} ${this.lastName}`
        }
    }
    
    customElements.define('first-component', FirstComponent)
export default FirstComponent
//QUESTION: Day4 get a version of jsx into this?? , I'm not sure if thats necessary, it might just be a case of creating the innerHTML and letting the class do the work as the tag?
//QUESTION: Day4 put the attributes i need to customize the component?, within the innerHTML using this.getattribute('attribute'), it seems to not need to be explicitly stated within the code , there seems to be implicit behaviour: "constructor(...args) { return super(...args);" re: Mozilla Docs Answer: Apparrently you just state it in the constructor similar to the way you would in any other object oriented programming language?
//REFLECT: Day5 The native components may be more about element naming and style guides for the business side of things rather than anything to do with directly helping the developer ref: https://codeburst.io/6-reasons-you-should-use-native-web-components-b45e18e069c2