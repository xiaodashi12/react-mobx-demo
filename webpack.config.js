const path=require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
module.exports = {
   entry: './src/index.js', //相对路径
   mode: 'development', // 设置mode
    devServer: {//开发服务器的配置
        //端口号配置，默认为8080
        port: 3000,
        //进度条
        progress: true,
        //指定打开浏览器显示的目录，默认为根目录（项目目录）
        contentBase: './dist'
    },
  module: {
    rules: [
        {
            test:/\.js|jsx$/, // 普通
            exclude: /node_modules/,
            include: path.resolve("src"),
            use:{
                loader: 'babel-loader',
                options: {// 用babel-loader把es6转es5
                    presets: ['@babel/preset-env','@babel/preset-react'],
                },
                plugins:[
                  ["@babel/plugin-proposal-decorators", { "legacy": true }],
                  ["@babel/plugin-proposal-class-properties", { "loose": true }]//处理装饰器
                ]
            }
        },
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test:/\.scss$/,
        loaders:['style-loader','css-loader','sass-loader']
     },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf)$/,
        use:{
          loader:'url-loader',
          options:{
              limit:200*1024,//图片小于200k使用base64转化 //否则用file-loader来产生真实的图片
              outputPath:'/img/',
              publicPath:'http:/www.hundsun.com'//只对图片进行处理
          }
        }
      }  
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
        template:'./public/index.html',//指定模板路径
        filename:'index.html',//指定文件名
        chunks:['main']
    }),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: '"development"'
      }
  })
  ]   
};