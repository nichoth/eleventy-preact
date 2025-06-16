import { html } from 'htm/preact'
import render from 'preact-render-to-string'
import type { VNode } from 'preact'
import App from './components/app'

interface PageData {
  page: {
    slug: string;
    sections: Array<{
      name: string;
      data: unknown;
    }>;
  };
}

export default class {
    data () {
        return {
            title: 'Setting up Eleventy with Preact and htm',
            layout: 'layout.njk',
            pagination: {
                data: 'pages',
                size: 1,
                alias: 'page',
                addAllPagesToCollections: true,
            },
            permalink: ({ page }: PageData) => `/${page.slug}/index.html`,
        }
    }

    render (data: PageData): string {
        return render(html`<${App} page=${data.page}/>` as VNode)
    }
}
