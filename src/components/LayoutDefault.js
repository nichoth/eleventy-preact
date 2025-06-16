import { html } from 'htm/preact';
import BaseWrapper from './BaseWrapper.js';

const LayoutDefault = ({ children }) => html`
  <div class="LayoutDefault">
    <main>
      ${children}
    </main>
    <footer class="LayoutDefault__footer">
      <${BaseWrapper}>
        © Markus Oberlehner
      <//>
    </footer>
  </div>
`;

export default LayoutDefault;
