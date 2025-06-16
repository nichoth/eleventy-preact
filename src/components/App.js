import { html } from 'htm/preact';
import LayoutDefault from './layout-default.js';
import SectionContent from './section-content.js';
import SectionHero from './section-hero.js';
import SectionMasonry from './section-masonry.js';
import SectionTeaser from './section-teaser.js';

const sections = {
  content: SectionContent,
  hero: SectionHero,
  masonry: SectionMasonry,
  teaser: SectionTeaser,
};

export default ({ page }) => html`
  <${LayoutDefault}>
    <div class="app">
      ${page.sections.map(({ data, name }) => html`
        <${sections[name]} data=${data}/>
      `)}
    </div>
  <//>
`;
