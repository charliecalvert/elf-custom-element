// <hello-world> Web Component
class HelloWorld extends HTMLElement {

    connectedCallback() {
        this.textContent = 'Hello, World!';
    }

}

// register <hello-world> with the HelloWorld class
customElements.define('hello-world', HelloWorld);