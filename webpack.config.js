const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const Dotenv = require('dotenv-webpack');
module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "discord",
    projectName: "discord-clone",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
        // modify the webpack config however you'd like to by adding to this object

    externals: {
  },
      module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: "file-loader",
              },
            ],
          },
        ],
      },
      plugins: [
        new Dotenv()
      ]
  });
};
