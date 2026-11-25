import{c as xe,j as m,r as oe,u as ye,P as $}from"./styles-CSXi6uzc.js";function Z(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var R=Z();function le(n){R=n}var I={exec:()=>null};function p(n,e=""){let t=typeof n=="string"?n:n.source;const r={replace:(s,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(b.caret,"$1"),t=t.replace(s,a),r},getRegex:()=>new RegExp(t,e)};return r}var b={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},ve=/^(?:[ \t]*(?:\n|$))+/,Te=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Re=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,_=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Se=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,H=/(?:[*+-]|\d{1,9}[.)])/,he=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ce=p(he).replace(/bull/g,H).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),$e=p(he).replace(/bull/g,H).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),W=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ae=/^[^\n]+/,F=/(?!\s*\])(?:\\.|[^\[\]\\])+/,ze=p(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",F).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ie=p(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,H).getRegex(),j="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",U=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,_e=p("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",U).replace("tag",j).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ue=p(W).replace("hr",_).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",j).getRegex(),Ce=p(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ue).getRegex(),Q={blockquote:Ce,code:Te,def:ze,fences:Re,heading:Se,hr:_,html:_e,lheading:ce,list:Ie,newline:ve,paragraph:ue,table:I,text:Ae},ne=p("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",_).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",j).getRegex(),Le={...Q,lheading:$e,table:ne,paragraph:p(W).replace("hr",_).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ne).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",j).getRegex()},Pe={...Q,html:p(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",U).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:I,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:p(W).replace("hr",_).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ce).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Be=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ee=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,pe=/^( {2,}|\\)\n(?!\s*$)/,je=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,q=/[\p{P}\p{S}]/u,X=/[\s\p{P}\p{S}]/u,de=/[^\s\p{P}\p{S}]/u,qe=p(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,X).getRegex(),ge=/(?!~)[\p{P}\p{S}]/u,Ge=/(?!~)[\s\p{P}\p{S}]/u,Oe=/(?:[^\s\p{P}\p{S}]|~)/u,Ne=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,fe=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Me=p(fe,"u").replace(/punct/g,q).getRegex(),De=p(fe,"u").replace(/punct/g,ge).getRegex(),me="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Ze=p(me,"gu").replace(/notPunctSpace/g,de).replace(/punctSpace/g,X).replace(/punct/g,q).getRegex(),He=p(me,"gu").replace(/notPunctSpace/g,Oe).replace(/punctSpace/g,Ge).replace(/punct/g,ge).getRegex(),We=p("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,de).replace(/punctSpace/g,X).replace(/punct/g,q).getRegex(),Fe=p(/\\(punct)/,"gu").replace(/punct/g,q).getRegex(),Ue=p(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Qe=p(U).replace("(?:-->|$)","-->").getRegex(),Xe=p("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Qe).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),P=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ve=p(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",P).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ke=p(/^!?\[(label)\]\[(ref)\]/).replace("label",P).replace("ref",F).getRegex(),be=p(/^!?\[(ref)\](?:\[\])?/).replace("ref",F).getRegex(),Je=p("reflink|nolink(?!\\()","g").replace("reflink",ke).replace("nolink",be).getRegex(),V={_backpedal:I,anyPunctuation:Fe,autolink:Ue,blockSkip:Ne,br:pe,code:Ee,del:I,emStrongLDelim:Me,emStrongRDelimAst:Ze,emStrongRDelimUnd:We,escape:Be,link:Ve,nolink:be,punctuation:qe,reflink:ke,reflinkSearch:Je,tag:Xe,text:je,url:I},Ke={...V,link:p(/^!?\[(label)\]\((.*?)\)/).replace("label",P).getRegex(),reflink:p(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",P).getRegex()},N={...V,emStrongRDelimAst:He,emStrongLDelim:De,url:p(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ye={...N,br:p(pe).replace("{2,}","*").getRegex(),text:p(N.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},C={normal:Q,gfm:Le,pedantic:Pe},A={normal:V,gfm:N,breaks:Ye,pedantic:Ke},et={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},se=n=>et[n];function x(n,e){if(e){if(b.escapeTest.test(n))return n.replace(b.escapeReplace,se)}else if(b.escapeTestNoEncode.test(n))return n.replace(b.escapeReplaceNoEncode,se);return n}function re(n){try{n=encodeURI(n).replace(b.percentDecode,"%")}catch{return null}return n}function ie(n,e){const t=n.replace(b.findPipe,(i,a,o)=>{let h=!1,l=a;for(;--l>=0&&o[l]==="\\";)h=!h;return h?"|":" |"}),r=t.split(b.splitPipe);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(b.slashPipe,"|");return r}function z(n,e,t){const r=n.length;if(r===0)return"";let s=0;for(;s<r&&n.charAt(r-s-1)===e;)s++;return n.slice(0,r-s)}function tt(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])t++;else if(n[r]===e[1]&&(t--,t<0))return r;return t>0?-2:-1}function ae(n,e,t,r,s){const i=e.href,a=e.title||null,o=n[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;const h={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:i,title:a,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,h}function nt(n,e,t){const r=n.match(t.other.indentCodeCompensation);if(r===null)return e;const s=r[1];return e.split(`
`).map(i=>{const a=i.match(t.other.beginningSpace);if(a===null)return i;const[o]=a;return o.length>=s.length?i.slice(s.length):i}).join(`
`)}var B=class{options;rules;lexer;constructor(n){this.options=n||R}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:z(t,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const t=e[0],r=nt(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){const r=z(t,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(t=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:z(e[0],`
`)}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){let t=z(e[0],`
`).split(`
`),r="",s="";const i=[];for(;t.length>0;){let a=!1;const o=[];let h;for(h=0;h<t.length;h++)if(this.rules.other.blockquoteStart.test(t[h]))o.push(t[h]),a=!0;else if(!a)o.push(t[h]);else break;t=t.slice(h);const l=o.join(`
`),c=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${l}`:l,s=s?`${s}
${c}`:c;const f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=f,t.length===0)break;const u=i.at(-1);if(u?.type==="code")break;if(u?.type==="blockquote"){const k=u,g=k.raw+`
`+t.join(`
`),w=this.blockquote(g);i[i.length-1]=w,r=r.substring(0,r.length-k.raw.length)+w.raw,s=s.substring(0,s.length-k.text.length)+w.text;break}else if(u?.type==="list"){const k=u,g=k.raw+`
`+t.join(`
`),w=this.list(g);i[i.length-1]=w,r=r.substring(0,r.length-u.raw.length)+w.raw,s=s.substring(0,s.length-k.raw.length)+w.raw,t=g.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:s}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim();const r=t.length>1,s={type:"list",raw:"",ordered:r,start:r?+t.slice(0,-1):"",loose:!1,items:[]};t=r?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=r?t:"[*+-]");const i=this.rules.other.listItemRegex(t);let a=!1;for(;n;){let h=!1,l="",c="";if(!(e=i.exec(n))||this.rules.block.hr.test(n))break;l=e[0],n=n.substring(l.length);let f=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,G=>" ".repeat(3*G.length)),u=n.split(`
`,1)[0],k=!f.trim(),g=0;if(this.options.pedantic?(g=2,c=f.trimStart()):k?g=e[1].length+1:(g=e[2].search(this.rules.other.nonSpaceChar),g=g>4?1:g,c=f.slice(g),g+=e[1].length),k&&this.rules.other.blankLine.test(u)&&(l+=u+`
`,n=n.substring(u.length+1),h=!0),!h){const G=this.rules.other.nextBulletRegex(g),Y=this.rules.other.hrRegex(g),ee=this.rules.other.fencesBeginRegex(g),te=this.rules.other.headingBeginRegex(g),we=this.rules.other.htmlBeginRegex(g);for(;n;){const O=n.split(`
`,1)[0];let S;if(u=O,this.options.pedantic?(u=u.replace(this.rules.other.listReplaceNesting,"  "),S=u):S=u.replace(this.rules.other.tabCharGlobal,"    "),ee.test(u)||te.test(u)||we.test(u)||G.test(u)||Y.test(u))break;if(S.search(this.rules.other.nonSpaceChar)>=g||!u.trim())c+=`
`+S.slice(g);else{if(k||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||ee.test(f)||te.test(f)||Y.test(f))break;c+=`
`+u}!k&&!u.trim()&&(k=!0),l+=O+`
`,n=n.substring(O.length+1),f=S.slice(g)}}s.loose||(a?s.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(a=!0));let w=null,K;this.options.gfm&&(w=this.rules.other.listIsTask.exec(c),w&&(K=w[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:l,task:!!w,checked:K,loose:!1,text:c,tokens:[]}),s.raw+=l}const o=s.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let h=0;h<s.items.length;h++)if(this.lexer.state.top=!1,s.items[h].tokens=this.lexer.blockTokens(s.items[h].text,[]),!s.loose){const l=s.items[h].tokens.filter(f=>f.type==="space"),c=l.length>0&&l.some(f=>this.rules.other.anyLine.test(f.raw));s.loose=c}if(s.loose)for(let h=0;h<s.items.length;h++)s.items[h].loose=!0;return s}}html(n){const e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){const e=this.rules.block.def.exec(n);if(e){const t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:r,title:s}}}table(n){const e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const t=ie(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===r.length){for(const a of r)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<t.length;a++)i.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:i.align[a]});for(const a of s)i.rows.push(ie(a,i.header.length).map((o,h)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:i.align[h]})));return i}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){const e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;const i=z(t.slice(0,-1),"\\");if((t.length-i.length)%2===0)return}else{const i=tt(e[2],"()");if(i===-2)return;if(i>-1){const o=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],s=i[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r=r.slice(1):r=r.slice(1,-1)),ae(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){const r=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){const i=t[0].charAt(0);return{type:"text",raw:i,text:i}}return ae(t,s,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let r=this.rules.inline.emStrongLDelim.exec(n);if(!r||r[3]&&t.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const i=[...r[0]].length-1;let a,o,h=i,l=0;const c=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*n.length+i);(r=c.exec(e))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){h+=o;continue}else if((r[5]||r[6])&&i%3&&!((i+o)%3)){l+=o;continue}if(h-=o,h>0)continue;o=Math.min(o,o+h+l);const f=[...r[0]][0].length,u=n.slice(0,i+r.index+f+o);if(Math.min(i,o)%2){const g=u.slice(1,-1);return{type:"em",raw:u,text:g,tokens:this.lexer.inlineTokens(g)}}const k=u.slice(2,-2);return{type:"strong",raw:u,text:k,tokens:this.lexer.inlineTokens(k)}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(t),s=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&s&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){const e=this.rules.inline.autolink.exec(n);if(e){let t,r;return e[2]==="@"?(t=e[1],r="mailto:"+t):(t=e[1],r=t),{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,r;if(e[2]==="@")t=e[0],r="mailto:"+t;else{let s;do s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(s!==e[0]);t=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){const e=this.rules.inline.text.exec(n);if(e){const t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},y=class M{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||R,this.options.tokenizer=this.options.tokenizer||new B,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={other:b,block:C.normal,inline:A.normal};this.options.pedantic?(t.block=C.pedantic,t.inline=A.pedantic):this.options.gfm&&(t.block=C.gfm,this.options.breaks?t.inline=A.breaks:t.inline=A.gfm),this.tokenizer.rules=t}static get rules(){return{block:C,inline:A}}static lex(e,t){return new M(t).lex(e)}static lexInline(e,t){return new M(t).inlineTokens(e)}lex(e){e=e.replace(b.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],r=!1){for(this.options.pedantic&&(e=e.replace(b.tabCharGlobal,"    ").replace(b.spaceLine,""));e;){let s;if(this.options.extensions?.block?.some(a=>(s=a.call({lexer:this},e,t))?(e=e.substring(s.raw.length),t.push(s),!0):!1))continue;if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length);const a=t.at(-1);s.raw.length===1&&a!==void 0?a.raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length);const a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.at(-1).src=a.text):t.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length);const a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=`
`+s.raw,a.text+=`
`+s.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),t.push(s);continue}let i=e;if(this.options.extensions?.startBlock){let a=1/0;const o=e.slice(1);let h;this.options.extensions.startBlock.forEach(l=>{h=l.call({lexer:this},o),typeof h=="number"&&h>=0&&(a=Math.min(a,h))}),a<1/0&&a>=0&&(i=e.substring(0,a+1))}if(this.state.top&&(s=this.tokenizer.paragraph(i))){const a=t.at(-1);r&&a?.type==="paragraph"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(s),r=i.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length);const a=t.at(-1);a?.type==="text"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(s);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r=e,s=null;if(this.tokens.links){const o=Object.keys(this.tokens.links);if(o.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)o.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,a="";for(;e;){i||(a=""),i=!1;let o;if(this.options.extensions?.inline?.some(l=>(o=l.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);const l=t.at(-1);o.type==="text"&&l?.type==="text"?(l.raw+=o.raw,l.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,r,a)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let h=e;if(this.options.extensions?.startInline){let l=1/0;const c=e.slice(1);let f;this.options.extensions.startInline.forEach(u=>{f=u.call({lexer:this},c),typeof f=="number"&&f>=0&&(l=Math.min(l,f))}),l<1/0&&l>=0&&(h=e.substring(0,l+1))}if(o=this.tokenizer.inlineText(h)){e=e.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(a=o.raw.slice(-1)),i=!0;const l=t.at(-1);l?.type==="text"?(l.raw+=o.raw,l.text+=o.text):t.push(o);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return t}},E=class{options;parser;constructor(n){this.options=n||R}space(n){return""}code({text:n,lang:e,escaped:t}){const r=(e||"").match(b.notSpaceStart)?.[0],s=n.replace(b.endingNewline,"")+`
`;return r?'<pre><code class="language-'+x(r)+'">'+(t?s:x(s,!0))+`</code></pre>
`:"<pre><code>"+(t?s:x(s,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){const e=n.ordered,t=n.start;let r="";for(let a=0;a<n.items.length;a++){const o=n.items[a];r+=this.listitem(o)}const s=e?"ol":"ul",i=e&&t!==1?' start="'+t+'"':"";return"<"+s+i+`>
`+r+"</"+s+`>
`}listitem(n){let e="";if(n.task){const t=this.checkbox({checked:!!n.checked});n.loose?n.tokens[0]?.type==="paragraph"?(n.tokens[0].text=t+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=t+" "+x(n.tokens[0].tokens[0].text),n.tokens[0].tokens[0].escaped=!0)):n.tokens.unshift({type:"text",raw:t+" ",text:t+" ",escaped:!0}):e+=t+" "}return e+=this.parser.parse(n.tokens,!!n.loose),`<li>${e}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let s=0;s<n.header.length;s++)t+=this.tablecell(n.header[s]);e+=this.tablerow({text:t});let r="";for(let s=0;s<n.rows.length;s++){const i=n.rows[s];t="";for(let a=0;a<i.length;a++)t+=this.tablecell(i[a]);r+=this.tablerow({text:t})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${x(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){const r=this.parser.parseInline(t),s=re(n);if(s===null)return r;n=s;let i='<a href="'+n+'"';return e&&(i+=' title="'+x(e)+'"'),i+=">"+r+"</a>",i}image({href:n,title:e,text:t,tokens:r}){r&&(t=this.parser.parseInline(r,this.parser.textRenderer));const s=re(n);if(s===null)return x(t);n=s;let i=`<img src="${n}" alt="${t}"`;return e&&(i+=` title="${x(e)}"`),i+=">",i}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:x(n.text)}},J=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}},v=class D{options;renderer;textRenderer;constructor(e){this.options=e||R,this.options.renderer=this.options.renderer||new E,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new J}static parse(e,t){return new D(t).parse(e)}static parseInline(e,t){return new D(t).parseInline(e)}parse(e,t=!0){let r="";for(let s=0;s<e.length;s++){const i=e[s];if(this.options.extensions?.renderers?.[i.type]){const o=i,h=this.options.extensions.renderers[o.type].call({parser:this},o);if(h!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){r+=h||"";continue}}const a=i;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let o=a,h=this.renderer.text(o);for(;s+1<e.length&&e[s+1].type==="text";)o=e[++s],h+=`
`+this.renderer.text(o);t?r+=this.renderer.paragraph({type:"paragraph",raw:h,text:h,tokens:[{type:"text",raw:h,text:h,escaped:!0}]}):r+=h;continue}default:{const o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}parseInline(e,t=this.renderer){let r="";for(let s=0;s<e.length;s++){const i=e[s];if(this.options.extensions?.renderers?.[i.type]){const o=this.options.extensions.renderers[i.type].call({parser:this},i);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=o||"";continue}}const a=i;switch(a.type){case"escape":{r+=t.text(a);break}case"html":{r+=t.html(a);break}case"link":{r+=t.link(a);break}case"image":{r+=t.image(a);break}case"strong":{r+=t.strong(a);break}case"em":{r+=t.em(a);break}case"codespan":{r+=t.codespan(a);break}case"br":{r+=t.br(a);break}case"del":{r+=t.del(a);break}case"text":{r+=t.text(a);break}default:{const o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}},L=class{options;block;constructor(n){this.options=n||R}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}provideLexer(){return this.block?y.lex:y.lexInline}provideParser(){return this.block?v.parse:v.parseInline}},st=class{defaults=Z();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=v;Renderer=E;TextRenderer=J;Lexer=y;Tokenizer=B;Hooks=L;constructor(...n){this.use(...n)}walkTokens(n,e){let t=[];for(const r of n)switch(t=t.concat(e.call(this,r)),r.type){case"table":{const s=r;for(const i of s.header)t=t.concat(this.walkTokens(i.tokens,e));for(const i of s.rows)for(const a of i)t=t.concat(this.walkTokens(a.tokens,e));break}case"list":{const s=r;t=t.concat(this.walkTokens(s.items,e));break}default:{const s=r;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(i=>{const a=s[i].flat(1/0);t=t.concat(this.walkTokens(a,e))}):s.tokens&&(t=t.concat(this.walkTokens(s.tokens,e)))}}return t}use(...n){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{const r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const i=e.renderers[s.name];i?e.renderers[s.name]=function(...a){let o=s.renderer.apply(this,a);return o===!1&&(o=i.apply(this,a)),o}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=e[s.level];i?i.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),t.renderer){const s=this.defaults.renderer||new E(this.defaults);for(const i in t.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const a=i,o=t.renderer[a],h=s[a];s[a]=(...l)=>{let c=o.apply(s,l);return c===!1&&(c=h.apply(s,l)),c||""}}r.renderer=s}if(t.tokenizer){const s=this.defaults.tokenizer||new B(this.defaults);for(const i in t.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const a=i,o=t.tokenizer[a],h=s[a];s[a]=(...l)=>{let c=o.apply(s,l);return c===!1&&(c=h.apply(s,l)),c}}r.tokenizer=s}if(t.hooks){const s=this.defaults.hooks||new L;for(const i in t.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const a=i,o=t.hooks[a],h=s[a];L.passThroughHooks.has(i)?s[a]=l=>{if(this.defaults.async)return Promise.resolve(o.call(s,l)).then(f=>h.call(s,f));const c=o.call(s,l);return h.call(s,c)}:s[a]=(...l)=>{let c=o.apply(s,l);return c===!1&&(c=h.apply(s,l)),c}}r.hooks=s}if(t.walkTokens){const s=this.defaults.walkTokens,i=t.walkTokens;r.walkTokens=function(a){let o=[];return o.push(i.call(this,a)),s&&(o=o.concat(s.call(this,a))),o}}this.defaults={...this.defaults,...r}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return y.lex(n,e??this.defaults)}parser(n,e){return v.parse(n,e??this.defaults)}parseMarkdown(n){return(t,r)=>{const s={...r},i={...this.defaults,...s},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=n);const o=i.hooks?i.hooks.provideLexer():n?y.lex:y.lexInline,h=i.hooks?i.hooks.provideParser():n?v.parse:v.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(t):t).then(l=>o(l,i)).then(l=>i.hooks?i.hooks.processAllTokens(l):l).then(l=>i.walkTokens?Promise.all(this.walkTokens(l,i.walkTokens)).then(()=>l):l).then(l=>h(l,i)).then(l=>i.hooks?i.hooks.postprocess(l):l).catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let l=o(t,i);i.hooks&&(l=i.hooks.processAllTokens(l)),i.walkTokens&&this.walkTokens(l,i.walkTokens);let c=h(l,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(l){return a(l)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const r="<p>An error occurred:</p><pre>"+x(t.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(t);throw t}}},T=new st;function d(n,e){return T.parse(n,e)}d.options=d.setOptions=function(n){return T.setOptions(n),d.defaults=T.defaults,le(d.defaults),d};d.getDefaults=Z;d.defaults=R;d.use=function(...n){return T.use(...n),d.defaults=T.defaults,le(d.defaults),d};d.walkTokens=function(n,e){return T.walkTokens(n,e)};d.parseInline=T.parseInline;d.Parser=v;d.parser=v.parse;d.Renderer=E;d.TextRenderer=J;d.Lexer=y;d.lexer=y.lex;d.Tokenizer=B;d.Hooks=L;d.parse=d;d.options;d.setOptions;d.use;d.walkTokens;d.parseInline;v.parse;y.lex;const rt=`# We Built the Form. We Never Built the Lottery.

*A 2023 capstone project, revisited in 2026: redefining the problem, designing the rules,
and testing them with simulation.*

---

In 2023–24, my senior capstone team built a housing lottery application for the Office
of Residence Life and Housing at Gordon College. Students liked it. Reviewers called the
interface "clean," "professional," and "consistent with 360." We shipped a student
application form and an administrator table with CSV export, both inside the college's
Gordon 360 portal.

The app we delivered never decided who lives where.

This case study goes back to the question we skipped. I redefine the problem, write down
the rules, design an assignment algorithm, and test the rules on 1,000 simulated
lotteries. Some results confirmed my instincts. One proved me wrong.

## The original project

**The customer.** The Director of Residence Life and Housing ran the annual lottery by
hand. Students filled out a Google Form with their hall preferences; staff sorted the
responses, assigned lottery numbers by class year, and placed students one by one.
Commercial housing software existed, but it was beyond the budget.

**What they asked for.** Our problem statement listed four needs: move the application
into Gordon 360, assign lottery numbers by class year (seniors first), let students list
roommates easily and correctly, and "implement an algorithm to sort collected housing data
automatically."

**What we built.** I was one of four student developers. I finalized our problem
statement, led most of the front-end design, built the administrator interface with a
teammate, and ran our user studies. I also worked with the back end on the data model and on converting
application data to and from JSON between the interface and the API. Over two semesters,
the team built:

- a student application: add roommates by college email, rank up to six halls, answer
  roommate-preference questions, and accept the housing agreements;
- an administrator view: a table of every application, with CSV export and a due-date
  setting;
- a random lottery number for each application, with late applications marked so they
  sort last (built by teammates);
- the database tables and API endpoints behind both, following Gordon 360's conventions.

**How we tested it.** We ran two rounds of user studies (the second with eight
participants, including a resident assistant) and presented at three demo reviews. The
feedback was specific and useful: add an "agree to all" button, don't force students to
rank all six halls, make the admin table easier to scan, and stop one student from adding
another without their knowledge.

## What we missed

The fourth need, the algorithm, was only partly built. The code we prepared for Gordon 360
gave each application a random lottery number, but it did not order students by class
year or place anyone in a hall. In our final demo we showed a simulated automatic
assignment, but it never became part of the real process: the assignment itself still
happened by hand, starting from the CSV file we exported.

One reviewer at our December demo said it plainly: *"For the admin interface, if possible
the team could implement an algorithm that does the room assignments, maybe based on
first come first serve or some other method."*

Looking back, I think we missed it for two reasons, and both were partly mine. I ran our
user research, and it focused on the form's usability, not on the decision the form fed
into. And although the algorithm was in the problem statement I finalized, the hardest question
in the project, *what is a fair way to assign rooms?*, was never assigned to anyone. It
was not a UI question or a database question, so it fell between our tasks.

## Redefining the problem

Here is the problem as I would write it today.

**Inputs**

- Students, each with a class year and a housing gender category.
- Roommate groups of one to four students.
- Halls, each with rooms of given sizes (single, double, triple, quad) on gender-specific
  floors.
- Each group's ranked list of choices.

**Output.** A room for every group, or a short "unplaced" list for the administrator,
with the reason for each entry.

**Goals**

1. Rules that a student can understand in one reading.
2. Ranking your true preferences is always your best strategy, so nobody needs to game
   the system.
3. Results are reproducible and auditable.
4. The administrator handles exceptions, not the whole process.

## The rules

| Rule | 2023 design | 2026 redesign | Why |
|---|---|---|---|
| R1 Groups | One student lists the others | Every member confirms | Testers worried about being added without consent |
| R2 Gender | Stored with each application | One category per group, checked at submission | Rooms are on gender-specific floors |
| R3 Group priority | Highest class year in the group | **Average** class year | Limits a senior "carrying" younger friends (data below) |
| R4 Lottery number | A random code per application | One ticket per group | Group size doesn't change the odds |
| R5 Randomness | Not published | Publish the seed's SHA-256 hash before the draw, the seed after | Anyone can recompute the order |
| R6 Special needs | Separate process | Reserved before the draw | Same as before, made explicit |
| R7 Choices | Rank exactly six halls | Rank 1–6 halls, **each with a room size** | Testers disliked forced choices; lets groups decide about splitting |
| R8 Safety net | — | Optional "place us anywhere if our choices are full," plus "you may split us"; a warning for short lists | Short lists turned out to be risky (data below) |

Under R7, a group of four might submit:

1. Alder, quad
2. Cedar, quad
3. Alder, two doubles *(we'll split to stay in Alder)*

Listing a room size smaller than the group is how a group agrees to split. It then splits
only inside that hall.

## The algorithm

The assignment uses a mechanism called **random serial dictatorship**. The name is
alarming; the idea is simple.

1. Sort the groups by priority, then by lottery ticket.
2. Groups take turns in that order. On its turn, a group gets the first choice on its list
   that can still be filled completely.
3. If none of its choices can be filled, the group goes to the unplaced list, unless it
   opted into the safety net (R8).

"Filled completely" matters for split choices. If a group of four asks for two doubles in
Alder and only one double is left, nothing is reserved; the group moves on to its next
choice.

**Why this is fair in a precise sense.** When your turn comes, you get the best choice on
your list that is still available. Nothing you write can change what groups before you
took. So reordering your list, or leaving out a hall you want because you think it's "too
popular," can only make your result the same or worse. Economists call this
*strategy-proofness*. For students, it means one piece of advice is always correct:
**rank what you actually want.**

I checked this property in code with a brute-force test. On small random cases, the test
tries every possible false list for every group and confirms that none does better than
the honest list, including lists with split choices.

**A worked example.** Two halls, both with rooms on a women's floor. Alder has one double;
Birch has one double and one triple.

| Turn | Group | Priority | List | Result |
|---|---|---|---|---|
| 1 | A: senior + senior | 4.0 | Alder, Birch | Alder double |
| 2 | B: senior + two juniors | 3.33 | Alder, Birch | Alder is full → Birch triple |
| 3 | C: junior + sophomore | 2.5 | Alder only | Alder is full → unplaced |
| 4 | D: sophomore + freshman | 1.5 | Birch | Birch double |

Group C listed only one hall. That was its right, but it carried a risk, and the
simulation shows how large that risk is.

## Testing the rules with simulation

A rule that sounds fair can still behave badly at scale, so I wrote a simulation. Each
run builds a synthetic campus:

- 1,000 students;
- six made-up halls with different popularity and room mixes;
- 5% more beds than students;
- roommate groups of one to four students, most of them single-year;
- ranked lists drawn from each group's own taste.

I ran 1,000 lotteries. Within each lottery, every rule is applied to the same students and
the same tickets, so the differences between rules are not luck. The data is entirely
synthetic. The numbers depend on my assumptions; the directions are what matter.

### 1. Class-year priority doesn't make more students happy. It decides which ones are.

![Students who got their first-choice hall, by class year](img/first-choice-by-year.svg)

About 64% of students get their first-choice hall under every rule I tested. Class-year
priority doesn't change that total. It moves the chances around:

- with average class-year priority, seniors get their first choice 85% of the time and
  freshmen 39%;
- with a pure lottery, every class gets 64%.

Seniority is a legitimate value: seniors have waited longest. But it is a value choice,
not an efficiency gain, and the housing office should make it knowingly.

### 2. Averaging weakens the "senior carries friends" effect, but doesn't remove it

![Gain from grouping with older students, by priority rule](img/carry-effect.svg)

Under the 2023 rule (a group's priority is its highest class year), a sophomore or
freshman who joins a group with a senior gets their first-choice hall 28 points more
often than one who groups with classmates. Averaging cuts that advantage to 12 points.
Using the lowest class year flips it negative.

Even a pure lottery shows −4.8, because mixed-year groups differ in other ways (they tend
to be larger, for example). Measured against that baseline, the averaging rule removes
about half of the incentive. I kept the average rule as a middle ground: it doesn't
punish mixed-year friendships the way the lowest-year rule does.

### 3. Short lists are risky, so the form should say so

![Students left without a bed, by number of halls listed](img/short-list-risk.svg)

Our 2023 testers asked us not to force six choices, and they were right that forcing
choices is a poor experience. But the simulation shows the cost of freedom. Without a
safety net, 28% of students whose group listed one hall end up without a bed, against
about 4% of those who listed six.

That finding produced rule R8, which has two parts:

- **A warning.** When a group lists one or two halls, the form shows the risk in plain
  numbers before submission.
- **A safety net.** A group can tick "place us anywhere if our choices are full."

If every group ticks the safety net, the one-hall risk falls from 28% to 5%, and the
overall first-choice rate barely moves, because the safety net only uses beds that are
left after everyone's own choices. The cost is real but contained: the hall a safety-net
group lands in ranks, on average, about fourth of six in its own taste.

### 4. I predicted room-type choices would reduce splitting. They didn't.

My expectation was that letting groups rank room sizes would mean fewer groups split
apart. Instead, the share of students in split groups rose from about 16% to 19%.

The reason became clear once I varied one assumption: how groups order their choices.
Some groups list "stay together" options first; others prefer "stay in this hall, even if
split."

| How groups order their choices | Students in split groups | First-choice hall | Unplaced |
|---|---:|---:|---:|
| 2023 rules (rank halls only) | 15.5% | 63.8% | 7.8% |
| 2026 rules, all "together first" | 14.7% | 59.8% | 8.3% |
| 2026 rules, half and half | 18.4% | 64.1% | 7.4% |
| 2026 rules, all "hall first" | 22.2% | 69.0% | 6.5% |

*200 simulated lotteries per row, average class-year priority, no safety net.*

The 2026 rules don't reduce splitting. They turn it into a choice. Under the 2023
design, every group was treated the same way: try every hall together, and split
automatically when nothing fits. Under the 2026 design, a group that cares most about
the hall can split to get it, and a group that cares most about staying together almost
never gets split.

The "together first" row also gets fewer first-choice halls than the 2023 rules. Part of
that is my modeling assumption (simulated pairs only ask for doubles, while the 2023 logic
could also place a pair in a free quad), so I don't read much into that gap. The split
rates are the point.

I'm including this result because the wrong prediction taught me more than a correct one
would have: I was measuring the wrong thing. The goal was never "fewer splits." It was
"each group gets the trade-off it prefers."

### 5. An algorithm can't create rooms

Even with every group using the safety net, about 16% of students in groups of four stay
unplaced, almost all of them in groups that declined to split. Meanwhile, about 35 double
rooms sit empty at the end of each lottery.

The cause is supply, not software. In my synthetic campus, about 25% of students apply in
groups of four, but only 14% of beds are in quads. No assignment rule can fit more groups
of four into a quad than the quads hold. That's a decision for the college, about
buildings and room layouts; the most the software can do is show the mismatch clearly.

## What I'd tell my 2023 team

**Start from the decision, not the form.** We designed the form first and treated the
assignment as a later step. The form exists to feed a decision; design them together.

**Write the rules down before the interface.** Many of our UI debates were really rule
questions in disguise. "Must students rank all six halls?" is a question about risk and
fairness, not about dropdown menus.

**Test the rules, not only the screens.** Usability studies told us the form was easy to
use. They could not tell us whether the outcomes would be fair. A few hundred lines of
simulation code answer questions that no user test can.

**Make randomness auditable.** When the outcome is where someone lives for a year, "the
computer picked" is not enough. Publishing a seed commitment costs nothing.

**Expect to be wrong, and look.** My best finding came from a prediction that failed.

These lessons travel beyond software. I now teach high school mathematics, and this
problem would make a good classroom project: students can simulate a lottery, compute
expected outcomes for each class year, and argue about what "fair" means using real
numbers.

## Limitations and next steps

- **Synthetic data.** Real tastes, group sizes and room mixes would change the numbers;
  the method would stay the same.
- **Fixed groups.** In the simulation, groups don't change in response to the rules. Real
  students would. For example, the average rule might make some seniors leave younger
  friends out of their groups.
- **Next steps:** a small interactive demo of the draw, and, if a college were
  interested, a test on anonymized historical data.

## Credits

The 2023–24 project was built by a team of four students in Gordon College's senior
capstone sequence (CPS 491/492), for Gordon College Residence Life and Housing. This
redesign uses no code or student data from that project.

The 2026 redesign and simulation code were written with Claude, Anthropic's AI assistant.
The rules and design decisions are mine. The code, tests and full results are in the
[housing-lottery-sim](https://github.com/andrew-wzj/housing-lottery-sim) repository.
`,it="/reactportfolio/case-studies/housing-lottery/img/",at=d.parse(rt.replaceAll("](img/",`](${it}`)).replaceAll("<table>",'<div class="table-wrap"><table>').replaceAll("</table>","</table></div>").replaceAll('<a href="http','<a target="_blank" rel="noreferrer" href="http');function ot(){const n=ye();return oe.useEffect(()=>{for(const e of document.querySelectorAll(".case-prose img"))e.loading="lazy",e.decoding="async"},[]),m.jsxs(m.Fragment,{children:[m.jsxs("header",{className:"topbar",children:[m.jsxs("a",{href:"/reactportfolio/",className:"brand",children:[m.jsx($,{name:"star",size:2})," ZW"]}),m.jsx("nav",{"aria-label":"Page",children:m.jsx("a",{href:"/reactportfolio/#projects",children:"← Back to portfolio"})}),m.jsx("div",{className:"actions",children:m.jsx("button",{type:"button",onClick:n,className:"ghost","aria-label":"Toggle dark mode",children:"◐"})})]}),m.jsxs("main",{children:[m.jsxs("div",{className:"case-badge",children:[m.jsx($,{name:"heart",size:3})," ",m.jsx("span",{children:"Case study"})]}),m.jsx("article",{className:"case-prose",dangerouslySetInnerHTML:{__html:at}})]}),m.jsxs("footer",{className:"footer",children:[m.jsxs("div",{className:"footer-sprites","aria-hidden":"true",children:[m.jsx($,{name:"cap",size:3}),m.jsx($,{name:"die",size:3}),m.jsx($,{name:"laptop",size:3})]}),m.jsxs("p",{children:["Code and full results:"," ",m.jsx("a",{href:"https://github.com/andrew-wzj/housing-lottery-sim",target:"_blank",rel:"noreferrer",children:"github.com/andrew-wzj/housing-lottery-sim"})]})]})]})}xe.createRoot(document.getElementById("root")).render(m.jsx(oe.StrictMode,{children:m.jsx(ot,{})}));
