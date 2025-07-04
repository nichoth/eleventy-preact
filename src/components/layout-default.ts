import { html } from 'htm/preact'
import type { ComponentType, ComponentChildren } from 'preact'
import BaseWrapper from './base-wrapper'

interface Props {
  children: ComponentChildren;
}

const LayoutDefault: ComponentType<Props> = ({ children }) => html`
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
`

export default LayoutDefault
