module.exports = function babz(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
