import { mount } from "@vue/test-utils";
import CoreInput from "@/components/core/CoreInput.vue";

describe("CoreInput", () => {
  it("should emit a value", async () => {
    const wrapper = mount(CoreInput);
    wrapper.vm.$emit("update:modelValue", "123");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")[0]).toEqual(["123"]);
  });
});