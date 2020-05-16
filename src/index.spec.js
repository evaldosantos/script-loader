import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import { scriptLoader } from './index';

describe('scriptLoader', () => {
  beforeEach(() => {
    global.dom = new JSDOM(
      `<html>
        <body>
          <div id="container"></div>
        </body>
      </html>`,
      { url: 'http://localhost', resources: 'usable', runScripts: 'dangerously', }
    )

    global.window = dom.window;
    global.document = dom.window.document;
  })

  it('adds an script tag inside the DOM', async () => {
    await scriptLoader('https://apis.google.com/js/api.js')
    expect(window.document.documentElement.outerHTML).to.matchSnapshot();
  })
})