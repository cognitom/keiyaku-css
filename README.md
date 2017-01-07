# Keiyaku CSS

> Crazy Style Formatter for Japanese Contract Document

Unfortunately, the style in Japanese contract document is totally crazy. I hope this CSS library cures that a bit:

0. write a document logically structured in markdown or HTML,
0. apply `keiyaku-css` to it
0. then, you'll get a well-formed document
0. *good luck!*

## 概要

ユーザ（以下、「甲」という。）は、製作者（以下、「乙」という。）が開発したKeiyaku CSS（以下、「本件ライブラリ」という。）について、以下のとおり使用することが可能です。

## インストール

ここからCSSファイルをダウンロードするか、npm経由でインストールします。

```bash
$ npm install --save keiyaku-css
```

HTMLファイルにて、本件ライブラリを使用したいセクションに、`keiyaku`クラスを付加します。(`div`タグなどでも構いません)

```html
<section class="keiyaku"></section>
```

上記セクション内に、必要なHTMLを書き入れます。

## 使い方・HTML編

HTMLを手書きする場合は、次の要素を使います。

- `<h1>文書のタイトル</h1>`
- `<h2>見出しタイトル(条)</h2>`
- `<ul><li>箇条書き</li></ul>`
- `<ol><li>箇条書き(連番)</li><ol>`
- `<hr>` 署名欄の開始
- `<h4>署名欄・見出し</h4>`
- `<ul><li>署名欄・項目</li></ul>` (最後の項目には、自動的に`印`マークが付きます)

## 使い方・Markdown編

本件ライブラリの使用が想定されているのは、主にMarkdownを使う場合です。下記のように書くことで可読性の高い契約文書を作成でき(ると期待し)ます。

- 文書のタイトル: `#`
- 見出しタイトル(条): `##`
- 箇条書き: `-`
- 箇条書き(連番): `1.`, `2.`, ...
- 署名欄: `---`で始める
- 署名欄・見出し: `####`
- 署名欄・項目: `-` (最後の項目には、自動的に`印`マークが付きます)

---
MIT © Tsutomu Kawamura

#### 甲
- 住所:
- 氏名: Your Name

#### 乙
- 住所: 東京都世田谷区 下北沢オープンソースCafe
- 氏名: Tsutomu Kawamura
