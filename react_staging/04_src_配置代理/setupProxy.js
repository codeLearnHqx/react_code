const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  // 配置代理（可以多个）
  app.use(
    proxy.createProxyMiddleware("/api1", { // 遇见api1前缀的请求，就会触发该代理配置
      target: "http://localhost:5000", // 将请求转发到这里
      changeOrigin: true, // 控制服务器收到的响应头中Host字段的值
      pathRewrite: { "^/api1": "" },
    }),
    proxy.createProxyMiddleware("/api2", {
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: { "^/api2": "" },
    })
  );
};
