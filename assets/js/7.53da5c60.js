(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{355:function(e,t,a){e.exports=a.p+"assets/img/vue-app.fc7d46be.png"},367:function(e,t,a){"use strict";a.r(t);var s=a(40),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"プロジェクトの作成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#プロジェクトの作成"}},[e._v("#")]),e._v(" プロジェクトの作成")]),e._v(" "),s("h2",{attrs:{id:"vue-cli-でのプロジェクト新規作成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-でのプロジェクト新規作成"}},[e._v("#")]),e._v(" Vue CLI でのプロジェクト新規作成")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("アプリケーションを作成するディレクトリを決めておきます（この例では "),s("code",[e._v("vue3-lab")]),e._v(" としています）。Vue CLI でプロジェクトを作成すると、決めたディレクトリの配下にファイル群が生成されます。")])]),e._v(" "),s("li",[s("p",[e._v("ターミナルで、プロジェクトのディレクトリを作成する親ディレクトリに移動します。もし、ホームディレクトリの直下にプロジェクトを作成するのであれば、ターミナルで以下のコマンドを使って移動しておきます。")]),e._v(" "),s("blockquote",[s("p",[e._v("ホームディレクトリとは、ユーザー固有のファイルやフォルダを保存できる領域であり、通常ユーザー名でディレクトリが作成されています")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Vue CLI でプロジェクトを新規作成します。ターミナルで以下のコマンドを実行します（コマンド実行後はそのまま待機しておいてください）。プロジェクトのディレクトリは Vue CLI によって自動的に作成されます。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("vue create vue3-lab\n")])])])]),e._v(" "),s("li",[s("p",[e._v("実行後のプロンプト "),s("code",[e._v("Please pick a preset")]),e._v(" では、このワークショップでは以下のように "),s("code",[e._v("Default (Vue 3 Preview)")]),e._v(" を選択します。")]),e._v(" "),s("blockquote",[s("p",[e._v("プロンプト内では、矢印キーで移動、Space キーで選択、Enter キーで確定ができます")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("? Please pick a preset:\n  Default "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Vue "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" babel, eslint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  ❯ Default "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Vue "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" Preview"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Vue "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" babel, eslint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  Manually "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" features\n")])])])]),e._v(" "),s("li",[s("p",[e._v("次のプロンプト "),s("code",[e._v("Pick the package manager to use when installing dependencies:")]),e._v(" では、好みのパッケージマネージャーを選んでください。（このハンズオンでは、npm を前提に説明を進めますので、適宜読み替えてください）")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("? Pick the package manager to use when installing dependencies:\nUse Yarn\n❯ Use NPM\n")])])])])]),e._v(" "),s("h2",{attrs:{id:"プロジェクトの起動"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#プロジェクトの起動"}},[e._v("#")]),e._v(" プロジェクトの起動")]),e._v(" "),s("ol",[s("li",[s("p",[s("code",[e._v("vue create")]),e._v(" の処理が完了したら、カレントディレクトリを作成したプロジェクトのディレクトリに移動し（この例では "),s("code",[e._v("vue3-lab")]),e._v("）、プロジェクトを起動します。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" vue3-lab\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run serve\n")])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("npm run serve")]),e._v(" の実行が完了したら、ブラウザで "),s("code",[e._v("http://localhost:8080/")]),e._v(" にアクセスします。")])]),e._v(" "),s("li",[s("p",[e._v("ブラウザに「Welcome to Your Vue.js App」等と表示されていれば、無事にプロジェクトの作成が成功しています。")]),e._v(" "),s("p",[s("img",{attrs:{src:a(355),alt:"vue-app"}})]),e._v(" "),s("p",[s("code",[e._v("vue create")]),e._v(" コマンドの詳細は "),s("a",{attrs:{href:"https://cli.vuejs.org/guide/creating-a-project.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating a Project | Vue CLI"),s("OutboundLink")],1),e._v(" を確認してください。")])])]),e._v(" "),s("hr"),e._v(" "),s("p",[s("RouterLink",{attrs:{to:"/setup.html"}},[e._v("Previous")]),e._v(" | "),s("RouterLink",{attrs:{to:"/overview.html"}},[e._v("Next")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);