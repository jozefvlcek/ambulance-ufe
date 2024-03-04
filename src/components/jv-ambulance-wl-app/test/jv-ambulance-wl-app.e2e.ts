import { newE2EPage } from '@stencil/core/testing';

describe('jv-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jv-ambulance-wl-app></jv-ambulance-wl-app>');

    const element = await page.find('jv-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
