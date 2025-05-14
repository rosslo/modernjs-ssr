import type { RuntimePluginFuture } from "@modern-js/runtime";

const firstPlugin = (): RuntimePluginFuture => ({
  name: "first-plugin",
  setup: (api) => {
    // Use the api to register hooks
    api.onBeforeRender((context) => {
      console.log("onBeforeRender - first");
      context.first = true;
    });

    api.wrapRoot((App) => {
      console.log("wrapRoot - first");

      return (props) => {
        console.log("props.first", props.first);

        return (
          <div>
            <div>Injected by wrapRoot lifecycle - first</div>
            <App {...props} />
          </div>
        );
      };
    });
  },
});

export default firstPlugin;
