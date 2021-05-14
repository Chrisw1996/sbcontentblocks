
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import { terser } from "rollup-plugin-terser";

const onwarn = warning => {
    // Silence circular dependency warning (from interactjs) (https://github.com/rollup/rollup/issues/1089)
    if (warning.code === 'CIRCULAR_DEPENDENCY') {
        return;
    }
  
    console.warn(`(!) ${warning.message}`);
}

export default [{
    input: 'src/contentbuilder.js',
    output: [
        {
            file: 'contentbuilder/contentbuilder.min.js',
            format: 'iife',
            name: 'ContentBuilder'
        },
        {
            file: 'contentbuilder/contentbuilder.js',
            format: 'iife',
            name: 'ContentBuilder'
        },
        {
            file: 'contentbuilder/contentbuilder.esm.js',
            format: 'esm'
        }
    ],
    plugins: [ 
        eslint({ //https://eslint.org/docs/rules/no-console
    		rules: {
                'no-console': 'off'
    			},
            exclude: ['node_modules/**'],
		}),
        nodeResolve(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        }),
        commonjs(),
        
        terser({
            include: [/^.+\.min\.js$/, '*esm*'], 
        })
     ],
    onwarn
}];