import { shallowMount } from "@vue/test-utils";
import ShowCast from "@/components/Cast.vue";
import { showCast } from "../testing-data";

describe("ShowCast.vue", () => {
  let cast;
  let wrapper;
  // cast = Object.assign({}, showCast);
  cast=showCast;
  wrapper = shallowMount(ShowCast, {
    propsData: {
      cast
    }
  });

  it("display cast person name", () => {
    expect(wrapper.find(".cast-person-name").exists()).toBe(true);
    expect(wrapper.find(".cast-person-name").text()).toBe(cast.person.name);
  });

  it("display cast character name as", () => {
    expect(wrapper.find(".cast-character-name").exists()).toBe(true);
    expect(wrapper.find(".cast-character-name").text()).toBe(
      cast.character.name
    );
  });

  it("returns character image when available", () => {
    expect(wrapper.vm.castImage).toStrictEqual(
      cast.character.image.medium || cast.character.image.original
    );
  });

  it("returns character medium image if available else character original", () => {
    cast.character.image.medium = null;
    const wrapper = shallowMount(ShowCast, {
      propsData: {
        cast
      }
    });
    expect(wrapper.vm.castImage).toStrictEqual(cast.character.image.original);
  });

  it("returns person image when character image not available", () => {
    cast.character.image = null;
    const wrapper = shallowMount(ShowCast, {
      propsData: {
        cast
      }
    });
    expect(wrapper.vm.castImage).toStrictEqual(
      cast.person.image.medium || cast.person.image.original
    );
  });

  it("returns person medium image if available else person original", () => {
    cast.person.image.medium = null;
    const wrapper = shallowMount(ShowCast, {
      propsData: {
        cast
      }
    });
    expect(wrapper.vm.castImage).toStrictEqual(cast.person.image.original);
  });

  it("returns null when no cast image available", async () => {
    cast.character.image = null;
    cast.person.image = null;
    const wrapper = shallowMount(ShowCast, {
      propsData: {
        cast
      }
    });
    expect(wrapper.vm.castImage).toStrictEqual(null);
  });
});
