webpackJsonp([6],{"129D":function(t,e,n){var s=n("VU/8")(n("jFXU"),n("LfZa"),null,null,null);t.exports=s.exports},"2jBA":function(t,e,n){var s=n("VU/8")(n("NbHo"),n("r+cj"),null,null,null);t.exports=s.exports},LfZa:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{staticClass:"user-select",attrs:{title:"Markdown Guide",visible:t.visible,width:t.isMobile?"99%":"600px","append-to-body":""},on:{close:t.close}},[n("p",[t._v("\n            Voten uses a slightly-customized and limited version of Markdown for formatting. Here is a quick and simple guide:\n        ")]),t._v(" "),n("table",{staticClass:"table enable-user-select"},[n("thead",{staticClass:"user-select"},[n("tr",[n("th",[t._v("You Type")]),t._v(" "),n("th",{staticClass:"half-width"},[t._v("You See")])])]),t._v(" "),n("tbody",{staticClass:"markdown"},[n("tr",[n("td",[t._v("\n                    **bold** or __bold__ \n                ")]),t._v(" "),n("td",[n("b",[t._v("bold")])])]),t._v(" "),n("tr",[n("td",[t._v("\n                    *italic* or _italic_\n                ")]),t._v(" "),n("td",[n("i",[t._v("italic")])])]),t._v(" "),n("tr",[n("td",[t._v("\n                    [voten.co](https://voten.co)\n                ")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://voten.co",target:"_blank"}},[t._v("voten.co")])])]),t._v(" "),n("tr",[n("td",[t._v("\n                    - unordered lists "),n("br"),t._v(" - unordered lists "),n("br"),t._v(" - unordered lists\n                ")]),t._v(" "),n("td",[n("ul",{staticClass:"no-margin"},[n("li",[t._v("unordered lists")]),t._v(" "),n("li",[t._v("unordered lists")]),t._v(" "),n("li",[t._v("unordered lists")])])])]),t._v(" "),n("tr",[n("td",[t._v("\n                    1. ordered list "),n("br"),t._v(" 2. ordered list "),n("br"),t._v(" 3. ordered list\n                ")]),t._v(" "),n("td",[n("ol",{staticClass:"no-margin"},[n("li",[t._v("ordered list")]),t._v(" "),n("li",[t._v("ordered list")]),t._v(" "),n("li",[t._v("ordered list")])])])]),t._v(" "),n("tr",[n("td",[t._v("\n                    `Inline code`\n                ")]),t._v(" "),n("td",[n("code",[t._v("Inline code")])])]),t._v(" "),n("tr",[n("td",[n("br"),t._v(' ```if (url == "voten") {'),n("br"),t._v(' return "welcome"'),n("br"),t._v(" }```\n                ")]),t._v(" "),n("td",[n("pre",[t._v('if (url == "voten") {\nreturn "welcome"\n}')])])])])])])},staticRenderFns:[]}},NbHo:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("6bEP");e.default={mixins:[s.a],props:["visible"],beforeDestroy:function(){"#keyboardShortcutsGuide"==window.location.hash&&history.go(-1)},created:function(){window.location.hash="keyboardShortcutsGuide"},methods:{close:function(){this.$emit("update:visible",!1)}}}},jFXU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("6bEP");e.default={mixins:[s.a],props:["visible"],beforeDestroy:function(){"#markdownGuide"==window.location.hash&&history.go(-1)},created:function(){window.location.hash="markdownGuide"},methods:{close:function(){this.$emit("update:visible",!1)}}}},"r+cj":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{staticClass:"user-select",attrs:{title:"Keyboard Shortcuts",visible:t.visible,width:t.isMobile?"99%":"600px","append-to-body":""},on:{close:t.close}},[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",[t._v("Key")]),t._v(" "),n("th",{staticClass:"half-width"},[t._v("Action")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("kbd",[t._v("Alt")]),t._v(" + "),n("kbd",[t._v("S")])]),t._v(" "),n("td",[t._v("\n                New Submission\n            ")])]),t._v(" "),n("tr",[n("td",[n("kbd",[t._v("Alt")]),t._v(" + "),n("kbd",[t._v("C")])]),t._v(" "),n("td",[t._v("\n                New Channel\n            ")])]),t._v(" "),n("tr",[n("td",[n("kbd",[t._v("N")])]),t._v(" "),n("td",[t._v("\n                Notifications\n            ")])]),t._v(" "),n("tr",[n("td",[n("kbd",[t._v("M")])]),t._v(" "),n("td",[t._v("\n                Messages\n            ")])]),t._v(" "),n("tr",[n("td",[n("kbd",[t._v("/")])]),t._v(" "),n("td",[t._v("\n                Search\n            ")])]),t._v(" "),n("tr",[n("td",[n("kbd",[t._v("B")])]),t._v(" "),n("td",[t._v("\n                Bookmarks\n            ")])]),t._v(" "),n("tr",[n("td",[n("kbd",[t._v("H")])]),t._v(" "),n("td",[t._v("\n                Home\n            ")])]),t._v(" "),n("tr",[n("td",[n("kbd",[t._v("P")])]),t._v(" "),n("td",[t._v("\n                Profile\n            ")])]),t._v(" "),n("tr",[n("td",[n("kbd",[t._v("R")])]),t._v(" "),n("td",[t._v("\n                Refresh Submissions\n            ")])]),t._v(" "),n("tr",[n("td",[n("kbd",[t._v("Shift")]),t._v(" + "),n("kbd",[t._v("/")])]),t._v(" "),n("td",[t._v("\n                Show these shortcuts\n            ")])])])])])},staticRenderFns:[]}}});
//# sourceMappingURL=guide.js.map