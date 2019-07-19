(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t){},204:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"updateLanguage",function(){return $}),n.d(a,"updateTheme",function(){return K}),n.d(a,"updateSlogan",function(){return q});var r=n(0),o=n.n(r),i=n(30),s=n.n(i),c=(n(83),n(4)),l=n(5),u=n(7),d=n(6),p=n(8),g=n(51),m=n(25),h=n(21),f=n(9),b=(n(84),n(16)),v={primary:"#fff",primaryDark:"#fff",background:"#fff",accent:"#000",textPrimary:"#000",textSecondary:"#757575"},x={primary:"#fefefe",primaryDark:"#f5f5f5",background:"#F5F5F5",accent:"#000",textPrimary:"#212121",textSecondary:"#9E9E9E"},y={primary:"#323639",primaryDark:"#282c2f",background:"#303030",accent:"#fff",textPrimary:"#fafafa",textSecondary:"#d6d6d6"},E={primary:"#1c2226",primaryDark:"#1b2024",background:"#000",accent:"#fff",textPrimary:"#fff",textSecondary:"#a0a0a1"},w={primary:"#333639",primaryDark:"#292c2f",background:"#202124",accent:"#fff",textPrimary:"#f1f3f4",textSecondary:"#9ba0a5"};function j(e){switch(e?e.toLowerCase():""){case"light":return x;case"dark":return y;case"white":return v;case"black":return E;case"chrome-dark":return w;default:return x}}var k=n(1),O=n(27),S=n(10);function C(){var e=Object(f.a)(["\n  padding: 0;\n  margin: 0;\n"]);return C=function(){return e},e}function T(){var e=Object(f.a)(["\n  box-sizing: border-box;\n  height: 64px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 48px 16px;\n"]);return T=function(){return e},e}var z=S.a.div(T()),A=S.a.h1(C()),D=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.leftExtra,a=e.rightExtra;return o.a.createElement("header",{style:Object(O.a)({width:"100%"},this.props.style)},o.a.createElement(z,null,void 0===n?void 0:o.a.createElement("div",{style:{marginRight:16}},n),o.a.createElement(A,null,t),o.a.createElement("div",{style:{flex:1}}),void 0===a?void 0:o.a.createElement("div",{style:{marginLeft:16}},a)))}}]),t}(r.Component),I=n(67),_=n.n(I),P=n(20),L=function(e){return new URLSearchParams(window.location.search).get(e)},W=n(33),M=n.n(W),N=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=this.props.displayText?this.props.displayText.split("|"):[],t=[],n=0;n<e.length;n++)n>0&&t.push(o.a.createElement("br",{key:2*n-1})),t.push(o.a.createElement(M.a,{key:2*n,renderers:{paragraph:"span"},allowedTypes:["root","paragraph","emphasis","strong","delete","link","linkReference","text"],source:e[n]}));return o.a.createElement("div",null,t)}}]),t}(o.a.Component),R=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).targetText="",n.index=0,n.state={displayText:""},n.updateIndex=function(){var e=n.props.slogan;if(void 0===e)return n.setState({displayText:""}),void(n.targetText="");n.state.displayText===n.targetText&&(n.targetText.length>0?n.targetText="":n.targetText=e[n.index++%e.length]);var t=n.state.displayText;t=n.targetText.length>t.length&&n.targetText.startsWith(t)?n.targetText.slice(0,t.length+1):t.slice(0,t.length-1),n.setState({displayText:t}),console.log({display:n.state.displayText,target:n.targetText}),n.targetText===t?(setTimeout(function(){return n.updateIndex()},1e3*n.props.interval),console.log("wait more")):setTimeout(function(){return n.updateIndex()},200*n.props.interval*.2)},n.timer=void 0,n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateIndex(),this.updateIndex()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{style:{userSelect:"none",textAlign:this.props.textAlign,fontSize:this.props.fontSize,color:this.props.fontColor}},o.a.createElement(N,{displayText:this.state.displayText}))}}]),t}(r.Component);R.defaultProps={fontSize:64,fontColor:"#000",textAlign:"left",slogan:[],interval:3};var U=R;function B(){var e=Object(f.a)(["\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n\n  @media (max-width: 768px) {\n    padding-top: 0;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"]);return B=function(){return e},e}var H=S.a.div(B()),X=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).getSlogan=function(){var e=n.props.slogan;if(!n.props.slogan||0===n.props.slogan.trim().length){var t=Object(k.d)({defaultSlogan:{id:"slogan.default"}});e=n.props.intl.formatMessage(t.defaultSlogan)}return e.split("\n").map(function(e){return e.trim()}).filter(function(e){return e.length>0})},n.mouseCountdown=void 0,n.handleMouseMove=function(){n.state.idle&&n.setState({idle:!1}),void 0!==n.mouseCountdown&&(window.clearTimeout(n.mouseCountdown),n.mouseCountdown=void 0),n.mouseCountdown=window.setTimeout(function(){return n.setState({idle:!0})},2e3)},n.state={idle:!0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){void 0!==this.mouseCountdown&&(window.clearTimeout(this.mouseCountdown),this.mouseCountdown=void 0)}},{key:"render",value:function(){var e=j(this.props.theme),t=o.a.createElement(m.b,{to:"/settings"},o.a.createElement("h1",null,o.a.createElement(P.e,{style:{color:e.textSecondary,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}})));return o.a.createElement(H,{style:{background:e.background,cursor:this.state.idle?"none":"default"},onMouseMove:this.handleMouseMove},o.a.createElement(_.a,{transitionLeaveTimeout:500,transitionEnterTimeout:300,transitionName:"fade"},this.state.idle?void 0:o.a.createElement(D,{style:{position:"absolute",top:0},rightExtra:t})),o.a.createElement("main",{style:{boxSizing:"border-box",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement(U,{textAlign:"center",fontColor:e.textPrimary,fontSize:72,slogan:this.getSlogan()})))}}]),t}(r.Component),F=Object(b.b)(function(e){var t=L("slogan");return t&&(t=t.replace("||","\n")),{language:e.settings.language,theme:L("theme")||e.settings.theme,slogan:t||e.settings.slogan}})(Object(k.e)(X)),G="UPDATE_LANGUAGE",V="UPDATE_THEME",J="UPDATE_SLOGAN",$=function(e){return{type:G,language:e}},K=function(e){return{type:V,theme:e}},q=function(e){return{type:J,slogan:e}};function Q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)){var n=e.substring(1).split("");3===n.length&&(n=[n[0],n[0],n[1],n[1],n[2],n[2]]);var a=parseInt("0x"+n.join(""),16);return"rgba(".concat([a>>16&255,a>>8&255,255&a].join(","),",").concat(t,")")}throw new Error("Bad Hex")}var Y=n(34);function Z(){var e=Object(f.a)(["\n  padding: 16px 0;\n  font-weight: bold;\n  font-size: 1.5rem;\n"]);return Z=function(){return e},e}var ee=S.a.div(Z()),te=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.titleId,a=e.children;return void 0!==n?o.a.createElement("div",null,o.a.createElement(k.a,{id:n},function(e){return o.a.createElement(ee,null,e)}),o.a.createElement("div",null,a)):o.a.createElement("div",null,o.a.createElement(ee,null,t),o.a.createElement("div",null,a))}}]),t}(r.Component);function ne(){var e=Object(f.a)(["\n  padding: 16px 0;\n  margin-bottom: 16px;\n  border: 0 solid;\n  border-bottom-width: 1px;\n"]);return ne=function(){return e},e}var ae=S.a.div(ne()),re=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.titleId,a=e.actionView,r=o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{style:{flex:1}},n?o.a.createElement(k.a,{id:n}):o.a.createElement("span",null,t)),o.a.createElement("div",{style:{flex:2}},o.a.createElement("div",null,a)));return o.a.createElement(ae,{style:{borderColor:Q(j(this.props.theme).textSecondary,.2)}},r,this.props.children)}}]),t}(r.Component);function oe(){var e=Object(f.a)(["\n  height: 2px;\n  margin-top: 2px;\n  border-width: 0;\n  border-radius: 2px;\n"]);return oe=function(){return e},e}function ie(){var e=Object(f.a)(["\n  margin: 8px;\n  display: inline-block;\n  border: 1px solid;\n  border-radius: 8px;\n  padding: 16px 16px 14px;\n  user-select: none;\n  cursor: pointer;\n  font-size: 1rem;\n"]);return ie=function(){return e},e}var se=S.a.div(ie()),ce=S.a.div(oe()),le=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.theme,n=e.updateTheme;void 0===t&&n("light");var a=j(t),r=function(e,r){return o.a.createElement(se,{onClick:(i=n,s=r,function(){return i(s)}),style:{borderColor:Q(a.textSecondary,.2),color:j(r).textPrimary,backgroundColor:j(r).background}},o.a.createElement(k.a,{id:e}),o.a.createElement(ce,{style:{backgroundColor:r===t?a.accent:"transparent"}}));var i,s};return o.a.createElement("div",null,o.a.createElement(k.a,{id:"settings.appearance.theme"},function(e){return o.a.createElement(te,{title:e},o.a.createElement(re,null,o.a.createElement("div",{style:{width:"100%"}},r("settings.appearance.theme.white","white"),r("settings.appearance.theme.light","light"),r("settings.appearance.theme.dark","dark"),r("settings.appearance.theme.black","black"),r("settings.appearance.theme.chrome-dark","chrome-dark"))))}))}}]),t}(r.Component);function ue(){var e=Object(f.a)(["\n  font-size: 100%;\n  border-radius: 4px;\n  font-family: sans-serif;\n  line-height: 1.2rem;\n  align-items: center;\n  padding: 2px;\n  display: inline-block;\n  text-align: start;\n  height: auto;\n  border-color: rgb(169, 169, 169);\n\n  :focus {\n    outline-style: none;\n  }\n"]);return ue=function(){return e},e}var de=S.a.select(ue()),pe=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).onSelect=function(e){n.props.updateLanguage(e.target.value)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=j(this.props.theme);return o.a.createElement(te,{titleId:"settings.language"},o.a.createElement(re,null,o.a.createElement(de,{style:{backgroundColor:e.primary,color:e.textPrimary},value:this.props.language,onChange:this.onSelect},o.a.createElement(k.a,{id:"settings.language.default"},function(e){return o.a.createElement("option",{value:""},e)}),o.a.createElement("option",{value:"zh-Hans"},"\u7b80\u4f53\u4e2d\u6587"),o.a.createElement("option",{value:"zh-Hant"},"\u6b63\u9ad4\u4e2d\u6587"),o.a.createElement("option",{value:"en-US"},"English"))))}}]),t}(r.Component),ge=n(69),me=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=j(this.props.theme),t=o.a.createElement(k.a,{id:"settings.about"},function(t){return o.a.createElement(te,{title:t},o.a.createElement(re,null,o.a.createElement("div",null,o.a.createElement("span",{role:"img","aria-label":"logo"},"\ud83d\udcbc")," ","Version ",ge.version)),o.a.createElement(re,null,o.a.createElement("div",null,o.a.createElement("a",{href:"https://github.com/sorcererXW/iloveworks",target:"_blank",rel:"noopener noreferrer",style:{fontWeight:"bold",color:e.accent}},"Github"))),o.a.createElement(re,null,o.a.createElement("div",null,o.a.createElement("a",{href:"https://github.com/sorcererXW/iloveworks/releases",target:"_blank",rel:"noopener noreferrer",style:{fontWeight:"bold",color:e.accent}},o.a.createElement(k.a,{id:"settings.about.release_note"})))))});return o.a.createElement("div",null,t)}}]),t}(r.Component),he=n(70);function fe(){var e=Object(f.a)(["\n  display: inline-block;\n  margin-top: 16px;\n  margin-bottom: 8px;\n\n  > button {\n    margin: 8px;\n    font-size: 1rem;\n    font-weight: 500;\n    padding: 8px 1rem;\n    border-radius: 4px;\n    border-color: rgba(0, 0, 0, 0);\n  }\n"]);return fe=function(){return e},e}function be(){var e=Object(f.a)(["\n  font-size: 1.2rem;\n  border-radius: 8px;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  padding: 8px 16px;\n  line-height: 1.8rem;\n  min-height: 10rem;\n  resize: none;\n  overflow: hidden;\n\n  :focus {\n    outline-style: none;\n  }\n"]);return be=function(){return e},e}var ve=Object(S.a)(he.TextareaAutosize)(be()),xe=S.a.div(fe()),ye=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={text:"",showSyntax:!1},n.messages=Object(k.d)({saveSuccess:{id:"action.save.success"}}),n.setSlogan=function(){if(n.props.slogan&&0!==n.props.slogan.trim().length)n.setState({text:n.props.slogan});else{var e=Object(k.d)({defaultSlogan:{id:"slogan.default"}}),t=n.props.intl;n.setState({text:t.formatMessage(e.defaultSlogan)})}},n.onTextChange=function(e){var t=e.target.value;void 0===t?n.setState({text:""}):n.setState({text:t})},n.onSave=function(){n.props.updateSlogan(n.state.text),alert(n.props.intl.formatMessage(n.messages.saveSuccess)),n.setSlogan()},n.onReset=function(){n.props.updateSlogan(""),n.setSlogan()},n.onSyntaxArrowClick=function(){n.setState({showSyntax:!n.state.showSyntax})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setSlogan()}},{key:"render",value:function(){var e=j(this.props.theme),t=o.a.createElement(te,{titleId:"settings.slogan.custom"},o.a.createElement(re,null,o.a.createElement("div",null,o.a.createElement(ve,{onChange:this.onTextChange,value:this.state.text,spellCheck:!1,style:{backgroundColor:e.primary,color:e.textPrimary}}),o.a.createElement("div",{style:{paddingRight:16,paddingLeft:16,userSelect:"none",color:e.textSecondary,fontSize:"0.8rem"}},o.a.createElement("div",{onClick:this.onSyntaxArrowClick,style:{display:"flex",alignItems:"center"}},o.a.createElement(k.a,{id:"settings.slogan.syntax"}),this.state.showSyntax?o.a.createElement(P.b,{style:{verticalAlign:"middle",marginLeft:4,fontSize:"1rem"}}):o.a.createElement(P.a,{style:{verticalAlign:"middle",marginLeft:4,fontSize:"1rem"}})),this.state.showSyntax?o.a.createElement("div",null,o.a.createElement(k.a,{id:"settings.slogan.syntax.summary"},function(e){return"string"!==typeof e?null:o.a.createElement(M.a,{renderers:{paragraph:"div"},source:e})})):void 0)),o.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row"}},o.a.createElement("div",{style:{flex:1}}),o.a.createElement(xe,{className:"button-bar"},o.a.createElement("button",{onClick:this.onReset,style:{backgroundColor:e.primary,color:e.textPrimary}},o.a.createElement(k.a,{id:"action.reset"})),o.a.createElement("button",{onClick:this.onSave,style:{backgroundColor:e.primary,color:e.textPrimary}},o.a.createElement(k.a,{id:"action.save"}))))));return o.a.createElement("div",null,t)}}]),t}(r.Component),Ee=n(36),we=n.n(Ee),je=function(e){return o.a.createElement(we.a,Object.assign({},e,{maxWidth:425}))},ke=function(e){return o.a.createElement(we.a,Object.assign({},e,{minWidth:426,maxWidth:768}))},Oe=function(e){return o.a.createElement(we.a,Object.assign({},e,{minWidth:769}))};function Se(){var e=Object(f.a)(["\n  width: 100%;\n  padding: 0 16px;\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n"]);return Se=function(){return e},e}function Ce(){var e=Object(f.a)(["\n  text-decoration: none;\n  padding: 8px 32px 8px 16px;\n  margin-bottom: 16px;\n  margin-right: 8px;\n  font-size: 1rem;\n  white-space: pre;\n  font-weight: 500;\n\n  :hover {\n    border-radius: 8px;\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  &.active {\n    border-radius: 8px;\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  @media (max-width: 768px) {\n    padding: 8px 16px 8px 16px;\n    margin-right: 8px;\n  }\n"]);return Ce=function(){return e},e}function Te(){var e=Object(f.a)(["\n  padding: 16px;\n  border: 0 solid;\n  border-right-width: 1px;\n  height: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  .selected {\n    border-radius: 8px;\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  @media (max-width: 768px) {\n    box-sizing: border-box;\n    border-right-width: 0;\n    flex-direction: row;\n    width: 100%;\n    height: auto;\n    overflow: auto;\n\n    ::-webkit-scrollbar {\n      width: 0 !important;\n    }\n  }\n"]);return Te=function(){return e},e}function ze(){var e=Object(f.a)(["\n  min-height: 100vh;\n  box-sizing: border-box;\n"]);return ze=function(){return e},e}var Ae=S.a.div(ze()),De=S.a.div(Te()),Ie=Object(S.a)(m.c)(Ce()),_e=S.a.div(Se()),Pe=function(e){return{language:e.settings.language,theme:e.settings.theme,slogan:e.settings.slogan,interval:e.settings.interval}},Le=function(e){return{updateLanguage:function(t){return e($(t))},updateTheme:function(t){return e(K(t))},updateSlogan:function(t){return e(q(t))}}},We=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showMenu:!0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,n,a=this.props,r=a.match,i=j(a.theme),s=o.a.createElement(k.a,{id:"settings"},function(e){return o.a.createElement(Y.Helmet,null,o.a.createElement("title",null,e))}),c=(e=r,function(){return o.a.createElement(h.a,{to:"".concat(e.url,"/appearance")})}),l=o.a.createElement(_e,null,o.a.createElement(h.d,null,o.a.createElement(h.b,{exact:!0,path:"".concat(r.url,"/slogan"),component:Object(b.b)(Pe,Le)(Object(k.e)(ye))}),o.a.createElement(h.b,{exact:!0,path:"".concat(r.url,"/language"),component:Object(b.b)(Pe,Le)(pe)}),o.a.createElement(h.b,{exact:!0,path:"".concat(r.url,"/appearance"),component:Object(b.b)(Pe,Le)(le)}),o.a.createElement(h.b,{exact:!0,path:"".concat(r.url,"/about"),component:Object(b.b)(Pe,Le)(me)}),o.a.createElement(h.b,{render:c}))),u=o.a.createElement(m.b,{to:"/"},o.a.createElement(P.c,{style:{color:i.textPrimary,fontSize:"2em",verticalAlign:"middle"}})),d=o.a.createElement(P.d,{style:{color:i.textPrimary,fontSize:"2em",verticalAlign:"middle"},onClick:(t=this,n=!this.state.showMenu,function(){return t.setState({showMenu:n})})}),p=["appearance","slogan","language","about"].map(function(e,t){return o.a.createElement(Ie,{key:t,activeClassName:"selected",activeStyle:{color:i.textPrimary},style:{color:i.textSecondary},to:"".concat(r.url,"/").concat(e)},o.a.createElement(k.a,{id:"settings.".concat(e)}))}),g=o.a.createElement(Oe,null,o.a.createElement("main",{style:{height:"100%",display:"flex",flexDirection:"row"}},o.a.createElement(De,{style:{borderColor:Q(i.textSecondary,.2)}},p),l)),f=o.a.createElement(ke,null,o.a.createElement("main",{style:{width:"100%",display:"flex",flexDirection:"column"}},o.a.createElement(De,{style:{borderColor:Q(i.textSecondary,.2)}},p),l)),v=o.a.createElement(je,null,o.a.createElement("main",{style:{width:"100%",display:"flex",flexDirection:"column"}},this.state.showMenu?o.a.createElement(De,{style:{borderColor:Q(i.textSecondary,.2),width:"100%",display:"flex",flexDirection:"column"}},p):void 0,l));return o.a.createElement(Ae,{style:{backgroundColor:i.background,color:i.textPrimary}},s,o.a.createElement(k.a,{id:"settings"},function(e){return[o.a.createElement(Oe,{key:0},o.a.createElement(D,{title:e,rightExtra:u})),o.a.createElement(ke,{key:1},o.a.createElement(D,{title:e,leftExtra:u})),o.a.createElement(je,{key:2},o.a.createElement(D,{title:e,leftExtra:u,rightExtra:d}))]}),g,f,v)}}]),t}(r.Component),Me=Object(b.b)(Pe,Le)(We),Ne={appName:"\u6211\u7231\u5de5\u4f5c","slogan.default":"**\u4f18\u79c0**|\u662f\u4e00\u79cd\u4e60\u60ef\n**\u4f18\u79c0**|\u662f\u4e0e\u751f\u4ff1\u6765\u7684\u5929\u8d4b\n**\u6211\u7231\u5de5\u4f5c**\n\u6211\u5f9c\u5f89\u5728\u5de5\u4f5c\u7684\u6d77\u6d0b\u91cc\n\u4e0a\u53f8\u53eb\u6211\u5403\u996d|\u6211\u5145\u8033\u4e0d\u95fb\n\u540c\u4e8b\u558a\u6211\u559d\u6c34|\u6211\u65e0\u52a8\u4e8e\u8877\n\u8001\u677f\u558a\u6211\u7761\u89c9|\u6211\u767e\u822c\u63a8\u8f9e","action.ok":"\u597d\u7684","action.save":"\u4fdd\u5b58","action.save.success":"\u4fdd\u5b58\u6210\u529f","action.cancel":"\u53d6\u6d88","action.reset":"\u91cd\u7f6e",settings:"\u8bbe\u7f6e","settings.application":"\u5e94\u7528\u7a0b\u5e8f","settings.appearance":"\u754c\u9762","settings.language":"\u8bed\u8a00","settings.language.default":"\u8ddf\u968f\u7cfb\u7edf","settings.about":"\u5173\u4e8e","settings.slogan":"\u6807\u8bed","settings.slogan.syntax":"\u8bed\u6cd5\u8bf4\u660e","settings.slogan.syntax.summary":"\u4e00\u884c\u8bed\u53e5\u4e3a\u4e00\u6bb5\uff0c\u4f7f\u7528 | \u8fdb\u884c\u6bb5\u5185\u5206\u884c\n\n\u53e6\u5916\u652f\u6301\u4f7f\u7528\u90e8\u5206\u7b80\u5355\u7684 Markdown \u8bed\u6cd5\uff1a\n\n`**\u52a0\u7c97**` \u21e8 **\u52a0\u7c97**\n\n`*\u659c\u4f53*` \u21e8 *\u659c\u4f53*\n\n`~~\u5220\u9664~~` \u21e8 ~~\u5220\u9664~~","settings.slogan.custom":"\u81ea\u5b9a\u4e49\u6807\u8bed","settings.slogan.interval":"\u65f6\u95f4\u95f4\u9694","settings.about.release_note":"\u66f4\u65b0\u65e5\u5fd7","settings.appearance.theme":"\u4e3b\u9898","settings.appearance.theme.white":"\u767d \u8272","settings.appearance.theme.black":"\u9ed1 \u8272","settings.appearance.theme.light":"\u4eae \u8272","settings.appearance.theme.dark":"\u6697 \u8272","settings.appearance.theme.chrome-dark":"Chrome(\u6697)"},Re={appName:"\u6211\u611b\u5de5\u4f5c","slogan.default":"**\u512a\u79c0**|\u662f\u4e00\u7a2e\u7fd2\u6163\n**\u512a\u79c0**|\u662f\u8207\u751f\u4ff1\u4f86\u7684\u5929\u8ce6\n**\u6211\u611b\u5de5\u4f5c**\n\u5de5\u4f5c\u4f7f\u6211\u5feb\u6a02\n\u6211\u5f9c\u5f89\u5728\u5de5\u4f5c\u7684\u6d77\u6d0b\u88e1\n\u4e0a\u53f8\u53eb\u6211\u5403\u98ef|\u6211\u5145\u8033\u4e0d\u805e\n\u540c\u4e8b\u558a\u6211\u559d\u6c34|\u6211\u7121\u52d5\u65bc\u8877\n\u8001\u95c6\u558a\u6211\u7761\u89ba|\u6211\u767e\u822c\u63a8\u8fad","action.ok":"\u597d\u7684","action.save":"\u4fdd\u5b58","action.save.success":"\u4fdd\u5b58\u6210\u529f","action.cancel":"\u53d6\u6d88","action.reset":"\u91cd\u7f6e",settings:"\u8a2d\u7f6e","settings.application":"\u61c9\u7528\u7a0b\u5e8f","settings.appearance":"\u754c\u9762","settings.language":"\u8a9e\u8a00","settings.language.default":"\u8ddf\u96a8\u7cfb\u7d71","settings.about":"\u95dc\u65bc","settings.slogan":"\u6a19\u8a9e","settings.slogan.syntax":"\u8a9e\u6cd5\u8aaa\u660e","settings.slogan.syntax.summary":"\u4e00\u884c\u8a9e\u53e5\u70ba\u4e00\u6bb5\uff0c\u4f7f\u7528 | \u9032\u884c\u6bb5\u5167\u5206\u884c\n\n\u53e6\u5916\u652f\u6301\u4f7f\u7528\u90e8\u5206\u7c21\u55ae\u7684 Markdown \u8a9e\u6cd5\uff1a\n\n`**\u52a0\u7c97**` \u21e8 **\u52a0\u7c97**\n\n`*\u659c\u9ad4*` \u21e8 *\u659c\u9ad4*\n\n`~~\u522a\u9664~~` \u21e8 ~~\u522a\u9664~~","settings.slogan.custom":"\u81ea\u5b9a\u7fa9\u6a19\u8a9e","settings.slogan.interval":"\u6642\u9593\u9593\u9694","settings.about.release_note":"\u66f4\u65b0\u65e5\u8a8c","settings.appearance.theme":"\u4e3b\u984c","settings.appearance.theme.white":"\u767d \u8272","settings.appearance.theme.black":"\u9ed1 \u8272","settings.appearance.theme.light":"\u4eae \u8272","settings.appearance.theme.dark":"\u6697 \u8272","settings.appearance.theme.chrome-dark":"Chrome(\u6697)"},Ue={appName:"I \u2764 Works","slogan.default":"**Excellent**| is a habit\n**Excellent**| is a gift\n**I love working**\nWorking makes me happy\nI am in the ocean of work\nBoss told me to have lunch | I turn a deaf ear\nColleagues call me to drink | I am indifferent\nManager call me to sleep | I refuse strongly","action.ok":"OK","action.save":"Save","action.save.success":"Saved successfully","action.cancel":"Cancel","action.reset":"Reset",settings:"Settings","settings.application":"Application","settings.appearance":"Appearance","settings.language":"Language","settings.language.default":"Default","settings.about":"About","settings.slogan":"Slogan","settings.slogan.syntax":"Syntax description","settings.slogan.syntax.summary":"\nOne line statement is a paragraph, use '|' to perform line break\n\nAnd you can use some basic Markdown inline syntax:\n\n`**Bold**` \u21e8 **Bold**\n\n`*Italic*` \u21e8 *Italic*\n\n`~~Delete~~` \u21e8 ~~Delete~~","settings.slogan.custom":"Custom slogan","settings.slogan.interval":"Interval","settings.about.release_note":"Release Notes","settings.appearance.theme":"Theme","settings.appearance.theme.white":"White","settings.appearance.theme.black":"Black","settings.appearance.theme.light":"Light","settings.appearance.theme.dark":"Dark","settings.appearance.theme.chrome-dark":"Chrome Dark"};function Be(e){var t=e;switch(t||(t=navigator.userLanguage||navigator.language),t.toLocaleLowerCase()){case"zh":case"zh-hans":case"zh-cn":return Ne;case"zh-hk":case"zh-tw":case"zh-mo":case"zh-sg":case"zh-hant":return Re;default:return Ue}}var He=n(71),Xe=n.n(He),Fe=n(72),Ge=n.n(Fe);Object(k.c)([].concat(Object(g.a)(Ge.a),Object(g.a)(Xe.a)));var Ve=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=j(this.props.theme),t=o.a.createElement(k.a,{id:"appName"},function(t){return o.a.createElement(Y.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,t),o.a.createElement("meta",{name:"theme-color",content:e.background}))}),n=o.a.createElement(m.a,null,o.a.createElement(h.d,null,o.a.createElement(h.b,{exact:!0,path:"/",component:F}),o.a.createElement(h.b,{path:"/settings",component:Me}),o.a.createElement(h.b,{render:function(){return o.a.createElement(h.a,{to:"/"})}})));return o.a.createElement(k.b,{locale:navigator.language,messages:Be(this.props.language)},o.a.createElement("div",null,t,n))}}]),t}(r.Component),Je=Object(b.b)(function(e){return{language:L("lang")||e.settings.language,theme:e.settings.theme}},null)(Ve),$e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ke(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!==n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var qe=n(18),Qe=n(73),Ye=n.n(Qe),Ze=n(35),et=n(74),tt=n.n(et),nt={};var at=Object(qe.c)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(O.a)({},e,{language:t.language});case V:return Object(O.a)({},e,{theme:t.theme});case J:return Object(O.a)({},e,{slogan:t.slogan});default:return e}}}),rt=[Ye.a],ot=qe.a.apply(void 0,rt)(qe.d),it=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__({actionCreators:a}),st={key:"root",storage:tt.a},ct=Object(Ze.a)(st,at);var lt=n(75),ut=ot(ct,it);s.a.render(o.a.createElement(b.a,{store:ut},o.a.createElement(lt.a,{persistor:Object(Ze.b)(ut)},o.a.createElement(Je,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");$e?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!==a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ke(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ke(t,e)})}}()},64:function(e,t){},69:function(e){e.exports={name:"iloveworks",homepage:"https://sorcererxw.github.io/",version:"0.1.4",private:!0,dependencies:{csstype:"^2.6.5",fbjs:"^1.0.0",intl:"^1.2.5",react:"^16.4.1","react-addons-css-transition-group":"^15.6.2","react-autosize-textarea":"^7.0.0","react-dom":"^16.4.2","react-helmet":"^5.2.0","react-icons":"^3.0.4","react-intl":"^2.4.0","react-intl-redux":"^2.0.1","react-markdown":"^4.0.8","react-redux":"^7.0.3","react-responsive":"^7.0.0","react-router-dom":"^5.0.1","react-scripts":"^3.0.1",redux:"^4.0.0","redux-logger":"^3.0.6","redux-persist":"^5.10.0","styled-components":"^4.2.1"},devDependencies:{"@types/jest":"^24.0.13","@types/node":"^12.0.4","@types/react":"^16.8.19","@types/react-addons-css-transition-group":"^15.0.5","@types/react-dom":"^16.8.4","@types/react-helmet":"^5.0.8","@types/react-intl":"^2.3.18","@types/react-redux":"^7.0.9","@types/react-responsive":"^3.0.3","@types/react-router-dom":"^4.3.3","@types/redux-logger":"^3.0.7","@types/styled-components":"^4.1.16","gh-pages":"^2.0.1",prettier:"^1.18.2","redux-devtools":"^3.4.1",tslint:"^5.17.0","tslint-jike-node":"^0.0.17",typescript:"^3.5.1"},scripts:{start:"react-scripts start",build:"npm run lint && react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject",clean:"rm -r node_modules && rm package-lock.json",predeploy:"npm run build",lint:"tslint --project .",deploy:"gh-pages -d build",prettier:'prettier --check "src/**/*" --write',"fix-lint":"tslint --fix -c ./tslint.json 'src/**/*{.ts,.tsx}'"},browserslist:{production:[">0.2%","not dead","not op_mini all"],development:["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}},78:function(e,t,n){e.exports=n(204)},83:function(e,t,n){},84:function(e,t,n){},96:function(e,t){}},[[78,1,2]]]);
//# sourceMappingURL=main.2e421d58.chunk.js.map