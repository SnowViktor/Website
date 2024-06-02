// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    terser(),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist' },
        { src: 'src/assets/**/*', dest: 'dist/assets' }
      ]
    })
  ],
};