
          window.__NEXT_REGISTER_PAGE('/play', function() {
            var comp = module.exports=webpackJsonp([4],{109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=(n.n(a),n(34)),o=n(70);n.d(t,"sheet",function(){return r.sheet}),n.d(t,"inserted",function(){return r.inserted}),n.d(t,"flush",function(){return r.flush}),n.d(t,"css",function(){return r.css}),n.d(t,"injectGlobal",function(){return r.injectGlobal}),n.d(t,"fontFace",function(){return r.fontFace}),n.d(t,"keyframes",function(){return r.keyframes}),n.d(t,"hydrate",function(){return r.hydrate}),n.d(t,"objStyle",function(){return r.objStyle}),n.d(t,"isLikeRule",function(){return r.isLikeRule}),n.d(t,"idFor",function(){return r.idFor});var s=function(e,t){return Array.prototype.push.apply(e,t)},i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|accept|acceptCharset|accessKey|action|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable)|(on[A-Z].*)|((data|aria)-.*))$/,u=function(e){return i.test(e)},l=function(e){return"theme"!==e&&"innerRef"!==e},c=function(e,t,n){function i(e,t){var n=function(n){return n&&"function"==typeof n?void 0!==n.__emotion_class?"& ."+n.__emotion_class:n(e,t):n},i=[];s(i,Object(o.reduce)(p,function(e,t){return s(e,t.objs),t.content&&e.push(t.content.apply(null,Object(o.map)(t.vars,n))),e.push(t.cls),e},[])),e.className&&s(i,e.className.split(" "));var u=Object(r.css)(Object(o.map)(i,n));return Object(a.createElement)(m,Object(o.omit)(Object(o.assign)({},e,{ref:e.innerRef,className:u}),g))}var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],d=arguments[4];if(!e)throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");var f=e.displayName||e.name||"Component",h={vars:c,content:d,objs:n,tag:e,cls:t},p=void 0!==e.__emotion_spec?e.__emotion_spec.concat(h):[h],m=p[0].tag,g="string"==typeof m?u:l;return i.displayName="styled("+f+")",i.__emotion_spec=p,i.__emotion_class=t,i};t.default=c},229:function(e,t,n){e.exports=n(230)},230:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=a(r),s=n(231),i=a(s);t.default=function(){return o.default.createElement("div",null,o.default.createElement("h1",null,"Let’s play!"),o.default.createElement(i.default,null))}},231:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(232),o=a(r),s=n(7),i=a(s),u=n(2),l=a(u),c=n(3),d=a(c),f=n(8),h=a(f),p=n(9),m=a(p),g=n(1),y=a(g),b=n(235),w=a(b),v=n(237),x=function(e){function t(){var e,n,a,r;(0,l.default)(this,t);for(var o=arguments.length,s=Array(o),u=0;u<o;u++)s[u]=arguments[u];return n=a=(0,h.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(s))),a.state={textObj:null},r=n,(0,h.default)(a,r)}return(0,m.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){var e=(0,o.default)(v.texts);this.setState({textObj:v.texts[e[parseInt(e.length*Math.random(),10)]]})}},{key:"render",value:function(){var e=this.state.textObj;return e?y.default.createElement(w.default,{text:e.text,sourceName:e.name,sourceUrl:e.url}):y.default.createElement("p",null,"Game is loading...")}}]),t}(y.default.Component);t.default=x},232:function(e,t,n){e.exports={default:n(233),__esModule:!0}},233:function(e,t,n){n(234),e.exports=n(0).Object.keys},234:function(e,t,n){var a=n(24),r=n(23);n(89)("keys",function(){return function(e){return r(a(e))}})},235:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=a(r),s=n(2),i=a(s),u=n(3),l=a(u),c=n(8),d=a(c),f=n(9),h=a(f),p=n(16),m=(a(p),n(1)),g=a(m),y=n(236),b=a(y),w=n(109),v=a(w),x=(0,v.default)("div","css-GameContainer-c3lqjz0",[],[],function(){return{maxWidth:"700px",margin:"1em auto"}}),k=(0,v.default)("div","css-Status-c3lqjz1",[],[],function(){return{marginTop:"1em"}}),_=function(e){function t(){var e,n,a,r;(0,i.default)(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=a=(0,d.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(u))),a.state={wpm:null,progress:0},a.onType=function(){a.started||(a.started=Date.now())},a.onProgress=function(e,t){a.setState({progress:e/t,wpm:e/5/((Date.now()-a.started)/6e4)})},r=n,(0,d.default)(a,r)}return(0,h.default)(t,e),(0,l.default)(t,[{key:"componentWillReceiveProps",value:function(e){if(e.text!==this.props.text)throw new Error("Error! This component does not support receiving new text. Please unmount this component and mount a new component (using `key={text}`)")}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.sourceName,a=e.sourceUrl,r=this.state,o=r.progress,s=r.wpm;return g.default.createElement(x,null,g.default.createElement(b.default,{text:t,sourceName:n,sourceUrl:a,onProgress:this.onProgress,onType:this.onType}),g.default.createElement(k,null,(100*o).toFixed(0),"% completed",s?", "+s.toFixed(0)+" WPM":""))}}]),t}(g.default.Component);t.default=_},236:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=a(r),s=n(2),i=a(s),u=n(3),l=a(u),c=n(8),d=a(c),f=n(9),h=a(f),p=n(16),m=(a(p),n(1)),g=a(m),y=n(109),b=a(y),w=(0,b.default)("div","css-TypingGameContainer-bftdn10",[],[],function(){return{fontSize:"24px"}}),v=(0,b.default)("div","css-GameText-bftdn11",[],[function(e){return e.ok?"#4a3":"#f00"},function(e){return e.ok?"transparent":"#fcc"}],function(e,t){return{lineHeight:"1.5","& .past":{color:"#888"},"& .present":{color:e,background:t,textDecoration:"underline"},"& .future":{color:"#333"}}}),x=(0,b.default)("div","css-InputArea-bftdn12",[],[],function(){return{marginTop:"1em","& label":{color:"#888",fontSize:"18px"}}}),k=(0,b.default)("div","css-Attribution-bftdn13",[],[],function(){return{margin:"1em 0 3em",fontSize:"0.5em",textAlign:"right",color:"grey","& a,\n  a:visited":{color:"grey",textDecoration:"none"}}}),_=(0,b.default)("input","css-Input-bftdn14",[],[function(e){return e.ok?"white":"#faa"},function(e){return e.ok?"#333":"#f00"}],function(e,t){return{width:"100%",WebkitBoxSizing:"border-box",boxSizing:"border-box",font:"inherit",fontSize:"1.5em",background:e,color:t}}),T=function(e){function t(){var e,n,a,r;(0,i.default)(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=a=(0,d.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(u))),a.state={charactersCommitted:0,inputText:""},a.onChange=function(e){var t=a.props,n=t.onProgress,r=t.onType,o=t.text;r&&r();var s=a.state.charactersCommitted,i=e.target.value;if(i===o.substr(s)||i.endsWith(" ")&&o.substr(s,i.length)===i){var u=s+i.length;a.setState({inputText:"",charactersCommitted:u}),n&&n(u,o.length)}else a.setState({inputText:i.replace(/^\s+/,"")})},r=n,(0,d.default)(a,r)}return(0,h.default)(t,e),(0,l.default)(t,[{key:"componentWillReceiveProps",value:function(e){if(e.text!==this.props.text)throw new Error("Error! This component does not support receiving new text. Please unmount this component and mount a new component (using `key={text}`)")}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.sourceName,a=e.sourceUrl,r=this.state,o=r.charactersCommitted,s=r.inputText,i=t.substr(o).startsWith(s),u=t.substr(0,o),l=(t.substr(o).match(/^\S+/)||[""])[0],c=t.substr(o+l.length),d=o===t.length,f=a?g.default.createElement("a",{href:a},n):n;return g.default.createElement(w,null,g.default.createElement(v,{ok:i},g.default.createElement("span",{className:"past"},u),g.default.createElement("span",{className:"present"},l),g.default.createElement("span",{className:"future"},c)),g.default.createElement(k,null,"Excerpt from ",f),g.default.createElement(x,null,g.default.createElement("label",{htmlFor:"text"},"Type the text:"),g.default.createElement(_,{ok:i,id:"text",autoFocus:!0,onChange:this.onChange,value:s,disabled:d})))}}]),t}(g.default.Component);t.default=T},237:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.texts={1:{text:"I have a pen. I have an apple. Uh! Apple-pen. I have a pen. I have pineapple. Uh! Pineapple-pen. Apple-pen... Pineapple-pen... Uh!! Pen-pineapple-apple-pen.",name:"PPAP by Pikotaro"},2:{text:"It's supercalifragilisticexpialidocious. Even though the sound of it is something quite atrocious. If you say it loud enough, you'll always sound precocious. Supercalifragilisticexpialidocious!",name:"Supercalifragilisticexpialidocious from Mary Poppins"},3:{text:"In the morning we went up to the village and bought a wire rat-trap and fetched it down, and unstopped the best rat-hole, and in about an hour we had fifteen of the bulliest kind of ones; and then we took it and put it in a safe place under Aunt Sally's bed.",name:"Adventures of Huckleberry Finn by Mark Twain",url:"https://www.gutenberg.org/ebooks/76"},4:{text:"Without doubt princes become great when they overcome the difficulties and obstacles by which they are confronted, and therefore fortune, especially when she desires to make a new prince great, who has a greater necessity to earn renown than an hereditary one, causes enemies to arise and form designs against him, in order that he may have the opportunity of overcoming them, and by them to mount higher, as by a ladder which his enemies have raised.",name:"The Prince by Niccolò Machiavelli",url:"http://www.gutenberg.org/ebooks/1232"},5:{text:"Luckily for Alice, the little magic bottle had now had its full effect, and she grew no larger: still it was very uncomfortable, and, as there seemed to be no sort of chance of her ever getting out of the room again, no wonder she felt unhappy.",name:"Alice's Adventures in Wonderland by Lewis Carroll",url:"https://www.gutenberg.org/ebooks/11"},6:{text:"There was no rain, as Holmes had foretold, and the morning broke bright and cloudless. At nine o'clock Lestrade called for us with the carriage, and we set off for Hatherley Farm and the Boscombe Pool.",name:"The Adventures of Sherlock Holmes by Arthur Conan Doyle",url:"https://www.gutenberg.org/ebooks/1661"},7:{text:"But the attention of every lady was soon caught by a young man, whom they had never seen before, of most gentlemanlike appearance, walking with another officer on the other side of the way. The officer was the very Mr. Denny concerning whose return from London Lydia came to inquire, and he bowed as they passed.",name:"Pride and Prejudice by Jane Austen",url:"https://www.gutenberg.org/ebooks/1342"},8:{text:"Then Mary did a strange thing. She leaned forward and asked him a question she had never dreamed of asking any one before. And she tried to ask it in Yorkshire because that was his language, and in India a native was always pleased if you knew his speech.",name:"The Secret Garden by Frances Hodgson Burnett",url:"https://www.gutenberg.org/ebooks/17396"},9:{text:"Just at this juncture the boy felt a slow, fateful grip closing on his ear, and a steady lifting impulse. In that wise he was borne across the house and deposited in his own seat, under a peppering fire of giggles from the whole school. Then the master stood over him during a few awful moments, and finally moved away to his throne without saying a word. But although Tom's ear tingled, his heart was jubilant.",name:"The Adventures of Tom Sawyer by Mark Twain",url:"https://www.gutenberg.org/ebooks/74"}}}},[229]);
            return { page: comp.default }
          })
        