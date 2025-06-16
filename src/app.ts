import { html, render } from 'htm/preact'
import whenVisible from './utils/when-visible.js'
import type { ComponentType } from 'preact'
import LikeForm from './components/like-form'

declare global {
    interface Window {
        __STATE__: {
            components: Record<string, {
                name: string;
                props: Record<string, unknown>;
            }>;
        };
    }
}

const componentMap: Record<string, ComponentType<any>> = {
    LikeForm
}

const $componentMarkers
    = document.querySelectorAll('[data-cmp-id]') as NodeListOf<HTMLElement>

Array.from($componentMarkers).forEach(($marker) => {
    const $component = $marker.nextElementSibling as HTMLElement

    whenVisible($component, () => {
        const { name, props } = window.__STATE__.components[$marker.dataset
            .cmpId as string]
        const Component = componentMap[name]

        render(
            html`<${Component} ...${props}/>`,
            $component.parentNode as HTMLElement
        )
    })
})
