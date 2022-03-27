module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          // Use React 17 automatic JSX runtime.
          jsxRuntime: "automatic",
        },
      ],
      ['@babel/preset-env',
        {
          targets: { node: 'current' }
        }
      ]
    ],
    plugins: ["react-native-reanimated/plugin"],
  };
};
