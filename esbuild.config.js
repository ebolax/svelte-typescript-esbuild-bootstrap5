import esbuild from "esbuild";
import esbuildSvelte from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";

const args = process.argv.slice(2);

let watch = args[0] === "dev";
let minify = args[0] === "prod";

esbuild.build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    watch,
    minify,
    outfile: "dist/index.js",
    plugins: [esbuildSvelte( {
        compileOptions: {css: true},
        preprocess: sveltePreprocess(),
    })]
});