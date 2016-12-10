(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Diapo = factory());
}(this, (function () { 'use strict';

/**
 * get one node by selector
 */
function $(selector) {
  return typeof selector === 'string' ? document.querySelector(selector) : selector;
}

/**
 * get nodes by selector
 */
function $$(selector) {
  var context = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

  return typeof selector === 'string' ? [].slice.call(context.querySelectorAll(selector)) : selector;
}

/**
 * slice with padding
 */
function sliceWithPadding(arr) {
  var start = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var end = arguments.length <= 2 || arguments[2] === undefined ? arr.length : arguments[2];

  var ret = [];
  while (start <= end) {
    ret.push(arr[start] || null);
    start++;
  }
  return ret;
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}



function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set$1 = function set$1(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set$1(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var markdownIt=createCommonjsModule(function(module,exports){/*! markdown-it 8.0.0 https://github.com//markdown-it/markdown-it @license MIT */(function(f){if((typeof exports==="undefined"?"undefined":_typeof(exports))==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof commonjsGlobal!=="undefined"){g=commonjsGlobal;}else if(typeof self!=="undefined"){g=self;}else{g=this;}g.markdownit=f();}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof commonjsRequire=="function"&&commonjsRequire;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof commonjsRequire=="function"&&commonjsRequire;for(var o=0;o<r.length;o++){s(r[o]);}return s;}({1:[function(require,module,exports){// HTML5 entities map: { name -> utf16string }
//
'use strict';/*eslint quotes:0*/module.exports=require('entities/maps/entities.json');},{"entities/maps/entities.json":52}],2:[function(require,module,exports){// List of valid html blocks names, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#html-blocks
'use strict';module.exports=['address','article','aside','base','basefont','blockquote','body','caption','center','col','colgroup','dd','details','dialog','dir','div','dl','dt','fieldset','figcaption','figure','footer','form','frame','frameset','h1','head','header','hr','html','iframe','legend','li','link','main','menu','menuitem','meta','nav','noframes','ol','optgroup','option','p','param','pre','section','source','title','summary','table','tbody','td','tfoot','th','thead','title','tr','track','ul'];},{}],3:[function(require,module,exports){// Regexps to match html elements
'use strict';var attr_name='[a-zA-Z_:][a-zA-Z0-9:._-]*';var unquoted='[^"\'=<>`\\x00-\\x20]+';var single_quoted="'[^']*'";var double_quoted='"[^"]*"';var attr_value='(?:'+unquoted+'|'+single_quoted+'|'+double_quoted+')';var attribute='(?:\\s+'+attr_name+'(?:\\s*=\\s*'+attr_value+')?)';var open_tag='<[A-Za-z][A-Za-z0-9\\-]*'+attribute+'*\\s*\\/?>';var close_tag='<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';var comment='<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';var processing='<[?].*?[?]>';var declaration='<![A-Z]+\\s+[^>]*>';var cdata='<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';var HTML_TAG_RE=new RegExp('^(?:'+open_tag+'|'+close_tag+'|'+comment+'|'+processing+'|'+declaration+'|'+cdata+')');var HTML_OPEN_CLOSE_TAG_RE=new RegExp('^(?:'+open_tag+'|'+close_tag+')');module.exports.HTML_TAG_RE=HTML_TAG_RE;module.exports.HTML_OPEN_CLOSE_TAG_RE=HTML_OPEN_CLOSE_TAG_RE;},{}],4:[function(require,module,exports){// Utilities
//
'use strict';function _class(obj){return Object.prototype.toString.call(obj);}function isString(obj){return _class(obj)==='[object String]';}var _hasOwnProperty=Object.prototype.hasOwnProperty;function has(object,key){return _hasOwnProperty.call(object,key);}// Merge objects
//
function assign(obj/*from1, from2, from3, ...*/){var sources=Array.prototype.slice.call(arguments,1);sources.forEach(function(source){if(!source){return;}if((typeof source==="undefined"?"undefined":_typeof(source))!=='object'){throw new TypeError(source+'must be object');}Object.keys(source).forEach(function(key){obj[key]=source[key];});});return obj;}// Remove element from array and put another array at those position.
// Useful for some operations with tokens
function arrayReplaceAt(src,pos,newElements){return[].concat(src.slice(0,pos),newElements,src.slice(pos+1));}////////////////////////////////////////////////////////////////////////////////
function isValidEntityCode(c){/*eslint no-bitwise:0*/// broken sequence
if(c>=0xD800&&c<=0xDFFF){return false;}// never used
if(c>=0xFDD0&&c<=0xFDEF){return false;}if((c&0xFFFF)===0xFFFF||(c&0xFFFF)===0xFFFE){return false;}// control codes
if(c>=0x00&&c<=0x08){return false;}if(c===0x0B){return false;}if(c>=0x0E&&c<=0x1F){return false;}if(c>=0x7F&&c<=0x9F){return false;}// out of range
if(c>0x10FFFF){return false;}return true;}function fromCodePoint(c){/*eslint no-bitwise:0*/if(c>0xffff){c-=0x10000;var surrogate1=0xd800+(c>>10),surrogate2=0xdc00+(c&0x3ff);return String.fromCharCode(surrogate1,surrogate2);}return String.fromCharCode(c);}var UNESCAPE_MD_RE=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;var ENTITY_RE=/&([a-z#][a-z0-9]{1,31});/gi;var UNESCAPE_ALL_RE=new RegExp(UNESCAPE_MD_RE.source+'|'+ENTITY_RE.source,'gi');var DIGITAL_ENTITY_TEST_RE=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;var entities=require('./entities');function replaceEntityPattern(match,name){var code=0;if(has(entities,name)){return entities[name];}if(name.charCodeAt(0)===0x23/* # */&&DIGITAL_ENTITY_TEST_RE.test(name)){code=name[1].toLowerCase()==='x'?parseInt(name.slice(2),16):parseInt(name.slice(1),10);if(isValidEntityCode(code)){return fromCodePoint(code);}}return match;}/*function replaceEntities(str) {
  if (str.indexOf('&') < 0) { return str; }

  return str.replace(ENTITY_RE, replaceEntityPattern);
}*/function unescapeMd(str){if(str.indexOf('\\')<0){return str;}return str.replace(UNESCAPE_MD_RE,'$1');}function unescapeAll(str){if(str.indexOf('\\')<0&&str.indexOf('&')<0){return str;}return str.replace(UNESCAPE_ALL_RE,function(match,escaped,entity){if(escaped){return escaped;}return replaceEntityPattern(match,entity);});}////////////////////////////////////////////////////////////////////////////////
var HTML_ESCAPE_TEST_RE=/[&<>"]/;var HTML_ESCAPE_REPLACE_RE=/[&<>"]/g;var HTML_REPLACEMENTS={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'};function replaceUnsafeChar(ch){return HTML_REPLACEMENTS[ch];}function escapeHtml(str){if(HTML_ESCAPE_TEST_RE.test(str)){return str.replace(HTML_ESCAPE_REPLACE_RE,replaceUnsafeChar);}return str;}////////////////////////////////////////////////////////////////////////////////
var REGEXP_ESCAPE_RE=/[.?*+^$[\]\\(){}|-]/g;function escapeRE(str){return str.replace(REGEXP_ESCAPE_RE,'\\$&');}////////////////////////////////////////////////////////////////////////////////
function isSpace(code){switch(code){case 0x09:case 0x20:return true;}return false;}// Zs (unicode class) || [\t\f\v\r\n]
function isWhiteSpace(code){if(code>=0x2000&&code<=0x200A){return true;}switch(code){case 0x09:// \t
case 0x0A:// \n
case 0x0B:// \v
case 0x0C:// \f
case 0x0D:// \r
case 0x20:case 0xA0:case 0x1680:case 0x202F:case 0x205F:case 0x3000:return true;}return false;}////////////////////////////////////////////////////////////////////////////////
/*eslint-disable max-len*/var UNICODE_PUNCT_RE=require('uc.micro/categories/P/regex');// Currently without astral characters support.
function isPunctChar(ch){return UNICODE_PUNCT_RE.test(ch);}// Markdown ASCII punctuation characters.
//
// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
//
// Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
//
function isMdAsciiPunct(ch){switch(ch){case 0x21/* ! */:case 0x22/* " */:case 0x23/* # */:case 0x24/* $ */:case 0x25/* % */:case 0x26/* & */:case 0x27/* ' */:case 0x28/* ( */:case 0x29/* ) */:case 0x2A/* * */:case 0x2B/* + */:case 0x2C/* , */:case 0x2D/* - */:case 0x2E/* . */:case 0x2F/* / */:case 0x3A/* : */:case 0x3B/* ; */:case 0x3C/* < */:case 0x3D/* = */:case 0x3E/* > */:case 0x3F/* ? */:case 0x40/* @ */:case 0x5B/* [ */:case 0x5C/* \ */:case 0x5D/* ] */:case 0x5E/* ^ */:case 0x5F/* _ */:case 0x60/* ` */:case 0x7B/* { */:case 0x7C/* | */:case 0x7D/* } */:case 0x7E/* ~ */:return true;default:return false;}}// Hepler to unify [reference labels].
//
function normalizeReference(str){// use .toUpperCase() instead of .toLowerCase()
// here to avoid a conflict with Object.prototype
// members (most notably, `__proto__`)
return str.trim().replace(/\s+/g,' ').toUpperCase();}////////////////////////////////////////////////////////////////////////////////
// Re-export libraries commonly used in both markdown-it and its plugins,
// so plugins won't have to depend on them explicitly, which reduces their
// bundled size (e.g. a browser build).
//
exports.lib={};exports.lib.mdurl=require('mdurl');exports.lib.ucmicro=require('uc.micro');exports.assign=assign;exports.isString=isString;exports.has=has;exports.unescapeMd=unescapeMd;exports.unescapeAll=unescapeAll;exports.isValidEntityCode=isValidEntityCode;exports.fromCodePoint=fromCodePoint;// exports.replaceEntities     = replaceEntities;
exports.escapeHtml=escapeHtml;exports.arrayReplaceAt=arrayReplaceAt;exports.isSpace=isSpace;exports.isWhiteSpace=isWhiteSpace;exports.isMdAsciiPunct=isMdAsciiPunct;exports.isPunctChar=isPunctChar;exports.escapeRE=escapeRE;exports.normalizeReference=normalizeReference;},{"./entities":1,"mdurl":58,"uc.micro":65,"uc.micro/categories/P/regex":63}],5:[function(require,module,exports){// Just a shortcut for bulk export
'use strict';exports.parseLinkLabel=require('./parse_link_label');exports.parseLinkDestination=require('./parse_link_destination');exports.parseLinkTitle=require('./parse_link_title');},{"./parse_link_destination":6,"./parse_link_label":7,"./parse_link_title":8}],6:[function(require,module,exports){// Parse link destination
//
'use strict';var isSpace=require('../common/utils').isSpace;var unescapeAll=require('../common/utils').unescapeAll;module.exports=function parseLinkDestination(str,pos,max){var code,level,lines=0,start=pos,result={ok:false,pos:0,lines:0,str:''};if(str.charCodeAt(pos)===0x3C/* < */){pos++;while(pos<max){code=str.charCodeAt(pos);if(code===0x0A/* \n */||isSpace(code)){return result;}if(code===0x3E/* > */){result.pos=pos+1;result.str=unescapeAll(str.slice(start+1,pos));result.ok=true;return result;}if(code===0x5C/* \ */&&pos+1<max){pos+=2;continue;}pos++;}// no closing '>'
return result;}// this should be ... } else { ... branch
level=0;while(pos<max){code=str.charCodeAt(pos);if(code===0x20){break;}// ascii control characters
if(code<0x20||code===0x7F){break;}if(code===0x5C/* \ */&&pos+1<max){pos+=2;continue;}if(code===0x28/* ( */){level++;if(level>1){break;}}if(code===0x29/* ) */){level--;if(level<0){break;}}pos++;}if(start===pos){return result;}result.str=unescapeAll(str.slice(start,pos));result.lines=lines;result.pos=pos;result.ok=true;return result;};},{"../common/utils":4}],7:[function(require,module,exports){// Parse link label
//
// this function assumes that first character ("[") already matches;
// returns the end of the label
//
'use strict';module.exports=function parseLinkLabel(state,start,disableNested){var level,found,marker,prevPos,labelEnd=-1,max=state.posMax,oldPos=state.pos;state.pos=start+1;level=1;while(state.pos<max){marker=state.src.charCodeAt(state.pos);if(marker===0x5D/* ] */){level--;if(level===0){found=true;break;}}prevPos=state.pos;state.md.inline.skipToken(state);if(marker===0x5B/* [ */){if(prevPos===state.pos-1){// increase level if we find text `[`, which is not a part of any token
level++;}else if(disableNested){state.pos=oldPos;return-1;}}}if(found){labelEnd=state.pos;}// restore old state
state.pos=oldPos;return labelEnd;};},{}],8:[function(require,module,exports){// Parse link title
//
'use strict';var unescapeAll=require('../common/utils').unescapeAll;module.exports=function parseLinkTitle(str,pos,max){var code,marker,lines=0,start=pos,result={ok:false,pos:0,lines:0,str:''};if(pos>=max){return result;}marker=str.charCodeAt(pos);if(marker!==0x22/* " */&&marker!==0x27/* ' */&&marker!==0x28/* ( */){return result;}pos++;// if opening marker is "(", switch it to closing marker ")"
if(marker===0x28){marker=0x29;}while(pos<max){code=str.charCodeAt(pos);if(code===marker){result.pos=pos+1;result.lines=lines;result.str=unescapeAll(str.slice(start+1,pos));result.ok=true;return result;}else if(code===0x0A){lines++;}else if(code===0x5C/* \ */&&pos+1<max){pos++;if(str.charCodeAt(pos)===0x0A){lines++;}}pos++;}return result;};},{"../common/utils":4}],9:[function(require,module,exports){// Main parser class
'use strict';var utils=require('./common/utils');var helpers=require('./helpers');var Renderer=require('./renderer');var ParserCore=require('./parser_core');var ParserBlock=require('./parser_block');var ParserInline=require('./parser_inline');var LinkifyIt=require('linkify-it');var mdurl=require('mdurl');var punycode=require('punycode');var config={'default':require('./presets/default'),zero:require('./presets/zero'),commonmark:require('./presets/commonmark')};////////////////////////////////////////////////////////////////////////////////
//
// This validator can prohibit more than really needed to prevent XSS. It's a
// tradeoff to keep code simple and to be secure by default.
//
// If you need different setup - override validator method as you wish. Or
// replace it with dummy function and use external sanitizer.
//
var BAD_PROTO_RE=/^(vbscript|javascript|file|data):/;var GOOD_DATA_RE=/^data:image\/(gif|png|jpeg|webp);/;function validateLink(url){// url should be normalized at this point, and existing entities are decoded
var str=url.trim().toLowerCase();return BAD_PROTO_RE.test(str)?GOOD_DATA_RE.test(str)?true:false:true;}////////////////////////////////////////////////////////////////////////////////
var RECODE_HOSTNAME_FOR=['http:','https:','mailto:'];function normalizeLink(url){var parsed=mdurl.parse(url,true);if(parsed.hostname){// Encode hostnames in urls like:
// `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
//
// We don't encode unknown schemas, because it's likely that we encode
// something we shouldn't (e.g. `skype:name` treated as `skype:host`)
//
if(!parsed.protocol||RECODE_HOSTNAME_FOR.indexOf(parsed.protocol)>=0){try{parsed.hostname=punycode.toASCII(parsed.hostname);}catch(er){/**/}}}return mdurl.encode(mdurl.format(parsed));}function normalizeLinkText(url){var parsed=mdurl.parse(url,true);if(parsed.hostname){// Encode hostnames in urls like:
// `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
//
// We don't encode unknown schemas, because it's likely that we encode
// something we shouldn't (e.g. `skype:name` treated as `skype:host`)
//
if(!parsed.protocol||RECODE_HOSTNAME_FOR.indexOf(parsed.protocol)>=0){try{parsed.hostname=punycode.toUnicode(parsed.hostname);}catch(er){/**/}}}return mdurl.decode(mdurl.format(parsed));}/**
 * class MarkdownIt
 *
 * Main parser/renderer class.
 *
 * ##### Usage
 *
 * ```javascript
 * // node.js, "classic" way:
 * var MarkdownIt = require('markdown-it'),
 *     md = new MarkdownIt();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // node.js, the same, but with sugar:
 * var md = require('markdown-it')();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // browser without AMD, added to "window" on script load
 * // Note, there are no dash.
 * var md = window.markdownit();
 * var result = md.render('# markdown-it rulezz!');
 * ```
 *
 * Single line rendering, without paragraph wrap:
 *
 * ```javascript
 * var md = require('markdown-it')();
 * var result = md.renderInline('__markdown-it__ rulezz!');
 * ```
 **//**
 * new MarkdownIt([presetName, options])
 * - presetName (String): optional, `commonmark` / `zero`
 * - options (Object)
 *
 * Creates parser instanse with given config. Can be called without `new`.
 *
 * ##### presetName
 *
 * MarkdownIt provides named presets as a convenience to quickly
 * enable/disable active syntax rules and options for common use cases.
 *
 * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
 *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
 * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
 *   similar to GFM, used when no preset name given. Enables all available rules,
 *   but still without html, typographer & autolinker.
 * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
 *   all rules disabled. Useful to quickly setup your config via `.enable()`.
 *   For example, when you need only `bold` and `italic` markup and nothing else.
 *
 * ##### options:
 *
 * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
 *   That's not safe! You may need external sanitizer to protect output from XSS.
 *   It's better to extend features via plugins, instead of enabling HTML.
 * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
 *   (`<br />`). This is needed only for full CommonMark compatibility. In real
 *   world you will need HTML output.
 * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
 * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
 *   Can be useful for external highlighters.
 * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
 * - __typographer__  - `false`. Set `true` to enable [some language-neutral
 *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
 *   quotes beautification (smartquotes).
 * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
 *   pairs, when typographer enabled and smartquotes on. For example, you can
 *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
 *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
 * - __highlight__ - `null`. Highlighter function for fenced code blocks.
 *   Highlighter `function (str, lang)` should return escaped HTML. It can also
 *   return empty string if the source was not changed and should be escaped
 *   externaly. If result starts with <pre... internal wrapper is skipped.
 *
 * ##### Example
 *
 * ```javascript
 * // commonmark mode
 * var md = require('markdown-it')('commonmark');
 *
 * // default mode
 * var md = require('markdown-it')();
 *
 * // enable everything
 * var md = require('markdown-it')({
 *   html: true,
 *   linkify: true,
 *   typographer: true
 * });
 * ```
 *
 * ##### Syntax highlighting
 *
 * ```js
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return hljs.highlight(lang, str, true).value;
 *       } catch (__) {}
 *     }
 *
 *     return ''; // use external default escaping
 *   }
 * });
 * ```
 *
 * Or with full wrapper override (if you need assign class to `<pre>`):
 *
 * ```javascript
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * // Actual default values
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return '<pre class="hljs"><code>' +
 *                hljs.highlight(lang, str, true).value +
 *                '</code></pre>';
 *       } catch (__) {}
 *     }
 *
 *     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
 *   }
 * });
 * ```
 *
 **/function MarkdownIt(presetName,options){if(!(this instanceof MarkdownIt)){return new MarkdownIt(presetName,options);}if(!options){if(!utils.isString(presetName)){options=presetName||{};presetName='default';}}/**
   * MarkdownIt#inline -> ParserInline
   *
   * Instance of [[ParserInline]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/this.inline=new ParserInline();/**
   * MarkdownIt#block -> ParserBlock
   *
   * Instance of [[ParserBlock]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/this.block=new ParserBlock();/**
   * MarkdownIt#core -> Core
   *
   * Instance of [[Core]] chain executor. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/this.core=new ParserCore();/**
   * MarkdownIt#renderer -> Renderer
   *
   * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
   * rules for new token types, generated by plugins.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * function myToken(tokens, idx, options, env, self) {
   *   //...
   *   return result;
   * };
   *
   * md.renderer.rules['my_token'] = myToken
   * ```
   *
   * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
   **/this.renderer=new Renderer();/**
   * MarkdownIt#linkify -> LinkifyIt
   *
   * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
   * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
   * rule.
   **/this.linkify=new LinkifyIt();/**
   * MarkdownIt#validateLink(url) -> Boolean
   *
   * Link validation function. CommonMark allows too much in links. By default
   * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
   * except some embedded image types.
   *
   * You can change this behaviour:
   *
   * ```javascript
   * var md = require('markdown-it')();
   * // enable everything
   * md.validateLink = function () { return true; }
   * ```
   **/this.validateLink=validateLink;/**
   * MarkdownIt#normalizeLink(url) -> String
   *
   * Function used to encode link url to a machine-readable format,
   * which includes url-encoding, punycode, etc.
   **/this.normalizeLink=normalizeLink;/**
   * MarkdownIt#normalizeLinkText(url) -> String
   *
   * Function used to decode link url to a human-readable format`
   **/this.normalizeLinkText=normalizeLinkText;// Expose utils & helpers for easy acces from plugins
/**
   * MarkdownIt#utils -> utils
   *
   * Assorted utility functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
   **/this.utils=utils;/**
   * MarkdownIt#helpers -> helpers
   *
   * Link components parser functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
   **/this.helpers=helpers;this.options={};this.configure(presetName);if(options){this.set(options);}}/** chainable
 * MarkdownIt.set(options)
 *
 * Set parser options (in the same format as in constructor). Probably, you
 * will never need it, but you can change options after constructor call.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .set({ html: true, breaks: true })
 *             .set({ typographer, true });
 * ```
 *
 * __Note:__ To achieve the best possible performance, don't modify a
 * `markdown-it` instance options on the fly. If you need multiple configurations
 * it's best to create multiple instances and initialize each with separate
 * config.
 **/MarkdownIt.prototype.set=function(options){utils.assign(this.options,options);return this;};/** chainable, internal
 * MarkdownIt.configure(presets)
 *
 * Batch load of all options and compenent settings. This is internal method,
 * and you probably will not need it. But if you with - see available presets
 * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
 *
 * We strongly recommend to use presets instead of direct config loads. That
 * will give better compatibility with next versions.
 **/MarkdownIt.prototype.configure=function(presets){var self=this,presetName;if(utils.isString(presets)){presetName=presets;presets=config[presetName];if(!presets){throw new Error('Wrong `markdown-it` preset "'+presetName+'", check name');}}if(!presets){throw new Error('Wrong `markdown-it` preset, can\'t be empty');}if(presets.options){self.set(presets.options);}if(presets.components){Object.keys(presets.components).forEach(function(name){if(presets.components[name].rules){self[name].ruler.enableOnly(presets.components[name].rules);}if(presets.components[name].rules2){self[name].ruler2.enableOnly(presets.components[name].rules2);}});}return this;};/** chainable
 * MarkdownIt.enable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to enable
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable list or rules. It will automatically find appropriate components,
 * containing rules with given names. If rule not found, and `ignoreInvalid`
 * not set - throws exception.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .enable(['sub', 'sup'])
 *             .disable('smartquotes');
 * ```
 **/MarkdownIt.prototype.enable=function(list,ignoreInvalid){var result=[];if(!Array.isArray(list)){list=[list];}['core','block','inline'].forEach(function(chain){result=result.concat(this[chain].ruler.enable(list,true));},this);result=result.concat(this.inline.ruler2.enable(list,true));var missed=list.filter(function(name){return result.indexOf(name)<0;});if(missed.length&&!ignoreInvalid){throw new Error('MarkdownIt. Failed to enable unknown rule(s): '+missed);}return this;};/** chainable
 * MarkdownIt.disable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * The same as [[MarkdownIt.enable]], but turn specified rules off.
 **/MarkdownIt.prototype.disable=function(list,ignoreInvalid){var result=[];if(!Array.isArray(list)){list=[list];}['core','block','inline'].forEach(function(chain){result=result.concat(this[chain].ruler.disable(list,true));},this);result=result.concat(this.inline.ruler2.disable(list,true));var missed=list.filter(function(name){return result.indexOf(name)<0;});if(missed.length&&!ignoreInvalid){throw new Error('MarkdownIt. Failed to disable unknown rule(s): '+missed);}return this;};/** chainable
 * MarkdownIt.use(plugin, params)
 *
 * Load specified plugin with given params into current parser instance.
 * It's just a sugar to call `plugin(md, params)` with curring.
 *
 * ##### Example
 *
 * ```javascript
 * var iterator = require('markdown-it-for-inline');
 * var md = require('markdown-it')()
 *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
 *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
 *             });
 * ```
 **/MarkdownIt.prototype.use=function(plugin/*, params, ... */){var args=[this].concat(Array.prototype.slice.call(arguments,1));plugin.apply(plugin,args);return this;};/** internal
 * MarkdownIt.parse(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Parse input string and returns list of block tokens (special token type
 * "inline" will contain list of inline tokens). You should not call this
 * method directly, until you write custom renderer (for example, to produce
 * AST).
 *
 * `env` is used to pass data between "distributed" rules and return additional
 * metadata like reference info, needed for the renderer. It also can be used to
 * inject data in specific cases. Usually, you will be ok to pass `{}`,
 * and then pass updated object to renderer.
 **/MarkdownIt.prototype.parse=function(src,env){var state=new this.core.State(src,this,env);this.core.process(state);return state.tokens;};/**
 * MarkdownIt.render(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Render markdown string into html. It does all magic for you :).
 *
 * `env` can be used to inject additional metadata (`{}` by default).
 * But you will not need it with high probability. See also comment
 * in [[MarkdownIt.parse]].
 **/MarkdownIt.prototype.render=function(src,env){env=env||{};return this.renderer.render(this.parse(src,env),this.options,env);};/** internal
 * MarkdownIt.parseInline(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
 * block tokens list with the single `inline` element, containing parsed inline
 * tokens in `children` property. Also updates `env` object.
 **/MarkdownIt.prototype.parseInline=function(src,env){var state=new this.core.State(src,this,env);state.inlineMode=true;this.core.process(state);return state.tokens;};/**
 * MarkdownIt.renderInline(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
 * will NOT be wrapped into `<p>` tags.
 **/MarkdownIt.prototype.renderInline=function(src,env){env=env||{};return this.renderer.render(this.parseInline(src,env),this.options,env);};module.exports=MarkdownIt;},{"./common/utils":4,"./helpers":5,"./parser_block":10,"./parser_core":11,"./parser_inline":12,"./presets/commonmark":13,"./presets/default":14,"./presets/zero":15,"./renderer":16,"linkify-it":53,"mdurl":58,"punycode":60}],10:[function(require,module,exports){/** internal
 * class ParserBlock
 *
 * Block-level tokenizer.
 **/'use strict';var Ruler=require('./ruler');var _rules=[// First 2 params - rule name & source. Secondary array - list of rules,
// which can be terminated by this one.
['table',require('./rules_block/table'),['paragraph','reference']],['code',require('./rules_block/code')],['fence',require('./rules_block/fence'),['paragraph','reference','blockquote','list']],['blockquote',require('./rules_block/blockquote'),['paragraph','reference','list']],['hr',require('./rules_block/hr'),['paragraph','reference','blockquote','list']],['list',require('./rules_block/list'),['paragraph','reference','blockquote']],['reference',require('./rules_block/reference')],['heading',require('./rules_block/heading'),['paragraph','reference','blockquote']],['lheading',require('./rules_block/lheading')],['html_block',require('./rules_block/html_block'),['paragraph','reference','blockquote']],['paragraph',require('./rules_block/paragraph')]];/**
 * new ParserBlock()
 **/function ParserBlock(){/**
   * ParserBlock#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of block rules.
   **/this.ruler=new Ruler();for(var i=0;i<_rules.length;i++){this.ruler.push(_rules[i][0],_rules[i][1],{alt:(_rules[i][2]||[]).slice()});}}// Generate tokens for input range
//
ParserBlock.prototype.tokenize=function(state,startLine,endLine){var ok,i,rules=this.ruler.getRules(''),len=rules.length,line=startLine,hasEmptyLines=false,maxNesting=state.md.options.maxNesting;while(line<endLine){state.line=line=state.skipEmptyLines(line);if(line>=endLine){break;}// Termination condition for nested calls.
// Nested calls currently used for blockquotes & lists
if(state.sCount[line]<state.blkIndent){break;}// If nesting level exceeded - skip tail to the end. That's not ordinary
// situation and we should not care about content.
if(state.level>=maxNesting){state.line=endLine;break;}// Try all possible rules.
// On success, rule should:
//
// - update `state.line`
// - update `state.tokens`
// - return true
for(i=0;i<len;i++){ok=rules[i](state,line,endLine,false);if(ok){break;}}// set state.tight iff we had an empty line before current tag
// i.e. latest empty line should not count
state.tight=!hasEmptyLines;// paragraph might "eat" one newline after it in nested lists
if(state.isEmpty(state.line-1)){hasEmptyLines=true;}line=state.line;if(line<endLine&&state.isEmpty(line)){hasEmptyLines=true;line++;state.line=line;}}};/**
 * ParserBlock.parse(str, md, env, outTokens)
 *
 * Process input string and push block tokens into `outTokens`
 **/ParserBlock.prototype.parse=function(src,md,env,outTokens){var state;if(!src){return;}state=new this.State(src,md,env,outTokens);this.tokenize(state,state.line,state.lineMax);};ParserBlock.prototype.State=require('./rules_block/state_block');module.exports=ParserBlock;},{"./ruler":17,"./rules_block/blockquote":18,"./rules_block/code":19,"./rules_block/fence":20,"./rules_block/heading":21,"./rules_block/hr":22,"./rules_block/html_block":23,"./rules_block/lheading":24,"./rules_block/list":25,"./rules_block/paragraph":26,"./rules_block/reference":27,"./rules_block/state_block":28,"./rules_block/table":29}],11:[function(require,module,exports){/** internal
 * class Core
 *
 * Top-level rules executor. Glues block/inline parsers and does intermediate
 * transformations.
 **/'use strict';var Ruler=require('./ruler');var _rules=[['normalize',require('./rules_core/normalize')],['block',require('./rules_core/block')],['inline',require('./rules_core/inline')],['linkify',require('./rules_core/linkify')],['replacements',require('./rules_core/replacements')],['smartquotes',require('./rules_core/smartquotes')]];/**
 * new Core()
 **/function Core(){/**
   * Core#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of core rules.
   **/this.ruler=new Ruler();for(var i=0;i<_rules.length;i++){this.ruler.push(_rules[i][0],_rules[i][1]);}}/**
 * Core.process(state)
 *
 * Executes core chain rules.
 **/Core.prototype.process=function(state){var i,l,rules;rules=this.ruler.getRules('');for(i=0,l=rules.length;i<l;i++){rules[i](state);}};Core.prototype.State=require('./rules_core/state_core');module.exports=Core;},{"./ruler":17,"./rules_core/block":30,"./rules_core/inline":31,"./rules_core/linkify":32,"./rules_core/normalize":33,"./rules_core/replacements":34,"./rules_core/smartquotes":35,"./rules_core/state_core":36}],12:[function(require,module,exports){/** internal
 * class ParserInline
 *
 * Tokenizes paragraph content.
 **/'use strict';var Ruler=require('./ruler');////////////////////////////////////////////////////////////////////////////////
// Parser rules
var _rules=[['text',require('./rules_inline/text')],['newline',require('./rules_inline/newline')],['escape',require('./rules_inline/escape')],['backticks',require('./rules_inline/backticks')],['strikethrough',require('./rules_inline/strikethrough').tokenize],['emphasis',require('./rules_inline/emphasis').tokenize],['link',require('./rules_inline/link')],['image',require('./rules_inline/image')],['autolink',require('./rules_inline/autolink')],['html_inline',require('./rules_inline/html_inline')],['entity',require('./rules_inline/entity')]];var _rules2=[['balance_pairs',require('./rules_inline/balance_pairs')],['strikethrough',require('./rules_inline/strikethrough').postProcess],['emphasis',require('./rules_inline/emphasis').postProcess],['text_collapse',require('./rules_inline/text_collapse')]];/**
 * new ParserInline()
 **/function ParserInline(){var i;/**
   * ParserInline#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of inline rules.
   **/this.ruler=new Ruler();for(i=0;i<_rules.length;i++){this.ruler.push(_rules[i][0],_rules[i][1]);}/**
   * ParserInline#ruler2 -> Ruler
   *
   * [[Ruler]] instance. Second ruler used for post-processing
   * (e.g. in emphasis-like rules).
   **/this.ruler2=new Ruler();for(i=0;i<_rules2.length;i++){this.ruler2.push(_rules2[i][0],_rules2[i][1]);}}// Skip single token by running all rules in validation mode;
// returns `true` if any rule reported success
//
ParserInline.prototype.skipToken=function(state){var ok,i,pos=state.pos,rules=this.ruler.getRules(''),len=rules.length,maxNesting=state.md.options.maxNesting,cache=state.cache;if(typeof cache[pos]!=='undefined'){state.pos=cache[pos];return;}if(state.level<maxNesting){for(i=0;i<len;i++){// Increment state.level and decrement it later to limit recursion.
// It's harmless to do here, because no tokens are created. But ideally,
// we'd need a separate private state variable for this purpose.
//
state.level++;ok=rules[i](state,true);state.level--;if(ok){break;}}}else{// Too much nesting, just skip until the end of the paragraph.
//
// NOTE: this will cause links to behave incorrectly in the following case,
//       when an amount of `[` is exactly equal to `maxNesting + 1`:
//
//       [[[[[[[[[[[[[[[[[[[[[foo]()
//
// TODO: remove this workaround when CM standard will allow nested links
//       (we can replace it by preventing links from being parsed in
//       validation mode)
//
state.pos=state.posMax;}if(!ok){state.pos++;}cache[pos]=state.pos;};// Generate tokens for input range
//
ParserInline.prototype.tokenize=function(state){var ok,i,rules=this.ruler.getRules(''),len=rules.length,end=state.posMax,maxNesting=state.md.options.maxNesting;while(state.pos<end){// Try all possible rules.
// On success, rule should:
//
// - update `state.pos`
// - update `state.tokens`
// - return true
if(state.level<maxNesting){for(i=0;i<len;i++){ok=rules[i](state,false);if(ok){break;}}}if(ok){if(state.pos>=end){break;}continue;}state.pending+=state.src[state.pos++];}if(state.pending){state.pushPending();}};/**
 * ParserInline.parse(str, md, env, outTokens)
 *
 * Process input string and push inline tokens into `outTokens`
 **/ParserInline.prototype.parse=function(str,md,env,outTokens){var i,rules,len;var state=new this.State(str,md,env,outTokens);this.tokenize(state);rules=this.ruler2.getRules('');len=rules.length;for(i=0;i<len;i++){rules[i](state);}};ParserInline.prototype.State=require('./rules_inline/state_inline');module.exports=ParserInline;},{"./ruler":17,"./rules_inline/autolink":37,"./rules_inline/backticks":38,"./rules_inline/balance_pairs":39,"./rules_inline/emphasis":40,"./rules_inline/entity":41,"./rules_inline/escape":42,"./rules_inline/html_inline":43,"./rules_inline/image":44,"./rules_inline/link":45,"./rules_inline/newline":46,"./rules_inline/state_inline":47,"./rules_inline/strikethrough":48,"./rules_inline/text":49,"./rules_inline/text_collapse":50}],13:[function(require,module,exports){// Commonmark default options
'use strict';module.exports={options:{html:true,// Enable HTML tags in source
xhtmlOut:true,// Use '/' to close single tags (<br />)
breaks:false,// Convert '\n' in paragraphs into <br>
langPrefix:'language-',// CSS language prefix for fenced blocks
linkify:false,// autoconvert URL-like texts to links
// Enable some language-neutral replacements + quotes beautification
typographer:false,// Double + single quotes replacement pairs, when typographer enabled,
// and smartquotes on. Could be either a String or an Array.
//
// For example, you can use '«»„“' for Russian, '„“‚‘' for German,
// and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
quotes:"“”‘’",/* “”‘’ */// Highlighter function. Should return escaped HTML,
// or '' if the source string is not changed and should be escaped externaly.
// If result starts with <pre... internal wrapper is skipped.
//
// function (/*str, lang*/) { return ''; }
//
highlight:null,maxNesting:20// Internal protection, recursion limit
},components:{core:{rules:['normalize','block','inline']},block:{rules:['blockquote','code','fence','heading','hr','html_block','lheading','list','reference','paragraph']},inline:{rules:['autolink','backticks','emphasis','entity','escape','html_inline','image','link','newline','text'],rules2:['balance_pairs','emphasis','text_collapse']}}};},{}],14:[function(require,module,exports){// markdown-it default options
'use strict';module.exports={options:{html:false,// Enable HTML tags in source
xhtmlOut:false,// Use '/' to close single tags (<br />)
breaks:false,// Convert '\n' in paragraphs into <br>
langPrefix:'language-',// CSS language prefix for fenced blocks
linkify:false,// autoconvert URL-like texts to links
// Enable some language-neutral replacements + quotes beautification
typographer:false,// Double + single quotes replacement pairs, when typographer enabled,
// and smartquotes on. Could be either a String or an Array.
//
// For example, you can use '«»„“' for Russian, '„“‚‘' for German,
// and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
quotes:"“”‘’",/* “”‘’ */// Highlighter function. Should return escaped HTML,
// or '' if the source string is not changed and should be escaped externaly.
// If result starts with <pre... internal wrapper is skipped.
//
// function (/*str, lang*/) { return ''; }
//
highlight:null,maxNesting:100// Internal protection, recursion limit
},components:{core:{},block:{},inline:{}}};},{}],15:[function(require,module,exports){// "Zero" preset, with nothing enabled. Useful for manual configuring of simple
// modes. For example, to parse bold/italic only.
'use strict';module.exports={options:{html:false,// Enable HTML tags in source
xhtmlOut:false,// Use '/' to close single tags (<br />)
breaks:false,// Convert '\n' in paragraphs into <br>
langPrefix:'language-',// CSS language prefix for fenced blocks
linkify:false,// autoconvert URL-like texts to links
// Enable some language-neutral replacements + quotes beautification
typographer:false,// Double + single quotes replacement pairs, when typographer enabled,
// and smartquotes on. Could be either a String or an Array.
//
// For example, you can use '«»„“' for Russian, '„“‚‘' for German,
// and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
quotes:"“”‘’",/* “”‘’ */// Highlighter function. Should return escaped HTML,
// or '' if the source string is not changed and should be escaped externaly.
// If result starts with <pre... internal wrapper is skipped.
//
// function (/*str, lang*/) { return ''; }
//
highlight:null,maxNesting:20// Internal protection, recursion limit
},components:{core:{rules:['normalize','block','inline']},block:{rules:['paragraph']},inline:{rules:['text'],rules2:['balance_pairs','text_collapse']}}};},{}],16:[function(require,module,exports){/**
 * class Renderer
 *
 * Generates HTML from parsed token stream. Each instance has independent
 * copy of rules. Those can be rewritten with ease. Also, you can add new
 * rules if you create plugin and adds new token types.
 **/'use strict';var assign=require('./common/utils').assign;var unescapeAll=require('./common/utils').unescapeAll;var escapeHtml=require('./common/utils').escapeHtml;////////////////////////////////////////////////////////////////////////////////
var default_rules={};default_rules.code_inline=function(tokens,idx,options,env,slf){var token=tokens[idx];return'<code'+slf.renderAttrs(token)+'>'+escapeHtml(tokens[idx].content)+'</code>';};default_rules.code_block=function(tokens,idx,options,env,slf){var token=tokens[idx];return'<pre'+slf.renderAttrs(token)+'><code>'+escapeHtml(tokens[idx].content)+'</code></pre>\n';};default_rules.fence=function(tokens,idx,options,env,slf){var token=tokens[idx],info=token.info?unescapeAll(token.info).trim():'',langName='',highlighted,i,tmpAttrs,tmpToken;if(info){langName=info.split(/\s+/g)[0];}if(options.highlight){highlighted=options.highlight(token.content,langName)||escapeHtml(token.content);}else{highlighted=escapeHtml(token.content);}if(highlighted.indexOf('<pre')===0){return highlighted+'\n';}// If language exists, inject class gently, without mudofying original token.
// May be, one day we will add .clone() for token and simplify this part, but
// now we prefer to keep things local.
if(info){i=token.attrIndex('class');tmpAttrs=token.attrs?token.attrs.slice():[];if(i<0){tmpAttrs.push(['class',options.langPrefix+langName]);}else{tmpAttrs[i][1]+=' '+options.langPrefix+langName;}// Fake token just to render attributes
tmpToken={attrs:tmpAttrs};return'<pre><code'+slf.renderAttrs(tmpToken)+'>'+highlighted+'</code></pre>\n';}return'<pre><code'+slf.renderAttrs(token)+'>'+highlighted+'</code></pre>\n';};default_rules.image=function(tokens,idx,options,env,slf){var token=tokens[idx];// "alt" attr MUST be set, even if empty. Because it's mandatory and
// should be placed on proper position for tests.
//
// Replace content with actual value
token.attrs[token.attrIndex('alt')][1]=slf.renderInlineAsText(token.children,options,env);return slf.renderToken(tokens,idx,options);};default_rules.hardbreak=function(tokens,idx,options/*, env */){return options.xhtmlOut?'<br />\n':'<br>\n';};default_rules.softbreak=function(tokens,idx,options/*, env */){return options.breaks?options.xhtmlOut?'<br />\n':'<br>\n':'\n';};default_rules.text=function(tokens,idx/*, options, env */){return escapeHtml(tokens[idx].content);};default_rules.html_block=function(tokens,idx/*, options, env */){return tokens[idx].content;};default_rules.html_inline=function(tokens,idx/*, options, env */){return tokens[idx].content;};/**
 * new Renderer()
 *
 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
 **/function Renderer(){/**
   * Renderer#rules -> Object
   *
   * Contains render rules for tokens. Can be updated and extended.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.renderer.rules.strong_open  = function () { return '<b>'; };
   * md.renderer.rules.strong_close = function () { return '</b>'; };
   *
   * var result = md.renderInline(...);
   * ```
   *
   * Each rule is called as independed static function with fixed signature:
   *
   * ```javascript
   * function my_token_render(tokens, idx, options, env, renderer) {
   *   // ...
   *   return renderedHTML;
   * }
   * ```
   *
   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
   * for more details and examples.
   **/this.rules=assign({},default_rules);}/**
 * Renderer.renderAttrs(token) -> String
 *
 * Render token attributes to string.
 **/Renderer.prototype.renderAttrs=function renderAttrs(token){var i,l,result;if(!token.attrs){return'';}result='';for(i=0,l=token.attrs.length;i<l;i++){result+=' '+escapeHtml(token.attrs[i][0])+'="'+escapeHtml(token.attrs[i][1])+'"';}return result;};/**
 * Renderer.renderToken(tokens, idx, options) -> String
 * - tokens (Array): list of tokens
 * - idx (Numbed): token index to render
 * - options (Object): params of parser instance
 *
 * Default token renderer. Can be overriden by custom function
 * in [[Renderer#rules]].
 **/Renderer.prototype.renderToken=function renderToken(tokens,idx,options){var nextToken,result='',needLf=false,token=tokens[idx];// Tight list paragraphs
if(token.hidden){return'';}// Insert a newline between hidden paragraph and subsequent opening
// block-level tag.
//
// For example, here we should insert a newline before blockquote:
//  - a
//    >
//
if(token.block&&token.nesting!==-1&&idx&&tokens[idx-1].hidden){result+='\n';}// Add token name, e.g. `<img`
result+=(token.nesting===-1?'</':'<')+token.tag;// Encode attributes, e.g. `<img src="foo"`
result+=this.renderAttrs(token);// Add a slash for self-closing tags, e.g. `<img src="foo" /`
if(token.nesting===0&&options.xhtmlOut){result+=' /';}// Check if we need to add a newline after this tag
if(token.block){needLf=true;if(token.nesting===1){if(idx+1<tokens.length){nextToken=tokens[idx+1];if(nextToken.type==='inline'||nextToken.hidden){// Block-level tag containing an inline tag.
//
needLf=false;}else if(nextToken.nesting===-1&&nextToken.tag===token.tag){// Opening tag + closing tag of the same type. E.g. `<li></li>`.
//
needLf=false;}}}}result+=needLf?'>\n':'>';return result;};/**
 * Renderer.renderInline(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * The same as [[Renderer.render]], but for single token of `inline` type.
 **/Renderer.prototype.renderInline=function(tokens,options,env){var type,result='',rules=this.rules;for(var i=0,len=tokens.length;i<len;i++){type=tokens[i].type;if(typeof rules[type]!=='undefined'){result+=rules[type](tokens,i,options,env,this);}else{result+=this.renderToken(tokens,i,options);}}return result;};/** internal
 * Renderer.renderInlineAsText(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Special kludge for image `alt` attributes to conform CommonMark spec.
 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
 * instead of simple escaping.
 **/Renderer.prototype.renderInlineAsText=function(tokens,options,env){var result='';for(var i=0,len=tokens.length;i<len;i++){if(tokens[i].type==='text'){result+=tokens[i].content;}else if(tokens[i].type==='image'){result+=this.renderInlineAsText(tokens[i].children,options,env);}}return result;};/**
 * Renderer.render(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Takes token stream and generates HTML. Probably, you will never need to call
 * this method directly.
 **/Renderer.prototype.render=function(tokens,options,env){var i,len,type,result='',rules=this.rules;for(i=0,len=tokens.length;i<len;i++){type=tokens[i].type;if(type==='inline'){result+=this.renderInline(tokens[i].children,options,env);}else if(typeof rules[type]!=='undefined'){result+=rules[tokens[i].type](tokens,i,options,env,this);}else{result+=this.renderToken(tokens,i,options,env);}}return result;};module.exports=Renderer;},{"./common/utils":4}],17:[function(require,module,exports){/**
 * class Ruler
 *
 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
 *
 * - keep rules in defined order
 * - assign the name to each rule
 * - enable/disable rules
 * - add/replace rules
 * - allow assign rules to additional named chains (in the same)
 * - cacheing lists of active rules
 *
 * You will not need use this class directly until write plugins. For simple
 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
 * [[MarkdownIt.use]].
 **/'use strict';/**
 * new Ruler()
 **/function Ruler(){// List of added rules. Each element is:
//
// {
//   name: XXX,
//   enabled: Boolean,
//   fn: Function(),
//   alt: [ name2, name3 ]
// }
//
this.__rules__=[];// Cached rule chains.
//
// First level - chain name, '' for default.
// Second level - diginal anchor for fast filtering by charcodes.
//
this.__cache__=null;}////////////////////////////////////////////////////////////////////////////////
// Helper methods, should not be used directly
// Find rule index by name
//
Ruler.prototype.__find__=function(name){for(var i=0;i<this.__rules__.length;i++){if(this.__rules__[i].name===name){return i;}}return-1;};// Build rules lookup cache
//
Ruler.prototype.__compile__=function(){var self=this;var chains=[''];// collect unique names
self.__rules__.forEach(function(rule){if(!rule.enabled){return;}rule.alt.forEach(function(altName){if(chains.indexOf(altName)<0){chains.push(altName);}});});self.__cache__={};chains.forEach(function(chain){self.__cache__[chain]=[];self.__rules__.forEach(function(rule){if(!rule.enabled){return;}if(chain&&rule.alt.indexOf(chain)<0){return;}self.__cache__[chain].push(rule.fn);});});};/**
 * Ruler.at(name, fn [, options])
 * - name (String): rule name to replace.
 * - fn (Function): new rule function.
 * - options (Object): new rule options (not mandatory).
 *
 * Replace rule by name with new function & options. Throws error if name not
 * found.
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * Replace existing typorgapher replacement rule with new one:
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.at('replacements', function replace(state) {
 *   //...
 * });
 * ```
 **/Ruler.prototype.at=function(name,fn,options){var index=this.__find__(name);var opt=options||{};if(index===-1){throw new Error('Parser rule not found: '+name);}this.__rules__[index].fn=fn;this.__rules__[index].alt=opt.alt||[];this.__cache__=null;};/**
 * Ruler.before(beforeName, ruleName, fn [, options])
 * - beforeName (String): new rule will be added before this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain before one with given name. See also
 * [[Ruler.after]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/Ruler.prototype.before=function(beforeName,ruleName,fn,options){var index=this.__find__(beforeName);var opt=options||{};if(index===-1){throw new Error('Parser rule not found: '+beforeName);}this.__rules__.splice(index,0,{name:ruleName,enabled:true,fn:fn,alt:opt.alt||[]});this.__cache__=null;};/**
 * Ruler.after(afterName, ruleName, fn [, options])
 * - afterName (String): new rule will be added after this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain after one with given name. See also
 * [[Ruler.before]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/Ruler.prototype.after=function(afterName,ruleName,fn,options){var index=this.__find__(afterName);var opt=options||{};if(index===-1){throw new Error('Parser rule not found: '+afterName);}this.__rules__.splice(index+1,0,{name:ruleName,enabled:true,fn:fn,alt:opt.alt||[]});this.__cache__=null;};/**
 * Ruler.push(ruleName, fn [, options])
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Push new rule to the end of chain. See also
 * [[Ruler.before]], [[Ruler.after]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.push('my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/Ruler.prototype.push=function(ruleName,fn,options){var opt=options||{};this.__rules__.push({name:ruleName,enabled:true,fn:fn,alt:opt.alt||[]});this.__cache__=null;};/**
 * Ruler.enable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to enable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
 **/Ruler.prototype.enable=function(list,ignoreInvalid){if(!Array.isArray(list)){list=[list];}var result=[];// Search by name and enable
list.forEach(function(name){var idx=this.__find__(name);if(idx<0){if(ignoreInvalid){return;}throw new Error('Rules manager: invalid rule name '+name);}this.__rules__[idx].enabled=true;result.push(name);},this);this.__cache__=null;return result;};/**
 * Ruler.enableOnly(list [, ignoreInvalid])
 * - list (String|Array): list of rule names to enable (whitelist).
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names, and disable everything else. If any rule name
 * not found - throw Error. Errors can be disabled by second param.
 *
 * See also [[Ruler.disable]], [[Ruler.enable]].
 **/Ruler.prototype.enableOnly=function(list,ignoreInvalid){if(!Array.isArray(list)){list=[list];}this.__rules__.forEach(function(rule){rule.enabled=false;});this.enable(list,ignoreInvalid);};/**
 * Ruler.disable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Disable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
 **/Ruler.prototype.disable=function(list,ignoreInvalid){if(!Array.isArray(list)){list=[list];}var result=[];// Search by name and disable
list.forEach(function(name){var idx=this.__find__(name);if(idx<0){if(ignoreInvalid){return;}throw new Error('Rules manager: invalid rule name '+name);}this.__rules__[idx].enabled=false;result.push(name);},this);this.__cache__=null;return result;};/**
 * Ruler.getRules(chainName) -> Array
 *
 * Return array of active functions (rules) for given chain name. It analyzes
 * rules configuration, compiles caches if not exists and returns result.
 *
 * Default chain name is `''` (empty string). It can't be skipped. That's
 * done intentionally, to keep signature monomorphic for high speed.
 **/Ruler.prototype.getRules=function(chainName){if(this.__cache__===null){this.__compile__();}// Chain can be empty, if rules disabled. But we still have to return Array.
return this.__cache__[chainName]||[];};module.exports=Ruler;},{}],18:[function(require,module,exports){// Block quotes
'use strict';var isSpace=require('../common/utils').isSpace;module.exports=function blockquote(state,startLine,endLine,silent){var adjustTab,ch,i,initial,l,lastLineEmpty,lines,nextLine,offset,oldBMarks,oldBSCount,oldIndent,oldParentType,oldSCount,oldTShift,spaceAfterMarker,terminate,terminatorRules,token,pos=state.bMarks[startLine]+state.tShift[startLine],max=state.eMarks[startLine];// check the block quote marker
if(state.src.charCodeAt(pos++)!==0x3E/* > */){return false;}// we know that it's going to be a valid blockquote,
// so no point trying to find the end of it in silent mode
if(silent){return true;}oldIndent=state.blkIndent;state.blkIndent=0;// skip spaces after ">" and re-calculate offset
initial=offset=state.sCount[startLine]+pos-(state.bMarks[startLine]+state.tShift[startLine]);// skip one optional space after '>'
if(state.src.charCodeAt(pos)===0x20/* space */){// ' >   test '
//     ^ -- position start of line here:
pos++;initial++;offset++;adjustTab=false;spaceAfterMarker=true;}else if(state.src.charCodeAt(pos)===0x09/* tab */){spaceAfterMarker=true;if((state.bsCount[startLine]+offset)%4===3){// '  >\t  test '
//       ^ -- position start of line here (tab has width===1)
pos++;initial++;offset++;adjustTab=false;}else{// ' >\t  test '
//    ^ -- position start of line here + shift bsCount slightly
//         to make extra space appear
adjustTab=true;}}else{spaceAfterMarker=false;}oldBMarks=[state.bMarks[startLine]];state.bMarks[startLine]=pos;while(pos<max){ch=state.src.charCodeAt(pos);if(isSpace(ch)){if(ch===0x09){offset+=4-(offset+state.bsCount[startLine]+(adjustTab?1:0))%4;}else{offset++;}}else{break;}pos++;}oldBSCount=[state.bsCount[startLine]];state.bsCount[startLine]=state.sCount[startLine]+1+(spaceAfterMarker?1:0);lastLineEmpty=pos>=max;oldSCount=[state.sCount[startLine]];state.sCount[startLine]=offset-initial;oldTShift=[state.tShift[startLine]];state.tShift[startLine]=pos-state.bMarks[startLine];terminatorRules=state.md.block.ruler.getRules('blockquote');oldParentType=state.parentType;state.parentType='blockquote';// Search the end of the block
//
// Block ends with either:
//  1. an empty line outside:
//     ```
//     > test
//
//     ```
//  2. an empty line inside:
//     ```
//     >
//     test
//     ```
//  3. another tag
//     ```
//     > test
//      - - -
//     ```
for(nextLine=startLine+1;nextLine<endLine;nextLine++){if(state.sCount[nextLine]<oldIndent){break;}pos=state.bMarks[nextLine]+state.tShift[nextLine];max=state.eMarks[nextLine];if(pos>=max){// Case 1: line is not inside the blockquote, and this line is empty.
break;}if(state.src.charCodeAt(pos++)===0x3E/* > */){// This line is inside the blockquote.
// skip spaces after ">" and re-calculate offset
initial=offset=state.sCount[nextLine]+pos-(state.bMarks[nextLine]+state.tShift[nextLine]);// skip one optional space after '>'
if(state.src.charCodeAt(pos)===0x20/* space */){// ' >   test '
//     ^ -- position start of line here:
pos++;initial++;offset++;adjustTab=false;spaceAfterMarker=true;}else if(state.src.charCodeAt(pos)===0x09/* tab */){spaceAfterMarker=true;if((state.bsCount[nextLine]+offset)%4===3){// '  >\t  test '
//       ^ -- position start of line here (tab has width===1)
pos++;initial++;offset++;adjustTab=false;}else{// ' >\t  test '
//    ^ -- position start of line here + shift bsCount slightly
//         to make extra space appear
adjustTab=true;}}else{spaceAfterMarker=false;}oldBMarks.push(state.bMarks[nextLine]);state.bMarks[nextLine]=pos;while(pos<max){ch=state.src.charCodeAt(pos);if(isSpace(ch)){if(ch===0x09){offset+=4-(offset+state.bsCount[nextLine]+(adjustTab?1:0))%4;}else{offset++;}}else{break;}pos++;}lastLineEmpty=pos>=max;oldBSCount.push(state.bsCount[nextLine]);state.bsCount[nextLine]=state.sCount[nextLine]+1+(spaceAfterMarker?1:0);oldSCount.push(state.sCount[nextLine]);state.sCount[nextLine]=offset-initial;oldTShift.push(state.tShift[nextLine]);state.tShift[nextLine]=pos-state.bMarks[nextLine];continue;}// Case 2: line is not inside the blockquote, and the last line was empty.
if(lastLineEmpty){break;}// Case 3: another tag found.
terminate=false;for(i=0,l=terminatorRules.length;i<l;i++){if(terminatorRules[i](state,nextLine,endLine,true)){terminate=true;break;}}if(terminate){break;}oldBMarks.push(state.bMarks[nextLine]);oldBSCount.push(state.bsCount[nextLine]);oldTShift.push(state.tShift[nextLine]);oldSCount.push(state.sCount[nextLine]);// A negative indentation means that this is a paragraph continuation
//
state.sCount[nextLine]=-1;}token=state.push('blockquote_open','blockquote',1);token.markup='>';token.map=lines=[startLine,0];state.md.block.tokenize(state,startLine,nextLine);token=state.push('blockquote_close','blockquote',-1);token.markup='>';state.parentType=oldParentType;lines[1]=state.line;// Restore original tShift; this might not be necessary since the parser
// has already been here, but just to make sure we can do that.
for(i=0;i<oldTShift.length;i++){state.bMarks[i+startLine]=oldBMarks[i];state.tShift[i+startLine]=oldTShift[i];state.sCount[i+startLine]=oldSCount[i];state.bsCount[i+startLine]=oldBSCount[i];}state.blkIndent=oldIndent;return true;};},{"../common/utils":4}],19:[function(require,module,exports){// Code block (4 spaces padded)
'use strict';module.exports=function code(state,startLine,endLine/*, silent*/){var nextLine,last,token;if(state.sCount[startLine]-state.blkIndent<4){return false;}last=nextLine=startLine+1;while(nextLine<endLine){if(state.isEmpty(nextLine)){nextLine++;continue;}if(state.sCount[nextLine]-state.blkIndent>=4){nextLine++;last=nextLine;continue;}break;}state.line=last;token=state.push('code_block','code',0);token.content=state.getLines(startLine,last,4+state.blkIndent,true);token.map=[startLine,state.line];return true;};},{}],20:[function(require,module,exports){// fences (``` lang, ~~~ lang)
'use strict';module.exports=function fence(state,startLine,endLine,silent){var marker,len,params,nextLine,mem,token,markup,haveEndMarker=false,pos=state.bMarks[startLine]+state.tShift[startLine],max=state.eMarks[startLine];if(pos+3>max){return false;}marker=state.src.charCodeAt(pos);if(marker!==0x7E/* ~ */&&marker!==0x60/* ` */){return false;}// scan marker length
mem=pos;pos=state.skipChars(pos,marker);len=pos-mem;if(len<3){return false;}markup=state.src.slice(mem,pos);params=state.src.slice(pos,max);if(params.indexOf('`')>=0){return false;}// Since start is found, we can report success here in validation mode
if(silent){return true;}// search end of block
nextLine=startLine;for(;;){nextLine++;if(nextLine>=endLine){// unclosed block should be autoclosed by end of document.
// also block seems to be autoclosed by end of parent
break;}pos=mem=state.bMarks[nextLine]+state.tShift[nextLine];max=state.eMarks[nextLine];if(pos<max&&state.sCount[nextLine]<state.blkIndent){// non-empty line with negative indent should stop the list:
// - ```
//  test
break;}if(state.src.charCodeAt(pos)!==marker){continue;}if(state.sCount[nextLine]-state.blkIndent>=4){// closing fence should be indented less than 4 spaces
continue;}pos=state.skipChars(pos,marker);// closing code fence must be at least as long as the opening one
if(pos-mem<len){continue;}// make sure tail has spaces only
pos=state.skipSpaces(pos);if(pos<max){continue;}haveEndMarker=true;// found!
break;}// If a fence has heading spaces, they should be removed from its inner block
len=state.sCount[startLine];state.line=nextLine+(haveEndMarker?1:0);token=state.push('fence','code',0);token.info=params;token.content=state.getLines(startLine+1,nextLine,len,true);token.markup=markup;token.map=[startLine,state.line];return true;};},{}],21:[function(require,module,exports){// heading (#, ##, ...)
'use strict';var isSpace=require('../common/utils').isSpace;module.exports=function heading(state,startLine,endLine,silent){var ch,level,tmp,token,pos=state.bMarks[startLine]+state.tShift[startLine],max=state.eMarks[startLine];ch=state.src.charCodeAt(pos);if(ch!==0x23/* # */||pos>=max){return false;}// count heading level
level=1;ch=state.src.charCodeAt(++pos);while(ch===0x23/* # */&&pos<max&&level<=6){level++;ch=state.src.charCodeAt(++pos);}if(level>6||pos<max&&!isSpace(ch)){return false;}if(silent){return true;}// Let's cut tails like '    ###  ' from the end of string
max=state.skipSpacesBack(max,pos);tmp=state.skipCharsBack(max,0x23,pos);// #
if(tmp>pos&&isSpace(state.src.charCodeAt(tmp-1))){max=tmp;}state.line=startLine+1;token=state.push('heading_open','h'+String(level),1);token.markup='########'.slice(0,level);token.map=[startLine,state.line];token=state.push('inline','',0);token.content=state.src.slice(pos,max).trim();token.map=[startLine,state.line];token.children=[];token=state.push('heading_close','h'+String(level),-1);token.markup='########'.slice(0,level);return true;};},{"../common/utils":4}],22:[function(require,module,exports){// Horizontal rule
'use strict';var isSpace=require('../common/utils').isSpace;module.exports=function hr(state,startLine,endLine,silent){var marker,cnt,ch,token,pos=state.bMarks[startLine]+state.tShift[startLine],max=state.eMarks[startLine];marker=state.src.charCodeAt(pos++);// Check hr marker
if(marker!==0x2A/* * */&&marker!==0x2D/* - */&&marker!==0x5F/* _ */){return false;}// markers can be mixed with spaces, but there should be at least 3 of them
cnt=1;while(pos<max){ch=state.src.charCodeAt(pos++);if(ch!==marker&&!isSpace(ch)){return false;}if(ch===marker){cnt++;}}if(cnt<3){return false;}if(silent){return true;}state.line=startLine+1;token=state.push('hr','hr',0);token.map=[startLine,state.line];token.markup=Array(cnt+1).join(String.fromCharCode(marker));return true;};},{"../common/utils":4}],23:[function(require,module,exports){// HTML block
'use strict';var block_names=require('../common/html_blocks');var HTML_OPEN_CLOSE_TAG_RE=require('../common/html_re').HTML_OPEN_CLOSE_TAG_RE;// An array of opening and corresponding closing sequences for html tags,
// last argument defines whether it can terminate a paragraph or not
//
var HTML_SEQUENCES=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,true],[/^<!--/,/-->/,true],[/^<\?/,/\?>/,true],[/^<![A-Z]/,/>/,true],[/^<!\[CDATA\[/,/\]\]>/,true],[new RegExp('^</?('+block_names.join('|')+')(?=(\\s|/?>|$))','i'),/^$/,true],[new RegExp(HTML_OPEN_CLOSE_TAG_RE.source+'\\s*$'),/^$/,false]];module.exports=function html_block(state,startLine,endLine,silent){var i,nextLine,token,lineText,pos=state.bMarks[startLine]+state.tShift[startLine],max=state.eMarks[startLine];if(!state.md.options.html){return false;}if(state.src.charCodeAt(pos)!==0x3C/* < */){return false;}lineText=state.src.slice(pos,max);for(i=0;i<HTML_SEQUENCES.length;i++){if(HTML_SEQUENCES[i][0].test(lineText)){break;}}if(i===HTML_SEQUENCES.length){return false;}if(silent){// true if this sequence can be a terminator, false otherwise
return HTML_SEQUENCES[i][2];}nextLine=startLine+1;// If we are here - we detected HTML block.
// Let's roll down till block end.
if(!HTML_SEQUENCES[i][1].test(lineText)){for(;nextLine<endLine;nextLine++){if(state.sCount[nextLine]<state.blkIndent){break;}pos=state.bMarks[nextLine]+state.tShift[nextLine];max=state.eMarks[nextLine];lineText=state.src.slice(pos,max);if(HTML_SEQUENCES[i][1].test(lineText)){if(lineText.length!==0){nextLine++;}break;}}}state.line=nextLine;token=state.push('html_block','',0);token.map=[startLine,nextLine];token.content=state.getLines(startLine,nextLine,state.blkIndent,true);return true;};},{"../common/html_blocks":2,"../common/html_re":3}],24:[function(require,module,exports){// lheading (---, ===)
'use strict';module.exports=function lheading(state,startLine,endLine/*, silent*/){var content,terminate,i,l,token,pos,max,level,marker,nextLine=startLine+1,oldParentType,terminatorRules=state.md.block.ruler.getRules('paragraph');oldParentType=state.parentType;state.parentType='paragraph';// use paragraph to match terminatorRules
// jump line-by-line until empty one or EOF
for(;nextLine<endLine&&!state.isEmpty(nextLine);nextLine++){// this would be a code block normally, but after paragraph
// it's considered a lazy continuation regardless of what's there
if(state.sCount[nextLine]-state.blkIndent>3){continue;}//
// Check for underline in setext header
//
if(state.sCount[nextLine]>=state.blkIndent){pos=state.bMarks[nextLine]+state.tShift[nextLine];max=state.eMarks[nextLine];if(pos<max){marker=state.src.charCodeAt(pos);if(marker===0x2D/* - */||marker===0x3D/* = */){pos=state.skipChars(pos,marker);pos=state.skipSpaces(pos);if(pos>=max){level=marker===0x3D/* = */?1:2;break;}}}}// quirk for blockquotes, this line should already be checked by that rule
if(state.sCount[nextLine]<0){continue;}// Some tags can terminate paragraph without empty line.
terminate=false;for(i=0,l=terminatorRules.length;i<l;i++){if(terminatorRules[i](state,nextLine,endLine,true)){terminate=true;break;}}if(terminate){break;}}if(!level){// Didn't find valid underline
return false;}content=state.getLines(startLine,nextLine,state.blkIndent,false).trim();state.line=nextLine+1;token=state.push('heading_open','h'+String(level),1);token.markup=String.fromCharCode(marker);token.map=[startLine,state.line];token=state.push('inline','',0);token.content=content;token.map=[startLine,state.line-1];token.children=[];token=state.push('heading_close','h'+String(level),-1);token.markup=String.fromCharCode(marker);state.parentType=oldParentType;return true;};},{}],25:[function(require,module,exports){// Lists
'use strict';var isSpace=require('../common/utils').isSpace;// Search `[-+*][\n ]`, returns next pos arter marker on success
// or -1 on fail.
function skipBulletListMarker(state,startLine){var marker,pos,max,ch;pos=state.bMarks[startLine]+state.tShift[startLine];max=state.eMarks[startLine];marker=state.src.charCodeAt(pos++);// Check bullet
if(marker!==0x2A/* * */&&marker!==0x2D/* - */&&marker!==0x2B/* + */){return-1;}if(pos<max){ch=state.src.charCodeAt(pos);if(!isSpace(ch)){// " -test " - is not a list item
return-1;}}return pos;}// Search `\d+[.)][\n ]`, returns next pos arter marker on success
// or -1 on fail.
function skipOrderedListMarker(state,startLine){var ch,start=state.bMarks[startLine]+state.tShift[startLine],pos=start,max=state.eMarks[startLine];// List marker should have at least 2 chars (digit + dot)
if(pos+1>=max){return-1;}ch=state.src.charCodeAt(pos++);if(ch<0x30/* 0 */||ch>0x39/* 9 */){return-1;}for(;;){// EOL -> fail
if(pos>=max){return-1;}ch=state.src.charCodeAt(pos++);if(ch>=0x30/* 0 */&&ch<=0x39/* 9 */){// List marker should have no more than 9 digits
// (prevents integer overflow in browsers)
if(pos-start>=10){return-1;}continue;}// found valid marker
if(ch===0x29/* ) */||ch===0x2e/* . */){break;}return-1;}if(pos<max){ch=state.src.charCodeAt(pos);if(!isSpace(ch)){// " 1.test " - is not a list item
return-1;}}return pos;}function markTightParagraphs(state,idx){var i,l,level=state.level+2;for(i=idx+2,l=state.tokens.length-2;i<l;i++){if(state.tokens[i].level===level&&state.tokens[i].type==='paragraph_open'){state.tokens[i+2].hidden=true;state.tokens[i].hidden=true;i+=2;}}}module.exports=function list(state,startLine,endLine,silent){var ch,contentStart,i,indent,indentAfterMarker,initial,isOrdered,itemLines,l,listLines,listTokIdx,markerCharCode,markerValue,max,nextLine,offset,oldIndent,oldLIndent,oldParentType,oldTShift,oldTight,pos,posAfterMarker,prevEmptyEnd,start,terminate,terminatorRules,token,isTerminatingParagraph=false,tight=true;// limit conditions when list can interrupt
// a paragraph (validation mode only)
if(silent&&state.parentType==='paragraph'){// Next list item should still terminate previous list item;
//
// This code can fail if plugins use blkIndent as well as lists,
// but I hope the spec gets fixed long before that happens.
//
if(state.tShift[startLine]>=state.blkIndent){isTerminatingParagraph=true;}}// Detect list type and position after marker
if((posAfterMarker=skipOrderedListMarker(state,startLine))>=0){isOrdered=true;start=state.bMarks[startLine]+state.tShift[startLine];markerValue=Number(state.src.substr(start,posAfterMarker-start-1));// If we're starting a new ordered list right after
// a paragraph, it should start with 1.
if(isTerminatingParagraph&&markerValue!==1)return false;}else if((posAfterMarker=skipBulletListMarker(state,startLine))>=0){isOrdered=false;}else{return false;}// If we're starting a new unordered list right after
// a paragraph, first line should not be empty.
if(isTerminatingParagraph){if(state.skipSpaces(posAfterMarker)>=state.eMarks[startLine])return false;}// We should terminate list on style change. Remember first one to compare.
markerCharCode=state.src.charCodeAt(posAfterMarker-1);// For validation mode we can terminate immediately
if(silent){return true;}// Start list
listTokIdx=state.tokens.length;if(isOrdered){token=state.push('ordered_list_open','ol',1);if(markerValue!==1){token.attrs=[['start',markerValue]];}}else{token=state.push('bullet_list_open','ul',1);}token.map=listLines=[startLine,0];token.markup=String.fromCharCode(markerCharCode);//
// Iterate list items
//
nextLine=startLine;prevEmptyEnd=false;terminatorRules=state.md.block.ruler.getRules('list');oldParentType=state.parentType;state.parentType='list';while(nextLine<endLine){pos=posAfterMarker;max=state.eMarks[nextLine];initial=offset=state.sCount[nextLine]+posAfterMarker-(state.bMarks[startLine]+state.tShift[startLine]);while(pos<max){ch=state.src.charCodeAt(pos);if(isSpace(ch)){if(ch===0x09){offset+=4-(offset+state.bsCount[nextLine])%4;}else{offset++;}}else{break;}pos++;}contentStart=pos;if(contentStart>=max){// trimming space in "-    \n  3" case, indent is 1 here
indentAfterMarker=1;}else{indentAfterMarker=offset-initial;}// If we have more than 4 spaces, the indent is 1
// (the rest is just indented code block)
if(indentAfterMarker>4){indentAfterMarker=1;}// "  -  test"
//  ^^^^^ - calculating total length of this thing
indent=initial+indentAfterMarker;// Run subparser & write tokens
token=state.push('list_item_open','li',1);token.markup=String.fromCharCode(markerCharCode);token.map=itemLines=[startLine,0];oldIndent=state.blkIndent;oldTight=state.tight;oldTShift=state.tShift[startLine];oldLIndent=state.sCount[startLine];state.blkIndent=indent;state.tight=true;state.tShift[startLine]=contentStart-state.bMarks[startLine];state.sCount[startLine]=offset;if(contentStart>=max&&state.isEmpty(startLine+1)){// workaround for this case
// (list item is empty, list terminates before "foo"):
// ~~~~~~~~
//   -
//
//     foo
// ~~~~~~~~
state.line=Math.min(state.line+2,endLine);}else{state.md.block.tokenize(state,startLine,endLine,true);}// If any of list item is tight, mark list as tight
if(!state.tight||prevEmptyEnd){tight=false;}// Item become loose if finish with empty line,
// but we should filter last element, because it means list finish
prevEmptyEnd=state.line-startLine>1&&state.isEmpty(state.line-1);state.blkIndent=oldIndent;state.tShift[startLine]=oldTShift;state.sCount[startLine]=oldLIndent;state.tight=oldTight;token=state.push('list_item_close','li',-1);token.markup=String.fromCharCode(markerCharCode);nextLine=startLine=state.line;itemLines[1]=nextLine;contentStart=state.bMarks[startLine];if(nextLine>=endLine){break;}//
// Try to check if list is terminated or continued.
//
if(state.sCount[nextLine]<state.blkIndent){break;}// fail if terminating block found
terminate=false;for(i=0,l=terminatorRules.length;i<l;i++){if(terminatorRules[i](state,nextLine,endLine,true)){terminate=true;break;}}if(terminate){break;}// fail if list has another type
if(isOrdered){posAfterMarker=skipOrderedListMarker(state,nextLine);if(posAfterMarker<0){break;}}else{posAfterMarker=skipBulletListMarker(state,nextLine);if(posAfterMarker<0){break;}}if(markerCharCode!==state.src.charCodeAt(posAfterMarker-1)){break;}}// Finilize list
if(isOrdered){token=state.push('ordered_list_close','ol',-1);}else{token=state.push('bullet_list_close','ul',-1);}token.markup=String.fromCharCode(markerCharCode);listLines[1]=nextLine;state.line=nextLine;state.parentType=oldParentType;// mark paragraphs tight if needed
if(tight){markTightParagraphs(state,listTokIdx);}return true;};},{"../common/utils":4}],26:[function(require,module,exports){// Paragraph
'use strict';module.exports=function paragraph(state,startLine/*, endLine*/){var content,terminate,i,l,token,oldParentType,nextLine=startLine+1,terminatorRules=state.md.block.ruler.getRules('paragraph'),endLine=state.lineMax;oldParentType=state.parentType;state.parentType='paragraph';// jump line-by-line until empty one or EOF
for(;nextLine<endLine&&!state.isEmpty(nextLine);nextLine++){// this would be a code block normally, but after paragraph
// it's considered a lazy continuation regardless of what's there
if(state.sCount[nextLine]-state.blkIndent>3){continue;}// quirk for blockquotes, this line should already be checked by that rule
if(state.sCount[nextLine]<0){continue;}// Some tags can terminate paragraph without empty line.
terminate=false;for(i=0,l=terminatorRules.length;i<l;i++){if(terminatorRules[i](state,nextLine,endLine,true)){terminate=true;break;}}if(terminate){break;}}content=state.getLines(startLine,nextLine,state.blkIndent,false).trim();state.line=nextLine;token=state.push('paragraph_open','p',1);token.map=[startLine,state.line];token=state.push('inline','',0);token.content=content;token.map=[startLine,state.line];token.children=[];token=state.push('paragraph_close','p',-1);state.parentType=oldParentType;return true;};},{}],27:[function(require,module,exports){'use strict';var parseLinkDestination=require('../helpers/parse_link_destination');var parseLinkTitle=require('../helpers/parse_link_title');var normalizeReference=require('../common/utils').normalizeReference;var isSpace=require('../common/utils').isSpace;module.exports=function reference(state,startLine,_endLine,silent){var ch,destEndPos,destEndLineNo,endLine,href,i,l,label,labelEnd,oldParentType,res,start,str,terminate,terminatorRules,title,lines=0,pos=state.bMarks[startLine]+state.tShift[startLine],max=state.eMarks[startLine],nextLine=startLine+1;if(state.src.charCodeAt(pos)!==0x5B/* [ */){return false;}// Simple check to quickly interrupt scan on [link](url) at the start of line.
// Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54
while(++pos<max){if(state.src.charCodeAt(pos)===0x5D/* ] */&&state.src.charCodeAt(pos-1)!==0x5C/* \ */){if(pos+1===max){return false;}if(state.src.charCodeAt(pos+1)!==0x3A/* : */){return false;}break;}}endLine=state.lineMax;// jump line-by-line until empty one or EOF
terminatorRules=state.md.block.ruler.getRules('reference');oldParentType=state.parentType;state.parentType='reference';for(;nextLine<endLine&&!state.isEmpty(nextLine);nextLine++){// this would be a code block normally, but after paragraph
// it's considered a lazy continuation regardless of what's there
if(state.sCount[nextLine]-state.blkIndent>3){continue;}// quirk for blockquotes, this line should already be checked by that rule
if(state.sCount[nextLine]<0){continue;}// Some tags can terminate paragraph without empty line.
terminate=false;for(i=0,l=terminatorRules.length;i<l;i++){if(terminatorRules[i](state,nextLine,endLine,true)){terminate=true;break;}}if(terminate){break;}}str=state.getLines(startLine,nextLine,state.blkIndent,false).trim();max=str.length;for(pos=1;pos<max;pos++){ch=str.charCodeAt(pos);if(ch===0x5B/* [ */){return false;}else if(ch===0x5D/* ] */){labelEnd=pos;break;}else if(ch===0x0A/* \n */){lines++;}else if(ch===0x5C/* \ */){pos++;if(pos<max&&str.charCodeAt(pos)===0x0A){lines++;}}}if(labelEnd<0||str.charCodeAt(labelEnd+1)!==0x3A/* : */){return false;}// [label]:   destination   'title'
//         ^^^ skip optional whitespace here
for(pos=labelEnd+2;pos<max;pos++){ch=str.charCodeAt(pos);if(ch===0x0A){lines++;}else if(isSpace(ch)){/*eslint no-empty:0*/}else{break;}}// [label]:   destination   'title'
//            ^^^^^^^^^^^ parse this
res=parseLinkDestination(str,pos,max);if(!res.ok){return false;}href=state.md.normalizeLink(res.str);if(!state.md.validateLink(href)){return false;}pos=res.pos;lines+=res.lines;// save cursor state, we could require to rollback later
destEndPos=pos;destEndLineNo=lines;// [label]:   destination   'title'
//                       ^^^ skipping those spaces
start=pos;for(;pos<max;pos++){ch=str.charCodeAt(pos);if(ch===0x0A){lines++;}else if(isSpace(ch)){/*eslint no-empty:0*/}else{break;}}// [label]:   destination   'title'
//                          ^^^^^^^ parse this
res=parseLinkTitle(str,pos,max);if(pos<max&&start!==pos&&res.ok){title=res.str;pos=res.pos;lines+=res.lines;}else{title='';pos=destEndPos;lines=destEndLineNo;}// skip trailing spaces until the rest of the line
while(pos<max){ch=str.charCodeAt(pos);if(!isSpace(ch)){break;}pos++;}if(pos<max&&str.charCodeAt(pos)!==0x0A){if(title){// garbage at the end of the line after title,
// but it could still be a valid reference if we roll back
title='';pos=destEndPos;lines=destEndLineNo;while(pos<max){ch=str.charCodeAt(pos);if(!isSpace(ch)){break;}pos++;}}}if(pos<max&&str.charCodeAt(pos)!==0x0A){// garbage at the end of the line
return false;}label=normalizeReference(str.slice(1,labelEnd));if(!label){// CommonMark 0.20 disallows empty labels
return false;}// Reference can not terminate anything. This check is for safety only.
/*istanbul ignore if*/if(silent){return true;}if(typeof state.env.references==='undefined'){state.env.references={};}if(typeof state.env.references[label]==='undefined'){state.env.references[label]={title:title,href:href};}state.parentType=oldParentType;state.line=startLine+lines+1;return true;};},{"../common/utils":4,"../helpers/parse_link_destination":6,"../helpers/parse_link_title":8}],28:[function(require,module,exports){// Parser state class
'use strict';var Token=require('../token');var isSpace=require('../common/utils').isSpace;function StateBlock(src,md,env,tokens){var ch,s,start,pos,len,indent,offset,indent_found;this.src=src;// link to parser instance
this.md=md;this.env=env;//
// Internal state vartiables
//
this.tokens=tokens;this.bMarks=[];// line begin offsets for fast jumps
this.eMarks=[];// line end offsets for fast jumps
this.tShift=[];// offsets of the first non-space characters (tabs not expanded)
this.sCount=[];// indents for each line (tabs expanded)
// An amount of virtual spaces (tabs expanded) between beginning
// of each line (bMarks) and real beginning of that line.
//
// It exists only as a hack because blockquotes override bMarks
// losing information in the process.
//
// It's used only when expanding tabs, you can think about it as
// an initial tab length, e.g. bsCount=21 applied to string `\t123`
// means first tab should be expanded to 4-21%4 === 3 spaces.
//
this.bsCount=[];// block parser variables
this.blkIndent=0;// required block content indent
// (for example, if we are in list)
this.line=0;// line index in src
this.lineMax=0;// lines count
this.tight=false;// loose/tight mode for lists
this.ddIndent=-1;// indent of the current dd block (-1 if there isn't any)
// can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
// used in lists to determine if they interrupt a paragraph
this.parentType='root';this.level=0;// renderer
this.result='';// Create caches
// Generate markers.
s=this.src;indent_found=false;for(start=pos=indent=offset=0,len=s.length;pos<len;pos++){ch=s.charCodeAt(pos);if(!indent_found){if(isSpace(ch)){indent++;if(ch===0x09){offset+=4-offset%4;}else{offset++;}continue;}else{indent_found=true;}}if(ch===0x0A||pos===len-1){if(ch!==0x0A){pos++;}this.bMarks.push(start);this.eMarks.push(pos);this.tShift.push(indent);this.sCount.push(offset);this.bsCount.push(0);indent_found=false;indent=0;offset=0;start=pos+1;}}// Push fake entry to simplify cache bounds checks
this.bMarks.push(s.length);this.eMarks.push(s.length);this.tShift.push(0);this.sCount.push(0);this.bsCount.push(0);this.lineMax=this.bMarks.length-1;// don't count last fake line
}// Push new token to "stream".
//
StateBlock.prototype.push=function(type,tag,nesting){var token=new Token(type,tag,nesting);token.block=true;if(nesting<0){this.level--;}token.level=this.level;if(nesting>0){this.level++;}this.tokens.push(token);return token;};StateBlock.prototype.isEmpty=function isEmpty(line){return this.bMarks[line]+this.tShift[line]>=this.eMarks[line];};StateBlock.prototype.skipEmptyLines=function skipEmptyLines(from){for(var max=this.lineMax;from<max;from++){if(this.bMarks[from]+this.tShift[from]<this.eMarks[from]){break;}}return from;};// Skip spaces from given position.
StateBlock.prototype.skipSpaces=function skipSpaces(pos){var ch;for(var max=this.src.length;pos<max;pos++){ch=this.src.charCodeAt(pos);if(!isSpace(ch)){break;}}return pos;};// Skip spaces from given position in reverse.
StateBlock.prototype.skipSpacesBack=function skipSpacesBack(pos,min){if(pos<=min){return pos;}while(pos>min){if(!isSpace(this.src.charCodeAt(--pos))){return pos+1;}}return pos;};// Skip char codes from given position
StateBlock.prototype.skipChars=function skipChars(pos,code){for(var max=this.src.length;pos<max;pos++){if(this.src.charCodeAt(pos)!==code){break;}}return pos;};// Skip char codes reverse from given position - 1
StateBlock.prototype.skipCharsBack=function skipCharsBack(pos,code,min){if(pos<=min){return pos;}while(pos>min){if(code!==this.src.charCodeAt(--pos)){return pos+1;}}return pos;};// cut lines range from source.
StateBlock.prototype.getLines=function getLines(begin,end,indent,keepLastLF){var i,lineIndent,ch,first,last,queue,lineStart,line=begin;if(begin>=end){return'';}queue=new Array(end-begin);for(i=0;line<end;line++,i++){lineIndent=0;lineStart=first=this.bMarks[line];if(line+1<end||keepLastLF){// No need for bounds check because we have fake entry on tail.
last=this.eMarks[line]+1;}else{last=this.eMarks[line];}while(first<last&&lineIndent<indent){ch=this.src.charCodeAt(first);if(isSpace(ch)){if(ch===0x09){lineIndent+=4-(lineIndent+this.bsCount[line])%4;}else{lineIndent++;}}else if(first-lineStart<this.tShift[line]){// patched tShift masked characters to look like spaces (blockquotes, list markers)
lineIndent++;}else{break;}first++;}if(lineIndent>indent){// partially expanding tabs in code blocks, e.g '\t\tfoobar'
// with indent=2 becomes '  \tfoobar'
queue[i]=new Array(lineIndent-indent+1).join(' ')+this.src.slice(first,last);}else{queue[i]=this.src.slice(first,last);}}return queue.join('');};// re-export Token class to use in block rules
StateBlock.prototype.Token=Token;module.exports=StateBlock;},{"../common/utils":4,"../token":51}],29:[function(require,module,exports){// GFM table, non-standard
'use strict';function getLine(state,line){var pos=state.bMarks[line]+state.blkIndent,max=state.eMarks[line];return state.src.substr(pos,max-pos);}function escapedSplit(str){var result=[],pos=0,max=str.length,ch,escapes=0,lastPos=0,backTicked=false,lastBackTick=0;ch=str.charCodeAt(pos);while(pos<max){if(ch===0x60/* ` */&&escapes%2===0){backTicked=!backTicked;lastBackTick=pos;}else if(ch===0x7c/* | */&&escapes%2===0&&!backTicked){result.push(str.substring(lastPos,pos));lastPos=pos+1;}else if(ch===0x5c/* \ */){escapes++;}else{escapes=0;}pos++;// If there was an un-closed backtick, go back to just after
// the last backtick, but as if it was a normal character
if(pos===max&&backTicked){backTicked=false;pos=lastBackTick+1;}ch=str.charCodeAt(pos);}result.push(str.substring(lastPos));return result;}module.exports=function table(state,startLine,endLine,silent){var ch,lineText,pos,i,nextLine,columns,columnCount,token,aligns,t,tableLines,tbodyLines;// should have at least three lines
if(startLine+2>endLine){return false;}nextLine=startLine+1;if(state.sCount[nextLine]<state.blkIndent){return false;}// first character of the second line should be '|' or '-'
pos=state.bMarks[nextLine]+state.tShift[nextLine];if(pos>=state.eMarks[nextLine]){return false;}ch=state.src.charCodeAt(pos);if(ch!==0x7C/* | */&&ch!==0x2D/* - */&&ch!==0x3A/* : */){return false;}lineText=getLine(state,startLine+1);if(!/^[-:| ]+$/.test(lineText)){return false;}columns=lineText.split('|');aligns=[];for(i=0;i<columns.length;i++){t=columns[i].trim();if(!t){// allow empty columns before and after table, but not in between columns;
// e.g. allow ` |---| `, disallow ` ---||--- `
if(i===0||i===columns.length-1){continue;}else{return false;}}if(!/^:?-+:?$/.test(t)){return false;}if(t.charCodeAt(t.length-1)===0x3A/* : */){aligns.push(t.charCodeAt(0)===0x3A/* : */?'center':'right');}else if(t.charCodeAt(0)===0x3A/* : */){aligns.push('left');}else{aligns.push('');}}lineText=getLine(state,startLine).trim();if(lineText.indexOf('|')===-1){return false;}columns=escapedSplit(lineText.replace(/^\||\|$/g,''));// header row will define an amount of columns in the entire table,
// and align row shouldn't be smaller than that (the rest of the rows can)
columnCount=columns.length;if(columnCount>aligns.length){return false;}if(silent){return true;}token=state.push('table_open','table',1);token.map=tableLines=[startLine,0];token=state.push('thead_open','thead',1);token.map=[startLine,startLine+1];token=state.push('tr_open','tr',1);token.map=[startLine,startLine+1];for(i=0;i<columns.length;i++){token=state.push('th_open','th',1);token.map=[startLine,startLine+1];if(aligns[i]){token.attrs=[['style','text-align:'+aligns[i]]];}token=state.push('inline','',0);token.content=columns[i].trim();token.map=[startLine,startLine+1];token.children=[];token=state.push('th_close','th',-1);}token=state.push('tr_close','tr',-1);token=state.push('thead_close','thead',-1);token=state.push('tbody_open','tbody',1);token.map=tbodyLines=[startLine+2,0];for(nextLine=startLine+2;nextLine<endLine;nextLine++){if(state.sCount[nextLine]<state.blkIndent){break;}lineText=getLine(state,nextLine);if(lineText.indexOf('|')===-1){break;}// keep spaces at beginning of line to indicate an empty first cell, but
// strip trailing whitespace
columns=escapedSplit(lineText.replace(/^\||\|\s*$/g,''));token=state.push('tr_open','tr',1);for(i=0;i<columnCount;i++){token=state.push('td_open','td',1);if(aligns[i]){token.attrs=[['style','text-align:'+aligns[i]]];}token=state.push('inline','',0);token.content=columns[i]?columns[i].trim():'';token.children=[];token=state.push('td_close','td',-1);}token=state.push('tr_close','tr',-1);}token=state.push('tbody_close','tbody',-1);token=state.push('table_close','table',-1);tableLines[1]=tbodyLines[1]=nextLine;state.line=nextLine;return true;};},{}],30:[function(require,module,exports){'use strict';module.exports=function block(state){var token;if(state.inlineMode){token=new state.Token('inline','',0);token.content=state.src;token.map=[0,1];token.children=[];state.tokens.push(token);}else{state.md.block.parse(state.src,state.md,state.env,state.tokens);}};},{}],31:[function(require,module,exports){'use strict';module.exports=function inline(state){var tokens=state.tokens,tok,i,l;// Parse inlines
for(i=0,l=tokens.length;i<l;i++){tok=tokens[i];if(tok.type==='inline'){state.md.inline.parse(tok.content,state.md,state.env,tok.children);}}};},{}],32:[function(require,module,exports){// Replace link-like texts with link nodes.
//
// Currently restricted by `md.validateLink()` to http/https/ftp
//
'use strict';var arrayReplaceAt=require('../common/utils').arrayReplaceAt;function isLinkOpen(str){return /^<a[>\s]/i.test(str);}function isLinkClose(str){return /^<\/a\s*>/i.test(str);}module.exports=function linkify(state){var i,j,l,tokens,token,currentToken,nodes,ln,text,pos,lastPos,level,htmlLinkLevel,url,fullUrl,urlText,blockTokens=state.tokens,links;if(!state.md.options.linkify){return;}for(j=0,l=blockTokens.length;j<l;j++){if(blockTokens[j].type!=='inline'||!state.md.linkify.pretest(blockTokens[j].content)){continue;}tokens=blockTokens[j].children;htmlLinkLevel=0;// We scan from the end, to keep position when new tags added.
// Use reversed logic in links start/end match
for(i=tokens.length-1;i>=0;i--){currentToken=tokens[i];// Skip content of markdown links
if(currentToken.type==='link_close'){i--;while(tokens[i].level!==currentToken.level&&tokens[i].type!=='link_open'){i--;}continue;}// Skip content of html tag links
if(currentToken.type==='html_inline'){if(isLinkOpen(currentToken.content)&&htmlLinkLevel>0){htmlLinkLevel--;}if(isLinkClose(currentToken.content)){htmlLinkLevel++;}}if(htmlLinkLevel>0){continue;}if(currentToken.type==='text'&&state.md.linkify.test(currentToken.content)){text=currentToken.content;links=state.md.linkify.match(text);// Now split string to nodes
nodes=[];level=currentToken.level;lastPos=0;for(ln=0;ln<links.length;ln++){url=links[ln].url;fullUrl=state.md.normalizeLink(url);if(!state.md.validateLink(fullUrl)){continue;}urlText=links[ln].text;// Linkifier might send raw hostnames like "example.com", where url
// starts with domain name. So we prepend http:// in those cases,
// and remove it afterwards.
//
if(!links[ln].schema){urlText=state.md.normalizeLinkText('http://'+urlText).replace(/^http:\/\//,'');}else if(links[ln].schema==='mailto:'&&!/^mailto:/i.test(urlText)){urlText=state.md.normalizeLinkText('mailto:'+urlText).replace(/^mailto:/,'');}else{urlText=state.md.normalizeLinkText(urlText);}pos=links[ln].index;if(pos>lastPos){token=new state.Token('text','',0);token.content=text.slice(lastPos,pos);token.level=level;nodes.push(token);}token=new state.Token('link_open','a',1);token.attrs=[['href',fullUrl]];token.level=level++;token.markup='linkify';token.info='auto';nodes.push(token);token=new state.Token('text','',0);token.content=urlText;token.level=level;nodes.push(token);token=new state.Token('link_close','a',-1);token.level=--level;token.markup='linkify';token.info='auto';nodes.push(token);lastPos=links[ln].lastIndex;}if(lastPos<text.length){token=new state.Token('text','',0);token.content=text.slice(lastPos);token.level=level;nodes.push(token);}// replace current node
blockTokens[j].children=tokens=arrayReplaceAt(tokens,i,nodes);}}}};},{"../common/utils":4}],33:[function(require,module,exports){// Normalize input string
'use strict';var NEWLINES_RE=/\r[\n\u0085]?|[\u2424\u2028\u0085]/g;var NULL_RE=/\u0000/g;module.exports=function inline(state){var str;// Normalize newlines
str=state.src.replace(NEWLINES_RE,'\n');// Replace NULL characters
str=str.replace(NULL_RE,"�");state.src=str;};},{}],34:[function(require,module,exports){// Simple typographyc replacements
//
// (c) (C) → ©
// (tm) (TM) → ™
// (r) (R) → ®
// +- → ±
// (p) (P) -> §
// ... → … (also ?.... → ?.., !.... → !..)
// ???????? → ???, !!!!! → !!!, `,,` → `,`
// -- → &ndash;, --- → &mdash;
//
'use strict';// TODO:
// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
// - miltiplication 2 x 4 -> 2 × 4
var RARE_RE=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/;// Workaround for phantomjs - need regex without /g flag,
// or root check will fail every second time
var SCOPED_ABBR_TEST_RE=/\((c|tm|r|p)\)/i;var SCOPED_ABBR_RE=/\((c|tm|r|p)\)/ig;var SCOPED_ABBR={c:'©',r:'®',p:'§',tm:'™'};function replaceFn(match,name){return SCOPED_ABBR[name.toLowerCase()];}function replace_scoped(inlineTokens){var i,token,inside_autolink=0;for(i=inlineTokens.length-1;i>=0;i--){token=inlineTokens[i];if(token.type==='text'&&!inside_autolink){token.content=token.content.replace(SCOPED_ABBR_RE,replaceFn);}if(token.type==='link_open'&&token.info==='auto'){inside_autolink--;}if(token.type==='link_close'&&token.info==='auto'){inside_autolink++;}}}function replace_rare(inlineTokens){var i,token,inside_autolink=0;for(i=inlineTokens.length-1;i>=0;i--){token=inlineTokens[i];if(token.type==='text'&&!inside_autolink){if(RARE_RE.test(token.content)){token.content=token.content.replace(/\+-/g,'±')// .., ..., ....... -> …
// but ?..... & !..... -> ?.. & !..
.replace(/\.{2,}/g,'…').replace(/([?!])…/g,'$1..').replace(/([?!]){4,}/g,'$1$1$1').replace(/,{2,}/g,',')// em-dash
.replace(/(^|[^-])---([^-]|$)/mg,"$1—$2")// en-dash
.replace(/(^|\s)--(\s|$)/mg,"$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/mg,"$1–$2");}}if(token.type==='link_open'&&token.info==='auto'){inside_autolink--;}if(token.type==='link_close'&&token.info==='auto'){inside_autolink++;}}}module.exports=function replace(state){var blkIdx;if(!state.md.options.typographer){return;}for(blkIdx=state.tokens.length-1;blkIdx>=0;blkIdx--){if(state.tokens[blkIdx].type!=='inline'){continue;}if(SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)){replace_scoped(state.tokens[blkIdx].children);}if(RARE_RE.test(state.tokens[blkIdx].content)){replace_rare(state.tokens[blkIdx].children);}}};},{}],35:[function(require,module,exports){// Convert straight quotation marks to typographic ones
//
'use strict';var isWhiteSpace=require('../common/utils').isWhiteSpace;var isPunctChar=require('../common/utils').isPunctChar;var isMdAsciiPunct=require('../common/utils').isMdAsciiPunct;var QUOTE_TEST_RE=/['"]/;var QUOTE_RE=/['"]/g;var APOSTROPHE="’";/* ’ */function replaceAt(str,index,ch){return str.substr(0,index)+ch+str.substr(index+1);}function process_inlines(tokens,state){var i,token,text,t,pos,max,thisLevel,item,lastChar,nextChar,isLastPunctChar,isNextPunctChar,isLastWhiteSpace,isNextWhiteSpace,canOpen,canClose,j,isSingle,stack,openQuote,closeQuote;stack=[];for(i=0;i<tokens.length;i++){token=tokens[i];thisLevel=tokens[i].level;for(j=stack.length-1;j>=0;j--){if(stack[j].level<=thisLevel){break;}}stack.length=j+1;if(token.type!=='text'){continue;}text=token.content;pos=0;max=text.length;/*eslint no-labels:0,block-scoped-var:0*/OUTER:while(pos<max){QUOTE_RE.lastIndex=pos;t=QUOTE_RE.exec(text);if(!t){break;}canOpen=canClose=true;pos=t.index+1;isSingle=t[0]==="'";// Find previous character,
// default to space if it's the beginning of the line
//
lastChar=0x20;if(t.index-1>=0){lastChar=text.charCodeAt(t.index-1);}else{for(j=i-1;j>=0;j--){if(tokens[j].type!=='text'){continue;}lastChar=tokens[j].content.charCodeAt(tokens[j].content.length-1);break;}}// Find next character,
// default to space if it's the end of the line
//
nextChar=0x20;if(pos<max){nextChar=text.charCodeAt(pos);}else{for(j=i+1;j<tokens.length;j++){if(tokens[j].type!=='text'){continue;}nextChar=tokens[j].content.charCodeAt(0);break;}}isLastPunctChar=isMdAsciiPunct(lastChar)||isPunctChar(String.fromCharCode(lastChar));isNextPunctChar=isMdAsciiPunct(nextChar)||isPunctChar(String.fromCharCode(nextChar));isLastWhiteSpace=isWhiteSpace(lastChar);isNextWhiteSpace=isWhiteSpace(nextChar);if(isNextWhiteSpace){canOpen=false;}else if(isNextPunctChar){if(!(isLastWhiteSpace||isLastPunctChar)){canOpen=false;}}if(isLastWhiteSpace){canClose=false;}else if(isLastPunctChar){if(!(isNextWhiteSpace||isNextPunctChar)){canClose=false;}}if(nextChar===0x22/* " */&&t[0]==='"'){if(lastChar>=0x30/* 0 */&&lastChar<=0x39/* 9 */){// special case: 1"" - count first quote as an inch
canClose=canOpen=false;}}if(canOpen&&canClose){// treat this as the middle of the word
canOpen=false;canClose=isNextPunctChar;}if(!canOpen&&!canClose){// middle of word
if(isSingle){token.content=replaceAt(token.content,t.index,APOSTROPHE);}continue;}if(canClose){// this could be a closing quote, rewind the stack to get a match
for(j=stack.length-1;j>=0;j--){item=stack[j];if(stack[j].level<thisLevel){break;}if(item.single===isSingle&&stack[j].level===thisLevel){item=stack[j];if(isSingle){openQuote=state.md.options.quotes[2];closeQuote=state.md.options.quotes[3];}else{openQuote=state.md.options.quotes[0];closeQuote=state.md.options.quotes[1];}// replace token.content *before* tokens[item.token].content,
// because, if they are pointing at the same token, replaceAt
// could mess up indices when quote length != 1
token.content=replaceAt(token.content,t.index,closeQuote);tokens[item.token].content=replaceAt(tokens[item.token].content,item.pos,openQuote);pos+=closeQuote.length-1;if(item.token===i){pos+=openQuote.length-1;}text=token.content;max=text.length;stack.length=j;continue OUTER;}}}if(canOpen){stack.push({token:i,pos:t.index,single:isSingle,level:thisLevel});}else if(canClose&&isSingle){token.content=replaceAt(token.content,t.index,APOSTROPHE);}}}}module.exports=function smartquotes(state){/*eslint max-depth:0*/var blkIdx;if(!state.md.options.typographer){return;}for(blkIdx=state.tokens.length-1;blkIdx>=0;blkIdx--){if(state.tokens[blkIdx].type!=='inline'||!QUOTE_TEST_RE.test(state.tokens[blkIdx].content)){continue;}process_inlines(state.tokens[blkIdx].children,state);}};},{"../common/utils":4}],36:[function(require,module,exports){// Core state object
//
'use strict';var Token=require('../token');function StateCore(src,md,env){this.src=src;this.env=env;this.tokens=[];this.inlineMode=false;this.md=md;// link to parser instance
}// re-export Token class to use in core rules
StateCore.prototype.Token=Token;module.exports=StateCore;},{"../token":51}],37:[function(require,module,exports){// Process autolinks '<protocol:...>'
'use strict';/*eslint max-len:0*/var EMAIL_RE=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;var AUTOLINK_RE=/^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;module.exports=function autolink(state,silent){var tail,linkMatch,emailMatch,url,fullUrl,token,pos=state.pos;if(state.src.charCodeAt(pos)!==0x3C/* < */){return false;}tail=state.src.slice(pos);if(tail.indexOf('>')<0){return false;}if(AUTOLINK_RE.test(tail)){linkMatch=tail.match(AUTOLINK_RE);url=linkMatch[0].slice(1,-1);fullUrl=state.md.normalizeLink(url);if(!state.md.validateLink(fullUrl)){return false;}if(!silent){token=state.push('link_open','a',1);token.attrs=[['href',fullUrl]];token.markup='autolink';token.info='auto';token=state.push('text','',0);token.content=state.md.normalizeLinkText(url);token=state.push('link_close','a',-1);token.markup='autolink';token.info='auto';}state.pos+=linkMatch[0].length;return true;}if(EMAIL_RE.test(tail)){emailMatch=tail.match(EMAIL_RE);url=emailMatch[0].slice(1,-1);fullUrl=state.md.normalizeLink('mailto:'+url);if(!state.md.validateLink(fullUrl)){return false;}if(!silent){token=state.push('link_open','a',1);token.attrs=[['href',fullUrl]];token.markup='autolink';token.info='auto';token=state.push('text','',0);token.content=state.md.normalizeLinkText(url);token=state.push('link_close','a',-1);token.markup='autolink';token.info='auto';}state.pos+=emailMatch[0].length;return true;}return false;};},{}],38:[function(require,module,exports){// Parse backticks
'use strict';module.exports=function backtick(state,silent){var start,max,marker,matchStart,matchEnd,token,pos=state.pos,ch=state.src.charCodeAt(pos);if(ch!==0x60/* ` */){return false;}start=pos;pos++;max=state.posMax;while(pos<max&&state.src.charCodeAt(pos)===0x60/* ` */){pos++;}marker=state.src.slice(start,pos);matchStart=matchEnd=pos;while((matchStart=state.src.indexOf('`',matchEnd))!==-1){matchEnd=matchStart+1;while(matchEnd<max&&state.src.charCodeAt(matchEnd)===0x60/* ` */){matchEnd++;}if(matchEnd-matchStart===marker.length){if(!silent){token=state.push('code_inline','code',0);token.markup=marker;token.content=state.src.slice(pos,matchStart).replace(/[ \n]+/g,' ').trim();}state.pos=matchEnd;return true;}}if(!silent){state.pending+=marker;}state.pos+=marker.length;return true;};},{}],39:[function(require,module,exports){// For each opening emphasis-like marker find a matching closing one
//
'use strict';module.exports=function link_pairs(state){var i,j,lastDelim,currDelim,delimiters=state.delimiters,max=state.delimiters.length;for(i=0;i<max;i++){lastDelim=delimiters[i];if(!lastDelim.close){continue;}j=i-lastDelim.jump-1;while(j>=0){currDelim=delimiters[j];if(currDelim.open&&currDelim.marker===lastDelim.marker&&currDelim.end<0&&currDelim.level===lastDelim.level){// typeofs are for backward compatibility with plugins
var odd_match=(currDelim.close||lastDelim.open)&&typeof currDelim.length!=='undefined'&&typeof lastDelim.length!=='undefined'&&(currDelim.length+lastDelim.length)%3===0;if(!odd_match){lastDelim.jump=i-j;lastDelim.open=false;currDelim.end=i;currDelim.jump=0;break;}}j-=currDelim.jump+1;}}};},{}],40:[function(require,module,exports){// Process *this* and _that_
//
'use strict';// Insert each marker as a separate text token, and add it to delimiter list
//
module.exports.tokenize=function emphasis(state,silent){var i,scanned,token,start=state.pos,marker=state.src.charCodeAt(start);if(silent){return false;}if(marker!==0x5F/* _ */&&marker!==0x2A/* * */){return false;}scanned=state.scanDelims(state.pos,marker===0x2A);for(i=0;i<scanned.length;i++){token=state.push('text','',0);token.content=String.fromCharCode(marker);state.delimiters.push({// Char code of the starting marker (number).
//
marker:marker,// Total length of these series of delimiters.
//
length:scanned.length,// An amount of characters before this one that's equivalent to
// current one. In plain English: if this delimiter does not open
// an emphasis, neither do previous `jump` characters.
//
// Used to skip sequences like "*****" in one step, for 1st asterisk
// value will be 0, for 2nd it's 1 and so on.
//
jump:i,// A position of the token this delimiter corresponds to.
//
token:state.tokens.length-1,// Token level.
//
level:state.level,// If this delimiter is matched as a valid opener, `end` will be
// equal to its position, otherwise it's `-1`.
//
end:-1,// Boolean flags that determine if this delimiter could open or close
// an emphasis.
//
open:scanned.can_open,close:scanned.can_close});}state.pos+=scanned.length;return true;};// Walk through delimiter list and replace text tokens with tags
//
module.exports.postProcess=function emphasis(state){var i,startDelim,endDelim,token,ch,isStrong,delimiters=state.delimiters,max=state.delimiters.length;for(i=0;i<max;i++){startDelim=delimiters[i];if(startDelim.marker!==0x5F/* _ */&&startDelim.marker!==0x2A/* * */){continue;}// Process only opening markers
if(startDelim.end===-1){continue;}endDelim=delimiters[startDelim.end];// If the next delimiter has the same marker and is adjacent to this one,
// merge those into one strong delimiter.
//
// `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
//
isStrong=i+1<max&&delimiters[i+1].end===startDelim.end-1&&delimiters[i+1].token===startDelim.token+1&&delimiters[startDelim.end-1].token===endDelim.token-1&&delimiters[i+1].marker===startDelim.marker;ch=String.fromCharCode(startDelim.marker);token=state.tokens[startDelim.token];token.type=isStrong?'strong_open':'em_open';token.tag=isStrong?'strong':'em';token.nesting=1;token.markup=isStrong?ch+ch:ch;token.content='';token=state.tokens[endDelim.token];token.type=isStrong?'strong_close':'em_close';token.tag=isStrong?'strong':'em';token.nesting=-1;token.markup=isStrong?ch+ch:ch;token.content='';if(isStrong){state.tokens[delimiters[i+1].token].content='';state.tokens[delimiters[startDelim.end-1].token].content='';i++;}}};},{}],41:[function(require,module,exports){// Process html entity - &#123;, &#xAF;, &quot;, ...
'use strict';var entities=require('../common/entities');var has=require('../common/utils').has;var isValidEntityCode=require('../common/utils').isValidEntityCode;var fromCodePoint=require('../common/utils').fromCodePoint;var DIGITAL_RE=/^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;var NAMED_RE=/^&([a-z][a-z0-9]{1,31});/i;module.exports=function entity(state,silent){var ch,code,match,pos=state.pos,max=state.posMax;if(state.src.charCodeAt(pos)!==0x26/* & */){return false;}if(pos+1<max){ch=state.src.charCodeAt(pos+1);if(ch===0x23/* # */){match=state.src.slice(pos).match(DIGITAL_RE);if(match){if(!silent){code=match[1][0].toLowerCase()==='x'?parseInt(match[1].slice(1),16):parseInt(match[1],10);state.pending+=isValidEntityCode(code)?fromCodePoint(code):fromCodePoint(0xFFFD);}state.pos+=match[0].length;return true;}}else{match=state.src.slice(pos).match(NAMED_RE);if(match){if(has(entities,match[1])){if(!silent){state.pending+=entities[match[1]];}state.pos+=match[0].length;return true;}}}}if(!silent){state.pending+='&';}state.pos++;return true;};},{"../common/entities":1,"../common/utils":4}],42:[function(require,module,exports){// Proceess escaped chars and hardbreaks
'use strict';var isSpace=require('../common/utils').isSpace;var ESCAPED=[];for(var i=0;i<256;i++){ESCAPED.push(0);}'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'.split('').forEach(function(ch){ESCAPED[ch.charCodeAt(0)]=1;});module.exports=function escape(state,silent){var ch,pos=state.pos,max=state.posMax;if(state.src.charCodeAt(pos)!==0x5C/* \ */){return false;}pos++;if(pos<max){ch=state.src.charCodeAt(pos);if(ch<256&&ESCAPED[ch]!==0){if(!silent){state.pending+=state.src[pos];}state.pos+=2;return true;}if(ch===0x0A){if(!silent){state.push('hardbreak','br',0);}pos++;// skip leading whitespaces from next line
while(pos<max){ch=state.src.charCodeAt(pos);if(!isSpace(ch)){break;}pos++;}state.pos=pos;return true;}}if(!silent){state.pending+='\\';}state.pos++;return true;};},{"../common/utils":4}],43:[function(require,module,exports){// Process html tags
'use strict';var HTML_TAG_RE=require('../common/html_re').HTML_TAG_RE;function isLetter(ch){/*eslint no-bitwise:0*/var lc=ch|0x20;// to lower case
return lc>=0x61/* a */&&lc<=0x7a/* z */;}module.exports=function html_inline(state,silent){var ch,match,max,token,pos=state.pos;if(!state.md.options.html){return false;}// Check start
max=state.posMax;if(state.src.charCodeAt(pos)!==0x3C/* < */||pos+2>=max){return false;}// Quick fail on second char
ch=state.src.charCodeAt(pos+1);if(ch!==0x21/* ! */&&ch!==0x3F/* ? */&&ch!==0x2F/* / */&&!isLetter(ch)){return false;}match=state.src.slice(pos).match(HTML_TAG_RE);if(!match){return false;}if(!silent){token=state.push('html_inline','',0);token.content=state.src.slice(pos,pos+match[0].length);}state.pos+=match[0].length;return true;};},{"../common/html_re":3}],44:[function(require,module,exports){// Process ![image](<src> "title")
'use strict';var parseLinkLabel=require('../helpers/parse_link_label');var parseLinkDestination=require('../helpers/parse_link_destination');var parseLinkTitle=require('../helpers/parse_link_title');var normalizeReference=require('../common/utils').normalizeReference;var isSpace=require('../common/utils').isSpace;module.exports=function image(state,silent){var attrs,code,content,label,labelEnd,labelStart,pos,ref,res,title,token,tokens,start,href='',oldPos=state.pos,max=state.posMax;if(state.src.charCodeAt(state.pos)!==0x21/* ! */){return false;}if(state.src.charCodeAt(state.pos+1)!==0x5B/* [ */){return false;}labelStart=state.pos+2;labelEnd=parseLinkLabel(state,state.pos+1,false);// parser failed to find ']', so it's not a valid link
if(labelEnd<0){return false;}pos=labelEnd+1;if(pos<max&&state.src.charCodeAt(pos)===0x28/* ( */){//
// Inline link
//
// [link](  <href>  "title"  )
//        ^^ skipping these spaces
pos++;for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(!isSpace(code)&&code!==0x0A){break;}}if(pos>=max){return false;}// [link](  <href>  "title"  )
//          ^^^^^^ parsing link destination
start=pos;res=parseLinkDestination(state.src,pos,state.posMax);if(res.ok){href=state.md.normalizeLink(res.str);if(state.md.validateLink(href)){pos=res.pos;}else{href='';}}// [link](  <href>  "title"  )
//                ^^ skipping these spaces
start=pos;for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(!isSpace(code)&&code!==0x0A){break;}}// [link](  <href>  "title"  )
//                  ^^^^^^^ parsing link title
res=parseLinkTitle(state.src,pos,state.posMax);if(pos<max&&start!==pos&&res.ok){title=res.str;pos=res.pos;// [link](  <href>  "title"  )
//                         ^^ skipping these spaces
for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(!isSpace(code)&&code!==0x0A){break;}}}else{title='';}if(pos>=max||state.src.charCodeAt(pos)!==0x29/* ) */){state.pos=oldPos;return false;}pos++;}else{//
// Link reference
//
if(typeof state.env.references==='undefined'){return false;}if(pos<max&&state.src.charCodeAt(pos)===0x5B/* [ */){start=pos+1;pos=parseLinkLabel(state,pos);if(pos>=0){label=state.src.slice(start,pos++);}else{pos=labelEnd+1;}}else{pos=labelEnd+1;}// covers label === '' and label === undefined
// (collapsed reference link and shortcut reference link respectively)
if(!label){label=state.src.slice(labelStart,labelEnd);}ref=state.env.references[normalizeReference(label)];if(!ref){state.pos=oldPos;return false;}href=ref.href;title=ref.title;}//
// We found the end of the link, and know for a fact it's a valid link;
// so all that's left to do is to call tokenizer.
//
if(!silent){content=state.src.slice(labelStart,labelEnd);state.md.inline.parse(content,state.md,state.env,tokens=[]);token=state.push('image','img',0);token.attrs=attrs=[['src',href],['alt','']];token.children=tokens;token.content=content;if(title){attrs.push(['title',title]);}}state.pos=pos;state.posMax=max;return true;};},{"../common/utils":4,"../helpers/parse_link_destination":6,"../helpers/parse_link_label":7,"../helpers/parse_link_title":8}],45:[function(require,module,exports){// Process [link](<to> "stuff")
'use strict';var parseLinkLabel=require('../helpers/parse_link_label');var parseLinkDestination=require('../helpers/parse_link_destination');var parseLinkTitle=require('../helpers/parse_link_title');var normalizeReference=require('../common/utils').normalizeReference;var isSpace=require('../common/utils').isSpace;module.exports=function link(state,silent){var attrs,code,label,labelEnd,labelStart,pos,res,ref,title,token,href='',oldPos=state.pos,max=state.posMax,start=state.pos;if(state.src.charCodeAt(state.pos)!==0x5B/* [ */){return false;}labelStart=state.pos+1;labelEnd=parseLinkLabel(state,state.pos,true);// parser failed to find ']', so it's not a valid link
if(labelEnd<0){return false;}pos=labelEnd+1;if(pos<max&&state.src.charCodeAt(pos)===0x28/* ( */){//
// Inline link
//
// [link](  <href>  "title"  )
//        ^^ skipping these spaces
pos++;for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(!isSpace(code)&&code!==0x0A){break;}}if(pos>=max){return false;}// [link](  <href>  "title"  )
//          ^^^^^^ parsing link destination
start=pos;res=parseLinkDestination(state.src,pos,state.posMax);if(res.ok){href=state.md.normalizeLink(res.str);if(state.md.validateLink(href)){pos=res.pos;}else{href='';}}// [link](  <href>  "title"  )
//                ^^ skipping these spaces
start=pos;for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(!isSpace(code)&&code!==0x0A){break;}}// [link](  <href>  "title"  )
//                  ^^^^^^^ parsing link title
res=parseLinkTitle(state.src,pos,state.posMax);if(pos<max&&start!==pos&&res.ok){title=res.str;pos=res.pos;// [link](  <href>  "title"  )
//                         ^^ skipping these spaces
for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(!isSpace(code)&&code!==0x0A){break;}}}else{title='';}if(pos>=max||state.src.charCodeAt(pos)!==0x29/* ) */){state.pos=oldPos;return false;}pos++;}else{//
// Link reference
//
if(typeof state.env.references==='undefined'){return false;}if(pos<max&&state.src.charCodeAt(pos)===0x5B/* [ */){start=pos+1;pos=parseLinkLabel(state,pos);if(pos>=0){label=state.src.slice(start,pos++);}else{pos=labelEnd+1;}}else{pos=labelEnd+1;}// covers label === '' and label === undefined
// (collapsed reference link and shortcut reference link respectively)
if(!label){label=state.src.slice(labelStart,labelEnd);}ref=state.env.references[normalizeReference(label)];if(!ref){state.pos=oldPos;return false;}href=ref.href;title=ref.title;}//
// We found the end of the link, and know for a fact it's a valid link;
// so all that's left to do is to call tokenizer.
//
if(!silent){state.pos=labelStart;state.posMax=labelEnd;token=state.push('link_open','a',1);token.attrs=attrs=[['href',href]];if(title){attrs.push(['title',title]);}state.md.inline.tokenize(state);token=state.push('link_close','a',-1);}state.pos=pos;state.posMax=max;return true;};},{"../common/utils":4,"../helpers/parse_link_destination":6,"../helpers/parse_link_label":7,"../helpers/parse_link_title":8}],46:[function(require,module,exports){// Proceess '\n'
'use strict';module.exports=function newline(state,silent){var pmax,max,pos=state.pos;if(state.src.charCodeAt(pos)!==0x0A/* \n */){return false;}pmax=state.pending.length-1;max=state.posMax;// '  \n' -> hardbreak
// Lookup in pending chars is bad practice! Don't copy to other rules!
// Pending string is stored in concat mode, indexed lookups will cause
// convertion to flat mode.
if(!silent){if(pmax>=0&&state.pending.charCodeAt(pmax)===0x20){if(pmax>=1&&state.pending.charCodeAt(pmax-1)===0x20){state.pending=state.pending.replace(/ +$/,'');state.push('hardbreak','br',0);}else{state.pending=state.pending.slice(0,-1);state.push('softbreak','br',0);}}else{state.push('softbreak','br',0);}}pos++;// skip heading spaces for next line
while(pos<max&&state.src.charCodeAt(pos)===0x20){pos++;}state.pos=pos;return true;};},{}],47:[function(require,module,exports){// Inline parser state
'use strict';var Token=require('../token');var isWhiteSpace=require('../common/utils').isWhiteSpace;var isPunctChar=require('../common/utils').isPunctChar;var isMdAsciiPunct=require('../common/utils').isMdAsciiPunct;function StateInline(src,md,env,outTokens){this.src=src;this.env=env;this.md=md;this.tokens=outTokens;this.pos=0;this.posMax=this.src.length;this.level=0;this.pending='';this.pendingLevel=0;this.cache={};// Stores { start: end } pairs. Useful for backtrack
// optimization of pairs parse (emphasis, strikes).
this.delimiters=[];// Emphasis-like delimiters
}// Flush pending text
//
StateInline.prototype.pushPending=function(){var token=new Token('text','',0);token.content=this.pending;token.level=this.pendingLevel;this.tokens.push(token);this.pending='';return token;};// Push new token to "stream".
// If pending text exists - flush it as text token
//
StateInline.prototype.push=function(type,tag,nesting){if(this.pending){this.pushPending();}var token=new Token(type,tag,nesting);if(nesting<0){this.level--;}token.level=this.level;if(nesting>0){this.level++;}this.pendingLevel=this.level;this.tokens.push(token);return token;};// Scan a sequence of emphasis-like markers, and determine whether
// it can start an emphasis sequence or end an emphasis sequence.
//
//  - start - position to scan from (it should point at a valid marker);
//  - canSplitWord - determine if these markers can be found inside a word
//
StateInline.prototype.scanDelims=function(start,canSplitWord){var pos=start,lastChar,nextChar,count,can_open,can_close,isLastWhiteSpace,isLastPunctChar,isNextWhiteSpace,isNextPunctChar,left_flanking=true,right_flanking=true,max=this.posMax,marker=this.src.charCodeAt(start);// treat beginning of the line as a whitespace
lastChar=start>0?this.src.charCodeAt(start-1):0x20;while(pos<max&&this.src.charCodeAt(pos)===marker){pos++;}count=pos-start;// treat end of the line as a whitespace
nextChar=pos<max?this.src.charCodeAt(pos):0x20;isLastPunctChar=isMdAsciiPunct(lastChar)||isPunctChar(String.fromCharCode(lastChar));isNextPunctChar=isMdAsciiPunct(nextChar)||isPunctChar(String.fromCharCode(nextChar));isLastWhiteSpace=isWhiteSpace(lastChar);isNextWhiteSpace=isWhiteSpace(nextChar);if(isNextWhiteSpace){left_flanking=false;}else if(isNextPunctChar){if(!(isLastWhiteSpace||isLastPunctChar)){left_flanking=false;}}if(isLastWhiteSpace){right_flanking=false;}else if(isLastPunctChar){if(!(isNextWhiteSpace||isNextPunctChar)){right_flanking=false;}}if(!canSplitWord){can_open=left_flanking&&(!right_flanking||isLastPunctChar);can_close=right_flanking&&(!left_flanking||isNextPunctChar);}else{can_open=left_flanking;can_close=right_flanking;}return{can_open:can_open,can_close:can_close,length:count};};// re-export Token class to use in block rules
StateInline.prototype.Token=Token;module.exports=StateInline;},{"../common/utils":4,"../token":51}],48:[function(require,module,exports){// ~~strike through~~
//
'use strict';// Insert each marker as a separate text token, and add it to delimiter list
//
module.exports.tokenize=function strikethrough(state,silent){var i,scanned,token,len,ch,start=state.pos,marker=state.src.charCodeAt(start);if(silent){return false;}if(marker!==0x7E/* ~ */){return false;}scanned=state.scanDelims(state.pos,true);len=scanned.length;ch=String.fromCharCode(marker);if(len<2){return false;}if(len%2){token=state.push('text','',0);token.content=ch;len--;}for(i=0;i<len;i+=2){token=state.push('text','',0);token.content=ch+ch;state.delimiters.push({marker:marker,jump:i,token:state.tokens.length-1,level:state.level,end:-1,open:scanned.can_open,close:scanned.can_close});}state.pos+=scanned.length;return true;};// Walk through delimiter list and replace text tokens with tags
//
module.exports.postProcess=function strikethrough(state){var i,j,startDelim,endDelim,token,loneMarkers=[],delimiters=state.delimiters,max=state.delimiters.length;for(i=0;i<max;i++){startDelim=delimiters[i];if(startDelim.marker!==0x7E/* ~ */){continue;}if(startDelim.end===-1){continue;}endDelim=delimiters[startDelim.end];token=state.tokens[startDelim.token];token.type='s_open';token.tag='s';token.nesting=1;token.markup='~~';token.content='';token=state.tokens[endDelim.token];token.type='s_close';token.tag='s';token.nesting=-1;token.markup='~~';token.content='';if(state.tokens[endDelim.token-1].type==='text'&&state.tokens[endDelim.token-1].content==='~'){loneMarkers.push(endDelim.token-1);}}// If a marker sequence has an odd number of characters, it's splitted
// like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
// start of the sequence.
//
// So, we have to move all those markers after subsequent s_close tags.
//
while(loneMarkers.length){i=loneMarkers.pop();j=i+1;while(j<state.tokens.length&&state.tokens[j].type==='s_close'){j++;}j--;if(i!==j){token=state.tokens[j];state.tokens[j]=state.tokens[i];state.tokens[i]=token;}}};},{}],49:[function(require,module,exports){// Skip text characters for text token, place those to pending buffer
// and increment current pos
'use strict';// Rule to skip pure text
// '{}$%@~+=:' reserved for extentions
// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
// !!!! Don't confuse with "Markdown ASCII Punctuation" chars
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
function isTerminatorChar(ch){switch(ch){case 0x0A/* \n */:case 0x21/* ! */:case 0x23/* # */:case 0x24/* $ */:case 0x25/* % */:case 0x26/* & */:case 0x2A/* * */:case 0x2B/* + */:case 0x2D/* - */:case 0x3A/* : */:case 0x3C/* < */:case 0x3D/* = */:case 0x3E/* > */:case 0x40/* @ */:case 0x5B/* [ */:case 0x5C/* \ */:case 0x5D/* ] */:case 0x5E/* ^ */:case 0x5F/* _ */:case 0x60/* ` */:case 0x7B/* { */:case 0x7D/* } */:case 0x7E/* ~ */:return true;default:return false;}}module.exports=function text(state,silent){var pos=state.pos;while(pos<state.posMax&&!isTerminatorChar(state.src.charCodeAt(pos))){pos++;}if(pos===state.pos){return false;}if(!silent){state.pending+=state.src.slice(state.pos,pos);}state.pos=pos;return true;};// Alternative implementation, for memory.
//
// It costs 10% of performance, but allows extend terminators list, if place it
// to `ParcerInline` property. Probably, will switch to it sometime, such
// flexibility required.
/*
var TERMINATOR_RE = /[\n!#$%&*+\-:<=>@[\\\]^_`{}~]/;

module.exports = function text(state, silent) {
  var pos = state.pos,
      idx = state.src.slice(pos).search(TERMINATOR_RE);

  // first char is terminator -> empty text
  if (idx === 0) { return false; }

  // no terminator -> text till end of string
  if (idx < 0) {
    if (!silent) { state.pending += state.src.slice(pos); }
    state.pos = state.src.length;
    return true;
  }

  if (!silent) { state.pending += state.src.slice(pos, pos + idx); }

  state.pos += idx;

  return true;
};*/},{}],50:[function(require,module,exports){// Merge adjacent text nodes into one, and re-calculate all token levels
//
'use strict';module.exports=function text_collapse(state){var curr,last,level=0,tokens=state.tokens,max=state.tokens.length;for(curr=last=0;curr<max;curr++){// re-calculate levels
level+=tokens[curr].nesting;tokens[curr].level=level;if(tokens[curr].type==='text'&&curr+1<max&&tokens[curr+1].type==='text'){// collapse two adjacent text nodes
tokens[curr+1].content=tokens[curr].content+tokens[curr+1].content;}else{if(curr!==last){tokens[last]=tokens[curr];}last++;}}if(curr!==last){tokens.length=last;}};},{}],51:[function(require,module,exports){// Token class
'use strict';/**
 * class Token
 **//**
 * new Token(type, tag, nesting)
 *
 * Create new token and fill passed properties.
 **/function Token(type,tag,nesting){/**
   * Token#type -> String
   *
   * Type of the token (string, e.g. "paragraph_open")
   **/this.type=type;/**
   * Token#tag -> String
   *
   * html tag name, e.g. "p"
   **/this.tag=tag;/**
   * Token#attrs -> Array
   *
   * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
   **/this.attrs=null;/**
   * Token#map -> Array
   *
   * Source map info. Format: `[ line_begin, line_end ]`
   **/this.map=null;/**
   * Token#nesting -> Number
   *
   * Level change (number in {-1, 0, 1} set), where:
   *
   * -  `1` means the tag is opening
   * -  `0` means the tag is self-closing
   * - `-1` means the tag is closing
   **/this.nesting=nesting;/**
   * Token#level -> Number
   *
   * nesting level, the same as `state.level`
   **/this.level=0;/**
   * Token#children -> Array
   *
   * An array of child nodes (inline and img tokens)
   **/this.children=null;/**
   * Token#content -> String
   *
   * In a case of self-closing tag (code, html, fence, etc.),
   * it has contents of this tag.
   **/this.content='';/**
   * Token#markup -> String
   *
   * '*' or '_' for emphasis, fence string for fence, etc.
   **/this.markup='';/**
   * Token#info -> String
   *
   * fence infostring
   **/this.info='';/**
   * Token#meta -> Object
   *
   * A place for plugins to store an arbitrary data
   **/this.meta=null;/**
   * Token#block -> Boolean
   *
   * True for block-level tokens, false for inline tokens.
   * Used in renderer to calculate line breaks
   **/this.block=false;/**
   * Token#hidden -> Boolean
   *
   * If it's true, ignore this element when rendering. Used for tight lists
   * to hide paragraphs.
   **/this.hidden=false;}/**
 * Token.attrIndex(name) -> Number
 *
 * Search attribute index by name.
 **/Token.prototype.attrIndex=function attrIndex(name){var attrs,i,len;if(!this.attrs){return-1;}attrs=this.attrs;for(i=0,len=attrs.length;i<len;i++){if(attrs[i][0]===name){return i;}}return-1;};/**
 * Token.attrPush(attrData)
 *
 * Add `[ name, value ]` attribute to list. Init attrs if necessary
 **/Token.prototype.attrPush=function attrPush(attrData){if(this.attrs){this.attrs.push(attrData);}else{this.attrs=[attrData];}};/**
 * Token.attrSet(name, value)
 *
 * Set `name` attribute to `value`. Override old value if exists.
 **/Token.prototype.attrSet=function attrSet(name,value){var idx=this.attrIndex(name),attrData=[name,value];if(idx<0){this.attrPush(attrData);}else{this.attrs[idx]=attrData;}};/**
 * Token.attrGet(name)
 *
 * Get the value of attribute `name`, or null if it does not exist.
 **/Token.prototype.attrGet=function attrGet(name){var idx=this.attrIndex(name),value=null;if(idx>=0){value=this.attrs[idx][1];}return value;};/**
 * Token.attrJoin(name, value)
 *
 * Join value to existing attribute via space. Or create new attribute if not
 * exists. Useful to operate with token classes.
 **/Token.prototype.attrJoin=function attrJoin(name,value){var idx=this.attrIndex(name);if(idx<0){this.attrPush([name,value]);}else{this.attrs[idx][1]=this.attrs[idx][1]+' '+value;}};module.exports=Token;},{}],52:[function(require,module,exports){module.exports={"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\"","QUOT":"\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"};},{}],53:[function(require,module,exports){'use strict';////////////////////////////////////////////////////////////////////////////////
// Helpers
// Merge objects
//
function assign(obj/*from1, from2, from3, ...*/){var sources=Array.prototype.slice.call(arguments,1);sources.forEach(function(source){if(!source){return;}Object.keys(source).forEach(function(key){obj[key]=source[key];});});return obj;}function _class(obj){return Object.prototype.toString.call(obj);}function isString(obj){return _class(obj)==='[object String]';}function isObject(obj){return _class(obj)==='[object Object]';}function isRegExp(obj){return _class(obj)==='[object RegExp]';}function isFunction(obj){return _class(obj)==='[object Function]';}function escapeRE(str){return str.replace(/[.?*+^$[\]\\(){}|-]/g,'\\$&');}////////////////////////////////////////////////////////////////////////////////
var defaultOptions={fuzzyLink:true,fuzzyEmail:true,fuzzyIP:false};function isOptionsObj(obj){return Object.keys(obj||{}).reduce(function(acc,k){return acc||defaultOptions.hasOwnProperty(k);},false);}var defaultSchemas={'http:':{validate:function validate(text,pos,self){var tail=text.slice(pos);if(!self.re.http){// compile lazily, because "host"-containing variables can change on tlds update.
self.re.http=new RegExp('^\\/\\/'+self.re.src_auth+self.re.src_host_port_strict+self.re.src_path,'i');}if(self.re.http.test(tail)){return tail.match(self.re.http)[0].length;}return 0;}},'https:':'http:','ftp:':'http:','//':{validate:function validate(text,pos,self){var tail=text.slice(pos);if(!self.re.no_http){// compile lazily, because "host"-containing variables can change on tlds update.
self.re.no_http=new RegExp('^'+self.re.src_auth+// Don't allow single-level domains, because of false positives like '//test'
// with code comments
'(?:localhost|(?:(?:'+self.re.src_domain+')\\.)+'+self.re.src_domain_root+')'+self.re.src_port+self.re.src_host_terminator+self.re.src_path,'i');}if(self.re.no_http.test(tail)){// should not be `://` & `///`, that protects from errors in protocol name
if(pos>=3&&text[pos-3]===':'){return 0;}if(pos>=3&&text[pos-3]==='/'){return 0;}return tail.match(self.re.no_http)[0].length;}return 0;}},'mailto:':{validate:function validate(text,pos,self){var tail=text.slice(pos);if(!self.re.mailto){self.re.mailto=new RegExp('^'+self.re.src_email_name+'@'+self.re.src_host_strict,'i');}if(self.re.mailto.test(tail)){return tail.match(self.re.mailto)[0].length;}return 0;}}};/*eslint-disable max-len*/// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
var tlds_2ch_src_re='a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
var tlds_default='biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');/*eslint-enable max-len*/////////////////////////////////////////////////////////////////////////////////
function resetScanCache(self){self.__index__=-1;self.__text_cache__='';}function createValidator(re){return function(text,pos){var tail=text.slice(pos);if(re.test(tail)){return tail.match(re)[0].length;}return 0;};}function createNormalizer(){return function(match,self){self.normalize(match);};}// Schemas compiler. Build regexps.
//
function compile(self){// Load & clone RE patterns.
var re=self.re=require('./lib/re')(self.__opts__);// Define dynamic patterns
var tlds=self.__tlds__.slice();self.onCompile();if(!self.__tlds_replaced__){tlds.push(tlds_2ch_src_re);}tlds.push(re.src_xn);re.src_tlds=tlds.join('|');function untpl(tpl){return tpl.replace('%TLDS%',re.src_tlds);}re.email_fuzzy=RegExp(untpl(re.tpl_email_fuzzy),'i');re.link_fuzzy=RegExp(untpl(re.tpl_link_fuzzy),'i');re.link_no_ip_fuzzy=RegExp(untpl(re.tpl_link_no_ip_fuzzy),'i');re.host_fuzzy_test=RegExp(untpl(re.tpl_host_fuzzy_test),'i');//
// Compile each schema
//
var aliases=[];self.__compiled__={};// Reset compiled data
function schemaError(name,val){throw new Error('(LinkifyIt) Invalid schema "'+name+'": '+val);}Object.keys(self.__schemas__).forEach(function(name){var val=self.__schemas__[name];// skip disabled methods
if(val===null){return;}var compiled={validate:null,link:null};self.__compiled__[name]=compiled;if(isObject(val)){if(isRegExp(val.validate)){compiled.validate=createValidator(val.validate);}else if(isFunction(val.validate)){compiled.validate=val.validate;}else{schemaError(name,val);}if(isFunction(val.normalize)){compiled.normalize=val.normalize;}else if(!val.normalize){compiled.normalize=createNormalizer();}else{schemaError(name,val);}return;}if(isString(val)){aliases.push(name);return;}schemaError(name,val);});//
// Compile postponed aliases
//
aliases.forEach(function(alias){if(!self.__compiled__[self.__schemas__[alias]]){// Silently fail on missed schemas to avoid errons on disable.
// schemaError(alias, self.__schemas__[alias]);
return;}self.__compiled__[alias].validate=self.__compiled__[self.__schemas__[alias]].validate;self.__compiled__[alias].normalize=self.__compiled__[self.__schemas__[alias]].normalize;});//
// Fake record for guessed links
//
self.__compiled__['']={validate:null,normalize:createNormalizer()};//
// Build schema condition
//
var slist=Object.keys(self.__compiled__).filter(function(name){// Filter disabled & fake schemas
return name.length>0&&self.__compiled__[name];}).map(escapeRE).join('|');// (?!_) cause 1.5x slowdown
self.re.schema_test=RegExp('(^|(?!_)(?:[><]|'+re.src_ZPCc+'))('+slist+')','i');self.re.schema_search=RegExp('(^|(?!_)(?:[><]|'+re.src_ZPCc+'))('+slist+')','ig');self.re.pretest=RegExp('('+self.re.schema_test.source+')|'+'('+self.re.host_fuzzy_test.source+')|'+'@','i');//
// Cleanup
//
resetScanCache(self);}/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/function Match(self,shift){var start=self.__index__,end=self.__last_index__,text=self.__text_cache__.slice(start,end);/**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/this.schema=self.__schema__.toLowerCase();/**
   * Match#index -> Number
   *
   * First position of matched string.
   **/this.index=start+shift;/**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/this.lastIndex=end+shift;/**
   * Match#raw -> String
   *
   * Matched string.
   **/this.raw=text;/**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/this.text=text;/**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/this.url=text;}function createMatch(self,shift){var match=new Match(self,shift);self.__compiled__[match.schema].normalize(match,self);return match;}/**
 * class LinkifyIt
 **//**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/function LinkifyIt(schemas,options){if(!(this instanceof LinkifyIt)){return new LinkifyIt(schemas,options);}if(!options){if(isOptionsObj(schemas)){options=schemas;schemas={};}}this.__opts__=assign({},defaultOptions,options);// Cache last tested result. Used to skip repeating steps on next `match` call.
this.__index__=-1;this.__last_index__=-1;// Next scan position
this.__schema__='';this.__text_cache__='';this.__schemas__=assign({},defaultSchemas,schemas);this.__compiled__={};this.__tlds__=tlds_default;this.__tlds_replaced__=false;this.re={};compile(this);}/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/LinkifyIt.prototype.add=function add(schema,definition){this.__schemas__[schema]=definition;compile(this);return this;};/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/LinkifyIt.prototype.set=function set(options){this.__opts__=assign(this.__opts__,options);return this;};/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/LinkifyIt.prototype.test=function test(text){// Reset scan cache
this.__text_cache__=text;this.__index__=-1;if(!text.length){return false;}var m,ml,me,len,shift,next,re,tld_pos,at_pos;// try to scan for link with schema - that's the most simple rule
if(this.re.schema_test.test(text)){re=this.re.schema_search;re.lastIndex=0;while((m=re.exec(text))!==null){len=this.testSchemaAt(text,m[2],re.lastIndex);if(len){this.__schema__=m[2];this.__index__=m.index+m[1].length;this.__last_index__=m.index+m[0].length+len;break;}}}if(this.__opts__.fuzzyLink&&this.__compiled__['http:']){// guess schemaless links
tld_pos=text.search(this.re.host_fuzzy_test);if(tld_pos>=0){// if tld is located after found link - no need to check fuzzy pattern
if(this.__index__<0||tld_pos<this.__index__){if((ml=text.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null){shift=ml.index+ml[1].length;if(this.__index__<0||shift<this.__index__){this.__schema__='';this.__index__=shift;this.__last_index__=ml.index+ml[0].length;}}}}}if(this.__opts__.fuzzyEmail&&this.__compiled__['mailto:']){// guess schemaless emails
at_pos=text.indexOf('@');if(at_pos>=0){// We can't skip this check, because this cases are possible:
// 192.168.1.1@gmail.com, my.in@example.com
if((me=text.match(this.re.email_fuzzy))!==null){shift=me.index+me[1].length;next=me.index+me[0].length;if(this.__index__<0||shift<this.__index__||shift===this.__index__&&next>this.__last_index__){this.__schema__='mailto:';this.__index__=shift;this.__last_index__=next;}}}}return this.__index__>=0;};/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/LinkifyIt.prototype.pretest=function pretest(text){return this.re.pretest.test(text);};/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/LinkifyIt.prototype.testSchemaAt=function testSchemaAt(text,schema,pos){// If not supported schema check requested - terminate
if(!this.__compiled__[schema.toLowerCase()]){return 0;}return this.__compiled__[schema.toLowerCase()].validate(text,pos,this);};/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/LinkifyIt.prototype.match=function match(text){var shift=0,result=[];// Try to take previous element from cache, if .test() called before
if(this.__index__>=0&&this.__text_cache__===text){result.push(createMatch(this,shift));shift=this.__last_index__;}// Cut head if cache was used
var tail=shift?text.slice(shift):text;// Scan string until end reached
while(this.test(tail)){result.push(createMatch(this,shift));tail=tail.slice(this.__last_index__);shift+=this.__last_index__;}if(result.length){return result;}return null;};/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/LinkifyIt.prototype.tlds=function tlds(list,keepOld){list=Array.isArray(list)?list:[list];if(!keepOld){this.__tlds__=list.slice();this.__tlds_replaced__=true;compile(this);return this;}this.__tlds__=this.__tlds__.concat(list).sort().filter(function(el,idx,arr){return el!==arr[idx-1];}).reverse();compile(this);return this;};/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/LinkifyIt.prototype.normalize=function normalize(match){// Do minimal possible changes by default. Need to collect feedback prior
// to move forward https://github.com/markdown-it/linkify-it/issues/1
if(!match.schema){match.url='http://'+match.url;}if(match.schema==='mailto:'&&!/^mailto:/i.test(match.url)){match.url='mailto:'+match.url;}};/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/LinkifyIt.prototype.onCompile=function onCompile(){};module.exports=LinkifyIt;},{"./lib/re":54}],54:[function(require,module,exports){'use strict';module.exports=function(opts){var re={};// Use direct extract instead of `regenerate` to reduse browserified size
re.src_Any=require('uc.micro/properties/Any/regex').source;re.src_Cc=require('uc.micro/categories/Cc/regex').source;re.src_Z=require('uc.micro/categories/Z/regex').source;re.src_P=require('uc.micro/categories/P/regex').source;// \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
re.src_ZPCc=[re.src_Z,re.src_P,re.src_Cc].join('|');// \p{\Z\Cc} (white spaces + control)
re.src_ZCc=[re.src_Z,re.src_Cc].join('|');// All possible word characters (everything without punctuation, spaces & controls)
// Defined via punctuation & spaces to save space
// Should be something like \p{\L\N\S\M} (\w but without `_`)
re.src_pseudo_letter='(?:(?!>|<|'+re.src_ZPCc+')'+re.src_Any+')';// The same as abothe but without [0-9]
// var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';
////////////////////////////////////////////////////////////////////////////////
re.src_ip4='(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';// Prohibit [@/] in user/pass to avoid wrong domain fetch.
re.src_auth='(?:(?:(?!'+re.src_ZCc+'|[@/]).)+@)?';re.src_port='(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';re.src_host_terminator='(?=$|>|<|'+re.src_ZPCc+')(?!-|_|:\\d|\\.-|\\.(?!$|'+re.src_ZPCc+'))';re.src_path='(?:'+'[/?#]'+'(?:'+'(?!'+re.src_ZCc+'|[()[\\]{}.,"\'?!\\-<>]).|'+'\\[(?:(?!'+re.src_ZCc+'|\\]).)*\\]|'+'\\((?:(?!'+re.src_ZCc+'|[)]).)*\\)|'+'\\{(?:(?!'+re.src_ZCc+'|[}]).)*\\}|'+'\\"(?:(?!'+re.src_ZCc+'|["]).)+\\"|'+"\\'(?:(?!"+re.src_ZCc+"|[']).)+\\'|"+"\\'(?="+re.src_pseudo_letter+'|[-]).|'+// allow `I'm_king` if no pair found
'\\.{2,3}[a-zA-Z0-9%/]|'+// github has ... in commit range links. Restrict to
// - english
// - percent-encoded
// - parts of file path
// until more examples found.
'\\.(?!'+re.src_ZCc+'|[.]).|'+(opts&&opts['---']?'\\-(?!--(?:[^-]|$))(?:-*)|'// `---` => long dash, terminate
:'\\-+|')+'\\,(?!'+re.src_ZCc+').|'+// allow `,,,` in paths
'\\!(?!'+re.src_ZCc+'|[!]).|'+'\\?(?!'+re.src_ZCc+'|[?]).'+')+'+'|\\/'+')?';re.src_email_name='[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+';re.src_xn='xn--[a-z0-9\\-]{1,59}';// More to read about domain names
// http://serverfault.com/questions/638260/
re.src_domain_root=// Allow letters & digits (http://test1)
'(?:'+re.src_xn+'|'+re.src_pseudo_letter+'{1,63}'+')';re.src_domain='(?:'+re.src_xn+'|'+'(?:'+re.src_pseudo_letter+')'+'|'+// don't allow `--` in domain names, because:
// - that can conflict with markdown &mdash; / &ndash;
// - nobody use those anyway
'(?:'+re.src_pseudo_letter+'(?:-(?!-)|'+re.src_pseudo_letter+'){0,61}'+re.src_pseudo_letter+')'+')';re.src_host='(?:'+// Don't need IP check, because digits are already allowed in normal domain names
//   src_ip4 +
// '|' +
'(?:(?:(?:'+re.src_domain+')\\.)*'+re.src_domain_root+')'+')';re.tpl_host_fuzzy='(?:'+re.src_ip4+'|'+'(?:(?:(?:'+re.src_domain+')\\.)+(?:%TLDS%))'+')';re.tpl_host_no_ip_fuzzy='(?:(?:(?:'+re.src_domain+')\\.)+(?:%TLDS%))';re.src_host_strict=re.src_host+re.src_host_terminator;re.tpl_host_fuzzy_strict=re.tpl_host_fuzzy+re.src_host_terminator;re.src_host_port_strict=re.src_host+re.src_port+re.src_host_terminator;re.tpl_host_port_fuzzy_strict=re.tpl_host_fuzzy+re.src_port+re.src_host_terminator;re.tpl_host_port_no_ip_fuzzy_strict=re.tpl_host_no_ip_fuzzy+re.src_port+re.src_host_terminator;////////////////////////////////////////////////////////////////////////////////
// Main rules
// Rude test fuzzy links by host, for quick deny
re.tpl_host_fuzzy_test='localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:'+re.src_ZPCc+'|>|$))';re.tpl_email_fuzzy='(^|<|>|\\(|'+re.src_ZCc+')('+re.src_email_name+'@'+re.tpl_host_fuzzy_strict+')';re.tpl_link_fuzzy=// Fuzzy link can't be prepended with .:/\- and non punctuation.
// but can start with > (markdown blockquote)
'(^|(?![.:/\\-_@])(?:[$+<=>^`|]|'+re.src_ZPCc+'))'+'((?![$+<=>^`|])'+re.tpl_host_port_fuzzy_strict+re.src_path+')';re.tpl_link_no_ip_fuzzy=// Fuzzy link can't be prepended with .:/\- and non punctuation.
// but can start with > (markdown blockquote)
'(^|(?![.:/\\-_@])(?:[$+<=>^`|]|'+re.src_ZPCc+'))'+'((?![$+<=>^`|])'+re.tpl_host_port_no_ip_fuzzy_strict+re.src_path+')';return re;};},{"uc.micro/categories/Cc/regex":61,"uc.micro/categories/P/regex":63,"uc.micro/categories/Z/regex":64,"uc.micro/properties/Any/regex":66}],55:[function(require,module,exports){'use strict';/* eslint-disable no-bitwise */var decodeCache={};function getDecodeCache(exclude){var i,ch,cache=decodeCache[exclude];if(cache){return cache;}cache=decodeCache[exclude]=[];for(i=0;i<128;i++){ch=String.fromCharCode(i);cache.push(ch);}for(i=0;i<exclude.length;i++){ch=exclude.charCodeAt(i);cache[ch]='%'+('0'+ch.toString(16).toUpperCase()).slice(-2);}return cache;}// Decode percent-encoded string.
//
function decode(string,exclude){var cache;if(typeof exclude!=='string'){exclude=decode.defaultChars;}cache=getDecodeCache(exclude);return string.replace(/(%[a-f0-9]{2})+/gi,function(seq){var i,l,b1,b2,b3,b4,chr,result='';for(i=0,l=seq.length;i<l;i+=3){b1=parseInt(seq.slice(i+1,i+3),16);if(b1<0x80){result+=cache[b1];continue;}if((b1&0xE0)===0xC0&&i+3<l){// 110xxxxx 10xxxxxx
b2=parseInt(seq.slice(i+4,i+6),16);if((b2&0xC0)===0x80){chr=b1<<6&0x7C0|b2&0x3F;if(chr<0x80){result+="��";}else{result+=String.fromCharCode(chr);}i+=3;continue;}}if((b1&0xF0)===0xE0&&i+6<l){// 1110xxxx 10xxxxxx 10xxxxxx
b2=parseInt(seq.slice(i+4,i+6),16);b3=parseInt(seq.slice(i+7,i+9),16);if((b2&0xC0)===0x80&&(b3&0xC0)===0x80){chr=b1<<12&0xF000|b2<<6&0xFC0|b3&0x3F;if(chr<0x800||chr>=0xD800&&chr<=0xDFFF){result+="���";}else{result+=String.fromCharCode(chr);}i+=6;continue;}}if((b1&0xF8)===0xF0&&i+9<l){// 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
b2=parseInt(seq.slice(i+4,i+6),16);b3=parseInt(seq.slice(i+7,i+9),16);b4=parseInt(seq.slice(i+10,i+12),16);if((b2&0xC0)===0x80&&(b3&0xC0)===0x80&&(b4&0xC0)===0x80){chr=b1<<18&0x1C0000|b2<<12&0x3F000|b3<<6&0xFC0|b4&0x3F;if(chr<0x10000||chr>0x10FFFF){result+="����";}else{chr-=0x10000;result+=String.fromCharCode(0xD800+(chr>>10),0xDC00+(chr&0x3FF));}i+=9;continue;}}result+="�";}return result;});}decode.defaultChars=';/?:@&=+$,#';decode.componentChars='';module.exports=decode;},{}],56:[function(require,module,exports){'use strict';var encodeCache={};// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude){var i,ch,cache=encodeCache[exclude];if(cache){return cache;}cache=encodeCache[exclude]=[];for(i=0;i<128;i++){ch=String.fromCharCode(i);if(/^[0-9a-z]$/i.test(ch)){// always allow unencoded alphanumeric characters
cache.push(ch);}else{cache.push('%'+('0'+i.toString(16).toUpperCase()).slice(-2));}}for(i=0;i<exclude.length;i++){cache[exclude.charCodeAt(i)]=exclude[i];}return cache;}// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode(string,exclude,keepEscaped){var i,l,code,nextCode,cache,result='';if(typeof exclude!=='string'){// encode(string, keepEscaped)
keepEscaped=exclude;exclude=encode.defaultChars;}if(typeof keepEscaped==='undefined'){keepEscaped=true;}cache=getEncodeCache(exclude);for(i=0,l=string.length;i<l;i++){code=string.charCodeAt(i);if(keepEscaped&&code===0x25/* % */&&i+2<l){if(/^[0-9a-f]{2}$/i.test(string.slice(i+1,i+3))){result+=string.slice(i,i+3);i+=2;continue;}}if(code<128){result+=cache[code];continue;}if(code>=0xD800&&code<=0xDFFF){if(code>=0xD800&&code<=0xDBFF&&i+1<l){nextCode=string.charCodeAt(i+1);if(nextCode>=0xDC00&&nextCode<=0xDFFF){result+=encodeURIComponent(string[i]+string[i+1]);i++;continue;}}result+='%EF%BF%BD';continue;}result+=encodeURIComponent(string[i]);}return result;}encode.defaultChars=";/?:@&=+$,-_.!~*'()#";encode.componentChars="-_.!~*'()";module.exports=encode;},{}],57:[function(require,module,exports){'use strict';module.exports=function format(url){var result='';result+=url.protocol||'';result+=url.slashes?'//':'';result+=url.auth?url.auth+'@':'';if(url.hostname&&url.hostname.indexOf(':')!==-1){// ipv6 address
result+='['+url.hostname+']';}else{result+=url.hostname||'';}result+=url.port?':'+url.port:'';result+=url.pathname||'';result+=url.search||'';result+=url.hash||'';return result;};},{}],58:[function(require,module,exports){'use strict';module.exports.encode=require('./encode');module.exports.decode=require('./decode');module.exports.format=require('./format');module.exports.parse=require('./parse');},{"./decode":55,"./encode":56,"./format":57,"./parse":59}],59:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';//
// Changes from joyent/node:
//
// 1. No leading slash in paths,
//    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
//
// 2. Backslashes are not replaced with slashes,
//    so `http:\\example.org\` is treated like a relative path
//
// 3. Trailing colon is treated like a part of the path,
//    i.e. in `http://example.org:foo` pathname is `:foo`
//
// 4. Nothing is URL-encoded in the resulting object,
//    (in joyent/node some chars in auth and paths are encoded)
//
// 5. `url.parse()` does not have `parseQueryString` argument
//
// 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
//    which can be constructed using other parts of the url.
//
function Url(){this.protocol=null;this.slashes=null;this.auth=null;this.port=null;this.hostname=null;this.hash=null;this.search=null;this.pathname=null;}// Reference: RFC 3986, RFC 1808, RFC 2396
// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern=/^([a-z0-9.+-]+:)/i,portPattern=/:[0-9]*$/,// Special case for a simple path URL
simplePathPattern=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,// RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
delims=['<','>','"','`',' ','\r','\n','\t'],// RFC 2396: characters not allowed for various reasons.
unwise=['{','}','|','\\','^','`'].concat(delims),// Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape=['\''].concat(unwise),// Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
nonHostChars=['%','/','?',';','#'].concat(autoEscape),hostEndingChars=['/','?','#'],hostnameMaxLen=255,hostnamePartPattern=/^[+a-z0-9A-Z_-]{0,63}$/,hostnamePartStart=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,// protocols that can allow "unsafe" and "unwise" chars.
/* eslint-disable no-script-url */// protocols that never have a hostname.
hostlessProtocol={'javascript':true,'javascript:':true},// protocols that always contain a // bit.
slashedProtocol={'http':true,'https':true,'ftp':true,'gopher':true,'file':true,'http:':true,'https:':true,'ftp:':true,'gopher:':true,'file:':true};/* eslint-enable no-script-url */function urlParse(url,slashesDenoteHost){if(url&&url instanceof Url){return url;}var u=new Url();u.parse(url,slashesDenoteHost);return u;}Url.prototype.parse=function(url,slashesDenoteHost){var i,l,lowerProto,hec,slashes,rest=url;// trim before proceeding.
// This is to support parse stuff like "  http://foo.com  \n"
rest=rest.trim();if(!slashesDenoteHost&&url.split('#').length===1){// Try fast path regexp
var simplePath=simplePathPattern.exec(rest);if(simplePath){this.pathname=simplePath[1];if(simplePath[2]){this.search=simplePath[2];}return this;}}var proto=protocolPattern.exec(rest);if(proto){proto=proto[0];lowerProto=proto.toLowerCase();this.protocol=proto;rest=rest.substr(proto.length);}// figure out if it's got a host
// user@server is *always* interpreted as a hostname, and url
// resolution will treat //foo/bar as host=foo,path=bar because that's
// how the browser resolves relative URLs.
if(slashesDenoteHost||proto||rest.match(/^\/\/[^@\/]+@[^@\/]+/)){slashes=rest.substr(0,2)==='//';if(slashes&&!(proto&&hostlessProtocol[proto])){rest=rest.substr(2);this.slashes=true;}}if(!hostlessProtocol[proto]&&(slashes||proto&&!slashedProtocol[proto])){// there's a hostname.
// the first instance of /, ?, ;, or # ends the host.
//
// If there is an @ in the hostname, then non-host chars *are* allowed
// to the left of the last @ sign, unless some host-ending character
// comes *before* the @-sign.
// URLs are obnoxious.
//
// ex:
// http://a@b@c/ => user:a@b host:c
// http://a@b?@c => user:a host:c path:/?@c
// v0.12 TODO(isaacs): This is not quite how Chrome does things.
// Review our test case against browsers more comprehensively.
// find the first instance of any hostEndingChars
var hostEnd=-1;for(i=0;i<hostEndingChars.length;i++){hec=rest.indexOf(hostEndingChars[i]);if(hec!==-1&&(hostEnd===-1||hec<hostEnd)){hostEnd=hec;}}// at this point, either we have an explicit point where the
// auth portion cannot go past, or the last @ char is the decider.
var auth,atSign;if(hostEnd===-1){// atSign can be anywhere.
atSign=rest.lastIndexOf('@');}else{// atSign must be in auth portion.
// http://a@b/c@d => host:b auth:a path:/c@d
atSign=rest.lastIndexOf('@',hostEnd);}// Now we have a portion which is definitely the auth.
// Pull that off.
if(atSign!==-1){auth=rest.slice(0,atSign);rest=rest.slice(atSign+1);this.auth=auth;}// the host is the remaining to the left of the first non-host char
hostEnd=-1;for(i=0;i<nonHostChars.length;i++){hec=rest.indexOf(nonHostChars[i]);if(hec!==-1&&(hostEnd===-1||hec<hostEnd)){hostEnd=hec;}}// if we still have not hit it, then the entire thing is a host.
if(hostEnd===-1){hostEnd=rest.length;}if(rest[hostEnd-1]===':'){hostEnd--;}var host=rest.slice(0,hostEnd);rest=rest.slice(hostEnd);// pull out port.
this.parseHost(host);// we've indicated that there is a hostname,
// so even if it's empty, it has to be present.
this.hostname=this.hostname||'';// if hostname begins with [ and ends with ]
// assume that it's an IPv6 address.
var ipv6Hostname=this.hostname[0]==='['&&this.hostname[this.hostname.length-1]===']';// validate a little.
if(!ipv6Hostname){var hostparts=this.hostname.split(/\./);for(i=0,l=hostparts.length;i<l;i++){var part=hostparts[i];if(!part){continue;}if(!part.match(hostnamePartPattern)){var newpart='';for(var j=0,k=part.length;j<k;j++){if(part.charCodeAt(j)>127){// we replace non-ASCII char with a temporary placeholder
// we need this to make sure size of hostname is not
// broken by replacing non-ASCII by nothing
newpart+='x';}else{newpart+=part[j];}}// we test again with ASCII char only
if(!newpart.match(hostnamePartPattern)){var validParts=hostparts.slice(0,i);var notHost=hostparts.slice(i+1);var bit=part.match(hostnamePartStart);if(bit){validParts.push(bit[1]);notHost.unshift(bit[2]);}if(notHost.length){rest=notHost.join('.')+rest;}this.hostname=validParts.join('.');break;}}}}if(this.hostname.length>hostnameMaxLen){this.hostname='';}// strip [ and ] from the hostname
// the host field still retains them, though
if(ipv6Hostname){this.hostname=this.hostname.substr(1,this.hostname.length-2);}}// chop off from the tail first.
var hash=rest.indexOf('#');if(hash!==-1){// got a fragment string.
this.hash=rest.substr(hash);rest=rest.slice(0,hash);}var qm=rest.indexOf('?');if(qm!==-1){this.search=rest.substr(qm);rest=rest.slice(0,qm);}if(rest){this.pathname=rest;}if(slashedProtocol[lowerProto]&&this.hostname&&!this.pathname){this.pathname='';}return this;};Url.prototype.parseHost=function(host){var port=portPattern.exec(host);if(port){port=port[0];if(port!==':'){this.port=port.substr(1);}host=host.substr(0,host.length-port.length);}if(host){this.hostname=host;}};module.exports=urlParse;},{}],60:[function(require,module,exports){(function(global){/*! https://mths.be/punycode v1.4.1 by @mathias */(function(root){/** Detect free variables */var freeExports=(typeof exports==="undefined"?"undefined":_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;var freeModule=(typeof module==="undefined"?"undefined":_typeof(module))=='object'&&module&&!module.nodeType&&module;var freeGlobal=(typeof global==="undefined"?"undefined":_typeof(global))=='object'&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal||freeGlobal.self===freeGlobal){root=freeGlobal;}/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */var punycode,/** Highest positive signed 32-bit float value */maxInt=2147483647,// aka. 0x7FFFFFFF or 2^31-1
/** Bootstring parameters */base=36,tMin=1,tMax=26,skew=38,damp=700,initialBias=72,initialN=128,// 0x80
delimiter='-',// '\x2D'
/** Regular expressions */regexPunycode=/^xn--/,regexNonASCII=/[^\x20-\x7E]/,// unprintable ASCII chars + non-ASCII chars
regexSeparators=/[\x2E\u3002\uFF0E\uFF61]/g,// RFC 3490 separators
/** Error messages */errors={'overflow':'Overflow: input needs wider integers to process','not-basic':'Illegal input >= 0x80 (not a basic code point)','invalid-input':'Invalid input'},/** Convenience shortcuts */baseMinusTMin=base-tMin,floor=Math.floor,stringFromCharCode=String.fromCharCode,/** Temporary variable */key;/*--------------------------------------------------------------------------*//**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */function error(type){throw new RangeError(errors[type]);}/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */function map(array,fn){var length=array.length;var result=[];while(length--){result[length]=fn(array[length]);}return result;}/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */function mapDomain(string,fn){var parts=string.split('@');var result='';if(parts.length>1){// In email addresses, only the domain name should be punycoded. Leave
// the local part (i.e. everything up to `@`) intact.
result=parts[0]+'@';string=parts[1];}// Avoid `split(regex)` for IE8 compatibility. See #17.
string=string.replace(regexSeparators,'\x2E');var labels=string.split('.');var encoded=map(labels,fn).join('.');return result+encoded;}/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */function ucs2decode(string){var output=[],counter=0,length=string.length,value,extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=0xD800&&value<=0xDBFF&&counter<length){// high surrogate, and there is a next character
extra=string.charCodeAt(counter++);if((extra&0xFC00)==0xDC00){// low surrogate
output.push(((value&0x3FF)<<10)+(extra&0x3FF)+0x10000);}else{// unmatched surrogate; only append this code unit, in case the next
// code unit is the high surrogate of a surrogate pair
output.push(value);counter--;}}else{output.push(value);}}return output;}/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */function ucs2encode(array){return map(array,function(value){var output='';if(value>0xFFFF){value-=0x10000;output+=stringFromCharCode(value>>>10&0x3FF|0xD800);value=0xDC00|value&0x3FF;}output+=stringFromCharCode(value);return output;}).join('');}/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */function basicToDigit(codePoint){if(codePoint-48<10){return codePoint-22;}if(codePoint-65<26){return codePoint-65;}if(codePoint-97<26){return codePoint-97;}return base;}/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */function digitToBasic(digit,flag){//  0..25 map to ASCII a..z or A..Z
// 26..35 map to ASCII 0..9
return digit+22+75*(digit<26)-((flag!=0)<<5);}/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */function adapt(delta,numPoints,firstTime){var k=0;delta=firstTime?floor(delta/damp):delta>>1;delta+=floor(delta/numPoints);for(;/* no initialization */delta>baseMinusTMin*tMax>>1;k+=base){delta=floor(delta/baseMinusTMin);}return floor(k+(baseMinusTMin+1)*delta/(delta+skew));}/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */function decode(input){// Don't use UCS-2
var output=[],inputLength=input.length,out,i=0,n=initialN,bias=initialBias,basic,j,index,oldi,w,k,digit,t,/** Cached calculation results */baseMinusT;// Handle the basic code points: let `basic` be the number of input code
// points before the last delimiter, or `0` if there is none, then copy
// the first basic code points to the output.
basic=input.lastIndexOf(delimiter);if(basic<0){basic=0;}for(j=0;j<basic;++j){// if it's not a basic code point
if(input.charCodeAt(j)>=0x80){error('not-basic');}output.push(input.charCodeAt(j));}// Main decoding loop: start just after the last delimiter if any basic code
// points were copied; start at the beginning otherwise.
for(index=basic>0?basic+1:0;index<inputLength;)/* no final expression */{// `index` is the index of the next character to be consumed.
// Decode a generalized variable-length integer into `delta`,
// which gets added to `i`. The overflow checking is easier
// if we increase `i` as we go, then subtract off its starting
// value at the end to obtain `delta`.
for(oldi=i,w=1,k=base;;/* no condition */k+=base){if(index>=inputLength){error('invalid-input');}digit=basicToDigit(input.charCodeAt(index++));if(digit>=base||digit>floor((maxInt-i)/w)){error('overflow');}i+=digit*w;t=k<=bias?tMin:k>=bias+tMax?tMax:k-bias;if(digit<t){break;}baseMinusT=base-t;if(w>floor(maxInt/baseMinusT)){error('overflow');}w*=baseMinusT;}out=output.length+1;bias=adapt(i-oldi,out,oldi==0);// `i` was supposed to wrap around from `out` to `0`,
// incrementing `n` each time, so we'll fix that now:
if(floor(i/out)>maxInt-n){error('overflow');}n+=floor(i/out);i%=out;// Insert `n` at position `i` of the output
output.splice(i++,0,n);}return ucs2encode(output);}/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */function encode(input){var n,delta,handledCPCount,basicLength,bias,j,m,q,k,t,currentValue,output=[],/** `inputLength` will hold the number of code points in `input`. */inputLength,/** Cached calculation results */handledCPCountPlusOne,baseMinusT,qMinusT;// Convert the input in UCS-2 to Unicode
input=ucs2decode(input);// Cache the length
inputLength=input.length;// Initialize the state
n=initialN;delta=0;bias=initialBias;// Handle the basic code points
for(j=0;j<inputLength;++j){currentValue=input[j];if(currentValue<0x80){output.push(stringFromCharCode(currentValue));}}handledCPCount=basicLength=output.length;// `handledCPCount` is the number of code points that have been handled;
// `basicLength` is the number of basic code points.
// Finish the basic string - if it is not empty - with a delimiter
if(basicLength){output.push(delimiter);}// Main encoding loop:
while(handledCPCount<inputLength){// All non-basic code points < n have been handled already. Find the next
// larger one:
for(m=maxInt,j=0;j<inputLength;++j){currentValue=input[j];if(currentValue>=n&&currentValue<m){m=currentValue;}}// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
// but guard against overflow
handledCPCountPlusOne=handledCPCount+1;if(m-n>floor((maxInt-delta)/handledCPCountPlusOne)){error('overflow');}delta+=(m-n)*handledCPCountPlusOne;n=m;for(j=0;j<inputLength;++j){currentValue=input[j];if(currentValue<n&&++delta>maxInt){error('overflow');}if(currentValue==n){// Represent delta as a generalized variable-length integer
for(q=delta,k=base;;/* no condition */k+=base){t=k<=bias?tMin:k>=bias+tMax?tMax:k-bias;if(q<t){break;}qMinusT=q-t;baseMinusT=base-t;output.push(stringFromCharCode(digitToBasic(t+qMinusT%baseMinusT,0)));q=floor(qMinusT/baseMinusT);}output.push(stringFromCharCode(digitToBasic(q,0)));bias=adapt(delta,handledCPCountPlusOne,handledCPCount==basicLength);delta=0;++handledCPCount;}}++delta;++n;}return output.join('');}/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */function toUnicode(input){return mapDomain(input,function(string){return regexPunycode.test(string)?decode(string.slice(4).toLowerCase()):string;});}/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */function toASCII(input){return mapDomain(input,function(string){return regexNonASCII.test(string)?'xn--'+encode(string):string;});}/*--------------------------------------------------------------------------*//** Define the public API */punycode={/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */'version':'1.4.1',/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */'ucs2':{'decode':ucs2decode,'encode':ucs2encode},'decode':decode,'encode':encode,'toASCII':toASCII,'toUnicode':toUnicode};/** Expose `punycode` */// Some AMD build optimizers, like r.js, check for specific condition patterns
// like the following:
if(typeof define=='function'&&_typeof(define.amd)=='object'&&define.amd){define('punycode',function(){return punycode;});}else if(freeExports&&freeModule){if(module.exports==freeExports){// in Node.js, io.js, or RingoJS v0.8.0+
freeModule.exports=punycode;}else{// in Narwhal or RingoJS v0.7.0-
for(key in punycode){punycode.hasOwnProperty(key)&&(freeExports[key]=punycode[key]);}}}else{// in Rhino or a web browser
root.punycode=punycode;}})(this);}).call(this,typeof commonjsGlobal!=="undefined"?commonjsGlobal:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],61:[function(require,module,exports){module.exports=/[\0-\x1F\x7F-\x9F]/;},{}],62:[function(require,module,exports){module.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;},{}],63:[function(require,module,exports){module.exports=/[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;},{}],64:[function(require,module,exports){module.exports=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;},{}],65:[function(require,module,exports){'use strict';exports.Any=require('./properties/Any/regex');exports.Cc=require('./categories/Cc/regex');exports.Cf=require('./categories/Cf/regex');exports.P=require('./categories/P/regex');exports.Z=require('./categories/Z/regex');},{"./categories/Cc/regex":61,"./categories/Cf/regex":62,"./categories/P/regex":63,"./categories/Z/regex":64,"./properties/Any/regex":66}],66:[function(require,module,exports){module.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;},{}],67:[function(require,module,exports){'use strict';module.exports=require('./lib/');},{"./lib/":9}]},{},[67])(67);});});

/**
 * parse markdown content and return html
 */
function parse(content) {
  var slides = content.split(/\n\-{3,}\s*\n/m).map(function (md) {
    //extract meta
    var matched = /^(\w+:[^\n]+\n)+/.exec(md);
    var metaText = matched ? matched[0] : '';
    var meta = metaText ? parseMeta(metaText) : {};
    var markdown = md.substr(metaText.length);
    var html = renderSlide(markdown);
    return { meta: meta, html: html, markdown: markdown };
  });
  var option = {};
  if (!slides[0].markdown.trim()) {
    //first meta as slides option
    option = slides[0].meta;
    slides.splice(0, 1);
  }
  var html = slides.map(function (slide) {
    return slide.html;
  }).join('');
  var metas = slides.map(function (slide) {
    return slide.meta;
  });
  return { html: html, option: option, metas: metas };
}

/**
 * render slide
 */
var renderSlide = function renderSlide(md) {
  var markdownit = new markdownIt({ html: true });
  var html = markdownit.render(md);
  return '<section class="diapo-slide">\n            <div class="diapo-content">' + html + '</div>\n          </section>';
};

/**
 * parse yaml
 */
var parseMeta = function parseMeta(text) {
  return text.trim().split('\n').map(function (l) {
    return l.split(/\s*:\s*(.*)?/);
  }).reduce(function (meta, arr) {
    meta[arr[0]] = arr[1];
    return meta;
  }, {});
};

var prism = createCommonjsModule(function (module) {
	/* **********************************************
      Begin prism-core.js
 ********************************************** */

	var _self = typeof window !== 'undefined' ? window // if in browser
	: typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
	: {};

	/**
  * Prism: Lightweight, robust, elegant syntax highlighting
  * MIT license http://www.opensource.org/licenses/mit-license.php/
  * @author Lea Verou http://lea.verou.me
  */

	var Prism = function () {

		// Private helper vars
		var lang = /\blang(?:uage)?-(\w+)\b/i;
		var uniqueId = 0;

		var _ = _self.Prism = {
			util: {
				encode: function encode(tokens) {
					if (tokens instanceof Token) {
						return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
					} else if (_.util.type(tokens) === 'Array') {
						return tokens.map(_.util.encode);
					} else {
						return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
					}
				},

				type: function type(o) {
					return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
				},

				objId: function objId(obj) {
					if (!obj['__id']) {
						Object.defineProperty(obj, '__id', { value: ++uniqueId });
					}
					return obj['__id'];
				},

				// Deep clone a language definition (e.g. to extend it)
				clone: function clone(o) {
					var type = _.util.type(o);

					switch (type) {
						case 'Object':
							var clone = {};

							for (var key in o) {
								if (o.hasOwnProperty(key)) {
									clone[key] = _.util.clone(o[key]);
								}
							}

							return clone;

						case 'Array':
							// Check for existence for IE8
							return o.map && o.map(function (v) {
								return _.util.clone(v);
							});
					}

					return o;
				}
			},

			languages: {
				extend: function extend(id, redef) {
					var lang = _.util.clone(_.languages[id]);

					for (var key in redef) {
						lang[key] = redef[key];
					}

					return lang;
				},

				/**
     * Insert a token before another token in a language literal
     * As this needs to recreate the object (we cannot actually insert before keys in object literals),
     * we cannot just provide an object, we need anobject and a key.
     * @param inside The key (or language id) of the parent
     * @param before The key to insert before. If not provided, the function appends instead.
     * @param insert Object with the key/value pairs to insert
     * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
     */
				insertBefore: function insertBefore(inside, before, insert, root) {
					root = root || _.languages;
					var grammar = root[inside];

					if (arguments.length == 2) {
						insert = arguments[1];

						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								grammar[newToken] = insert[newToken];
							}
						}

						return grammar;
					}

					var ret = {};

					for (var token in grammar) {

						if (grammar.hasOwnProperty(token)) {

							if (token == before) {

								for (var newToken in insert) {

									if (insert.hasOwnProperty(newToken)) {
										ret[newToken] = insert[newToken];
									}
								}
							}

							ret[token] = grammar[token];
						}
					}

					// Update references in other language definitions
					_.languages.DFS(_.languages, function (key, value) {
						if (value === root[inside] && key != inside) {
							this[key] = ret;
						}
					});

					return root[inside] = ret;
				},

				// Traverse a language definition with Depth First Search
				DFS: function DFS(o, callback, type, visited) {
					visited = visited || {};
					for (var i in o) {
						if (o.hasOwnProperty(i)) {
							callback.call(o, i, o[i], type || i);

							if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
								visited[_.util.objId(o[i])] = true;
								_.languages.DFS(o[i], callback, null, visited);
							} else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
								visited[_.util.objId(o[i])] = true;
								_.languages.DFS(o[i], callback, i, visited);
							}
						}
					}
				}
			},
			plugins: {},

			highlightAll: function highlightAll(async, callback) {
				var env = {
					callback: callback,
					selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
				};

				_.hooks.run("before-highlightall", env);

				var elements = env.elements || document.querySelectorAll(env.selector);

				for (var i = 0, element; element = elements[i++];) {
					_.highlightElement(element, async === true, env.callback);
				}
			},

			highlightElement: function highlightElement(element, async, callback) {
				// Find language
				var language,
				    grammar,
				    parent = element;

				while (parent && !lang.test(parent.className)) {
					parent = parent.parentNode;
				}

				if (parent) {
					language = (parent.className.match(lang) || [, ''])[1].toLowerCase();
					grammar = _.languages[language];
				}

				// Set language on the element, if not present
				element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

				// Set language on the parent, for styling
				parent = element.parentNode;

				if (/pre/i.test(parent.nodeName)) {
					parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
				}

				var code = element.textContent;

				var env = {
					element: element,
					language: language,
					grammar: grammar,
					code: code
				};

				_.hooks.run('before-sanity-check', env);

				if (!env.code || !env.grammar) {
					_.hooks.run('complete', env);
					return;
				}

				_.hooks.run('before-highlight', env);

				if (async && _self.Worker) {
					var worker = new Worker(_.filename);

					worker.onmessage = function (evt) {
						env.highlightedCode = evt.data;

						_.hooks.run('before-insert', env);

						env.element.innerHTML = env.highlightedCode;

						callback && callback.call(env.element);
						_.hooks.run('after-highlight', env);
						_.hooks.run('complete', env);
					};

					worker.postMessage(JSON.stringify({
						language: env.language,
						code: env.code,
						immediateClose: true
					}));
				} else {
					env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

					_.hooks.run('before-insert', env);

					env.element.innerHTML = env.highlightedCode;

					callback && callback.call(element);

					_.hooks.run('after-highlight', env);
					_.hooks.run('complete', env);
				}
			},

			highlight: function highlight(text, grammar, language) {
				var tokens = _.tokenize(text, grammar);
				return Token.stringify(_.util.encode(tokens), language);
			},

			tokenize: function tokenize(text, grammar, language) {
				var Token = _.Token;

				var strarr = [text];

				var rest = grammar.rest;

				if (rest) {
					for (var token in rest) {
						grammar[token] = rest[token];
					}

					delete grammar.rest;
				}

				tokenloop: for (var token in grammar) {
					if (!grammar.hasOwnProperty(token) || !grammar[token]) {
						continue;
					}

					var patterns = grammar[token];
					patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

					for (var j = 0; j < patterns.length; ++j) {
						var pattern = patterns[j],
						    inside = pattern.inside,
						    lookbehind = !!pattern.lookbehind,
						    greedy = !!pattern.greedy,
						    lookbehindLength = 0,
						    alias = pattern.alias;

						pattern = pattern.pattern || pattern;

						for (var i = 0; i < strarr.length; i++) {
							// Don’t cache length as it changes during the loop

							var str = strarr[i];

							if (strarr.length > text.length) {
								// Something went terribly wrong, ABORT, ABORT!
								break tokenloop;
							}

							if (str instanceof Token) {
								continue;
							}

							pattern.lastIndex = 0;

							var match = pattern.exec(str),
							    delNum = 1;

							// Greedy patterns can override/remove up to two previously matched tokens
							if (!match && greedy && i != strarr.length - 1) {
								// Reconstruct the original text using the next two tokens
								var nextToken = strarr[i + 1].matchedStr || strarr[i + 1],
								    combStr = str + nextToken;

								if (i < strarr.length - 2) {
									combStr += strarr[i + 2].matchedStr || strarr[i + 2];
								}

								// Try the pattern again on the reconstructed text
								pattern.lastIndex = 0;
								match = pattern.exec(combStr);
								if (!match) {
									continue;
								}

								var from = match.index + (lookbehind ? match[1].length : 0);
								// To be a valid candidate, the new match has to start inside of str
								if (from >= str.length) {
									continue;
								}
								var to = match.index + match[0].length,
								    len = str.length + nextToken.length;

								// Number of tokens to delete and replace with the new match
								delNum = 3;

								if (to <= len) {
									if (strarr[i + 1].greedy) {
										continue;
									}
									delNum = 2;
									combStr = combStr.slice(0, len);
								}
								str = combStr;
							}

							if (!match) {
								continue;
							}

							if (lookbehind) {
								lookbehindLength = match[1].length;
							}

							var from = match.index + lookbehindLength,
							    match = match[0].slice(lookbehindLength),
							    to = from + match.length,
							    before = str.slice(0, from),
							    after = str.slice(to);

							var args = [i, delNum];

							if (before) {
								args.push(before);
							}

							var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);

							args.push(wrapped);

							if (after) {
								args.push(after);
							}

							Array.prototype.splice.apply(strarr, args);
						}
					}
				}

				return strarr;
			},

			hooks: {
				all: {},

				add: function add(name, callback) {
					var hooks = _.hooks.all;

					hooks[name] = hooks[name] || [];

					hooks[name].push(callback);
				},

				run: function run(name, env) {
					var callbacks = _.hooks.all[name];

					if (!callbacks || !callbacks.length) {
						return;
					}

					for (var i = 0, callback; callback = callbacks[i++];) {
						callback(env);
					}
				}
			}
		};

		var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
			this.type = type;
			this.content = content;
			this.alias = alias;
			// Copy of the full string this token was created from
			this.matchedStr = matchedStr || null;
			this.greedy = !!greedy;
		};

		Token.stringify = function (o, language, parent) {
			if (typeof o == 'string') {
				return o;
			}

			if (_.util.type(o) === 'Array') {
				return o.map(function (element) {
					return Token.stringify(element, language, o);
				}).join('');
			}

			var env = {
				type: o.type,
				content: Token.stringify(o.content, language, parent),
				tag: 'span',
				classes: ['token', o.type],
				attributes: {},
				language: language,
				parent: parent
			};

			if (env.type == 'comment') {
				env.attributes['spellcheck'] = 'true';
			}

			if (o.alias) {
				var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
				Array.prototype.push.apply(env.classes, aliases);
			}

			_.hooks.run('wrap', env);

			var attributes = '';

			for (var name in env.attributes) {
				attributes += (attributes ? ' ' : '') + name + '="' + (env.attributes[name] || '') + '"';
			}

			return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';
		};

		if (!_self.document) {
			if (!_self.addEventListener) {
				// in Node.js
				return _self.Prism;
			}
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data),
				    lang = message.language,
				    code = message.code,
				    immediateClose = message.immediateClose;

				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);

			return _self.Prism;
		}

		//Get current script and highlight
		var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

		if (script) {
			_.filename = script.src;

			if (document.addEventListener && !script.hasAttribute('data-manual')) {
				if (document.readyState !== "loading") {
					requestAnimationFrame(_.highlightAll, 0);
				} else {
					document.addEventListener('DOMContentLoaded', _.highlightAll);
				}
			}
		}

		return _self.Prism;
	}();

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Prism;
	}

	// hack for components to work correctly in node.js
	if (typeof commonjsGlobal !== 'undefined') {
		commonjsGlobal.Prism = Prism;
	}

	/* **********************************************
      Begin prism-markup.js
 ********************************************** */

	Prism.languages.markup = {
		'comment': /<!--[\w\W]*?-->/,
		'prolog': /<\?[\w\W]+?\?>/,
		'doctype': /<!DOCTYPE[\w\W]+?>/,
		'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
		'tag': {
			pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
			inside: {
				'tag': {
					pattern: /^<\/?[^\s>\/]+/i,
					inside: {
						'punctuation': /^<\/?/,
						'namespace': /^[^\s>\/:]+:/
					}
				},
				'attr-value': {
					pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
					inside: {
						'punctuation': /[=>"']/
					}
				},
				'punctuation': /\/?>/,
				'attr-name': {
					pattern: /[^\s>\/]+/,
					inside: {
						'namespace': /^[^\s>\/:]+:/
					}
				}

			}
		},
		'entity': /&#?[\da-z]{1,8};/i
	};

	// Plugin to make entity title show the real entity, idea by Roman Komarov
	Prism.hooks.add('wrap', function (env) {

		if (env.type === 'entity') {
			env.attributes['title'] = env.content.replace(/&amp;/, '&');
		}
	});

	Prism.languages.xml = Prism.languages.markup;
	Prism.languages.html = Prism.languages.markup;
	Prism.languages.mathml = Prism.languages.markup;
	Prism.languages.svg = Prism.languages.markup;

	/* **********************************************
      Begin prism-css.js
 ********************************************** */

	Prism.languages.css = {
		'comment': /\/\*[\w\W]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
		'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
		'string': /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
		'property': /(\b|\B)[\w-]+(?=\s*:)/i,
		'important': /\B!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'style': {
				pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
				lookbehind: true,
				inside: Prism.languages.css,
				alias: 'language-css'
			}
		});

		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|').*?\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: Prism.languages.markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, Prism.languages.markup.tag);
	}

	/* **********************************************
      Begin prism-clike.js
 ********************************************** */

	Prism.languages.clike = {
		'comment': [{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: true
		}, {
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}],
		'string': {
			pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'class-name': {
			pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
			lookbehind: true,
			inside: {
				punctuation: /(\.|\\)/
			}
		},
		'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
		'boolean': /\b(true|false)\b/,
		'function': /[a-z0-9_]+(?=\()/i,
		'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
		'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
		'punctuation': /[{}[\];(),.:]/
	};

	/* **********************************************
      Begin prism-javascript.js
 ********************************************** */

	Prism.languages.javascript = Prism.languages.extend('clike', {
		'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
		'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
		// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
		'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
	});

	Prism.languages.insertBefore('javascript', 'keyword', {
		'regex': {
			pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
			lookbehind: true,
			greedy: true
		}
	});

	Prism.languages.insertBefore('javascript', 'string', {
		'template-string': {
			pattern: /`(?:\\\\|\\?[^\\])*?`/,
			greedy: true,
			inside: {
				'interpolation': {
					pattern: /\$\{[^}]+\}/,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\$\{|\}$/,
							alias: 'punctuation'
						},
						rest: Prism.languages.javascript
					}
				},
				'string': /[\s\S]+/
			}
		}
	});

	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'script': {
				pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
				lookbehind: true,
				inside: Prism.languages.javascript,
				alias: 'language-javascript'
			}
		});
	}

	Prism.languages.js = Prism.languages.javascript;

	/* **********************************************
      Begin prism-file-highlight.js
 ********************************************** */

	(function () {
		if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
			return;
		}

		self.Prism.fileHighlight = function () {

			var Extensions = {
				'js': 'javascript',
				'py': 'python',
				'rb': 'ruby',
				'ps1': 'powershell',
				'psm1': 'powershell',
				'sh': 'bash',
				'bat': 'batch',
				'h': 'c',
				'tex': 'latex'
			};

			if (Array.prototype.forEach) {
				// Check to prevent error in IE8
				Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
					var src = pre.getAttribute('data-src');

					var language,
					    parent = pre;
					var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
					while (parent && !lang.test(parent.className)) {
						parent = parent.parentNode;
					}

					if (parent) {
						language = (pre.className.match(lang) || [, ''])[1];
					}

					if (!language) {
						var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
						language = Extensions[extension] || extension;
					}

					var code = document.createElement('code');
					code.className = 'language-' + language;

					pre.textContent = '';

					code.textContent = 'Loading…';

					pre.appendChild(code);

					var xhr = new XMLHttpRequest();

					xhr.open('GET', src, true);

					xhr.onreadystatechange = function () {
						if (xhr.readyState == 4) {

							if (xhr.status < 400 && xhr.responseText) {
								code.textContent = xhr.responseText;

								Prism.highlightElement(code);
							} else if (xhr.status >= 400) {
								code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
							} else {
								code.textContent = '✖ Error: File does not exist or is empty';
							}
						}
					};

					xhr.send(null);
				});
			}
		};

		document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);
	})();
});

/**
 * page title
 */
var pageTitle = {
  afterRender: function afterRender(diapo) {
    document.title = '🅿️ ' + (diapo.option.title || '');
  }
};

/**
 * syntax highlighter
 */
var syntaxHighlighter = {
  afterRender: function afterRender(diapo) {
    prism.highlightAll(true);
  }
};

/**
 * insert font-awesome icons
 */
var fontawesome = {
  beforeParse: function beforeParse(diapo) {
    var pattern = /:(fa-[\w\d-]+):/mg;
    diapo.content = diapo.content.replace(pattern, '<i class="fa $1"></i>');
  }
};

/**
 * add pipeline support in markdown
 */
var pipeline = {
  beforeParse: function beforeParse(diapo) {
    var pattern = /\|->\s*\n\s*/mg;
    diapo.content = diapo.content.replace(pattern, '');
  }
};

/**
 * font zooming
 */
var fontZoom = {
  beforeParse: function beforeParse(diapo) {
    var pattern1 = /(\s+)<<(\++|\-+)(?=\s+)/mg,
        pattern2 = /(\s+)(\++|\-+)>>(?=\s+)/mg;
    diapo.content = diapo.content.replace(pattern1, function (m, g1, g2) {
      var factor = g2[0] == '+' ? 1.2 : 0.8;
      var zoom = Math.ceil(Math.pow(factor, g2.length) * 100);
      return g1 + '<span style="font-size: ' + zoom + '%">';
    }).replace(pattern2, '$1</span>');
  }
};

/**
 * two column layout
 */
var twoColumn = {
  beforeParse: function beforeParse(diapo) {
    var pattern1 = /<<\|-\|-\|/g,
        pattern2 = /\|>>(?=\s+)/mg;
    diapo.content = diapo.content.replace(pattern1, '<span class="two-column">').replace(pattern2, '</span>');
  }
};

/**
 * iframe
 */
var iframe = {
  beforeParse: function beforeParse(diapo) {
    var pattern = /iframe\(([^\)]+)\)/ig,
        template = '<iframe frameborder="0" $1></iframe>';
    diapo.content = diapo.content.replace(pattern, template);
  }
};

/**
 * progress bar
 */
var progress = {
  afterRender: function afterRender(diapo) {
    var progress = document.createElement('progress');
    progress.max = 1;
    diapo.container.appendChild(progress);
  },
  afterTransition: function afterTransition(diapo) {
    var progress = diapo.container.querySelector('progress');
    progress.value = (diapo.current + 1) / diapo.slides.length;
  }
};

/**
 * themes
 */
var themes = {
  afterRender: function afterRender(diapo) {
    var theme = diapo.option.theme || 'default',
        mainCSS = document.querySelector('link[href*="diapo.css"]'),
        path = mainCSS.href.replace(/[^\/]+$/, '') + '/themes/' + theme + '.css',
        link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path;
    link.onerror = function (e) {
      alert('Failed to load style for theme "' + theme + '"');
    };
    document.head.appendChild(link);
  }
};

/**
 * transitions
 */
var transitions = {
  afterRender: function afterRender(diapo) {
    var transition = diapo.option.transition || 'default';
    diapo.container.classList.add('transition-' + transition);
  }
};

/**
 * touch screen support
 */
var touch = {
  afterRender: function afterRender(diapo) {
    var _this = this;

    if (!'ontouchstart' in window) return;
    var startX = void 0,
        startTime = void 0,
        endX = void 0;
    var ontouchstart = function ontouchstart(e) {
      e.preventDefault();
      startX = e.touches[0].pageX;
      startTime = +new Date();
      window.addEventListener('touchmove', ontouchmove);
    };
    var ontouchmove = function ontouchmove(e) {
      e.preventDefault();
      endX = e.touches[0].pageX;
    };
    var ontouchend = function ontouchend(e) {
      window.removeEventListener('touchmove', ontouchmove);
      var duration = +new Date() - startTime;
      var distance = endX - startX;
      if (Math.abs(distance) > 30 && duration < 800) {
        _this.transition(distance > 0 ? 'prev' : 'next');
      }
    };
    window.addEventListener('touchstart', ontouchstart);
    window.addEventListener('touchend', ontouchend);
    window.addEventListener('touchcancel', ontouchend);
  }
};

/**
 * style
 */
var style = {
  afterRender: function afterRender(diapo) {
    diapo.slides.forEach(function (slide, index) {
      var cssText = diapo.metas[index].style;
      cssText && (slide.style.cssText += cssText);
    });
  }
};

/**
 * fragment
 */
var fragment = {
  afterRender: function afterRender(diapo) {
    diapo.slides.forEach(function (slide, index) {
      if (!diapo.metas[index].fragment) return;
      var selector = '\n        .diapo-content > ul > li,\n        .diapp-content > ol > li,\n        .diapo-content > p,\n        .diapo-content > blockquote,\n        .diapo-content > pre\n      ';
      var items = $$(selector, slide);
      items.forEach(function (item) {
        return item.classList.add('fragment');
      });
    });
  },
  beforeTransition: function beforeTransition(diapo, dir) {
    var slide = diapo.slides[diapo.current],
        fragments = $$('.fragment', slide),
        toStatus = dir === 'next' ? 'fragment on' : 'fragment',
        remains = fragments.filter(f => (dir === 'next') ? !f.classList.contains('on') : f.classList.contains('on'));
    if (!remains.length) return;
    remains[dir === 'next' ? 'shift' : 'pop']().className = toStatus;
    return false;
  }
};

/**
 * speech
 */
var speech = {
  afterRender: function afterRender(diapo) {
    diapo.slides.forEach(function (slide, index) {
      var speech = diapo.metas[index].speech;
      if (!speech) return;
      var audio = document.createElement('audio');
      audio.className = 'speech';
      audio.preload = true;
      audio.src = speech;
      slide.appendChild(audio);
    });
  },
  afterTransition: function afterTransition(diapo) {
    var speech = diapo.metas[diapo.current].speech;
    $$('.speech').forEach(function (a) {
      return a.pause();
    });
    if (!speech) return;
    var audio = diapo.container.querySelector('.speech');
    audio.currentTime = 0;
    audio.play();
  }
};

/**
 * background image
 */
var backgroundImage = {
  afterRender: function afterRender(diapo) {
    diapo.slides.forEach(function (slide, index) {
      var image = diapo.metas[index].bgimage;
      if (!image) return;
      slide.style.cssText += '\n        background: url(' + image + ') no-repeat center center;\n        background-size: cover;\n      ';
    });
  }
};

/**
 * background color
 */
var backgroundColor = {
  afterRender: function afterRender(diapo) {
    diapo.slides.forEach(function (slide, index) {
      var color = diapo.metas[index].bgcolor;
      var namedColors = {
        red: '#F44336',
        pink: '#E91E63',
        purple: '#9C27B0',
        deeppurple: '#673AB7',
        indigo: '#3F51B5',
        blue: '#2196F3',
        lightblue: '#03A9F4',
        cyan: '#00BCD4',
        teal: '#009688',
        green: '#4CAF50',
        lightgreen: '#8BC34A',
        lime: '#CDDC39',
        yellow: '#FFEB3B',
        amber: '#FFC107',
        orange: '#FF9800',
        deeporange: '#FF5722',
        brown: '#795548',
        grey: '#9E9E9E',
        bluegrey: '#607D8B'
      };
      if (!color) return;
      slide.style.cssText += '\n        background-color: ' + (namedColors[color] || color) + '\n      ';
    });
  }
};

var plugins = {
	pageTitle: pageTitle,
	syntaxHighlighter: syntaxHighlighter,
	fontawesome: fontawesome,
	pipeline: pipeline,
	fontZoom: fontZoom,
	twoColumn: twoColumn,
	iframe: iframe,
	progress: progress,
	themes: themes,
	transitions: transitions,
	touch: touch,
	style: style,
	fragment: fragment,
	speech: speech,
	backgroundImage: backgroundImage,
	backgroundColor: backgroundColor
};

var classNames = ['prev', 'current', 'next'];
var userPlugins = {};

var Diapo$1 = function () {

  /**
   * constructor
   */
  function Diapo(_ref) {
    var el = _ref.el;
    var content = _ref.content;
    classCallCheck(this, Diapo);


    // init values
    this.current = 0;
    this.enableKeyNav = true;
    this.content = content;
    this.plugins = this.getPlugins();
    this.initContainer(el);

    // parse
    this.runPlugin('beforeParse');
    _extends(this, parse(this.content));
    this.runPlugin('afterParse');

    // render
    this.renderContent();
    this.runPlugin('afterRender');

    //start up
    this.bindEvents();
    this.initRouter();
  }

  /**
   * init container
   */


  createClass(Diapo, [{
    key: 'initContainer',
    value: function initContainer(el) {
      this.container = $(el || 'body');
      this.container.classList.add('diapo-container');
    }

    /**
     * render content
     */

  }, {
    key: 'renderContent',
    value: function renderContent() {
      this.container.innerHTML = this.html;
      this.slides = $$('.diapo-slide');
    }

    /**
     * binding keyboard & mouse events
     */

  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var _this = this;

      var actions = {
        37: 'prev', //arrow left
        38: 'prev', //arrow up
        33: 'prev', //page up
        39: 'next', //arrow right
        40: 'next', //arrow down
        32: 'next', //space
        34: 'next', //page down
        13: 'next' //enter
      };
      window.addEventListener('keydown', function (e) {
        if (!_this.enableKeyNav) {
          return;
        }
        var action = actions[e.keyCode];
        action && e.preventDefault();
        action && _this.transition(action);
      });
    }

    /**
     * transition to next/prev page
     */

  }, {
    key: 'transition',
    value: function transition(dir) {
      var result = this.runPlugin('beforeTransition', dir);
      if (result.filter(function (r) {
        return r === false;
      }).length) return;
      this[dir]();
    }

    /**
     * get plugins
     */

  }, {
    key: 'getPlugins',
    value: function getPlugins() {
      _extends(plugins, userPlugins);
      return Object.keys(plugins).map(function (name) {
        plugins[name].name = name;
        return plugins[name];
      });
    }

    /**
     * run plugins at specified phase
     * @param phase (beforeParse|afterParse|afterRender)
     */

  }, {
    key: 'runPlugin',
    value: function runPlugin(phase) {
      var _this2 = this;

      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      return this.plugins.map(function (p) {
        var _p$phase;

        if (typeof p[phase] === 'function') return (_p$phase = p[phase]).call.apply(_p$phase, [_this2, _this2].concat(params));
      });
    }

    /**
     * handle router
     */

  }, {
    key: 'initRouter',
    value: function initRouter() {
      var _this3 = this;

      var onHashChange = function onHashChange(e) {
        var to = parseInt(location.hash.substr(1)) || 0;
        _this3.go(to);
      };
      window.addEventListener('hashchange', onHashChange);
      onHashChange();
    }

    /**
     * add plugin
     */

  }, {
    key: 'next',


    /**
     * next
     */
    value: function next() {
      if (this.current === this.slides.length - 1) {
        //last
        return;
      }
      location.hash = this.current + 1;
    }

    /**
     * previous
     */

  }, {
    key: 'prev',
    value: function prev() {
      if (this.current === 0) {
        //first
        return;
      }
      location.hash = this.current - 1;
    }

    /**
     * go to slide by index
     */

  }, {
    key: 'go',
    value: function go(index) {
      var _this4 = this;

      var current = this.current;
      sliceWithPadding(this.slides, current - 1, current + 2).forEach(function (slide, index) {
        slide && slide.classList.remove(classNames[index]);
      });
      sliceWithPadding(this.slides, index - 1, index + 2).forEach(function (slide, index) {
        slide && slide.classList.add(classNames[index]);
      });
      this.current = index;
      requestAnimationFrame(function (f) {
        [document.body, document.documentElement, _this4.container].forEach(function (e) {
          e.scrollTop && (e.scrollTop = 0);
        });
        _this4.runPlugin('afterTransition');
      });
    }
  }], [{
    key: 'addPlugin',
    value: function addPlugin(name, plugin) {
      userPlugins[name] = plugin;
    }
  }]);
  return Diapo;
}();

return Diapo$1;

})));
