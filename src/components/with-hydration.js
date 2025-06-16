import { html } from 'htm/preact';
import isServer from '../utils/is-server.js';

let id = 0;

const withHydration = (Component) => (props) => {
  id += 1;

  const scriptSrc = `
    window.__STATE__.components[${id}]={name:${JSON.stringify(Component.name)},props:${JSON.stringify(props)}}
  `;

  return html`
    ${isServer && html`<script dangerouslySetInnerHTML=${{ __html: scriptSrc }} data-cmp-id=${id}></script>`}
    <${Component} ...${props}/>
  `;
};

export default withHydration;
