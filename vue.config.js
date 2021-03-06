const path = require("path");
module.exports = {
    publicPath: '/',
    lintOnSave: false,
    runtimeCompiler: true,
    configureWebpack: {
        //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
        resolve: {
            symlinks: false
        }
    },
    "transpileDependencies": [
        "vuetify"
    ],
    devServer: {
        host: 'localhost',
        port: 8585,
    },
}