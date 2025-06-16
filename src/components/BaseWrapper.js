import { html } from 'htm/preact';

const BaseWrapper = ({ children }) => html`
  <div class="BaseWrapper">
    ${children}
  </div>
`;

export default BaseWrapper;
