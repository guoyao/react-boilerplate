import program from 'commander';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import webpackConfig from '../webpack.config';

program
    .option('-p, --port <n>', 'Set port for server', parseInt)
    .parse(process.argv);

const PORT = program.port || 8080;

const server = new WebpackDevServer(webpack(webpackConfig), {
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    lazy: false,
    historyApiFallback: true,
    stats: {
        chunks: false,
        colors: true
    }
});

server.listen(PORT, 'localhost', err => {
    if (err) {
        console.log(err);
    }
    console.log(`server start working, listening at localhost:${PORT}\n`);
});
