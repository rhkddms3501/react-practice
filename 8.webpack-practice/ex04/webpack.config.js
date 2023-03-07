const path = require('path');
module.exports = {
    mode: "development",
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'assets/js/bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/i,        // 정규표현식 리터럴로 .css로 끝나면 대소문자 구분 안하고
            use: ['style-loader', 'css-loader']
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: 9090,
        liveReload: true,
        compress: true,
        hot: false,
    }
}