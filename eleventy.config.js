// @ts-check
import path from 'node:path'
import { writeFile } from 'node:fs/promises'
import esbuild from 'esbuild'
import lightningCSS from '@11tyrocks/eleventy-plugin-lightningcss'
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * @param {import('@11ty/eleventy/UserConfig').default} config
 */
export default async function (config) {
    // Debug logging
    config.on('beforeBuild', () => {
        console.log('......................Starting Eleventy build...')
    })

    config.on('afterBuild', () => {
        console.log('Build complete....................................')
        console.log('Input directory:', path.join(__dirname, 'src'))
        console.log('Includes directory:', path.join(__dirname, 'src/_includes'))
    })

    config.setTemplateFormats(['njk', '11ty.js', '11ty.ts'])

    /**
     * __lightningCSS__
     * See {@link https://github.com/5t3ph/eleventy-plugin-lightningcss | Lightning CSS plugin docs}
     *
     * enables the following LightningCSS flags by default:
     *   - bundling - enables including other files via the `@import` syntax
     *   - nesting
     *   - minify
     *   - custom media queries
    */
    config.addPlugin(lightningCSS)

    config.addExtension(['js', 'ts'], {
        outputFileExtension: 'js',
        compile: jsCompiler
    })

    // Ignore CSS files in 11ty processing
    config.ignores.add('src/**/*.css')

    config.addCollection('pages', collection => {
        return collection.getAll().filter(item => {
            return item.inputPath.startsWith('./src/')
        })
    })

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    }
};

function jsCompiler (_content, _path) {
    // if (_path.split('/').length > 3) return  // filter out sub directories

    // put every file in the public path corresponding to the src path
    const pathParts = _path.split('src')
    const tail = pathParts.pop()
    const pathContainingFile = tail.split('/').filter(Boolean)
    const filename = pathContainingFile.pop()

    return async () => {
        const config = {
            entryPoints: [_path],
            target: 'es2022',
            define: {
                DEV: '' + (process.env.ELEVENTY_ENV !== 'production'),
                MODE: ('"' + process.env.ELEVENTY_ENV + '"'),
            },
            // see https://esbuild.github.io/api/#external
            external: [],
            treeShaking: true,
            // splitting: true,
            metafile: true,
            outfile: path.join(__dirname, 'public', ...pathContainingFile,
                filename.split('.').shift() + '.js'),
            sourcemap: true,
            // outdir: output,
            bundle: true,
            format: /** @type {'esm'} */ ('esm'),
            minify: !(process.env.ELEVENTY_ENV === 'development')
        }

        const { metafile } = await esbuild.build(config)
        await writeFile(
            path.join(__dirname, 'public', `${filename}.metadata.json`),
            JSON.stringify(metafile, null, 2)
        )

        return _content
    }
}
