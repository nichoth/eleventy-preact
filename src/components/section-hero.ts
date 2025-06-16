import { html } from 'htm/preact'

export default ({ data }) => html`
    <div class="SectionHero">
        <img
            class="SectionHero__image"
            src=${data.image}
            alt=${data.title}
        />

        <p class="SectionHero__info u-text-align-center">
            <span class="SectionHero__title">
                ${data.title}
            </span>
            ${data.text}
        </p>
    </div>
`
