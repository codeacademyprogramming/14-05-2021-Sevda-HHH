const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractplugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: 'production',

})