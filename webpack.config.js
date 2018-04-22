import os from 'os';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HappyPack from 'happypack';

const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});

const babelLoader = {
    loader: 'babel-loader',
    options: {compact: false}
};

const jsHappyPack = new HappyPack({
    id: 'js',
    threadPool: happyThreadPool,
    loaders: [babelLoader]
});

const lessHappyPack = new HappyPack({
    id: 'less',
    threadPool: happyThreadPool,
    loaders: ['style-loader', 'css-loader', 'less-loader']
});

export default (env, argv) => {
    const mode = argv.mode || 'production';

    return {
        mode,
        entry: './app/app.js',
        output: {
            filename: mode === 'production' ? '[name].[hash:8].min.js' : 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: ''
        },
        plugins: [
            jsHappyPack,
            lessHappyPack,
            new HtmlWebpackPlugin({
                inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
                template: 'app/index.html',
                favicon: 'app/assets/images/favicon.ico'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'happypack/loader?id=js'
                },
                {
                    test: /\.less$/,
                    use: 'happypack/loader?id=less'
                },
                {
                    test: /favicon\.ico$/,
                    use: {loader: 'file-loader?name=[name].[ext]'}
                }
            ]
        }
    };
};