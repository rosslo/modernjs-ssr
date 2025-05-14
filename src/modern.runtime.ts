import { defineRuntimeConfig } from "@modern-js/runtime";
import firstPlugin from "../config/plugin/firstPlugin";
import secondPlugin from "../config/plugin/secondPlugin";
import thirdPlugin from "../config/plugin/thirdPlugin";

export default defineRuntimeConfig({
  plugins: [firstPlugin(), secondPlugin(), thirdPlugin()],
});
