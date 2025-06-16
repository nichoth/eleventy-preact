import { html } from 'htm/preact';
import BaseWrapper from './BaseWrapper.js';

const SectionTeaser = ({ data }) => html`
  <${BaseWrapper}>
    <div class="SectionTeaser">
      ${data.map(teaser => html`
        <div class="SectionTeaser__item">
          <img
            class="SectionTeaser__image"
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
`;

export default SectionTeaser;
