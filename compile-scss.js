const sass = require('node-sass');
const fs = require('fs');

// 入力ファイルと出力ファイルのパスを指定
const inputFile = 'src/style.scss';
const outputFile = 'dist/css/style.css';

// SCSSファイルをコンパイル
sass.render(
  {
    file: inputFile,
  },
  (error, result) => {
    if (!error) {
      // コンパイル成功時にCSSファイルを出力
      fs.writeFile(outputFile, result.css, (err) => {
        if (!err) {
          console.log('SCSS compiled successfully!');
        } else {
          console.error('Error writing CSS file:', err);
        }
      });
    } else {
      console.error('Error compiling SCSS:', error);
    }
  }
);
