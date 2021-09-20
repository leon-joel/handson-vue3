# v-if を使用した表示・非表示の切り替え

## 条件分岐で DOM 表示を制御する v-if

購入しようと思った商品が売り切れで購入できないと、せっかく購入しようとしたユーザをがっかりさせてしまいます。
そこで、売り切れの商品は非表示にするようにしてみましょう。

### v-if の基本の使いかた

Vue.js では特定の条件の時だけ DOM を生成し表示することができる、`v-if` というディレクティブが用意されています。
以下のように、表示・非表示を制御したい DOM 要素の属性として、 `v-if` を追加します。
`v-if` の値が `true` の場合は表示され、 `false` の場合は表示されません。

```html
<!-- 表示される -->
<div v-if="true">something</div>

<!-- 表示されない -->
<div v-if="false">something</div>
```

### プロパティの追加

それでは、`v-if` を使用して、売り切れの商品を非表示にしましょう。

まず、"売り切れかどうか"という情報を、`data` の商品情報に `soldOut` というプロパティを持たせてみましょう。
今回は `id` が `5` の商品を売り切れ状態にしてみます。
`id` が `5` の商品に `soldOut` というプロパティを追加し、 `true` を設定します。

```html
<template>
  <!-- 省略 -->
</template>

<script>
  export default {
    name: 'App',
    data: () => {
      return {
        items: [
          // id 1-4 省略
          {
            id: 5,
            name: '商品５',
            description: '商品５の説明です',
            price: 500,
            selected: false,
            // 売り切れかどうかを判断するプロパティを追加
            soldOut: true
          }
        ]
      }
    }
  }
</script>
```

### DOM 要素に v-if を追加

次に、DOM 要素に `v-if` を追加して、非表示にします。
1 つ 1 つの商品を表示している要素は以下の部分です。

```html
<template>
  <!-- 省略 -->
  <main class="main">
    <template v-for="item in items" :key="item.id">
      <!-- ここから商品表示 -->
      <div class="item">
        <div class="thumbnail">
          <img :src="item.image" alt="" />
        </div>
        <div class="description">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <span>¥<span class="price">item.price</span></span>
        </div>
      </div>
    </template>
  </main>
</template>
```

この `<div>` 要素に `v-if` を記述していきます。
`item.soldOut` が `true` の場合は、売り切れであることを示しています。
売り切れではない時、つまり `item.soldOut` が `false` の時だけ表示をさせたいため、ひと工夫必要です。
`v-if="item.soldOut"` としてしまうと、売り切れの場合のみ表示させることになってしまうため、`!` を使用して真偽値を逆転させて使用しましょう。

```html
<!-- <div>要素に v-if を追加 -->
<div v-if="!item.soldOut" class="item">
  <div class="thumbnail">
    <img :src="item.image" alt="" />
  </div>
  <div class="description">
    <h2>{{ item.name }}</h2>
    <p>{{ item.description }}</p>
    <span>¥<span class="price">item.price</span></span>
  </div>
</div>
```

これで `id` が `5` の商品は非表示になりました。

## v-else や v-else-if の使い方

JavaScript の条件分岐の構文に `else` があるように、Vue.js にも同様のディレクティブが用意されています。
`else` と同様の働きをするのが `v-else` です。

例えば、売り切れの場合は非表示にするのではなく"売り切れです"というメッセージを表示させたい場合は以下のように使用できます。

```html
<div v-if="!item.soldOut">
  <!-- 省略 -->
</div>
<div v-slse>売り切れです</div>
```

また、JavaScript の `else if` と同様の働きをする `v-else-if` も用意されています。
`v-if` の評価が `false` の時に、さらに条件を指定した時などに使用できます。

---

[Previous](v-for.md) | [Next](methods.md)