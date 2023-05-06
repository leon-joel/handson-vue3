# ハンズオンの概要

## 作成するもの

このハンズオンでは、簡単な商品の一覧を表示し、購入する商品を選択できるプログラムを作成します。プログラムを作成する過程で Vue.js の基本を学べます。

![vue-app](./images/sample.png)

> このハンズオンを完了した場合の完成イメージは [こちら](https://handson-example.vuejs-jp.org/) で確認できます。

## Vue.js を使わない場合

Vue.js でのハンズオンに入る前に Vue.js を使わないで実装した場合のプログラムを見てみましょう。

index.html

<<< @/../examples/overview/index.html

style.css

<<< @/../examples/overview/style.css

## 商品表示部分の説明

簡単ですが、商品表示部分を説明します。

- `<div class="thumbnail">~</div>` の部分では商品のサムネイル画像を表示しています。
- `<div class="description">~</div>` の部分では商品の名前と説明を表示しています。
- `<span class="price">~</span>` の部分では商品の値段を表示しています。

<!-- htmlはregion機能が使えないため直書き -->
```html
<div class="item">
  <div class="thumbnail">
    <img src="./images/item1.jpg" alt="" />
  </div>
  <div class="description">
    <h2>アボカドディップバケット</h2>
    <p>
      刻んだ野菜をアボカドと混ぜてディップに。こんがり焼いたバゲットとお召し上がりください。
    </p>
    <span>¥<span class="price">480</span></span>
  </div>
</div>
```

## Vue.js を使わない場合の問題点

Vue.js を使わない場合、例えば次のような問題が発生します。

- 商品の情報と HTML のタグが混ざっていて見通しが悪い
- 複数の商品を記述するとき、同じ構造のタグを繰り返す必要がある
- 商品を増減するとき、タグを追加・削除する手間がかかる
- 商品の状態（売り切れや金額表記など）によって情報やタグを書き分ける必要がある
- インタラクションを実装するとき、HTML と JavaScript が依存関係になる

## Vue.js を使った場合のプログラム

記述の意味はハンズオンで順を追って説明していきますが、 Vue.js に変更後のコードをみてみましょう。

App.vue

<<< @/../src/App.vue

`<template>~</template>` 部分は見た目の表示が記述されています。冗長な記述が減っていて Vue.js を使わない場合に比べてとても短いですね。

`<script setup>~</script>` 部分は商品の情報や動作等が記述されています。特に `items` では商品の情報や状態だけのデータで HTML のタグがなくなっています。「見た目、処理、商品のデータ」がスマートに分かれており、見通しがよくなっているのが、既に感じられるかと思います。

他にも Vue.js の便利な機能はありますが、実際にハンズオンを進めていく中で体験していきましょう！