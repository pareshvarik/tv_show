import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import moxios from "moxios";
import VueRouter from "vue-router";
import home from "@/views/Home.vue";
import {
  homeShows,
  homeShowsInRandom,
  showGenres,
  homeShowsByGenres,
  sortedHomeShows
} from "../testing-data.js";
describe("app.vue", () => {
  let homeWrapper;
  const router = new VueRouter({ path: "/", name: "Home" });
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    moxios.install();
    homeWrapper = shallowMount(home, {
      localVue,
      router
    });
  });

  afterEach(() => {
    homeWrapper.destroy();
    moxios.uninstall();
  });
  it("is a Vue instance", () => {
    expect(homeWrapper.isVueInstance).toBeTruthy();
  });
  it("mounted assigns loading, shows, popular", () => {
    expect(homeWrapper.vm.shows).not.toBe(undefined);
    expect(homeWrapper.vm.popularShow).not.toBe(undefined);
  });
  it("getting show list works", done => {
    expect(homeWrapper.vm.shows.length).toBe(0);
    expect(homeWrapper.vm.popularShow.length).toBe(0);

    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: homeShows
        })
        .then(function() {
          expect(homeWrapper.vm.shows.length).toBe(3);
          expect(homeWrapper.vm.popularShow.length).toBe(2);
          done();
        });
    });
  });
  it("return mostly rated shows based on ratings", () => {
    let data = homeShows;
    let sorted = homeWrapper.vm.mostRatedShow(data);
    expect(sorted).toStrictEqual(sortedHomeShows);

    let dataInRandom = homeShowsInRandom;
    sorted = homeWrapper.vm.mostRatedShow(dataInRandom);
    expect(sorted).toStrictEqual(sortedHomeShows);
  });
  it("compute genre titles", () => {
    homeWrapper.setData({
      shows: homeShows
    });
    expect(homeWrapper.vm.genresTitle).toStrictEqual(showGenres);
  });

  it("compute genres", () => {
    homeWrapper.setData({
      shows: homeShows
    });
    expect(homeWrapper.vm.genres).toStrictEqual(homeShowsByGenres);
  });
});
