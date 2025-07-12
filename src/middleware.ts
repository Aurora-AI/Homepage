import { defineMiddleware } from "astro:middleware";

// Define quais rotas serão protegidas
const protectedRoutes = ["/dashboard"];

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;

  // Se a rota acessada não estiver na lista de rotas protegidas,
  // permite o acesso e não faz nada.
  if (!protectedRoutes.includes(pathname)) {
    return next();
  }

  // Se a rota for protegida, o middleware verifica se existe um cookie de autenticação.
  // Este cookie será criado pela nossa página de login.
  const userAuthToken = context.cookies.get('auth_token')?.value;

  // A senha correta é lida de uma variável de ambiente segura no servidor.
  const correctPassword = import.meta.env.AUTH_PASSWORD;

  // Se o token do usuário for igual à senha correta, o acesso é liberado.
  if (userAuthToken === correctPassword) {
    return next();
  }

  // Caso contrário, o usuário é redirecionado para a página de login.
  return context.redirect('/login');
});
