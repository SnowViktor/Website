import {LitElement, html} from 'lit';

export class HomeIndex extends LitElement {
  static properties = {
    name: {},
  };

  constructor() {
    super();
    this.name = 'Code-Viktor';
  }

  render() {
    return html`
    <p>${this.name}</p>
    `;
  }
}
customElements.define('home-index', HomeIndex);