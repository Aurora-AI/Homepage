import { defineMiddleware } from "astro:middleware";

const protectedRoutes = ["/dashboard"];

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;

  if (!protectedRoutes.includes(pathname)) {
    return next();
  }

  const correctPassword = import.meta.env.AUTH_PASSWORD;
  const userToken = context.cookies.get('auth_token')?.value;

  if (userToken === correctPassword) {
    return next();
  }

  return context.redirect(new URL('/login', context.url));
});
