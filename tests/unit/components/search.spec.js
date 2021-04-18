import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import search from "@/components/Search.vue";
import VueRouter from "vue-router";
import { routes } from "@/router/index";
jest.mock("axios", () => ({
  get: () =>
    Promise.resolve({
      data: [
        {
          score: 99,
          show: {
            id: 240,
            url: "http://www.tvmaze.com/shows/240/cops",
            name: "Cops",
            genres: ["Action", "Drama"]
          }
        },
        {
          score: 98,
          show: {
            id: 241,
            url: "http://www.tvmaze.com/shows/241/benched",
            name: "Benched",
            genres: ["Thriller", "Comedy"]
          }
        }
      ]
    })
}));
// import moxios from "moxios";
// import {
//   searchedShows,
// } from "../testing-data.js";
describe("Search.vue", () => {
  let searchWrapper;
  const router = new VueRouter({ routes });
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    // moxios.install();
    searchWrapper = shallowMount(search, {
      localVue,
      router
    });
  });

  afterEach(() => {
    searchWrapper.destroy();
    // moxios.uninstall();
  });
  it("is a Vue instance", () => {
    expect(searchWrapper.isVueInstance).toBeTruthy();
  });
  it("created assigns shows", () => {
    expect(searchWrapper.vm.shows).not.toBe(undefined);
  });
  it("getting searchshow data", () => {
    searchWrapper.vm.$nextTick(() => {
      expect(searchWrapper.vm.shows.length).toBe(2);
    });
  });

  // it("getting show list works", (done) => {
  //   expect(searchWrapper.vm.shows.length).toBe(0);

  //   moxios.wait(function() {
  //     let request = moxios.requests.mostRecent();
  //     request
  //       .respondWith({
  //         status: 200,
  //         response: searchedShows,
  //       })
  //       .then(function() {
  //         expect(searchWrapper.vm.shows.length).toBe(3);
  //         done();
  //       });
  //   });
  // });
});
