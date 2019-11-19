//TODO:create a module loader and bundler
const mountComponent = (domElement, componentToMount) => { 
    //The place to mount the target
    const mountTarget = document.querySelector(domElement)
    //POSBUG create a custom component to attach to the DOM
    customElements.define(componentToMount.type, createElement(componentToMount.template), {extends: componentToMount.childType})
    //Then attach the component to the target
    mountTarget.appendChild(componentToMount)
}

export default mountComponent

//CONCEPT: Vanilla Router Day 3 The create frontend framework tutorial shows a new element being created and then new text node being created, all out of the web component itself (the web component having both a type and a template and instead of passing in the mainDiv the name of the mainDiv is given and then queried from the page instead)
//COULDI: day6 because the customElements.define method takes a constructor it could take a custom method that outputs a class method?
//HOWDOI: day6 if I am to create custom components at the mounter in order to have custom named tags at the DOM I've got to somehow create new HTMLElement objects off of the templates in the component classes I've made in the component files
//HOWDOI: day5 Maybe I just use a function in the customelements.define here???