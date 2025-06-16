import { html } from 'htm/preact'
import type { ComponentType } from 'preact'
import BaseWrapper from './base-wrapper'
import LikeForm from './like-form'

interface ImageData {
  alt: string;
  id: number;
  src: string;
}

interface Props {
  data: {
    images: ImageData[];
  };
}

const SectionMasonry: ComponentType<Props> = ({ data }) => html`
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
`

export default SectionMasonry
