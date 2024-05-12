const { withEsbuildOverride } = require('remix-esbuild-override');
const styledComponentsPlugin = require('./styled-components-esbuild-plugin');
const { createRoutesFromFolders } = require('@remix-run/v1-route-convention');

withEsbuildOverride((option) => {
  option.plugins.unshift(styledComponentsPlugin());

  return option;
});

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ['**/.*'],
  server: './server.js',
  serverBuildPath: 'functions/[[path]].js',
  serverConditions: ['worker'],
  serverDependenciesToBundle: 'all',
  serverMainFields: ['browser', 'module', 'main'],
  serverMinify: true,
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  future: {
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    // v2_meta: true,
    v2_routeConvention: true,
  },
  routes(defineRoutes) {
    // uses the v1 convention, works in v1.15+ and v2
    return createRoutesFromFolders(defineRoutes);
  },
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
};
