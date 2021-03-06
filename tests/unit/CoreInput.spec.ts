import { mount } from "@vue/test-utils";
import CoreInput from "@/components/core/CoreInput.vue";

describe("CoreInput", () => {
  it("should emit a value", async () => {
    const wrapper = mount(CoreInput, {
      props: {
        modelValue: "name",
      },
    });

    wrapper.vm.$emit("update:modelValue", "123");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")).toEqual([["123"]]);
  });

  it("should emit an event on blur", async () => {
    const wrapper = mount(CoreInput, {
      props: {
        modelValue: "name",
      },
    });

    wrapper.find("input").trigger("blur");
    expect(wrapper.emitted("on-blur")).toBeTruthy();
  });
});
