import { shallowMount } from "@vue/test-utils";
import ShowCast from "@/components/Cast.vue";
import { showCast } from "../testing-data";

describe("ShowCast.vue", () => {
  let cast;
  let castWapper;
  cast=showCast;
  castWapper = shallowMount(ShowCast, {
    propsData: {
      cast
    }
  });

  it("display cast person name", () => {
    expect(castWapper.find(".cast-person-name").exists()).toBe(true);
    expect(castWapper.find(".cast-person-name").text()).toBe(cast.person.name);
  });

  it("display cast character name as", () => {
    expect(castWapper.find(".cast-character-name").exists()).toBe(true);
    expect(castWapper.find(".cast-character-name").text()).toBe(
      cast.character.name
    );
  });

  it("returns character image when available", () => {
    expect(castWapper.vm.castImage).toStrictEqual(
      cast.character.image.medium || cast.character.image.original
    );
  });

  it("returns character medium image if available else character original", () => {
    cast.character.image.medium = null;
    const castWapper = shallowMount(ShowCast, {
      propsData: {
        cast
      }
    });
    expect(castWapper.vm.castImage).toStrictEqual(cast.character.image.original);
  });

  it("returns person image when character image not available", () => {
    cast.character.image = null;
    const castWapper = shallowMount(ShowCast, {
      propsData: {
        cast
      }
    });
    expect(castWapper.vm.castImage).toStrictEqual(
      cast.person.image.medium || cast.person.image.original
    );
  });

  it("returns person medium image if available else person original", () => {
    cast.person.image.medium = null;
    const castWapper = shallowMount(ShowCast, {
      propsData: {
        cast
      }
    });
    expect(castWapper.vm.castImage).toStrictEqual(cast.person.image.original);
  });

  it("returns null when no cast image available", async () => {
    cast.character.image = null;
    cast.person.image = null;
    const castWapper = shallowMount(ShowCast, {
      propsData: {
        cast
      }
    });
    expect(castWapper.vm.castImage).toStrictEqual(null);
  });
});
