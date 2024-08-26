// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/admin/users',
    createProxyMiddleware({
      target: 'http://localhost:3000/users',
      changeOrigin: true,
      pathRewrite: {
        '^/admin/users': '', // видаляє /admin з початку URL
      },
    })
  );

  app.use(
    '/admin/products',
    createProxyMiddleware({
      target: 'http://localhost:3000/products',
      changeOrigin: true,
      pathRewrite: {
        '^/admin/products': '', // видаляє /admin з початку URL
      },
    })
  );
};