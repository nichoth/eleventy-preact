import { html } from 'htm/preact'
import type { ComponentType } from 'preact'
import BaseWrapper from './base-wrapper'

interface TeaserData {
  image: string;
  title: string;
  text: string;
  link: string;
}

interface Props {
  data: TeaserData[];
}

const SectionTeaser: ComponentType<Props> = ({ data }) => html`
  <${BaseWrapper}>
    <div class="section-teaser">
      ${data.map(teaser => html`
        <div class="section-teaser-item">
          <img
            class="section-teaser-image"
            src=${teaser.image}
            alt=${teaser.title}
            loading="lazy"
          />
          <div class="s-content">
            <h2>
              ${teaser.title}
            </h2>
            <p>
              ${teaser.text}
            </p>
            <a href=${teaser.link}>
              read more »
            </a>
          </div>
        </div>
      `)}
    </div>
  <//>
`

export default SectionTeaser
