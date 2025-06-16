import { html } from 'htm/preact';
import BaseWrapper from './base-wrapper.js';

const LayoutDefault = ({ children }) => html`
  <div class="layout-default">
    <main>
      ${children}
    </main>
    <footer class="layout-default-footer">
      <${BaseWrapper}>
        © Markus Oberlehner
      <//>
    </footer>
  </div>
`;

export default LayoutDefault;
