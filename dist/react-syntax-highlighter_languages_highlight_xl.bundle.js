(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_xl"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/xl.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/xl.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  var BUILTIN_MODULES =\n    'ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo ' +\n    'StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts';\n\n  var XL_KEYWORDS = {\n    keyword:\n      'if then else do while until for loop import with is as where when by data constant ' +\n      'integer real text name boolean symbol infix prefix postfix block tree',\n    literal:\n      'true false nil',\n    built_in:\n      'in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin ' +\n      'acos atan exp expm1 log log2 log10 log1p pi at text_length text_range ' +\n      'text_find text_replace contains page slide basic_slide title_slide ' +\n      'title subtitle fade_in fade_out fade_at clear_color color line_color ' +\n      'line_width texture_wrap texture_transform texture scale_?x scale_?y ' +\n      'scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y ' +\n      'rotate_?z? rectangle circle ellipse sphere path line_to move_to ' +\n      'quad_to curve_to theme background contents locally time mouse_?x ' +\n      'mouse_?y mouse_buttons ' +\n      BUILTIN_MODULES\n  };\n\n  var DOUBLE_QUOTE_TEXT = {\n    className: 'string',\n    begin: '\"', end: '\"', illegal: '\\\\n'\n  };\n  var SINGLE_QUOTE_TEXT = {\n    className: 'string',\n    begin: '\\'', end: '\\'', illegal: '\\\\n'\n  };\n  var LONG_TEXT = {\n    className: 'string',\n    begin: '<<', end: '>>'\n  };\n  var BASED_NUMBER = {\n    className: 'number',\n    begin: '[0-9]+#[0-9A-Z_]+(\\\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?'\n  };\n  var IMPORT = {\n    beginKeywords: 'import', end: '$',\n    keywords: XL_KEYWORDS,\n    contains: [DOUBLE_QUOTE_TEXT]\n  };\n  var FUNCTION_DEFINITION = {\n    className: 'function',\n    begin: /[a-z][^\\n]*->/, returnBegin: true, end: /->/,\n    contains: [\n      hljs.inherit(hljs.TITLE_MODE, {starts: {\n        endsWithParent: true,\n        keywords: XL_KEYWORDS\n      }})\n    ]\n  };\n  return {\n    aliases: ['tao'],\n    lexemes: /[a-zA-Z][a-zA-Z0-9_?]*/,\n    keywords: XL_KEYWORDS,\n    contains: [\n    hljs.C_LINE_COMMENT_MODE,\n    hljs.C_BLOCK_COMMENT_MODE,\n    DOUBLE_QUOTE_TEXT,\n    SINGLE_QUOTE_TEXT,\n    LONG_TEXT,\n    FUNCTION_DEFINITION,\n    IMPORT,\n    BASED_NUMBER,\n    hljs.NUMBER_MODE\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy94bC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3hsLmpzPzZhMWUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBCVUlMVElOX01PRFVMRVMgPVxuICAgICdPYmplY3RMb2FkZXIgQW5pbWF0ZSBNb3ZpZUNyZWRpdHMgU2xpZGVzIEZpbHRlcnMgU2hhZGluZyBNYXRlcmlhbHMgTGVuc0ZsYXJlIE1hcHBpbmcgVkxDQXVkaW9WaWRlbyAnICtcbiAgICAnU3RlcmVvRGVjb2RlciBQb2ludENsb3VkIE5ldHdvcmtBY2Nlc3MgUmVtb3RlQ29udHJvbCBSZWdFeHAgQ2hyb21hS2V5IFNub3dmYWxsIE5vZGVKUyBTcGVlY2ggQ2hhcnRzJztcblxuICB2YXIgWExfS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDpcbiAgICAgICdpZiB0aGVuIGVsc2UgZG8gd2hpbGUgdW50aWwgZm9yIGxvb3AgaW1wb3J0IHdpdGggaXMgYXMgd2hlcmUgd2hlbiBieSBkYXRhIGNvbnN0YW50ICcgK1xuICAgICAgJ2ludGVnZXIgcmVhbCB0ZXh0IG5hbWUgYm9vbGVhbiBzeW1ib2wgaW5maXggcHJlZml4IHBvc3RmaXggYmxvY2sgdHJlZScsXG4gICAgbGl0ZXJhbDpcbiAgICAgICd0cnVlIGZhbHNlIG5pbCcsXG4gICAgYnVpbHRfaW46XG4gICAgICAnaW4gbW9kIHJlbSBhbmQgb3IgeG9yIG5vdCBhYnMgc2lnbiBmbG9vciBjZWlsIHNxcnQgc2luIGNvcyB0YW4gYXNpbiAnICtcbiAgICAgICdhY29zIGF0YW4gZXhwIGV4cG0xIGxvZyBsb2cyIGxvZzEwIGxvZzFwIHBpIGF0IHRleHRfbGVuZ3RoIHRleHRfcmFuZ2UgJyArXG4gICAgICAndGV4dF9maW5kIHRleHRfcmVwbGFjZSBjb250YWlucyBwYWdlIHNsaWRlIGJhc2ljX3NsaWRlIHRpdGxlX3NsaWRlICcgK1xuICAgICAgJ3RpdGxlIHN1YnRpdGxlIGZhZGVfaW4gZmFkZV9vdXQgZmFkZV9hdCBjbGVhcl9jb2xvciBjb2xvciBsaW5lX2NvbG9yICcgK1xuICAgICAgJ2xpbmVfd2lkdGggdGV4dHVyZV93cmFwIHRleHR1cmVfdHJhbnNmb3JtIHRleHR1cmUgc2NhbGVfP3ggc2NhbGVfP3kgJyArXG4gICAgICAnc2NhbGVfP3o/IHRyYW5zbGF0ZV8/eCB0cmFuc2xhdGVfP3kgdHJhbnNsYXRlXz96PyByb3RhdGVfP3ggcm90YXRlXz95ICcgK1xuICAgICAgJ3JvdGF0ZV8/ej8gcmVjdGFuZ2xlIGNpcmNsZSBlbGxpcHNlIHNwaGVyZSBwYXRoIGxpbmVfdG8gbW92ZV90byAnICtcbiAgICAgICdxdWFkX3RvIGN1cnZlX3RvIHRoZW1lIGJhY2tncm91bmQgY29udGVudHMgbG9jYWxseSB0aW1lIG1vdXNlXz94ICcgK1xuICAgICAgJ21vdXNlXz95IG1vdXNlX2J1dHRvbnMgJyArXG4gICAgICBCVUlMVElOX01PRFVMRVNcbiAgfTtcblxuICB2YXIgRE9VQkxFX1FVT1RFX1RFWFQgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1wiJywgZW5kOiAnXCInLCBpbGxlZ2FsOiAnXFxcXG4nXG4gIH07XG4gIHZhciBTSU5HTEVfUVVPVEVfVEVYVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnXFwnJywgZW5kOiAnXFwnJywgaWxsZWdhbDogJ1xcXFxuJ1xuICB9O1xuICB2YXIgTE9OR19URVhUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICc8PCcsIGVuZDogJz4+J1xuICB9O1xuICB2YXIgQkFTRURfTlVNQkVSID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgYmVnaW46ICdbMC05XSsjWzAtOUEtWl9dKyhcXFxcLlswLTktQS1aX10rKT8jPyhbRWVdWystXT9bMC05XSspPydcbiAgfTtcbiAgdmFyIElNUE9SVCA9IHtcbiAgICBiZWdpbktleXdvcmRzOiAnaW1wb3J0JywgZW5kOiAnJCcsXG4gICAga2V5d29yZHM6IFhMX0tFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbRE9VQkxFX1FVT1RFX1RFWFRdXG4gIH07XG4gIHZhciBGVU5DVElPTl9ERUZJTklUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICBiZWdpbjogL1thLXpdW15cXG5dKi0+LywgcmV0dXJuQmVnaW46IHRydWUsIGVuZDogLy0+LyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge3N0YXJ0czoge1xuICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAga2V5d29yZHM6IFhMX0tFWVdPUkRTXG4gICAgICB9fSlcbiAgICBdXG4gIH07XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWyd0YW8nXSxcbiAgICBsZXhlbWVzOiAvW2EtekEtWl1bYS16QS1aMC05Xz9dKi8sXG4gICAga2V5d29yZHM6IFhMX0tFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgRE9VQkxFX1FVT1RFX1RFWFQsXG4gICAgU0lOR0xFX1FVT1RFX1RFWFQsXG4gICAgTE9OR19URVhULFxuICAgIEZVTkNUSU9OX0RFRklOSVRJT04sXG4gICAgSU1QT1JULFxuICAgIEJBU0VEX05VTUJFUixcbiAgICBobGpzLk5VTUJFUl9NT0RFXG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/xl.js\n");

/***/ })

}]);