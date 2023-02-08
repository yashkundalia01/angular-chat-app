const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;
const { shareAll } = require('@angular-architects/module-federation/webpack');
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../../tsconfig.base.json'), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: 'srcAppChatapp',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: 'module' },

      // For remotes (please adjust)
      // name: "srcAppChatapp",
      // filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './src/app/chatapp/src/app/app.component.ts',
      // },

      // For hosts (please adjust)
      remotes: {
        // angularChatApp: 'http://localhost:4200/remoteEntry.js',
        srcAppAuthenticate: 'http://localhost:4201/remoteEntry.js',
      },

      shared: {
        ...shareAll({
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
        }),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
