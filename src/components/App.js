import { html } from 'htm/preact';
import LayoutDefault from './LayoutDefault.js';
import SectionContent from './SectionContent.js';
import SectionHero from './SectionHero.js';
import SectionMasonry from './SectionMasonry.js';
import SectionTeaser from './SectionTeaser.js';

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
