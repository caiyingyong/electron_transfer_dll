/**************************************************

*************** electron环境下调用本地dll文件  **********

***************************************************/

1、全局安装node-gyp模块

npm install -g node-gyp

npm config set python python2.7

npm config set msvs_version 2015


2、npm install

3、.\node_modules\.bin\electron-rebuild.cmd


///////////////target：nw的版本

///////////////arch：系统位数（x64或ia32）

4、node-gyp rebuild --target=1.4.13 --arch=ia32 --dist-url=https://atom.io/download/electron

5、electron .运行。