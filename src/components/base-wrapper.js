import { html } from 'htm/preact';

// No direct CSS import, but if you have one, use './base-wrapper.css'

const BaseWrapper = ({ children }) => html`
  <div class="base-wrapper">
    ${children}
  </div>
`;

export default BaseWrapper;
