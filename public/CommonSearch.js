(self.webpackChunkreact_qq_music=self.webpackChunkreact_qq_music||[]).push([[913],{1732:(e,t,n)=>{"use strict";n.d(t,{$:()=>l});var i=n(9405),a=n(5907),r=n.n(a),l=function(e){return(0,i.Z)({method:"GET",url:"/getAlbumInfo?"+r().stringify(e)})}},8867:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var i=n(863),a=n(5365),r=n(4403),l=n.n(r),c=n(5488);const o="_2VAyGHGt",u="cOMhUzdH",s="_3mX8oF9E",m="_14ilbZ2I",d="_17NYzeV9";const f=function(e){var t=e.data,n=e.showListenNum,r=void 0!==n&&n,f=e.onPlay,v=e.onView,p=(0,i.useState)([]),g=p[0],y=p[1],k=(0,i.useState)({show:!1,title:""}),E=k[0],h=k[1];(0,i.useEffect)((function(){y(t)}),[t]);var b=(0,i.useMemo)((function(){return null==g?void 0:g.map((function(e,t){var n=e.cover,o=e.title,u=e.listen_num,p=e.content_id;return i.createElement("div",{key:t,style:"no123"===o?{visibility:"hidden"}:{}},i.createElement("div",{className:s,onMouseEnter:function(){return N(1,o)},onMouseLeave:function(){return N(0,o)},onClick:function(){return v&&v(p)}},i.createElement(a.Z,{classNames:"toplayAnim",in:E.title===o&&E.show,timeout:300},i.createElement("i",{className:l()("iconfont","icon-toplay",d),onClick:function(e){e.stopPropagation(),f&&f(p)}})),r&&i.createElement(a.Z,{in:!(E.title===o&&E.show),timeout:0},i.createElement("div",{className:m},i.createElement("i",{className:l()("iconfont","icon-listen")}),(0,c.Y4)(u))),i.createElement("img",{src:n,alt:o})),i.createElement("div",{onClick:function(){return v&&v(p)}},o))}))}),[g,E]),N=function(e,t){h({show:!!e,title:e?t:""})};return i.createElement("div",{className:o},i.createElement("div",{className:u},b))}},5669:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(863),a=n(4403),r=n.n(a),l=n(5488);const c={container:"fCfgtkMX",wrapper:"EDsB9ymv",item:"_2oZlNcj4",title0:"_2K66qg5e",title1:"_1NLv3Kkc",title2:"_2HZJPVQg",title3:"_3GibRtZn",title:"_1Xkd_p4k",content:"piAa33Fg",select:"_2IWDSLRT"};const o=function(e){var t=e.data,n=e.columns,a=e.onClickSong,o=e.onClickSinger,u=e.onClickAlbum,s=e.currentSongId,m=(0,i.useCallback)((function(e,t,n){var a,r;return[e[t],"singer"===t&&(null===(a=e[t])||void 0===a?void 0:a.map((function(n,a){var r=n.name,l=n.mid;return i.createElement("span",{key:a},i.createElement("span",{onClick:function(){return o&&o(l)}},r),1!==e[t].length&&a!==e[t].length-1?" / ":"")}))),"album"===t&&(null===(r=e[t])||void 0===r?void 0:r.name)||e.albumname,(0,l.ih)(e[t])][n]}),[]),d=(0,i.useMemo)((function(){return i.createElement("div",{className:r()(c.wrapper,c.title)},n.map((function(e,t){return i.createElement("div",{className:r()(c.item,c["title"+t]),key:e.key||e.dataIndex},e.title)})))}),[n]),f=(0,i.useMemo)((function(){return null==t?void 0:t.map((function(e){return i.createElement("div",{key:e.id,className:r()(c.wrapper,c.content)},n.map((function(t,n){var l,o=t.dataIndex,d=t.key;return i.createElement("div",{className:r()(c.item,c["title"+n]),key:d||o},i.createElement("span",{onClick:function(){var t;a&&0===n&&a(e.mid),u&&2===n&&u((null===(t=null==e?void 0:e[o])||void 0===t?void 0:t.mid)||e.albummid)},className:r()((l={},l[c.select]=s===e.mid,l))},m(e,o,n)))})))}))}),[t,n,s]);return i.createElement("div",{className:c.container},d,f)}},7774:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var i=n(863),a=n(4403),r=n.n(a);const l="-mn5VKul",c="_1vDXk4To",o="_3uVpiZdS";const u=function(e){var t=e.data,n=e.defaultActiveKey,a=e.activeKey,u=e.onSelect,s=e.onChange,m=e.itemStyle,d=(0,i.useState)(n||t[0].key),f=d[0],v=d[1];(0,i.useEffect)((function(){a&&v(a)}),[a]),(0,i.useEffect)((function(){var e;s&&s(f,null===(e=t.find((function(e){return e.key===f})))||void 0===e?void 0:e.label)}),[f]);var p=(0,i.useMemo)((function(){return t.map((function(e){var t,n=e.label,a=e.key;return i.createElement("div",{key:a,className:r()(c,(t={},t[o]=f===a,t)),style:m},i.createElement("div",{onClick:function(){return function(e,t){u&&u(e,t),v(e)}(a,n)}},n))}))}),[t,f]);return i.createElement("div",{className:l},p)}},6960:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>z});var i=n(863),a=n(5092),r=n(1732),l=n(9635),c=n(4109),o=n(7774),u=n(7695),s=n(4403),m=n.n(s),d=n(5365);const f="_2sssNh7-",v="FXYsXSGC",p="_28g23ao8",g="_2IboFQJO",y="_2UTF4K_X",k="_1YX9fdCl",E="iQCMKHxc",h="l_eqZJqU",b="_1rdIG6Sq",N="_3RLiCfh_";var _=function(e){var t,n,a,r,l=e.className,c=e.style,o=e.pageSize,u=void 0===o?1:o,s=e.current,_=e.total,C=e.disabled,S=e.onChange,w=e.showQuickJumper,Z=(0,i.useState)(s),I=Z[0],x=Z[1],M=(0,i.useState)(!1),A=M[0],F=M[1];(0,i.useEffect)((function(){S&&I&&S(I)}),[I]),(0,i.useEffect)((function(){x(s)}),[s]);var P=(0,i.useMemo)((function(){return function(e,t){return Math.ceil(e/t)}(_,u)}),[_,u]),z=(0,i.useRef)("");return i.createElement("div",{className:m()(f,l,(t={},t[p]=C,t)),style:c},i.createElement("div",{className:m()(v,(n={},n[p]=C,n)),onClick:function(){I&&I>1&&x(I-1)}},"<"),function(e){var t,n;if(I)return null===(n=null===(t=new Array(e))||void 0===t?void 0:t.fill(""))||void 0===n?void 0:n.map((function(t,n){var a,r;return i.createElement(i.Fragment,null,i.createElement("div",{className:m()(v,(a={},a[g]=I===n+1,a[k]=e>5&&I<=3&&n+1>5||e>5&&I>=e-2&&n+1<e-4||e>5&&I<e-2&&I>3&&(n+1>I+2||n+1<I-2),a[E]=e>5&&(n+1===e||n+1===1),a[p]=C,a[y]=I===n+1&&C,a)),key:n,onClick:function(){x(n+1)}},n+1),i.createElement("div",{className:m()(v,(r={},r[k]=e>0,r[E]=e>5&&I>4&&n+1===1||e>5&&I<e-3&&n+1===e-1,r[p]=C,r)),onClick:function(){e>5&&I>4&&n+1===1&&x(5===I?I-4:I-5),e>5&&I<e-3&&n+1===e-1&&x(I===e-4?I+4:I+5)}},"..."))}))}(P>0?P:1),i.createElement("div",{className:m()(v,(a={},a[p]=C,a)),onClick:function(){I&&I<P&&x(I+1)}},">"),w?i.createElement("div",{style:{marginLeft:"20px"},id:"jump"},i.createElement("div",{className:b},"跳至",i.createElement("input",{className:m()(h,(r={},r[p]=C,r)),type:"text",ref:z,onChange:function(e){z.current.value=e.target.value},onKeyDown:function(e){if(13===e.keyCode){var t=Number(z.current.value);t>0&&t<=P&&x(t),z.current.value=""}},onFocus:function(){F(!0)},onBlur:function(){F(!1)}}),i.createElement(d.Z,{in:A,animation:"zoom-in-bottom",timeout:300,className:N},i.createElement("div",null,"输入后回车")),"页")):i.createElement(i.Fragment,null))};_.defaultProps={current:1};const C=_;var S=n(5669),w=n(8867),Z=n(3774);const I="_2AjVzgGF",x="J6Vv-Mkz",M="_1kPwkI8j";var A=function(){return(A=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},F=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function l(e){try{o(i.next(e))}catch(e){r(e)}}function c(e){try{o(i.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,c)}o((i=i.apply(e,t||[])).next())}))},P=function(e,t){var n,i,a,r,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(r){return function(c){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return l.label++,{value:r[1],done:!1};case 5:l.label++,i=r[1],r=[0];continue;case 7:r=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){l=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){l.label=r[1];break}if(6===r[0]&&l.label<a[1]){l.label=a[1],a=r;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(r);break}a[2]&&l.ops.pop(),l.trys.pop();continue}r=t.call(e,l)}catch(e){r=[6,e],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}};const z=function(e){var t=(0,a.k6)(),n=t.location.state,s=(0,i.useState)(null),m=s[0],d=s[1],f=(0,i.useState)(null),v=f[0],p=f[1],g=(0,i.useState)(null),y=g[0],k=g[1],E=(0,i.useState)(1),h=E[0],b=E[1],N=(0,c.Z)(),_=N.setPlaylist,z=N.curSong,K=N.setCurSong;(0,i.useEffect)((function(){var e=n.remoteplace,t=n.key;b(1),k("song"),T({remoteplace:e,key:t,page:1})}),[n]);var T=function(e){return F(void 0,void 0,void 0,(function(){var t;return P(this,(function(n){switch(n.label){case 0:return[4,(0,l.e3)(e)];case 1:return t=n.sent().data.response.data,d(t.zhida.zhida_singer),p(t.song),console.log(t.song),[2]}}))}))};return i.createElement("div",null,i.createElement("div",{className:I},"搜索",i.createElement("span",null,n.key)),m&&i.createElement("div",{className:x},i.createElement("img",{src:m.singerPic}),i.createElement("div",{onClick:function(){return t.push("/Singer",{remoteplace:"singer",mid:m.singerMID})}},"歌手：",m.singerName),i.createElement("div",{onClick:function(){return t.push("/Singer",{remoteplace:"song",mid:m.singerMID})}},"单曲 ",m.songNum),i.createElement("div",{onClick:function(){return t.push("/Singer",{remoteplace:"album",mid:m.singerMID})}},"专辑 ",m.albumNum)),i.createElement(o.Z,{data:Z.Z.TAB_TITLE,itemStyle:{width:100,margin:"10px 0"},activeKey:y,onChange:function(e){return function(e){var t=n.key;k(e),T({remoteplace:e,key:t,page:1}),b(1)}(e)}}),"song"===y&&i.createElement(i.Fragment,null,i.createElement(u.Z,{icon:"icon-play",type:"primary",onClick:function(){return _(null==v?void 0:v.list),void K(null==v?void 0:v.list[0].mid)}},"播放全部"),i.createElement(S.Z,{data:null==v?void 0:v.list,columns:[{title:"歌曲",dataIndex:"name",key:"name"},{title:"歌手",dataIndex:"singer",key:"singer"},{title:"专辑",dataIndex:"album",key:"album"},{title:"时长",dataIndex:"interval",key:"interval"}],onClickSong:function(e){_(null==v?void 0:v.list),K(e)},onClickSinger:function(e){t.push("/Singer",{remoteplace:"singer",mid:e})},onClickAlbum:function(e){t.push("/Album",{remoteplace:"album",mid:e})},currentSongId:z})),"album"===y&&i.createElement(w.Z,{data:null==v?void 0:v.list.map((function(e){return{cover:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+e.album.mid+".jpg",title:e.album.name,content_id:e.album.mid}})),onPlay:function(e){!function(e){F(void 0,void 0,void 0,(function(){var t,n,i;return P(this,(function(a){switch(a.label){case 0:return t=e.mid,[4,(0,r.$)({albummid:t})];case 1:return n=a.sent().data.response.data,i=A(A({},n),{list:n.list.map((function(e){return A(A({},e),{id:e.songid,name:e.songname,mid:e.songmid})}))}),_(null==i?void 0:i.list),K(null==i?void 0:i.list[0].mid),[2]}}))}))}({mid:e})},onView:function(e){t.push("/Album",{remoteplace:"album",mid:e})}}),i.createElement("div",{className:M},i.createElement(C,{total:(null==v?void 0:v.totalnum)-100,current:h||1,pageSize:10,onChange:function(e){var t=n.key,i=n.remoteplace;T({remoteplace:y||i,key:t,page:e}),b(e)}})))}}}]);