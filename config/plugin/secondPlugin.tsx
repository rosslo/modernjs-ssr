import type { RuntimePluginFuture } from "@modern-js/runtime";

const secondPlugin = (): RuntimePluginFuture => ({
  name: "second-plugin",
  setup: (api) => {
    // Use the api to register hooks
    api.onBeforeRender((context) => {
      console.log("onBeforeRender - second");
      context.data = "second";
    });

    api.wrapRoot((App) => {
      console.log("wrapRoot - second");

      return (props) => {
        console.log("props.second", props.data);

        return (
          <div>
            <div>Injected by wrapRoot lifecycle - second</div>
            <App {...props} />
          </div>
        );
      };
    });
  },
});

export default secondPlugin;
