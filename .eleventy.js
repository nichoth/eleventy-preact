// @ts-check
import path from 'node:path'
import { writeFile } from 'node:fs/promises'
import esbuild from 'esbuild'
import lightningCSS from '@11tyrocks/eleventy-plugin-lightningcss'

/**
 * @param {import('@11ty/eleventy/UserConfig').default} config
 */
export default async function (config) {
    config.addPlugin(lightningCSS)

    config.addExtension('ts', {
          outputFileExtension: 'js',
          compile: jsCompiler
      })

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
      };
};

function jsCompiler (_content, _path) {
    if (_path.split('/').length > 3) return  // filter out sub directories

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
    }
}
