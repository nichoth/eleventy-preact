import { html } from 'htm/preact';
import BaseWrapper from './base-wrapper.js';
import LikeForm from './like-form.js';

const SectionMasonry = ({ data }) => html`
  <${BaseWrapper}>
    <div class="section-masonry">
      ${data.images.map(({ alt, id, src }) => html`
        <div class="section-masonry-item">
          <img
            src=${src}
            alt=${alt}
            class="section-masonry-image"
            loading="lazy"
          />
          <${LikeForm} id=${id}/>
        </div>
      `)}
    </div>
  <//>
`;

export default SectionMasonry;
