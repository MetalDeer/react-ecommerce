const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/index.tsx',
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isProd ? '[name].[contenthash].js' : '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.module\.css$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: isProd
                                    ? '[hash:base64]'
                                    : '[path][name]__[local]'
                            },
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            // Global CSS (regular .css files)
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            //favicon: './public/favicon.ico'
        }),
        ...(isProd ? [new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })] : [])
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        historyApiFallback: true,
        hot: true,
        port: 3000,
        open: true,
        compress: true
    }
};