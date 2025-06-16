import { html } from 'htm/preact';
import BaseWrapper from './BaseWrapper.js';

const SectionContent = ({ data }) => html`
  <${BaseWrapper}>
    <div
      dangerouslySetInnerHTML=${{ __html: data.html }}
      class="s-content"
    />
  <//>
`;

export default SectionContent;
