const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
//const { RetryChunkLoadPlugin } = require('webpack-retry-chunk-load-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

module.exports={
    mode: 'production',
    entry: './src/index.js',
    output: {
        publicPath: '/',
        filename: '[name].[hash].js',
        path: path.resolve('dist')
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        usedExports: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',   
            filename: 'index.html',
        }),
        new LodashModuleReplacementPlugin(),
       // new BundleAnalyzerPlugin(),
       // new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|es/),//去除不必要的locale文件
        new webpack.ProvidePlugin({
            'intl': 'react-intl-universal',
            'React': 'react',
            'Cookies': 'js-cookie'
        }),
        // new RetryChunkLoadPlugin({
        //     maxRetries: 3
        // })
    ],
    // resolve: {
    //     alias: {
    //         "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons.js")
    //     }
    // },
    devServer:{
        contentBase: path.resolve('dist'),
        port: 8088,
        proxy: {
            '/api/*': {
                target: 'http://localhost:4000'
            },
        },
    }
}