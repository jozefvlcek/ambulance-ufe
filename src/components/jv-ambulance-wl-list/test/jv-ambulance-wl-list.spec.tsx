import { newSpecPage } from '@stencil/core/testing';
import { JvAmbulanceWlList } from '../jv-ambulance-wl-list';

describe('jv-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JvAmbulanceWlList],
      html: `<jv-ambulance-wl-list></jv-ambulance-wl-list>`,
    });
    
    
    const wlList = page.rootInstance as JvAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);

  });
});
