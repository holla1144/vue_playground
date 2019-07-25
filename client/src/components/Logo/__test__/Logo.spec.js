import { mount, RouterLinkStub } from '@vue/test-utils';
import Logo from '../Logo.vue';

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
  })
});
