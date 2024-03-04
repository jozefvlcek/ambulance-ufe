import { newE2EPage } from '@stencil/core/testing';

describe('jv-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jv-ambulance-wl-editor></jv-ambulance-wl-editor>');

    const element = await page.find('jv-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
