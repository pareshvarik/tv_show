import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import footer from "@/components/Footer.vue";

describe("Footer.vue", () => {
  let footerWrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    footerWrapper = shallowMount(footer, {
      localVue
    });
  });

  afterEach(() => {
    footerWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(footerWrapper.isVueInstance).toBeTruthy();
  });
});
