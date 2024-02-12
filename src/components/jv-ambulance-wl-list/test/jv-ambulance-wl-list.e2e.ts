import { newE2EPage } from '@stencil/core/testing';

describe('jv-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jv-ambulance-wl-list></jv-ambulance-wl-list>');

    const element = await page.find('jv-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
