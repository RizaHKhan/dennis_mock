import { mount } from "@vue/test-utils";
import CoreButton from "@/components/core/CoreButton.vue";

describe("CoreButton", () => {
  it("should emit on-click on click", async () => {
    const wrapper = mount(CoreButton);
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("on-click");
  });
});
