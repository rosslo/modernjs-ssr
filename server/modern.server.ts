import { defineServerConfig } from '@modern-js/server-runtime';

import { modifyResBody } from '../src/middlewares';

export default defineServerConfig({
  renderMiddlewares: [
    {
      name: 'modify-res-body',
      handler: modifyResBody,
    },
  ],
});