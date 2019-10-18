//TODO:create a module loader and bundler
import './components/FirstComponent.js'

const mountComponents = (divName) => {
    const firstComponent = document.createElement('first-component')
    divName.appendChild(firstComponent)
    return divName
}

export default mountComponents