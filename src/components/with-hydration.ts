import { html } from 'htm/preact'
import type { ComponentType } from 'preact'
import isServer from '../utils/is-server'

let id = 0

const withHydration = <P extends object>(
    Component: ComponentType<P>,
): ComponentType<P> => (props: P) => {
        id += 1

        const scriptSrc = `
    window.__STATE__.components[${id}]={
        name:${JSON.stringify(Component.name)},
        props:${JSON.stringify(props)}
    }`

        return html`
        ${isServer && html`
            <script 
                dangerouslySetInnerHTML=${{ __html: scriptSrc }} 
                data-cmp-id=${id}
            />
        `}
        <${Component} ...${props}/>
    `
    }

export default withHydration
