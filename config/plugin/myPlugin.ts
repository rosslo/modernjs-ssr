import type { RuntimePluginFuture } from "@modern-js/runtime";

const myRuntimePlugin = (): RuntimePluginFuture => ({
  name: "my-runtime-plugin",
  setup: (api) => {
    // Use the api to register hooks
    api.onBeforeRender((context) => {
      console.log("Before rendering:", context);
    });

    api.wrapRoot((App) => {
      console.log("wrapRoot lifecycle returns null");

      return (props) => null;
    });
  },
});

export default myRuntimePlugin;
