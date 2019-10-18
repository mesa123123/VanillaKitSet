class FirstComponent extends HTMLElement {
//TODO: Create a vanilla form of JSX
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.text = this.getAttribute('text')
    }
    
    connectedCallback() {
        this.shadowRoot.innerHTML = '<h1>First Component</h1>'
    }
}

customElements.define('first-component', FirstComponent)

