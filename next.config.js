const withTM = require("next-transpile-modules")([
  "antd",
  "@ant-design/icons",
  "rc-util",
  "tailwindcss",
]);

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
});
