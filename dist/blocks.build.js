!function(e){function t(c){if(n[c])return n[c].exports;var r=n[c]={i:c,l:!1,exports:{}};return e[c].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,c){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:c})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";function c(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function r(e){var t=e.setAttributes;a()({path:"/wp/v2/icebreakers"}).then(function(e){var n=c(0,e.length-1);t({randomQuestion:e[n].title.rendered})})}var l=n(2),o=n(3),a=n.n(o),s=n(4),i=(n.n(s),n(5)),__=(n.n(i),wp.i18n.__),u=wp.blocks.registerBlockType,m=wp.element.createElement,p=m("svg",{width:24,height:24,viewBox:"0 0 100 100"},m("path",{d:"M97.5,50c0,1.7-1.4,3.1-3.1,3.1h-8l4,4c1.2,1.2,1.2,3.2,0,4.4c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9l-8.4-8.4  H57.4l14.3,14.3h11.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1H78l5.6,5.6c1.2,1.2,1.2,3.2,0,4.4c-0.6,0.6-1.4,0.9-2.2,0.9  s-1.6-0.3-2.2-0.9L73.6,78v5.7c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1V71.8L53.1,57.4v20.1l8.4,8.4c1.2,1.2,1.2,3.2,0,4.4  c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9l-4-4v8.2c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1v-8.2l-4,4  c-0.6,0.6-1.4,0.9-2.2,0.9s-1.6-0.3-2.2-0.9c-1.2-1.2-1.2-3.2,0-4.4l8.4-8.4v-20L32.7,71.8v11.9c0,1.7-1.4,3.1-3.1,3.1  c-1.7,0-3.1-1.4-3.1-3.1V78l-5.6,5.6c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9c-1.2-1.2-1.2-3.2,0-4.4l5.6-5.6h-5.7  c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1h11.9l14.3-14.3H22.5l-8.4,8.4c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9  c-1.2-1.2-1.2-3.2,0-4.4l4-4H5.6c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1h8.2l-4-4c-1.2-1.2-1.2-3.2,0-4.4c1.2-1.2,3.2-1.2,4.4,0  l8.4,8.4h20.1L28.4,32.7H16.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1h5.7l-5.8-5.8c-1.2-1.2-1.2-3.2,0-4.4  c1.2-1.2,3.2-1.2,4.4,0l5.8,5.8v-5.7c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1v11.9l14.2,14.2V22.3l-8.4-8.4  c-1.2-1.2-1.2-3.2,0-4.4c1.2-1.2,3.2-1.2,4.4,0l4,4v-8c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1v8l4-4c1.2-1.2,3.2-1.2,4.4,0  c1.2,1.2,1.2,3.2,0,4.4l-8.4,8.4v20.4l14.3-14.3V16.5c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1v5.7l5.8-5.8c1.2-1.2,3.2-1.2,4.4,0  c1.2,1.2,1.2,3.2,0,4.4L78,26.5h5.7c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1H71.8L57.6,46.9h20.1l8.4-8.4  c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-4,4h8C96.1,46.9,97.5,48.3,97.5,50z"}));u("jw/icebreaker",{title:__("Icebreaker - random"),icon:p,category:"common",keywords:[__("Icebreaker \u2014 random"),__("Icebreaker"),__("random")],attributes:l.a,edit:function(e){return void 0===e.attributes.randomQuestion&&r(e),wp.element.createElement(React.Fragment,null,wp.element.createElement(i.BlockControls,null,wp.element.createElement(s.Toolbar,null,wp.element.createElement(s.Button,{label:"Pick a new random question",icon:"controls-repeat",className:"jwicebreaker-refresh-button",onClick:function(){return r(e)}}))),wp.element.createElement("div",{className:e.className},wp.element.createElement("p",null,e.attributes.randomQuestion)))},save:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement("p",null,e.attributes.randomQuestion))}})},function(e,t,n){"use strict";t.a={randomQuestion:{type:"string",selector:"p"}}},function(e,t){e.exports=wp.apiFetch},function(e,t){e.exports=wp.components},function(e,t){e.exports=wp.blockEditor}]);