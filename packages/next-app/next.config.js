//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nx/next');
const { withTamagui } = require('@tamagui/next-plugin');

process.env.TAMAGUI_TARGET = 'web';
const disableExtraction = process.env.NODE_ENV === 'development';
if (disableExtraction) {
  console.log('Disabling static extraction in development mode for better HMR');
}

const tamaguiPlugin = withTamagui({
  useReactNativeWebLite: true,
  config: './tamagui.config.js',
  components: ['tamagui'],
  importsWhitelist: ['constants.js', 'colors.js'],
  logTimings: true,
  disableExtraction,
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = tamaguiPlugin({
  ...nextConfig,
  ...withNx({
    ...nextConfig,
    nx: {
      // Set this to true if you would like to to use SVGR
      // See: https://github.com/gregberge/svgr
      svgr: false,
    },
  }),
});
