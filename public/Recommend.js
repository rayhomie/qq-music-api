(self.webpackChunkreact_qq_music=self.webpackChunkreact_qq_music||[]).push([[202],{8007:(e,n,t)=>{"use strict";t.d(n,{TK:()=>l});var r=t(9405),o=t(5907),i=t.n(o),l=function(e){return(0,r.Z)({method:"GET",url:"/getSongListDetail?"+i().stringify(e)})}},7774:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var r=t(863),o=t(4403),i=t.n(o);const l="-mn5VKul",a="_1vDXk4To",c="_3uVpiZdS";const u=function(e){var n=e.data,t=e.defaultActiveKey,o=e.activeKey,u=e.onSelect,s=e.onChange,f=e.itemStyle,v=(0,r.useState)(t||n[0].key),m=v[0],d=v[1];(0,r.useEffect)((function(){o&&d(o)}),[o]),(0,r.useEffect)((function(){var e;s&&s(m,null===(e=n.find((function(e){return e.key===m})))||void 0===e?void 0:e.label)}),[m]);var h=(0,r.useMemo)((function(){return n.map((function(e){var n,t=e.label,o=e.key;return r.createElement("div",{key:o,className:i()(a,(n={},n[c]=m===o,n)),style:f},r.createElement("div",{onClick:function(){return function(e,n){u&&u(e,n),d(e)}(o,t)}},t))}))}),[n,m]);return r.createElement("div",{className:l},h)}},3832:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>q});var r=t(863),o=t(7774),i=t(3774),l=[{label:i.Z.SONG_LIST_RECOM,key:"0"},{label:i.Z.NEW_SONG_PUBLISH,key:"1"},{label:i.Z.WONDERFULL_RECOM,key:"2"},{label:i.Z.NEW_DISH_PUBLISH,key:"3"},{label:i.Z.RANK,key:"4"},{label:i.Z.MV,key:"5"}];const a=function(e){var n=e.onChange;return r.createElement(o.Z,{data:l,onChange:function(e,t){n(e,t)}})};var c=t(4562);const u=(0,t(4781).createModel)((function(){var e=(0,r.useState)();return{allRecommend:e[0],setAllRecommend:e[1]}}));var s=t(3068),f=t(5365),v=t(4403),m=t.n(v),d=t(5488);const h="_2Mq0p4yL",y="bp0OM6wZ",p="_3kfTMUAf",E="z9fLRXtI",b="_3VK-K8bz",w="_2_eCMxBk",k="_1hCoGqkf";var g=function(){return(g=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};const S=function(e){var n=e.data,t=e.size,o=void 0===t?8:t,i=e.showListenNum,l=void 0!==i&&i,a=e.onPlay,c=e.onView,u=(0,r.useState)([]),v=u[0],S=u[1],_=(0,r.useState)(1),N=_[0],C=_[1],Z=(0,r.useState)(!1),M=Z[0],L=Z[1],P=(0,r.useState)({show:!1,title:""}),x=P[0],R=P[1],O=(0,r.useCallback)((function(e,n,t){var r=null==e?void 0:e.slice((n-1)*t,n*t);return new Array(t).fill({title:"no123",cover:""}).map((function(e,n){return g(g({},e),null==r?void 0:r[n])}))}),[]);(0,r.useEffect)((function(){S(O(n,N,o))}),[n,N]);var K=(0,r.useMemo)((function(){return null==v?void 0:v.map((function(e,n){var t=e.cover,o=e.title,i=e.listen_num,u=e.content_id;return r.createElement("div",{key:n,style:"no123"===o?{visibility:"hidden"}:{}},r.createElement("div",{className:p,onMouseEnter:function(){return A(1,o)},onMouseLeave:function(){return A(0,o)},onClick:function(){return c&&c(u)}},r.createElement(f.Z,{classNames:"toplayAnim",in:x.title===o&&x.show,timeout:300},r.createElement("i",{className:m()("iconfont","icon-toplay",b),onClick:function(e){e.stopPropagation(),a&&a(u)}})),l&&r.createElement(f.Z,{in:!(x.title===o&&x.show),timeout:0},r.createElement("div",{className:E},r.createElement("i",{className:m()("iconfont","icon-listen")}),(0,d.Y4)(i))),r.createElement("img",{src:t,alt:o})),r.createElement("div",{onClick:function(){return c&&c(u)}},o))}))}),[v,x]),T=function(e){L(!!e)},A=function(e,n){R({show:!!e,title:e?n:""})};return r.createElement("div",{className:h,onMouseEnter:function(){return T(1)},onMouseLeave:function(){return T(0)}},r.createElement("div",{className:m()(w)},r.createElement(f.Z,{in:M,animation:"zoom-in-right",timeout:500},r.createElement(s.Z,{type:"icon-left-arrow",onClick:function(){N<=1||C((function(e){return e-1}))}}))),r.createElement("div",{className:y},K),r.createElement("div",{className:m()(w,k)},r.createElement(f.Z,{in:M,animation:"zoom-in-left",timeout:500},r.createElement(s.Z,{type:"icon-right-arrow",onClick:function(){N>=Math.ceil((null==n?void 0:n.length)/8)||C((function(e){return e+1}))}}))))};var _=t(5092),N=t(8007),C=t(4109),Z=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function l(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,a)}c((r=r.apply(e,n||[])).next())}))},M=function(e,n){var t,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};const L=function(e){var n=(0,_.k6)(),t=u().allRecommend,o=(0,r.useState)([]),i=o[0],l=o[1],a=(0,C.Z)(),c=a.setPlaylist,s=(a.curSong,a.setCurSong);(0,r.useEffect)((function(){var e,n;l(null===(n=null===(e=null==t?void 0:t.recomPlaylist)||void 0===e?void 0:e.data)||void 0===n?void 0:n.v_hot)}),[t]);return r.createElement("div",null,r.createElement(S,{data:i,showListenNum:!0,onPlay:function(e){var n;n={disstid:e},Z(void 0,void 0,void 0,(function(){var e,t,r;return M(this,(function(o){switch(o.label){case 0:return[4,(0,N.TK)(n)];case 1:return e=o.sent().data.response.cdlist,c(null===(t=e[0])||void 0===t?void 0:t.songlist),s(null===(r=e[0])||void 0===r?void 0:r.songlist[0].mid),[2]}}))}))},onView:function(e){n.push("/SongListDetail",{disstid:e})}}))};const P=function(e){return r.createElement("div",null,"NewSongPublish")};const x=function(e){return r.createElement("div",null,"WonderfullRecom")};const R=function(e){return r.createElement("div",null,"NewDishPublish")};const O=function(e){return r.createElement("div",null,"Rank")};const K=function(e){return r.createElement("div",null,"MV")},T="_19I10I63";var A=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function l(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,a)}c((r=r.apply(e,n||[])).next())}))},I=function(e,n){var t,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},V={0:r.createElement(L,null),1:r.createElement(P,null),2:r.createElement(x,null),3:r.createElement(R,null),4:r.createElement(O,null),5:r.createElement(K,null)};const q=function(e){var n=u().setAllRecommend,t=(0,r.useState)("0"),o=t[0],i=t[1];(0,r.useEffect)((function(){l()}),[]);var l=function(){return A(void 0,void 0,void 0,(function(){var e;return I(this,(function(t){switch(t.label){case 0:return[4,(0,c.lO)()];case 1:return e=t.sent().data.response,n(e),[2]}}))}))};return r.createElement("div",{className:T},r.createElement(a,{onChange:function(e,n){return function(e,n){i(e)}(e)}}),V[o])}}}]);