// src/components/my-component.js
import { LitElement, html, css } from 'lit';

class MyComponent extends LitElement {
  static styles = css`
    /* your styles here */
    @import url('../assets/style.css');
  `;

  render() {
    return html`
      <div>Hello, Lit!</div>
    `;
  }
}

customElements.define('my-component', MyComponent);