(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],Array(21).concat([function(e,t,a){e.exports=a.p+"static/media/gear2.c2c478b4.svg"},,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/gear.0b123230.svg"},function(e,t,a){e.exports=a.p+"static/media/html5.1a202c4f.svg"},function(e,t,a){e.exports=a.p+"static/media/css3.544d6b5a.svg"},function(e,t,a){e.exports=a.p+"static/media/sass.d3e94e5a.svg"},function(e,t,a){e.exports=a.p+"static/media/bootstrap.699e0c70.svg"},function(e,t,a){e.exports=a.p+"static/media/js.c84f592a.svg"},function(e,t,a){e.exports=a.p+"static/media/jquery.7e04a699.svg"},function(e,t,a){e.exports=a.p+"static/media/node.de843389.svg"},function(e,t,a){e.exports=a.p+"static/media/react.c037c57e.svg"},function(e,t,a){e.exports=a.p+"static/media/git.98a54548.svg"},function(e,t,a){e.exports=a.p+"static/media/mysql.04279c50.svg"},function(e,t,a){e.exports=a.p+"static/media/mongo.e2988ed5.svg"},function(e,t,a){e.exports=a(76)},,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/shadow.04fe26e5.png"},function(e,t,a){e.exports=a.p+"static/media/character.0a4b285b.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c);a(53),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(10),s=a(8),l=a(19),u=a(34),m=a.n(u),p=a(15),f="SET_BURGER_STATE",d="IS_BURGER_OPEN",h={burgerActive:null,burgerOpen:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(p.a)({},e,{burgerActive:t.payload});case d:return Object(p.a)({},e,{burgerOpen:t.payload});default:return e}},g="SET_CHARACTER_POSITION_LEFT",b="SET_CHARACTER_DIRECTION_ANIMATION",E="END_CHARACTER_ANIMATION",A="START_CHARACTER_ANIMATION",y="EEND_SPEECH_BUBBLE_ANIMATION",O="START_SPEECH_BUBBLE_ANIMATION",C={speechBubbleIsActive:null,characterIsActive:null,characterDirection:"right",characterLeft:-50},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(p.a)({},e,{characterLeft:t.payload});case y:case O:return Object(p.a)({},e,{speechBubbleIsActive:t.payload});case b:return Object(p.a)({},e,{characterDirection:t.payload});case A:return Object(p.a)({},e,{characterIsActive:t.payload});case E:return Object(p.a)({},e,{characterIsActive:null});default:return e}},T=Object(l.b)({navBar:v,animation:N}),P=(m.a,Object(l.c)(T)),w=a(3),j=a(4),k=a(6),x=a(5),S=a(7),B=(a(58),a(18)),L=(a(59),a(60),function(e){function t(){return Object(w.a)(this,t),Object(k.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("burger-button").addEventListener("click",(function(t){var a=e.props,n=a.burgerOpen,r=a.isBurgerOpen;null===n?r(!0):!0===n&&r(null)}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"burger-button",className:"burger"},r.a.createElement("div",{className:"burger-line"}),r.a.createElement("div",{className:"burger-line"}),r.a.createElement("div",{className:"burger-line"}))}}]),t}(r.a.Component)),I=Object(s.b)((function(e){return{burgerOpen:e.navBar.burgerOpen}}),(function(e){return{isBurgerOpen:function(t){return e(function(e){return{type:d,payload:e}}(t))}}}))(L),G=(a(61),function(e){return{type:g,payload:e}}),F=function(e){return{type:y,payload:e}},H=function(e){return{type:E,payload:e}},M=function(e){function t(){return Object(w.a)(this,t),Object(k.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.endSpeechBubbleAnimation,a=e.endCharacterAnimation,n=e.setCharacterPositionLeft;document.querySelectorAll(".nav-link").forEach((function(e){e.addEventListener("click",(function(e){t(null),a(null),n(-50)}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"nav-items"},r.a.createElement(o.b,{className:"nav-link",to:"/competencies"},"COMPETENCIES"),r.a.createElement(o.b,{className:"nav-link",to:"/portfolio"},"PORTFOLIO"),r.a.createElement(o.b,{className:"nav-link",to:"/contact"},"CONTACT"))}}]),t}(r.a.Component),D=Object(s.b)(null,(function(e){return{setCharacterPositionLeft:function(t){return e(G(t))},endSpeechBubbleAnimation:function(t){return e(F(t))},endCharacterAnimation:function(t){return e(H(t))}}}))(M),q=(a(63),function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(k.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).fireworks=function(e){console.log(e)},a}return Object(S.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelector(".nav-logo");t.addEventListener("mouseenter",(function(t){e.fireworks("enter")})),t.addEventListener("mouseleave",(function(t){e.fireworks("leave")}))}},{key:"render",value:function(){return r.a.createElement(o.b,{className:"nav-logo",to:"/home"},"DEV KAVIAN")}}]),t}(r.a.Component)),_=Object(s.b)((function(e){return{burgerActive:e.navBar.burgerActive}}))((function(e){var t=e.burgerActive;return r.a.createElement("div",{className:"nav"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement(I,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement(D,null)))})),R=(a(64),function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(k.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).openClose=function(e){return null===e?0:!0===e?35:void 0},a}return Object(S.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setCharacterPositionLeft,a=e.endSpeechBubbleAnimation,n=e.endCharacterAnimation;document.querySelectorAll(".nav-link").forEach((function(e){e.addEventListener("click",(function(e){a(null),n(null),t(-50)}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"drop-nav",style:{top:"".concat(this.openClose(this.props.burgerOpen),"px")}},r.a.createElement(o.b,{className:"nav-link",to:"/competencies"},"COMPETENCIES"),r.a.createElement("span",null,"|"),r.a.createElement(o.b,{className:"nav-link",to:"/portfolio"},"PORTFOLIO"),r.a.createElement("span",null,"|"),r.a.createElement(o.b,{className:"nav-link",to:"/contact"},"CONTACT"))}}]),t}(r.a.Component)),W=Object(s.b)((function(e){return{burgerOpen:e.navBar.burgerOpen}}),(function(e){return{endSpeechBubbleAnimation:function(t){return e(F(t))},endCharacterAnimation:function(t){return e(H(t))},setCharacterPositionLeft:function(t){return e(G(t))}}}))(R),J=(a(65),function(e){function t(){return Object(w.a)(this,t),Object(k.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setBurgerSate;window.innerWidth<=638&&e(!0),window.addEventListener("resize",(function(t){t.target.innerWidth>=638?e(null):e(!0)}))}},{key:"render",value:function(){var e=this.props.burgerActive;return r.a.createElement("div",{id:"navHeighAnchor"},r.a.createElement(_,null),e?r.a.createElement(W,null):null)}}]),t}(r.a.Component)),Q=Object(s.b)((function(e){return{burgerActive:e.navBar.burgerActive}}),(function(e){return{setBurgerSate:function(t){return e(function(e){return{type:f,payload:e}}(t))}}}))(J),V=(a(66),a(2)),U=a.n(V),Y=a(17),X=(a(68),function(e){function t(){return Object(w.a)(this,t),Object(k.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props.characterDirection;return r.a.createElement("div",{className:"character"},r.a.createElement("img",{className:"pixelArt shadow",alt:"shadow",src:a(69)}),r.a.createElement("img",{className:"pixelArt character-sprite-sheet ".concat(e),alt:"charX",src:a(70)}))}}]),t}(r.a.Component)),z=Object(s.b)((function(e){return{characterDirection:e.animation.characterDirection}}),null)(X),K=(a(71),a(72),a(25)),$=a(26),Z=U.a.mark(fe),ee=U.a.mark(de),te=U.a.mark(he);var ae,ne=a(0),re=(ae=ne)&&"object"===typeof ae&&"default"in ae?ae.default:ae;function ce(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(Y.a)(U.a.mark((function e(t){var a,n,r,c,i,o,s=arguments;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=s.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=s[r];c=0,i=n;case 2:if(!(c<i.length)){e.next=21;break}o=i[c],e.t0=typeof o,e.next="string"===e.t0?7:"number"===e.t0?10:"function"===e.t0?13:16;break;case 7:return e.next=9,oe(t,o);case 9:return e.abrupt("break",18);case 10:return e.next=12,le(o);case 12:return e.abrupt("break",18);case 13:return e.next=15,o.apply(void 0,[t].concat(n));case 15:return e.abrupt("break",18);case 16:return e.next=18,o;case 18:c++,e.next=2;break;case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e,t){return se.apply(this,arguments)}function se(){return(se=Object(Y.a)(U.a.mark((function e(t,a){var n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ve(t.textContent,a),e.next=3,me(t,[].concat(Object(K.a)(he(" ",n)),Object(K.a)(de(a,n))));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(Y.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e,t){return pe.apply(this,arguments)}function pe(){return(pe=Object(Y.a)(U.a.mark((function e(t,a){var n,r,c,i,o,s,l=arguments;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=l.length>2&&void 0!==l[2]?l[2]:30,r=!0,c=!1,i=void 0,e.prev=4,o=fe(a)[Symbol.iterator]();case 6:if(r=(s=o.next()).done){e.next=14;break}return(0,s.value)(t),e.next=11,le(n+n*(Math.random()-.5));case 11:r=!0,e.next=6;break;case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),c=!0,i=e.t0;case 20:e.prev=20,e.prev=21,r||null==o.return||o.return();case 23:if(e.prev=23,!c){e.next=26;break}throw i;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}}),e,null,[[4,16,20,28],[21,,23,27]])})))).apply(this,arguments)}function fe(e){var t,a,n,r,c,i;return U.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:t=!0,a=!1,n=void 0,o.prev=3,r=U.a.mark((function e(){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.value,e.next=3,function(e){return requestAnimationFrame((function(){return e.textContent=t}))};case 3:case"end":return e.stop()}}),e)})),c=e[Symbol.iterator]();case 6:if(t=(i=c.next()).done){o.next=11;break}return o.delegateYield(r(),"t0",8);case 8:t=!0,o.next=6;break;case 11:o.next=17;break;case 13:o.prev=13,o.t1=o.catch(3),a=!0,n=o.t1;case 17:o.prev=17,o.prev=18,t||null==c.return||c.return();case 20:if(o.prev=20,!a){o.next=23;break}throw n;case 23:return o.finish(20);case 24:return o.finish(17);case 25:case"end":return o.stop()}}),Z,null,[[3,13,17,25],[18,,20,24]])}function de(e){var t,a,n,r,c=arguments;return U.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t=Object($.a)(e),a=t.slice(0),n=c.length>1&&void 0!==c[1]?c[1]:0,r=c.length>2&&void 0!==c[2]?c[2]:a.length;case 3:if(!(n<r)){i.next=8;break}return i.next=6,a.slice(0,++n).join("");case 6:i.next=3;break;case 8:case"end":return i.stop()}}),ee)}function he(e){var t,a,n,r,c=arguments;return U.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t=Object($.a)(e),a=t.slice(0),n=c.length>1&&void 0!==c[1]?c[1]:0,r=c.length>2&&void 0!==c[2]?c[2]:a.length;case 3:if(!(r>n)){i.next=8;break}return i.next=6,a.slice(0,--r).join("");case 6:i.next=3;break;case 8:case"end":return i.stop()}}),te)}function ve(e,t){var a=Object($.a)(t).slice(0);return[].concat(Object(K.a)(e),[NaN]).findIndex((function(e,t){return a[t]!==e}))}var ge="styles_typicalWrapper__1_Uvh";!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===a&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("");var be=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)},Ee=ne.memo((function(e){var t=e.steps,a=e.loop,n=e.className,r=e.wrapper,c=void 0===r?"p":r,i=ne.useRef(null),o=c,s=[ge];return n&&s.unshift(n),ne.useEffect((function(){a===1/0?ce.apply(void 0,[i.current].concat(be(t),[ce])):"number"===typeof a?ce.apply(void 0,[i.current].concat(be(Array(a).fill(t).flat()))):ce.apply(void 0,[i.current].concat(be(t)))})),re.createElement(o,{ref:i,className:s.join(" ")})})),Ae=function(e){var t=e.steps;return r.a.createElement(Ee,{steps:t,loop:1/0,wrapper:"b"})},ye=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(k.a)(this,Object(x.a)(t).call(this,e))).adjusterFunction=function(){var e=a.props,t=e.speechBubbleIsActive,n=e.endSpeechBubbleAnimation;if(t){var r;r=requestAnimationFrame((function e(){console.log("running"),t&&document.querySelector(".character-position")?(document.querySelector(".show").style.top="".concat(document.querySelector(".character-position").offsetTop-100,"px"),document.querySelector(".show").style.left="".concat(document.querySelector(".character-position").offsetLeft-200,"px"),setTimeout((function(){requestAnimationFrame(e)}),500)):(cancelAnimationFrame(r),n(null))}))}else console.log("speechBubbleIs NOT Active")},a.state={stage:a.props.stage,steps1:["Hi! \ud83d\udc4b",2e3,"My name is Kavian \ud83d\ude0a",4e3,' and I do the "dev" thing! \u2764\ufe0f',4e3,"Welcome to my website! \ud83d\ude4c",3e3,"Hope you \ud83d\udc4d it!",3e3,"I \ud83d\udee0\ufe0f it myself!! ...using the \u269b\ufe0f library",3e3,"I love \u269b\ufe0f",4e3,"Please check out the rest of my website.",5e3]},a}return Object(S.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.adjusterFunction()}},{key:"render",value:function(){var e=this.state,t=e.stage,a=e.steps1,n=this.props.speechBubbleIsActive;if(1===t)return r.a.createElement("div",{className:"".concat(n?"show":null)},r.a.createElement("div",{className:"speech-bubble"},r.a.createElement("div",{className:"msg-itself",style:{}},r.a.createElement(Ae,{steps:a}))))}}]),t}(r.a.Component),Oe=Object(s.b)((function(e){var t=e.animation;return{speechBubbleIsActive:t.speechBubbleIsActive,bubbleTailIsActive:t.bubbleTailIsActive}}),(function(e){return{endSpeechBubbleAnimation:function(t){return e(F(t))}}}))(ye),Ce=function(e){function t(){var e;return Object(w.a)(this,t),(e=Object(k.a)(this,Object(x.a)(t).call(this))).animate=function(t){1===t&&e.moveToMiddle()},e.moveToMiddle=Object(Y.a)(U.a.mark((function t(){var a,n,r;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props,n=a.startCharacterAnimation,r=a.setCharacterDirectionAnimation,t.abrupt("return",new Promise((function(t,a){var c;n(!0),c=requestAnimationFrame((function a(n){e.props.characterIsActive?e.props.characterLeft<e.state.pageCenterX+30?(e.props.setCharacterPositionLeft(e.props.characterLeft+5),setTimeout((function(){requestAnimationFrame(a)}),80)):(r("stand"),cancelAnimationFrame(c),e.props.startSpeechBubbleAnimation(!0),t()):(e.props.setCharacterPositionLeft(-50),cancelAnimationFrame(c),t())}))})));case 2:case"end":return t.stop()}}),t)}))),e.state={pageCenterX:window.innerWidth/2,pageBottomY:window.innerHeight-200,stage:1},e}return Object(S.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.stage;1===t&&this.props.setCharacterDirectionAnimation("right"),window.addEventListener("resize",(function(t){e.setState({pageCenterX:window.innerWidth/2,pageBottomY:window.innerHeight-200})})),this.animate(t)}},{key:"render",value:function(){var e=this.state,t=e.pageBottomY,a=e.stage,n=this.props,c=n.speechBubbleIsActive,i=n.characterLeft;return r.a.createElement("div",{className:"x-container"},c?r.a.createElement(Oe,{left:i,stage:a}):null,r.a.createElement("div",{className:"character-position",style:{top:"".concat(t,"px"),left:"".concat(i,"px"),position:"absolute"}},r.a.createElement(z,null)))}}]),t}(r.a.Component),Ne=Object(s.b)((function(e){var t=e.animation;return{speechBubbleIsActive:t.speechBubbleIsActive,characterIsActive:t.characterIsActive,characterDirection:t.characterDirection,characterLeft:t.characterLeft}}),(function(e){return{startSpeechBubbleAnimation:function(t){return e(function(e){return{type:O,payload:e}}(t))},setCharacterDirectionAnimation:function(t){return e(function(e){return{type:b,payload:e}}(t))},setCharacterPositionLeft:function(t){return e(G(t))},startCharacterAnimation:function(t){return e(function(e){return{type:A,payload:e}}(t))}}}))(Ce),Te=function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement(Ne,null))},Pe=(a(73),a(36)),we=a.n(Pe),je=a(21),ke=a.n(je),xe=a(37),Se=a.n(xe),Be=a(38),Le=a.n(Be),Ie=a(39),Ge=a.n(Ie),Fe=a(40),He=a.n(Fe),Me=a(41),De=a.n(Me),qe=a(42),_e=a.n(qe),Re=a(43),We=a.n(Re),Je=a(44),Qe=a.n(Je),Ve=a(45),Ue=a.n(Ve),Ye=a(46),Xe=a.n(Ye),ze=a(47),Ke=a.n(ze),$e=function(e){function t(){var e;return Object(w.a)(this,t),(e=Object(k.a)(this,Object(x.a)(t).call(this))).initialIntroScrol=function(){var t,a=0,n=function(){var r=Object(Y.a)(U.a.mark((function r(){return U.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:console.log("~~"),a<=65?(window.scrollTo({top:a,behavior:"smooth"}),a+=10,setTimeout((function(){return requestAnimationFrame(n)}),30)):(e.setState({initialScrollExecuted:!0}),cancelAnimationFrame(t));case 2:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();t=requestAnimationFrame(n)},e.scrollAnimationFunciton=function(t){var a=window.scrollY;if(console.log(a),document.querySelector(".dev-kavian").style.opacity="".concat(1/(a+1)-.05),document.querySelector(".gear-holder").style.opacity=a/100,a<100&&e.state.initialScrollExecuted){var n;e.setState({initialScrollExecuted:null}),setTimeout((function(){document.querySelector(".dev-kavian").classList.remove("hide")}),500);var r=document.querySelectorAll(".firstLoad"),c=0;n=requestAnimationFrame((function e(){console.log("~~"),c<=r.length-1?(r[c].classList.remove("hide"),c+=1,setTimeout((function(){requestAnimationFrame(e)}),200)):(console.log("firstLoad: done"),document.querySelectorAll(".title-logo").forEach((function(e){setTimeout((function(){e.classList.remove("hide")}),700)})),cancelAnimationFrame(n))}))}},e.state={initialScrollExecuted:null},e}return Object(S.a)(t,e),Object(j.a)(t,[{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollAnimationFunciton)}},{key:"componentDidMount",value:function(){this.initialIntroScrol(),window.addEventListener("scroll",this.scrollAnimationFunciton)}},{key:"render",value:function(){return r.a.createElement("div",{className:"comp-main-container"},r.a.createElement("div",{className:"firstCard"},r.a.createElement("div",{className:"gear-container"},r.a.createElement("div",{className:"dev-kavian"},"DEV KAVIAN"),r.a.createElement("div",{className:"gear-holder"},r.a.createElement("div",{className:"gear-holder-left"},r.a.createElement("img",{className:"left-gear",width:"50",alt:"gear",src:ke.a})),r.a.createElement("div",{className:"gear-holder-middle"},r.a.createElement("div",{className:"middle-gear-wrapper"},r.a.createElement("img",{className:"middle-gear",alt:"gear",src:we.a}),r.a.createElement("img",{className:"small-middle-gear",width:"50",alt:"gear",src:ke.a}),r.a.createElement("img",{className:"smaller-middle-gear",width:"50",alt:"gear",src:ke.a}))),r.a.createElement("div",{className:"gear-holder-right"},r.a.createElement("img",{className:"right-gear",width:"50",alt:"gear",src:ke.a})))),r.a.createElement("div",{className:"msg-container"},r.a.createElement("div",{className:"msg-title-container"},r.a.createElement("h1",{className:"msg-title firstLoad first-card-intro hide"},"I Am: ",r.a.createElement("br",null),"Full-Stack"),r.a.createElement("ul",{className:"list-container"},r.a.createElement("li",{className:"list"},r.a.createElement("p",{className:"title-logo hide"},"</>"),r.a.createElement("h3",{className:"firstLoad first-card-intro hide"},"Front-End Design")," ",r.a.createElement("p",{className:" firstLoad first-card-intro hide"},"To Make It Look Good.",r.a.createElement("br",null),"User Friendly.")),r.a.createElement("li",{className:"list"},r.a.createElement("p",{className:"title-logo hide"},"{ }"),r.a.createElement("h3",{className:"firstLoad first-card-intro hide"},"Back-End Design")," ",r.a.createElement("p",{className:"firstLoad first-card-intro hide"},"To Make It Function.",r.a.createElement("br",null),"No Aheadaches.")))))),r.a.createElement("div",{className:"second-card"},r.a.createElement("div",null,r.a.createElement("h1",{className:"tech-stack-title"},"Tech Stack :"),r.a.createElement("div",{className:"tech-stack-logos-container"},r.a.createElement("div",{className:"tech-stack-logo"},r.a.createElement("img",{alt:"HTML: Hyper Text Markup Language Version 5",title:"HTML: Hyper Text Markup Language Version 5",src:Se.a}),r.a.createElement("img",{alt:"CSS: Cascading Style Sheets Version 3",title:"CSS: Cascading Style Sheets Version 3",src:Le.a}),r.a.createElement("img",{alt:"Sass: Syntactically Awesome Style Sheets",title:"Sass: Syntactically Awesome Style Sheets",src:Ge.a}),r.a.createElement("img",{alt:"Bootstrap: a front end library",title:"Bootstrap: a front end library",src:He.a}),r.a.createElement("img",{alt:"JS: Javascript",title:"JS: Javascript",src:De.a}),r.a.createElement("img",{alt:"jQuery: javascript framework",title:"jQuery: javascript framework",src:_e.a}),r.a.createElement("img",{alt:"Node.js: JavaScript run-time environment that executes code outside a browser.",title:"Node.js a JavaScript run-time environment that executes code outside a browser.",src:We.a}),r.a.createElement("img",{alt:"React.js: Front End javascript Framework",title:"React.js Front End javascript Framework",src:Qe.a}),r.a.createElement("img",{alt:"Git: version-control system",title:"Git: version-control system",src:Ue.a}),r.a.createElement("img",{alt:"MySQL: Structured Query Language",title:"MySQL: Structured Query Language",src:Xe.a}),r.a.createElement("img",{alt:"MongoDB: noSQL database technology",title:"MongoDB: noSQL database technology",src:Ke.a}),r.a.createElement("p",null,"and more"))))),r.a.createElement("div",{className:"skill-container"},r.a.createElement("div",{className:"skill-logos"})),r.a.createElement("div",{className:"testHeight",style:{height:"2000px"}}))}}]),t}(r.a.Component),Ze=(a(74),function(){return r.a.createElement("div",{className:"portfolio-page"},r.a.createElement("section",{className:"content"},r.a.createElement("article",null,r.a.createElement("h1",null,"something"),r.a.createElement("hr",null),r.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore delectus a ea quod voluptatem cumque sunt sed nulla facilis! Nihil nobis aliquam nam sed placeat earum ab libero optio.")),r.a.createElement("div",{style:{height:"2000px"}})),"Portfolio Page Portfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio Page")}),et=(a(75),function(){return r.a.createElement("div",{className:"contact-page"},"CONTACT PAGE CONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGE")}),tt=function(e){function t(){var e;return Object(w.a)(this,t),(e=Object(k.a)(this,Object(x.a)(t).call(this))).webPageHeightAdjuster=function(){var t=e.state,a=t.navBarHeight;return t.windowTotalHeight-a},e.state={navBarHeight:null,windowTotalHeight:null},e}return Object(S.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({navBarHeight:document.getElementById("navHeighAnchor").offsetHeight,windowTotalHeight:window.innerHeight}),window.addEventListener("resize",(function(t){e.setState({navBarHeight:document.getElementById("navHeighAnchor").offsetHeight,windowTotalHeight:window.innerHeight})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"website"},r.a.createElement(Q,null),r.a.createElement("div",{id:"route-container",style:{height:"".concat(this.webPageHeightAdjuster(),"px")}},r.a.createElement(B.c,null,r.a.createElement(B.a,{exact:!0,path:"/home",component:Te}),r.a.createElement(B.a,{path:"/competencies",component:$e}),r.a.createElement(B.a,{path:"/portfolio",component:Ze}),r.a.createElement(B.a,{path:"/contact",component:et}))))}}]),t}(r.a.Component);i.a.render(r.a.createElement(s.a,{store:P},r.a.createElement(o.a,null,r.a.createElement(tt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[48,1,2]]]);
//# sourceMappingURL=main.13235c5d.chunk.js.map