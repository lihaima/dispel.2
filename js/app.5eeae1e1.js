(function(){"use strict";var t={9267:function(t,e,i){var n=i(6369),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e("div",{ref:"top",staticClass:"top"},t._l(t.cardAll,(function(i,n){return e("div",{key:n,ref:i.id,refInFor:!0,staticClass:"card",style:{left:i.left,top:i.top},attrs:{id:i.id},on:{click:function(e){return t.move(i)}}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":i.icon}})])])})),0),e("div",{ref:"botton",staticClass:"botton"},t._l(t.removeAll,(function(t,i){return e("div",{key:i,ref:t.id,refInFor:!0,staticClass:"card",style:{left:t.left}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.icon}})])])})),0),e("button",{on:{click:t.restart}},[t._v("重新开始")]),t.isMask?e("div",{staticClass:"end"},[e("span",[t._v(" "+t._s(t.result))]),e("button",{on:{click:t.restart}},[t._v("重新开始")])]):t._e()])},o=[],s=(i(7658),{name:"app",mounted(){this.createCard()},data(){return{icon:[{icon:"#icon-shafaB"},{icon:"#icon-yiziB"},{icon:"#icon-dayinjiB"},{icon:"#icon-xiangjiB"},{icon:"#icon-dianfengshanB"},{icon:"#icon-dianfanbaoB"},{icon:"#icon-shouyinjiB"},{icon:"#icon-chuifengjiB"},{icon:"#icon-yupenB"},{icon:"#icon-dengpaoB"}],iconAll:[],cardAll:[],removeAll:[],canMove:!0,result:"您赢了",isMask:!1}},methods:{createIconAll(){for(let t=0;t<18;t++)this.iconAll.push(...this.icon);this.iconAll.sort((()=>Math.random()-.5))},createCard(){this.createIconAll();for(let t=5;t>=0;t--)for(let e=0;e<10;e++)for(let i=0;i<7;i++){let n=t%2===0?23.85:0,r=Math.random()>.5&&this.iconAll.pop();r&&this.cardAll.push({id:`m${t}-${e}-${i}`,top:47.7*e+n+"rem",left:47.7*i+n+"rem",icon:r.icon})}this.mask()},mask(){this.cardAll.forEach((async t=>{const e=t.id.substring(1).split("-").map((t=>Number(t))),i=(e[0]-1)%2===0;for(let r=e[0]-1;r>=0;r--){const o=(r-1)%2===0;if(i===o)this.$nextTick((()=>{const i=document.querySelector(`#m${r}-${e[1]}-${e[2]}`);i&&document.querySelector(`#${t.id}`).classList.add("disabled")}));else if(!i&&o){await(0,n.Y3)();const i=[`${r}-${e[1]}-${e[2]}`,`${r}-${e[1]}-${e[2]+1}`,`${r}-${e[1]+1}-${e[2]}`,`${r}-${e[1]+1}-${e[2]+1}`].every((t=>!document.querySelector(`#m${t}`)));if(!i){this.$refs[t.id][0].classList.add("disabled");break}this.$refs[t.id][0].classList.remove("disabled")}else if(i&&!o){await(0,n.Y3)();const i=[`${r}-${e[1]}-${e[2]}`,`${r}-${e[1]}-${e[2]-1}`,`${r}-${e[1]-1}-${e[2]}`,`${r}-${e[1]-1}-${e[2]-1}`].every((t=>!document.querySelector(`#m${t}`)));if(!i){this.$refs[t.id][0].classList.add("disabled");break}this.$refs[t.id][0].classList.remove("disabled")}}}))},move(t){let e=this.$refs[t.id],i=e[0].classList[1],n=this.removeAll.length;if(i||!this.canMove||n>6)return;this.canMove=!1;let r=this.$refs.botton.offsetLeft,o=this.$refs.botton.offsetTop;this.n=o;let s=0;n&&(r=47.7*n+r,s=47.7*n),e[0].style.top=o+"rem",e[0].style.left=r+"rem",e[0].transitionNameCount=0,e[0].ontransitionend=()=>{if(e[0].transitionNameCount++,2===e[0].transitionNameCount){t={...t,left:s+"rem"},this.removeAll.push(t),this.$refs[t.id][0].remove();let e=this.removeAll.reduce(((e,i)=>i.icon===t.icon?e+1:e),0);3===e&&(this.removeAll.forEach((e=>e.icon==t.icon&&setTimeout((()=>this.$refs[e.id][0].style.transform="scale(0)")))),this.removeAll=this.removeAll.filter((e=>e.icon!=t.icon)).map(((t,e)=>({...t,left:47.7*e+"rem"})))),this.$refs.top.childNodes.length?7===this.removeAll.length&&(this.result="您输了！",this.isMask=!0):(this.result="您赢了！",this.isMask=!0),this.canMove=!0,this.mask()}}},restart(){this.iconAll=[],this.cardAll=[],this.removeAll=[],this.isMask=!1,this.createCard()}}}),c=s,l=i(1001),a=(0,l.Z)(c,r,o,!1,null,null,null),f=a.exports;n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(f)}).$mount("#app")}},e={};function i(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,n,r,o){if(!n){var s=1/0;for(f=0;f<t.length;f++){n=t[f][0],r=t[f][1],o=t[f][2];for(var c=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(i.O).every((function(t){return i.O[t](n[l])}))?n.splice(l--,1):(c=!1,o<s&&(s=o));if(c){t.splice(f--,1);var a=r();void 0!==a&&(e=a)}}return e}o=o||0;for(var f=t.length;f>0&&t[f-1][2]>o;f--)t[f]=t[f-1];t[f]=[n,r,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,o,s=n[0],c=n[1],l=n[2],a=0;if(s.some((function(e){return 0!==t[e]}))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(l)var f=l(i)}for(e&&e(n);a<s.length;a++)o=s[a],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(f)},n=self["webpackChunkdispel"]=self["webpackChunkdispel"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(9267)}));n=i.O(n)})();
//# sourceMappingURL=app.5eeae1e1.js.map