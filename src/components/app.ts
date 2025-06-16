import { html } from 'htm/preact'
import LayoutDefault from './layout-default'
import SectionMasonry from './section-masonry'
import SectionContent from './section-content.js'
import SectionHero from './section-hero.js'
import SectionTeaser from './section-teaser'

const sections = {
    content: SectionContent,
    hero: SectionHero,
    masonry: SectionMasonry,
    teaser: SectionTeaser,
}

export default ({ page }) => html`
    <${LayoutDefault}>
        <div class="App">
            ${page.sections.map(({ data, name }) => html`
                <${sections[name]} data=${data}/>
            `)}
        </div>
    <//>
`
