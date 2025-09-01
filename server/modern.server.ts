import { defineServerConfig, type MiddlewareHandler } from '@modern-js/server-runtime';


// Modify the Response Body
export const modifyResBody: MiddlewareHandler = async (c, next) => {
  await next();

  const { res } = c;
  const text = await res.text();
  const newText = text.replace('<body>', '<body> <h3>bytedance</h3>');

  c.res = c.body(newText, {
    status: res.status,
    headers: res.headers,
  });
};

export default defineServerConfig({
  renderMiddlewares: [
    {
      name: 'modify-res-body',
      handler: modifyResBody,
    },
  ],
});
