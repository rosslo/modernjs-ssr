import type { RuntimePluginFuture } from "@modern-js/runtime";

const thirdPlugin = (): RuntimePluginFuture => ({
  name: "third-plugin",
  setup: (api) => {
    // Use the api to register hooks
    api.onBeforeRender((context) => {
      console.log("onBeforeRender - third");
      context.third = true;
    });

    api.wrapRoot((App) => {
      console.log("wrapRoot - third");

      return (props) => {
        console.log("props.third", props.third);

        return (
          <div>
            <div>Injected by wrapRoot lifecycle - third</div>
            <App {...props} />
          </div>
        );
      };
    });
  },
});

export default thirdPlugin;
