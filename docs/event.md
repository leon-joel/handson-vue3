# @click で商品を選択する

## 本章の概要とゴール
本章では、クリックイベントを定義して購入する商品をクリックで選択できるようにプログラムを改修していきます。商品をクリックすると選択中となり、選択中の商品は背景の色は変わるようにします。
本章を実践すると、`v-on` ディレクティブを使ってイベントリスナーの登録ができるようになります。
また、`v-bind` ディレクティブを使って選択中かそうでないかを判断して、動的に style を変化させることができるようになります。

### 実装の考え方

どのように実装していけば良いか 1 つずつ分解して考えてみると、以下のようになります。

1. 選択状態を表す style を用意する
2. クリックすると商品を"選択状態"にする
3. "選択状態"の時にだけ、1 の style を適用する

1 つ 1 つの処理は難しくありません。順番に実装してみましょう。

### 前回までのコードの確認

現在のコードは以下のようになっています。

template

<<< @/../examples/methods/src/App.vue#template

script

<<< @/../examples/methods/src/App.vue#script

## 1. 選択状態を表す style を用意する

まず、選択中の商品に適用する style を用意しましょう。`<style>` タグに以下の style を追加します。

```css
.selected-item {
  background-color: #e3f2fd;
}
```

`.selected-item` という style を追加しました。選択中の商品は背景の色を変化させたいため、`background-color` プロパティを定義しています。

## 2. クリックすると商品を"選択状態"にする

次は、クリックして商品を"選択状態"にする部分の実装です。

### "選択状態"を表すプロパティの追加

以前 `items` に、"売り切れかどうか"という情報を表す `soldOut` というプロパティを追加しました。今回も同様に、"選択状態か"という情報をプロパティとして追加しましょう。

`selected` というプロパティを追加し、値を `true`（選択状態）/ `false`（非選択状態）とすることで、選択しているかどうか判別できるようにします。

初期状態は何も選択されていない状態であるため、すべての商品を `selected: false` にしておきましょう。

<<< @/../examples/event/src/App.vue#script{13,23,33,43}

### v-on の書き方

商品をクリックした時に `selected` プロパティの値を `true` にすれば、「クリックして選択する」という実装が可能になります。

商品に対して `click` イベントのイベントリスナーを実装していきましょう。

::: tip ヒント  
ボタンがクリックされた、フォームに入力された、スクロールしたなど、Web ページ上でのさまざまな動きのことをイベントと言います。イベントが発生した時に実行される処理をイベントリスナーといい、イベントが発生する要素に対して設定します。
:::

Vue.js でイベントリスナーを登録するには `v-on` というディレクティブを使用し、以下のように記述します。

```html
<button type="button" v-on:click="イベント時の処理">***</button>
```

上記は `<button>` 要素をクリックした時に実行される `click` イベントを設定しています。`v-on:click=" "` の `" "` の中に、`click` イベントが発生した時に実行したい処理を記述できます。

`click` のほかにも、スクロールした時に実行される `scroll` イベントや、フォームが送信された時に実行される `submit` イベントなども用意されています。

`v-on:click` は、`@click` と省略して記述できます。

```html
<button type="button" @click="イベント時の処理">***</button>
```

- [イベントに関する詳細](https://v3.ja.vuejs.org/guide/events.html)

### click イベントの実装

では実際に、商品に `click` イベントを登録していきましょう。以下の例でハイライトしている箇所を追加します。

<<< @/../examples/event/src/App.vue#template{16}

`v-for` の中の要素は 1 つ 1 つの商品を表しています。その要素に対し `@click` を追加しました。

`click` イベントで商品の選択をするためには、その商品の `selected` プロパティを `true` にすることが必要です。それだけを実現するには `@click="item.selected = true"` とすれば良さそうです。 しかしその場合、一度クリックして `true` にすると、 `false` に戻すことができない、つまり選択した商品をキャンセルできなくなってしまいます。

そこで、`click` イベントでの処理を、`selected` の値が `false` の時は `true` に、`true` の時は `false` にするようにしておけば、選択とキャンセルが可能になります。つまり、現時点での `selected` の値と反対の値を代入すれば良いということです。これを実装すると、`item.selected = !item.selected` という処理になります（論理否定 `!` で `item.selected` の否定の値を使用できます）。

- [論理否定 (!)について](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_NOT)

## 3. "選択状態"の時にだけ、1 の style を適用する

最後に、1 で作成した `.selected-item` という style を、`selected` の値が `true` の時にだけ適用すれば完成です。

### `v-bind` の書き方

今回のように、特定の条件の時にだけ `class` などの属性を適用させたい場合は、`v-bind` ディレクティブを使用します。`v-bind` は属性をバインディングするためのディレクティブであり、`class` や `style`、`src` などの属性を操作できます。

`class` の操作は、対象の要素に対して `v-bind:class="classの制御処理"` のように行います。また、`v-bind:class` は `:class` と省略して記述できます。

### `:class` の実装

では実際に `:class` を使って実装してみましょう。以下の例でハイライトしている箇所を追加します。

<<< @/../examples/event/src/App.vue#template{15}

商品要素に対して、`:class` を追加しました。処理の中身を確認していきましょう。

```js
:class="{ 'selected-item': item.selected }"
```

上記のように、適用したい `class` を条件式と一緒に記述することで、その条件式が `true` の場合のみ該当の `class` を適用できます。

`:class="{ 'selected-item': item.selected }"` の中の `selected-item` が、1 で作成した style のクラス名です。`selected-item` は、`item.selected` が `true` の場合のみ適用されます。`item.selected` が `true` の場合とは、商品が選択されている状態を示しています。

これで、商品が選択状態の時に背景の色が変化するようになりました。

---

::: tip +1 チャレンジ
ここまでの学習が完了した人は、以下の内容にも挑戦してみましょう。
:::

## キー修飾子を使ったキーボードイベントの使い方

マウスクリックではなくキーボードの操作で商品の選択を行うことがあるかもしれません。そのような時には `v-on` ディレクティブに対してキー修飾子を追加すると、キーボードイベントを使用できます。

### キー修飾子の書き方

`v-on` ディレクティブにキーボードイベントを追加するためには `keyup` イベントを設定します。`keyup` イベントには使用したいキーコードを `.`（ドット）でつなげて、実行したい処理を記述します。

```html
<input v-on:keyup.enter="alertDialog" />
```

```vue
<script setup>
// ...省略

function alertDialog() {
  window.alert('keyup')
}
</script>
```

`keyup` イベントにキーコード `enter` を `.`（ドット）でつなげて、`alert` メソッドを記述しました。`input` タグにフォーカスし、キーボードの `Enter` を押すと `alert` メソッドが実行されます。また、`click` イベントと同様に `keyup` イベントも `v-on` ディレクティブの省略が可能です。

```html
<input @keyup.enter="alert" />
```

### 使用可能なキーコード

`enter` 以外で Vue.js から提供されているキーコードの一覧は下記の通りです。

- .enter
- .tab
- .delete ( “Delete” と “Backspace” の両方がキャプチャされています。 )
- .esc
- .space
- .up
- .down
- .left
- .right

### キー修飾子の実装

現在 `click` イベントが設定されている処理を `keyup` イベントで置き換えてみます。

```html
<template>
  <header class="header">
    <img src="/images/logo.svg" alt="" />
    <h1>Vue.js ハンズオン</h1>
  </header>
  <main class="main">
    <template v-for="item in items" :key="item.id">
      <div
        v-if="!item.soldOut"
        class="item"
        :class="{ 'selected-item': item.selected }"
        @keyup.enter="item.selected = !item.selected"
      >
        <div class="thumbnail">
          <img :src="item.image" alt="" />
        </div>
        <div class="description">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <span>¥<span class="price">{{ pricePrefix(item.price) }}</span></span>
        </div>
      </div>
    </template>
  </main>
</template>
```

しかし、このままですと要素を選択して `Enter` を押しても何も反応しません。`div` タグが静的 HTML 要素でありキーボードによるアクセスができないためです。そのため `div` タグへのキーボードのアクセスが可能となるように `tabindex` 属性を追加します。

```html
<div
  v-if="!item.soldOut"
  class="item"
  :class="{ 'selected-item': item.selected }"
  @keyup.enter="item.selected = !item.selected"
  tabindex="0"
>
```

`tabindex` 属性を追加することでキーボードによるアクセスが可能となったので、キーボードの `Enter` を押すとスタイルが変化するようになりました。もし `Enter` を押した時とクリックした時、どちらのイベントも有効にしたい場合は、`keyup` イベントと `click` イベントの両方を記述することで実現可能です。

```html
<div
  v-if="!item.soldOut"
  class="item"
  :class="{ 'selected-item': item.selected }"
  @keyup.enter="item.selected = !item.selected"
  @click="item.selected = !item.selected"
  tabindex="0"
>
```

## 今回使用したディレクティブ

今回の実装では以下のディレクティブを使用しました。

- `v-on:click`（`@click`）を使用したイベントリスナーの登録
- `v-on:keyup`（`@keyup`）を使用したイベントリスナーの登録
- `v-bind:class`（`:class`）を使用した属性の操作

このように、複数のディレクティブや処理を組み合わせて、さまざまな動きを実現できます。
