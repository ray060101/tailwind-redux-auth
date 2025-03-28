const path = require('path');

// craco.config.js
module.exports = {
  webpack: {
    // 這是一些基本的 webpack 設置，根據您的需求修改
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
};
