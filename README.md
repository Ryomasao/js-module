# 検証

## web×webpack ← js-cjs

- パッケージ側は、なんの設定もしてない。
- 利用する側は、これだけ。

```js
// 直接見に行くかんじがすごいね
import jsCjs from 'js-cjs/src/main'

const bodyText = jsCjs();
```

以下のエラーになる。

```js
// js_cjs_src_main__WEBPACK_IMPORTED_MODULE_0__ is not a function
const bodyText = js_cjs_src_main__WEBPACK_IMPORTED_MODULE_0__();
```

関数を実行しようとしてるけれど、`__WEBPACK_IMPORTED_MODULE_0__`の中身は、defaultを持つオブジェクトになってる。

```js
{
  default:() => {
    const getNumber = __webpack_require__(/*! ./sub */ "../../packages/js-cjs/src/sub.js").getNumber
    return 100 + getNumber()
}
```

