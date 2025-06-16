import { html } from 'htm/preact';
import BaseWrapper from './base-wrapper.js';
import LikeForm from './like-form.js';

const SectionMasonry = ({ data }) => html`
  <${BaseWrapper}>
    <div class="SectionMasonry">
      ${data.images.map(({ alt, id, src }) => html`
        <div class="SectionMasonry__item">
          <img
            src=${src}
            alt=${alt}
            class="SectionMasonry__image"
            loading="lazy"
          />
          <${LikeForm} id=${id}/>
        </div>
      `)}
    </div>
  <//>
`;

export default SectionMasonry;
