import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		})
	},
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],
			layout: resolve(__dirname,"./src/lib/components/layouts/Markdown.svelte")
		})
	],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
