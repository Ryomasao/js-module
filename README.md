# 検証

## 参考

強すぎる。  
https://numb86-tech.hatenablog.com/entry/2020/08/17/020022

yarnのworkspaceを活用してるので、こちらも。  
https://numb86-tech.hatenablog.com/entry/2020/07/21/155343

## PTN1 web×webpack ← js-cjs

問題なし。
webpackは、ESMをCJSにするので、パッケージ側がCJSである分には問題ない。  

パッケージ側

```js 
module.exports = () => {
  const getNumber = require('./sub').getNumber
  return 100 + getNumber()
}
```

app側

```js
import jsCjs from 'js-cjs'

const bodyText = jsCjs();

if(typeof window !== 'undefined') {
  document.getElementById('app').innerHTML = `
   <h1>
    Yes!! ${bodyText}
   </h1>
  `
}
// for debug
console.log(bodyText)
```

```sh
# build
yarn build:web-webpack
# serve
yarn serve:web-webpack
```

:::tip
パッケージ側で、デフォルトでexportさせたいときに、`module.exports`ではなく、`exports.default`とした場合はうまくいかなかった。
:::

### 補足

webpackによりバンドルされたjsはnodeで実行できるのか？
→ バンドルされたものはCJSなので利用できる。尚、ブラウザのAPIは当然利用できない。 

```
# OK
node app/web-webpack/dist/app.js
```
バンドルされてないコードは実行できるのか？
→ nodeはデフォルトcjsとして解釈するので、`import`を利用している場合はNG。

```
# NG
node app/web-webpack/src/app.js
```

ただし、Node12?以降から、ESMとして実行することもできる。

appの`package.json`

```js
{
  "name": "web-webpack",
  "version": "1.0.0",
+ "type": "module"
}
```

```
# OK
node app/web-webpack/src/app.js
```

が、この状態でwebpackを実行すると、ESMとして利用されるので、`webpack.config.js`内で`require`をしてる場合はNGとなる。

その場合、`webpack.config.js`ESMの形式に置き換える。


```js
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: false,
  devServer: {
    contentBase: "dist",
  }
};
```

## PTN2 node ← js-cjs

問題なし。
PTN1の補足のnodeでバンドルされてないappを実行するのと同じ。

## PTN3 web×webpack ← js-esm

こっから

## PTN4 node ← js-esm