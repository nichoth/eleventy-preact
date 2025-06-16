export default class {
    data() {
        return {
            layout: 'layout.njk',
            permalink: '/'
        }
    }

    render() {
        return `
            <div id="app"></div>
            <script src="/app.js" type="module"></script>
        `
    }
}

