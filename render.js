const { createBundleRenderer } = require('vue-server-renderer');
const bundle = require('./dist/vue-ssr-server-bundle.json');
const WindowMock = require('window-mock').default;
let window = new WindowMock();
global.window = window;
global.localStorage = window.localStorage;
global.document = window.document;
const renderer = createBundleRenderer(bundle, {
  runInNewContext: false,
  template: require('fs').readFileSync('./template.html', 'utf-8'),
  clientManifest: require('./dist/vue-ssr-client-manifest.json')
});

renderer.renderToString({ url: '/' }, (error, html) => {
  if (error) throw error.stack;
  require('fs').writeFileSync('./dist/index.html', html);
});
