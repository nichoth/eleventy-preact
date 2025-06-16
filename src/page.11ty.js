/* eslint-disable class-methods-use-this */
import { html } from 'htm/preact';
import render from 'preact-render-to-string';
import App from './components/app.js';

export default class Page {
  data() {
    return {
      title: `Setting up Eleventy with Preact and htm`,
      layout: `layout.njk`,
      pagination: {
        data: `pages`,
        size: 1,
        alias: `page`,
        addAllPagesToCollections: true,
      },
      permalink: ({ page }) => `/${page.slug}/index.html`,
    };
  }

  render(data) {
    return render(html`<${App} page=${data.page}/>`);
  }
}
