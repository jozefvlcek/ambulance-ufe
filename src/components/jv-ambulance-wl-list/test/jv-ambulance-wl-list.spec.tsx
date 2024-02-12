import { newSpecPage } from '@stencil/core/testing';
import { JvAmbulanceWlList } from '../jv-ambulance-wl-list';

describe('jv-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JvAmbulanceWlList],
      html: `<jv-ambulance-wl-list></jv-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <jv-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jv-ambulance-wl-list>
    `);
  });
});
