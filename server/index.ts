import { UnstableMiddleware } from "@modern-js/runtime/server";

const modifier: UnstableMiddleware = async (c, next) => {
  await next();

  const { response } = c;

  const text = await response.text();

  const newText = text.replace("<html>", `<html is-modified="true">`);

  c.response = c.body(newText, {
    status: response.status,
    headers: response.headers,
  });
};

export const unstableMiddleware: UnstableMiddleware[] = [modifier];
