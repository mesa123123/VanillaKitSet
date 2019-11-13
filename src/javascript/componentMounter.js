//TODO:create a module loader and bundler
import './components/FirstComponent.js'

const mountComponents = (mainDiv) => { 
    const firstComponent = document.createElement('first-component')
    mainDiv.appendChild(firstComponent)
    return mainDiv
}

export default mountComponents

//CONCEPT: Vanilla Router Day 3 The create frontend framework tutorial shows a new element being created and then new text node being created, all out of the web component itself (the web component having both a type and a template and instead of passing in the mainDiv the name of the mainDiv is given and then queried from the page instead)