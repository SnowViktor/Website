// src/components/my-component.js
import { LitElement, html, css } from 'lit';

class TextIndex extends LitElement {
  static styles = css`
    /* your styles here */
    @import url('../assets/index.css');
  `;

  render() {
    return html`
      <div>Code-Viktor</div>
    `;
  }
}

customElements.define('text-index', TextIndex);