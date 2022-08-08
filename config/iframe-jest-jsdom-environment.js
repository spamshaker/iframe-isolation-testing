const {default: JSDOMEnvironment} = require('jest-environment-jsdom');
const {JSDOM} = require('jsdom');

const createWindow = (url) => new JSDOM('', {
  runScripts: 'dangerously',
  url
}).window;

class IFrameJSDOMEnvironment extends JSDOMEnvironment {
  constructor(config, context) {
    super(config, context);
    const windowTop = createWindow('http://localhost:8080/');
    const iframe = windowTop.document.createElement('iframe');
    iframe.src = 'child.html';
    windowTop.document.body.appendChild(iframe);
    this.dom.reconfigure({windowTop});
    Object.defineProperty(iframe, 'contentWindow', {value: this.dom.window});
    Object.defineProperties(this.dom.window, {
      parent: {value: windowTop},
      iframe: {value: iframe},
      fetch: {value: typeof fetch !== 'undefined' ? fetch : undefined}
    });
  }
}

module.exports = IFrameJSDOMEnvironment;
