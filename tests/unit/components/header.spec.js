import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin, BButton } from "bootstrap-vue";
import VueRouter from "vue-router";

import topHeader from "@/components/Header.vue";

describe("Header.vue", () => {
  let headerWrapper;
  const router = new VueRouter({ path: "/search/:query", name: "Search" });
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    headerWrapper = shallowMount(topHeader, {
      localVue,
      router,
      stubs: ["router-link"]
    });
  });

  afterEach(() => {
    headerWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(headerWrapper.isVueInstance).toBeTruthy();
  });

  it("has called serched function", () => {
    const search = jest.fn();
    // const $route = {
    //   name: "Search",
    // };
    headerWrapper.setMethods({
      search: search
    });
    headerWrapper.find(BButton).trigger("click");
    expect(headerWrapper.vm.search).toHaveBeenCalled();
    // expect(headerWrapper.vm.$route.name).toBeUndefined();
  });

  // //give code coverage
  // it("has called serched function", () => {
  //   // headerWrapper.vm.search=jest.fn();
  //   headerWrapper.find(BButton).trigger("click");
  //   expect(headerWrapper.vm.search()).toHaveBeenCalled();
  //   });
});
