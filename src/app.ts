import { html, render } from 'htm/preact'
import whenVisible from './utils/when-visible.js'
import LikeForm from './components/like-form.js'

declare global {
    interface Window { __STATE__: any; }
}

const componentMap = {
    LikeForm,
}

const $componentMarkers =
    document.querySelectorAll('[data-cmp-id]') as NodeListOf<HTMLElement>

Array.from($componentMarkers).forEach(($marker:HTMLElement) => {
    const $component = $marker.nextElementSibling!

    whenVisible($component, () => {
        const {
            name,
            props
        } = window.__STATE__.components[$marker.dataset.cmpId!]
        const Component = componentMap[name]

        render(
            html`<${Component} ...${props}/>`,
            $component.parentNode as HTMLElement
        )
    })
})
