(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_nix"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/nix.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/nix.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  var NIX_KEYWORDS = {\n    keyword:\n      'rec with let in inherit assert if else then',\n    literal:\n      'true false or and null',\n    built_in:\n      'import abort baseNameOf dirOf isNull builtins map removeAttrs throw ' +\n      'toString derivation'\n  };\n  var ANTIQUOTE = {\n    className: 'subst',\n    begin: /\\$\\{/,\n    end: /}/,\n    keywords: NIX_KEYWORDS\n  };\n  var ATTRS = {\n    begin: /[a-zA-Z0-9-_]+(\\s*=)/, returnBegin: true,\n    relevance: 0,\n    contains: [\n      {\n        className: 'attr',\n        begin: /\\S+/\n      }\n    ]\n  };\n  var STRING = {\n    className: 'string',\n    contains: [ANTIQUOTE],\n    variants: [\n      {begin: \"''\", end: \"''\"},\n      {begin: '\"', end: '\"'}\n    ]\n  };\n  var EXPRESSIONS = [\n    hljs.NUMBER_MODE,\n    hljs.HASH_COMMENT_MODE,\n    hljs.C_BLOCK_COMMENT_MODE,\n    STRING,\n    ATTRS\n  ];\n  ANTIQUOTE.contains = EXPRESSIONS;\n  return {\n    aliases: [\"nixos\"],\n    keywords: NIX_KEYWORDS,\n    contains: EXPRESSIONS\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9uaXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9uaXguanM/YWVlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIE5JWF9LRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOlxuICAgICAgJ3JlYyB3aXRoIGxldCBpbiBpbmhlcml0IGFzc2VydCBpZiBlbHNlIHRoZW4nLFxuICAgIGxpdGVyYWw6XG4gICAgICAndHJ1ZSBmYWxzZSBvciBhbmQgbnVsbCcsXG4gICAgYnVpbHRfaW46XG4gICAgICAnaW1wb3J0IGFib3J0IGJhc2VOYW1lT2YgZGlyT2YgaXNOdWxsIGJ1aWx0aW5zIG1hcCByZW1vdmVBdHRycyB0aHJvdyAnICtcbiAgICAgICd0b1N0cmluZyBkZXJpdmF0aW9uJ1xuICB9O1xuICB2YXIgQU5USVFVT1RFID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBiZWdpbjogL1xcJFxcey8sXG4gICAgZW5kOiAvfS8sXG4gICAga2V5d29yZHM6IE5JWF9LRVlXT1JEU1xuICB9O1xuICB2YXIgQVRUUlMgPSB7XG4gICAgYmVnaW46IC9bYS16QS1aMC05LV9dKyhcXHMqPSkvLCByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICAgIGJlZ2luOiAvXFxTKy9cbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIHZhciBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBjb250YWluczogW0FOVElRVU9URV0sXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtiZWdpbjogXCInJ1wiLCBlbmQ6IFwiJydcIn0sXG4gICAgICB7YmVnaW46ICdcIicsIGVuZDogJ1wiJ31cbiAgICBdXG4gIH07XG4gIHZhciBFWFBSRVNTSU9OUyA9IFtcbiAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICBTVFJJTkcsXG4gICAgQVRUUlNcbiAgXTtcbiAgQU5USVFVT1RFLmNvbnRhaW5zID0gRVhQUkVTU0lPTlM7XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogW1wibml4b3NcIl0sXG4gICAga2V5d29yZHM6IE5JWF9LRVlXT1JEUyxcbiAgICBjb250YWluczogRVhQUkVTU0lPTlNcbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/nix.js\n");

/***/ })

}]);