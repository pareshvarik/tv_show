import { shallowMount, createLocalVue } from "@vue/test-utils";

import VueRouter from "vue-router";
import app from "@/App.vue";
import topFooter from "@/components/Footer.vue";
import topHeader from "@/components/Header.vue";

describe("app.vue", () => {
  let appWrapper;
  const router = new VueRouter({ path: "/", name: "Home" });
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    appWrapper = shallowMount(app, {
      localVue,
      router
    });
  });

  afterEach(() => {
    appWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });
  it("renders the correct markup", () => {
    expect(appWrapper.html()).toContain('<div id="app">');
  });
  it('it should have a div element with id="app"', () => {
    expect(appWrapper.attributes("id")).toBe("app");
  });

  //for header tag testing
  it("it should load the footer", () => {
    expect(topHeader).toBeTruthy();
  });
  it("it should have a <header-stub></header-stub>", () => {
    expect(appWrapper.html()).toContain("<header-stub></header-stub>");
  });

  //for router tag tesing
  it("it should have a <router-view-stub></router-view-stub>", () => {
    expect(appWrapper.html()).toContain(
      '<router-view-stub name="default"></router-view-stub>'
    );
  });
  //for footer testing
  it("it should load the footer", () => {
    expect(topFooter).toBeTruthy();
  });
  it("it should have a <footer-stub></footer-stub>", () => {
    expect(appWrapper.html()).toContain("<footer-stub></footer-stub>");
  });
});
