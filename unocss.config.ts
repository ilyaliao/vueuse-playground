import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    presetTypography,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
  } from 'unocss'
  
  export default defineConfig({
    shortcuts: [],
    presets: [
      presetUno(),
      presetAttributify(),
      presetTypography(),
      presetIcons({
        scale: 1.2,
        warn: true,
      }),
    presetWebFonts({
        fonts: {
          roboto: 'Roboto',
        },
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  })
