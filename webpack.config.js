const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//打包带着html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//每次打包自动清理dist文件
const VueLoaderPlugin = require('vue-loader/lib/plugin')//vue插件
const CopyPlugin = require('copy-webpack-plugin');//将其他文件拷贝到dist文件夹下
//一上来暴露一个对象
module.exports = {
  //entry: path.resolve(__dirname,'src/index.js'),//入口
  entry: './src/index.js',//打包从这里开始
  output: {//出口
    path: path.resolve(__dirname, 'dist'),//从这里输出，方法resolve可以把打包完成后的文件放到dist文件夹里面，dist会自动创建
    filename: 'main.js'//这个就是打包后dist下的文件，名为main文件名
  },
  module: {//模块
    rules: [
      //这里配置各种loader,是要解析一些webpack去解析一些css文件图片之类的东西，里面写要解析的文件
      {
        test: /\.js$/,//对谁进行解析，这里是以.js结尾的都能解析
        exclude: /(node_modules|bower_components)/,//除了谁不解析，这里是除了node_modules文件不解析
        use: {//用哪个loader
        loader: 'babel-loader',//目前用babel-loader,他本身不能解析ES6语法，但他依赖preset-env去解析，
                                //因为他包含了ES6一系列的插件解析，所以babel-loader是可以解析ES6语法的
        options: {
        presets: ['@babel/preset-env']//这里面有好多插件每个插件都对应一个ES6语法
          }
        }
      },



      {
        test: /\.css$/,//先解析CSS
        use: [ 'vue-style-loader', 'css-loader' ]//这里是固定顺序，把解析出来的那个CSS文件创建各一个style标签
      },
    


      //打包图片,内部使用到filer-loader
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,//如果图片小于这个值，会被base64编码解析一个字符串，调效率，减少请求
              name:'[hash:8].[ext]',//默认值就是不写就用哈希算法把名字变为哈希值，:8是截取打包后哈希值的前8 位数后面这个代表扩展名一般不改，

              plugins: [//按需打包，省空间
                [
                  "component",
                  {
                    "libraryName": "element-ui",
                    "styleLibraryName": "theme-chalk"
                  }
                ]
              ]





            }
          }
        ]
      },

      //配置loader处理vue文件
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      //配置文字图标
      
        {
          test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
          loader: 'file-loader'
        }


      
    
    ]

  },



  plugins: [//插件
    //这里是配置插件，
    new HtmlWebpackPlugin({
      //找到html文件
    template: './src/public/index.html'
    
    }),



    //这里是清理插件
    new CleanWebpackPlugin(),

    //这里是vue插件
    new VueLoaderPlugin(),

    //将其他文件拷贝到dist文件夹下的插件
    new CopyPlugin([
      {
          from:path.resolve(__dirname,"src/public"),
          to:path.resolve(__dirname,'dist'),
          ignore:['index.html']
      }
  ])
  ],

  
  mode: "development",//这是设置为开发模式，也就是没有压缩，生产模式是压缩后的模式（默认就是生产模式）




  devServer: {
    port: 8080,//服务启动的端口
    open:true,//是否自动打开浏览器
    quiet:true,//输出少量的提示信息
    proxy:{//其实这就是一个代理
      '/api':{//告诉我们什么样的请求会转发
        target:'http://localhost:4000',//把转发的请求的路径默拼接到这后面并带上api

        pathRewrite:{'^/api':''},//这里是最后转换好的真正目标路径http://localhost:4000/user/info

        changeOrigin:true
        
      },
      
    }

  },


  devtool:"cheap-module-eval-source-map",//定位出错所在的原始代码行


  resolve:{
    extensions: [".js", ".json",".vue"],//不用再写扩展后缀名了
    alias:{
      '@':path.resolve(__dirname, 'src')//取别名让@代表根目录下的SRC
    }

  }
  
};