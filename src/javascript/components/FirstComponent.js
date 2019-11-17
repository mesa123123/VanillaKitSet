//CONCEPT: Vanilla Template Day 4: I'm trying to create my own 'create element' function but using a web component:
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
// My Code:
class FirstComponent extends HTMLElement {
    //TODO: Create a vanilla form of JSX
        constructor(){
            super();
            this.attachShadow({mode: 'open'})
        }
        
        connectedCallback() {
            this.shadowRoot.innerHTML = `Hello ${this.getAttibute('firstName')} ${this.getAttribute('lastName')}`
        }
    }
    
    customElements.define('first-component', FirstComponent)
//HOWDOI: get a version of jsx into this?? , I'm not sure if thats necessary, it might just be a case of creating the innerHTML and letting the class do the work as the tag?
//HOWDOI: put the attributes i need to customize the component?, within the innerHTML using this.getattribute('attribute'), it seems to not need to be explicitly stated within the code , there seems to be implicit behaviour: "constructor(...args) { return super(...args);" re: Mozilla Docs