(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["search"],{1245:function(e,t,n){},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,n){var c=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var r=n.call(e,t);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==c(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"25f7":function(e,t,n){"use strict";n("1245")},"2d5a":function(e,t,n){"use strict";n("302e")},"302e":function(e,t,n){},"3d82":function(e,t,n){"use strict";n("bf66")},"3fed":function(e,t,n){},5565:function(e,t,n){"use strict";n("c107")},"76c7":function(e,t,n){"use strict";n("3fed")},"7f65":function(e,t,n){},"841c":function(e,t,n){"use strict";var c=n("d784"),a=n("825a"),r=n("1d80"),o=n("129f"),i=n("14c3");c("search",1,(function(e,t,n){return[function(t){var n=r(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,n):new RegExp(t)[e](String(n))},function(e){var c=n(t,e,this);if(c.done)return c.value;var r=a(e),u=String(this),s=r.lastIndex;o(s,0)||(r.lastIndex=0);var l=i(r,u);return o(r.lastIndex,s)||(r.lastIndex=s),null===l?-1:l.index}]}))},9263:function(e,t,n){"use strict";var c=n("ad6d"),a=n("9f7f"),r=RegExp.prototype.exec,o=String.prototype.replace,i=r,u=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],b=u||l||s;b&&(i=function(e){var t,n,a,i,b=this,d=s&&b.sticky,O=c.call(b),f=b.source,p=0,j=e;return d&&(O=O.replace("y",""),-1===O.indexOf("g")&&(O+="g"),j=String(e).slice(b.lastIndex),b.lastIndex>0&&(!b.multiline||b.multiline&&"\n"!==e[b.lastIndex-1])&&(f="(?: "+f+")",j=" "+j,p++),n=new RegExp("^(?:"+f+")",O)),l&&(n=new RegExp("^"+f+"$(?!\\s)",O)),u&&(t=b.lastIndex),a=r.call(d?n:b,j),d?a?(a.input=a.input.slice(p),a[0]=a[0].slice(p),a.index=b.lastIndex,b.lastIndex+=a[0].length):b.lastIndex=0:u&&a&&(b.lastIndex=b.global?a.index+a[0].length:t),l&&a&&a.length>1&&o.call(a[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),e.exports=i},"9f7f":function(e,t,n){"use strict";var c=n("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=c((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=c((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a15b:function(e,t,n){"use strict";var c=n("23e7"),a=n("44ad"),r=n("fc6a"),o=n("a640"),i=[].join,u=a!=Object,s=o("join",",");c({target:"Array",proto:!0,forced:u||!s},{join:function(e){return i.call(r(this),void 0===e?",":e)}})},ac1f:function(e,t,n){"use strict";var c=n("23e7"),a=n("9263");c({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},bf66:function(e,t,n){},c107:function(e,t,n){},cbcb:function(e,t,n){"use strict";n("7f65")},d784:function(e,t,n){"use strict";n("ac1f");var c=n("6eeb"),a=n("d039"),r=n("b622"),o=n("9263"),i=n("9112"),u=r("species"),s=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),b=r("replace"),d=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),O=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,b){var f=r(e),p=!a((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),j=p&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!p||!j||"replace"===e&&(!s||!l||d)||"split"===e&&!O){var h=/./[f],v=n(f,""[e],(function(e,t,n,c,a){return t.exec===o?p&&!a?{done:!0,value:h.call(t,n,c)}:{done:!0,value:e.call(n,t,c)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),m=v[0],g=v[1];c(String.prototype,e,m),c(RegExp.prototype,f,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}b&&i(RegExp.prototype[f],"sham",!0)}},e9a0:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=Object(c["R"])("data-v-29cf41c4");Object(c["z"])("data-v-29cf41c4");var r={class:"search-box"};Object(c["x"])();var o=a((function(e,t,n,a,o,i){var u=Object(c["F"])("SearchInput"),s=Object(c["F"])("Hot"),l=Object(c["F"])("History"),b=Object(c["F"])("Suggest"),d=Object(c["F"])("SongList");return Object(c["w"])(),Object(c["h"])("div",null,[Object(c["k"])("div",r,[Object(c["k"])(u)]),e.searchValue?Object(c["i"])("",!0):(Object(c["w"])(),Object(c["h"])(s,{key:0})),e.searchValue?Object(c["i"])("",!0):(Object(c["w"])(),Object(c["h"])(l,{key:1})),"SUGGEST"===e.actionType?(Object(c["w"])(),Object(c["h"])(b,{key:2})):Object(c["i"])("",!0),"SONG_LIST"===e.actionType?(Object(c["w"])(),Object(c["h"])(d,{key:3})):Object(c["i"])("",!0)])})),i=n("0613"),u=Object(c["R"])("data-v-41dd06cc");Object(c["z"])("data-v-41dd06cc");var s={class:"input-wrap"},l=Object(c["k"])("span",{class:"iconfont icon-search search-icon"},null,-1),b=Object(c["k"])("span",{class:"iconfont icon-guanbi1"},null,-1);Object(c["x"])();var d=u((function(e,t,n,a,r,o){return Object(c["w"])(),Object(c["h"])("div",s,[l,Object(c["k"])("input",{value:e.searchValue,onInput:t[1]||(t[1]=function(){return e.valueChange&&e.valueChange.apply(e,arguments)}),onCompositionstart:t[2]||(t[2]=function(){return e.handleCompositionStart&&e.handleCompositionStart.apply(e,arguments)}),onCompositionend:t[3]||(t[3]=function(){return e.handleCompositionEnd&&e.handleCompositionEnd.apply(e,arguments)}),onFocus:t[4]||(t[4]=function(){return e.handleFocus&&e.handleFocus.apply(e,arguments)}),onKeyup:t[5]||(t[5]=Object(c["P"])((function(){return e.submit&&e.submit.apply(e,arguments)}),["enter"])),placeholder:"搜索歌曲、歌手、专辑",type:"text",class:"input"},null,40,["value"]),e.searchValue?(Object(c["w"])(),Object(c["h"])("div",{key:0,class:"clean",onClick:t[6]||(t[6]=function(){return e.cleanValue&&e.cleanValue.apply(e,arguments)})},[b])):Object(c["i"])("",!0)])})),O=n("e08c"),f=function(){var e=Object(c["B"])(!1);function t(t){var n=t.target,c=n.value;e.value||""===c||i["b"].commit(O["a"].MODULE+O["a"].CHANGE_SEARCH,c)}function n(){e.value=!0}function a(n){e.value=!1,t(n)}function r(){i["b"].commit(O["a"].MODULE+O["a"].CHANGE_SEARCH,""),i["b"].commit(O["a"].MODULE+O["a"].CHANGE_ACTION_TYPE,"")}function o(){i["b"].commit(O["a"].MODULE+O["a"].CHANGE_ACTION_TYPE,"SUGGEST")}function u(e){var t=e.target,n=t.value;""!==n&&(t.blur(),i["b"].commit(O["a"].MODULE+O["a"].CHANGE_SEARCH,n),i["b"].commit(O["a"].MODULE+O["a"].CHANGE_ACTION_TYPE,"SONG_LIST"))}return{valueChange:t,submit:u,handleFocus:o,handleCompositionStart:n,handleCompositionEnd:a,cleanValue:r}},p=Object(c["m"])({setup:function(){var e=Object(i["c"])(),t=Object(c["f"])((function(){return e.state.searchModule.searchValue})),n=f(),a=n.valueChange,r=n.submit,o=n.handleFocus,u=n.handleCompositionStart,s=n.handleCompositionEnd,l=n.cleanValue;return{searchValue:t,valueChange:a,submit:r,handleFocus:o,handleCompositionStart:u,handleCompositionEnd:s,cleanValue:l}}});n("5565");p.render=d,p.__scopeId="data-v-41dd06cc";var j=p,h=Object(c["R"])("data-v-40645e82");Object(c["z"])("data-v-40645e82");var v={key:0,class:"suggest-component"},m={key:0,class:"suggest-box"},g=Object(c["k"])("span",{class:"iconfont icon-search"},null,-1);Object(c["x"])();var E=h((function(e,t,n,a,r,o){var i=Object(c["F"])("Loading");return e.searchValue?(Object(c["w"])(),Object(c["h"])("div",v,[Object(c["k"])("div",{class:"tip",onClick:t[1]||(t[1]=function(t){return e.handleSearchValue(e.searchValue)})},' 正在搜索"'+Object(c["I"])(e.searchValue)+'" ',1),e.loading?(Object(c["w"])(),Object(c["h"])(i,{key:1})):(Object(c["w"])(),Object(c["h"])("ul",m,[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["D"])(e.list,(function(t,n){return Object(c["w"])(),Object(c["h"])("li",{key:t+n,onClick:function(n){return e.handleSearchValue(t)},class:"suggest-item"},[g,Object(c["k"])("span",null,Object(c["I"])(t),1)],8,["onClick"])})),128))]))])):Object(c["i"])("",!0)})),x=n("5530"),y=n("1da1"),C=(n("96cf"),n("d81d"),n("79f6"));function k(e){return w.apply(this,arguments)}function w(){return w=Object(y["a"])(regeneratorRuntime.mark((function e(t){var n,c,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={list:[]},e.next=3,Object(C["h"])({keywords:t,type:"mobile"});case 3:return c=e.sent,a=c.data.result.allMatch||[],r=a.map((function(e){return e.keyword})),n.list=r,e.abrupt("return",Object(x["a"])({},n));case 8:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}var S=n("d257"),_=Object(c["m"])({setup:function(){var e=Object(c["A"])({list:[],loading:!1}),t=Object(i["c"])(),n=Object(c["f"])((function(){return t.state.searchModule.searchValue})),a=Object(c["f"])((function(){return t.state.searchModule.actionType}));function r(e){return o.apply(this,arguments)}function o(){return o=Object(y["a"])(regeneratorRuntime.mark((function t(n){var c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==n&&"SUGGEST"===a.value){t.next=3;break}return e.list=[],t.abrupt("return");case 3:return e.loading=!0,t.prev=4,t.next=7,k(n);case 7:c=t.sent,r=c.list,e.list=r,e.loading=!1,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](4),e.loading=!1;case 16:case"end":return t.stop()}}),t,null,[[4,13]])}))),o.apply(this,arguments)}function u(e){t.commit(O["a"].MODULE+O["a"].CHANGE_SEARCH,e),t.commit(O["a"].MODULE+O["a"].CHANGE_ACTION_TYPE,"SONG_LIST")}return""!==n.value&&r(n.value),Object(c["M"])(n,Object(S["a"])(r,250)),Object(x["a"])({searchValue:n,handleSearchValue:u},Object(c["K"])(e))}});n("cbcb");_.render=E,_.__scopeId="data-v-40645e82";var I=_,R=Object(c["R"])("data-v-0013ea53");Object(c["z"])("data-v-0013ea53");var T={class:"song-list"},A={key:0,class:"bottom-tip"},L={key:1,class:"bottom-tip"};Object(c["x"])();var N=R((function(e,t,n,a,r,o){var i=Object(c["F"])("SongItem"),u=Object(c["F"])("Loading");return Object(c["w"])(),Object(c["h"])(c["a"],null,[Object(c["k"])("div",T,[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["D"])(e.songList,(function(e){return Object(c["w"])(),Object(c["h"])(i,{info:e,key:e.id,showAlbum:""},null,8,["info"])})),128)),!e.hasMore&&e.offset>1?(Object(c["w"])(),Object(c["h"])("div",A,"已经到底了")):Object(c["i"])("",!0),e.hasMore||0!==e.songList.length?Object(c["i"])("",!0):(Object(c["w"])(),Object(c["h"])("div",L," 未查到信息 "))]),e.loading?(Object(c["w"])(),Object(c["h"])(u,{key:0})):Object(c["i"])("",!0)],64)})),H=n("2909"),M=(n("99af"),n("b0c0"),n("a15b"),function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t){var n,c,a,r,o,i,u,s,l=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:1,c=l.length>2&&void 0!==l[2]?l[2]:30,Object(S["f"])("hot",t),a={keywords:t,limit:c,offset:n,type:1,timestamp:Date.now()},e.next=6,Object(C["g"])(a);case 6:return r=e.sent,o=r.data.result,i=o.songs||[],u=o.songCount,s=i.map((function(e){var t=e.ar.map((function(e){return e.name})),n=t.join("/"),c=e.id,a=e.name,r=e.al.name,o=0!==e.privilege.cp;return{artistName:n,id:c,name:a,albumName:r,copyright:o}})),e.abrupt("return",{list:s,songCount:u});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),G=n("3617"),U=Object(c["m"])({components:{SongItem:G["c"]},setup:function(){var e=Object(c["A"])({hasMore:!0,loading:!1,offset:0,songList:[]}),t=Object(i["c"])(),n=Object(c["f"])((function(){return t.state.searchModule.searchValue}));function a(){return r.apply(this,arguments)}function r(){return r=Object(y["a"])(regeneratorRuntime.mark((function t(){var c,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==e.hasMore&&!0!==e.loading&&""!==n.value){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,t.prev=3,t.next=6,M(n.value,e.offset);case 6:c=t.sent,a=c.list,r=c.songCount,e.songList=[].concat(Object(H["a"])(e.songList),Object(H["a"])(a)),e.loading=!1,e.songList.length>=r&&(e.songList.length=r,e.hasMore=!1),e.offset++,t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](3),e.loading=!1;case 18:case"end":return t.stop()}}),t,null,[[3,15]])}))),r.apply(this,arguments)}function o(){var e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.clientHeight||document.body.clientHeight,n=document.documentElement.scrollHeight||document.body.scrollHeight;e+t+20>=n&&a()}return Object(c["u"])((function(){a(),document.addEventListener("scroll",o)})),Object(c["v"])((function(){document.removeEventListener("scroll",o)})),Object(x["a"])({},Object(c["K"])(e))}});n("76c7");U.render=N,U.__scopeId="data-v-0013ea53";var D=U,V=(n("841c"),n("ac1f"),Object(c["R"])("data-v-4c78f52b"));Object(c["z"])("data-v-4c78f52b");var F={key:0,class:"search-hot"},P=Object(c["k"])("h3",{class:"title"}," 热门搜索 ",-1),K={class:"list"};Object(c["x"])();var Y=V((function(e,t,n,a,r,o){var i=Object(c["F"])("Loading");return e.hotKeywords.loading?(Object(c["w"])(),Object(c["h"])(i,{key:1})):(Object(c["w"])(),Object(c["h"])("div",F,[P,Object(c["k"])("ul",K,[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["D"])(e.hotKeywords.list,(function(t,n){return Object(c["w"])(),Object(c["h"])("li",{class:"item",key:n,onClick:function(n){return e.search(t)}},Object(c["I"])(t),9,["onClick"])})),128))])]))})),z=Object(c["m"])({setup:function(){var e=Object(i["c"])();e.dispatch(O["a"].MODULE+O["a"].GET_HOT_KEYWORDS_ASYNC);var t=Object(c["f"])((function(){return e.state.searchModule.hotKeywords}));function n(t){e.commit(O["a"].MODULE+O["a"].CHANGE_SEARCH,t),e.commit(O["a"].MODULE+O["a"].CHANGE_ACTION_TYPE,"SONG_LIST")}return{hotKeywords:t,search:n}}});n("25f7");z.render=Y,z.__scopeId="data-v-4c78f52b";var $=z,B=Object(c["R"])("data-v-4d547714");Object(c["z"])("data-v-4d547714");var J={class:"item"},W=Object(c["k"])("span",{class:"iconfont icon-search search"},null,-1),X=Object(c["k"])("span",{class:"iconfont icon-guanbi1"},null,-1);Object(c["x"])();var q=B((function(e,t,n,a,r,o){return Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["D"])(e.list,(function(t){return Object(c["w"])(),Object(c["h"])("ul",{key:t.id},[Object(c["k"])("li",J,[W,Object(c["k"])("span",{onClick:function(n){return e.search(t.value)},class:"name"},Object(c["I"])(t.value),9,["onClick"]),Object(c["k"])("div",{class:"clear",onClick:function(n){return e.clear(t.id)}},[X],8,["onClick"])])])})),128)})),Q=Object(c["m"])({setup:function(){var e=Object(i["c"])(),t=Object(c["B"])([]);function n(){var e=Object(S["c"])("hot");t.value=e?e.reverse():[]}function a(e){Object(S["d"])("hot",e),n()}function r(t){e.commit(O["a"].MODULE+O["a"].CHANGE_SEARCH,t),e.commit(O["a"].MODULE+O["a"].CHANGE_ACTION_TYPE,"SONG_LIST")}return Object(c["u"])((function(){n()})),{clear:a,list:t,search:r}}});n("3d82");Q.render=q,Q.__scopeId="data-v-4d547714";var Z=Q,ee=Object(c["m"])({components:{SearchInput:j,Suggest:I,SongList:D,Hot:$,History:Z},setup:function(){var e=Object(i["c"])(),t=Object(c["f"])((function(){return e.state.searchModule.actionType})),n=Object(c["f"])((function(){return e.state.searchModule.searchValue}));return{searchValue:n,actionType:t}}});n("2d5a");ee.render=o,ee.__scopeId="data-v-29cf41c4";t["default"]=ee}}]);