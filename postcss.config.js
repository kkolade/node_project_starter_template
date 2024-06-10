import autoprefixer from 'autoprefixer';
import postcssAdvancedVariables from 'postcss-advanced-variables';
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import postcssPartialImport from 'postcss-partial-import';
import postcssPresetEnv from 'postcss-preset-env';
import postcssSimpleVars from 'postcss-simple-vars';
// import customResolver from './src/utils/resolver.js';

export default {
  plugins: [
    postcssPartialImport({
      prefix: '_',
      extension: '.pcss',
    }),
    postcssMixins,
    postcssAdvancedVariables,
    postcssSimpleVars,
    postcssNested,
    postcssPresetEnv({
      browsers: 'last 2 versions',
      stage: 1,
    }),
    autoprefixer,
  ],
};
