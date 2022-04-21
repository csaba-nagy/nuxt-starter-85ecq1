import { defineNuxtConfig } from 'nuxt';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineNuxtConfig({
  buildModules: ['@unocss/nuxt'],
  unocss: {
    transformers: [transformerVariantGroup()],
    shortcuts: [
      [
        /^btn-(.*)$/,
        ([, c]) =>
          `bg-${c}-400 text-${c}-400 py-2 px-4 text-white rounded-lg hover:bg-${c}-600`,
      ],
      ['pending', 'grayscale'],
    ],
  },
});
