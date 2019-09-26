const withTM = require("next-transpile-modules");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
    withTM({
        transpileModules: ["umqombothi-component-library"],
        webpack(config, options) {
            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            });

            return config;
        }

    }),
);