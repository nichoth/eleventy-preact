import { html } from 'htm/preact'
import BaseWrapper from './base-wrapper'

export default ({ data }) => html`
    <${BaseWrapper}>
        <div
            dangerouslySetInnerHTML=${{ __html: data.html }}
            class="s-content"
        />
    <//>
`
