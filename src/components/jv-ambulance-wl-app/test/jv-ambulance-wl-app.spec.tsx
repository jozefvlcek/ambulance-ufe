import { newSpecPage } from '@stencil/core/testing';
import { JvAmbulanceWlApp } from '../jv-ambulance-wl-app';

describe('jv-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [JvAmbulanceWlApp],
      html: `<jv-ambulance-wl-app base-path="/"></jv-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("jv-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [JvAmbulanceWlApp],
      html: `<jv-ambulance-wl-app base-path="/ambulance-wl/"></jv-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("jv-ambulance-wl-list");
  });
});