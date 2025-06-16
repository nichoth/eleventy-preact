import { html } from 'htm/preact';

const SectionHero = ({ data }) => html`
  <div class="section-hero">
    <img
      class="section-hero-image"
      src=${data.image}
      alt=${data.title}
    />
    <p class="section-hero-info u-text-align-center">
      <span class="section-hero-title">
        ${data.title}
      </span>
      ${data.text}
    </p>
  </div>
`;

export default SectionHero;

// No direct CSS import, but if you have one, use './section-hero.css'
