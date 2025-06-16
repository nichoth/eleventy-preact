import { html, render } from 'htm/preact';
import whenVisible from './utils/when-visible.js';
import LikeForm from './components/LikeForm.js';

const componentMap = {
  LikeForm,
};

const $componentMarkers = document.querySelectorAll('[data-cmp-id]');

Array.from($componentMarkers).forEach(($marker) => {
  const $component = $marker.nextElementSibling;

  whenVisible($component, () => {
    const { name, props } = window.__STATE__.components[$marker.dataset.cmpId];
    const Component = componentMap[name];

    render(html`<${Component} ...${props}/>`, $component.parentNode, $component);
  });
});
