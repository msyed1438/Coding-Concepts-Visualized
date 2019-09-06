(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_oxygene"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/oxygene.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/oxygene.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  var OXYGENE_KEYWORDS = 'abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue '+\n    'create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false '+\n    'final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited '+\n    'inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of '+\n    'old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly '+\n    'record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple '+\n    'type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal '+\n    'register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained';\n  var CURLY_COMMENT =  hljs.COMMENT(\n    '{',\n    '}',\n    {\n      relevance: 0\n    }\n  );\n  var PAREN_COMMENT = hljs.COMMENT(\n    '\\\\(\\\\*',\n    '\\\\*\\\\)',\n    {\n      relevance: 10\n    }\n  );\n  var STRING = {\n    className: 'string',\n    begin: '\\'', end: '\\'',\n    contains: [{begin: '\\'\\''}]\n  };\n  var CHAR_STRING = {\n    className: 'string', begin: '(#\\\\d+)+'\n  };\n  var FUNCTION = {\n    className: 'function',\n    beginKeywords: 'function constructor destructor procedure method', end: '[:;]',\n    keywords: 'function constructor|10 destructor|10 procedure|10 method|10',\n    contains: [\n      hljs.TITLE_MODE,\n      {\n        className: 'params',\n        begin: '\\\\(', end: '\\\\)',\n        keywords: OXYGENE_KEYWORDS,\n        contains: [STRING, CHAR_STRING]\n      },\n      CURLY_COMMENT, PAREN_COMMENT\n    ]\n  };\n  return {\n    case_insensitive: true,\n    lexemes: /\\.?\\w+/,\n    keywords: OXYGENE_KEYWORDS,\n    illegal: '(\"|\\\\$[G-Zg-z]|\\\\/\\\\*|</|=>|->)',\n    contains: [\n      CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,\n      STRING, CHAR_STRING,\n      hljs.NUMBER_MODE,\n      FUNCTION,\n      {\n        className: 'class',\n        begin: '=\\\\bclass\\\\b', end: 'end;',\n        keywords: OXYGENE_KEYWORDS,\n        contains: [\n          STRING, CHAR_STRING,\n          CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,\n          FUNCTION\n        ]\n      }\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9veHlnZW5lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvb3h5Z2VuZS5qcz9kMWMyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgT1hZR0VORV9LRVlXT1JEUyA9ICdhYnN0cmFjdCBhZGQgYW5kIGFycmF5IGFzIGFzYyBhc3BlY3QgYXNzZW1ibHkgYXN5bmMgYmVnaW4gYnJlYWsgYmxvY2sgYnkgY2FzZSBjbGFzcyBjb25jYXQgY29uc3QgY29weSBjb25zdHJ1Y3RvciBjb250aW51ZSAnK1xuICAgICdjcmVhdGUgZGVmYXVsdCBkZWxlZ2F0ZSBkZXNjIGRpc3RpbmN0IGRpdiBkbyBkb3dudG8gZHluYW1pYyBlYWNoIGVsc2UgZW1wdHkgZW5kIGVuc3VyZSBlbnVtIGVxdWFscyBldmVudCBleGNlcHQgZXhpdCBleHRlbnNpb24gZXh0ZXJuYWwgZmFsc2UgJytcbiAgICAnZmluYWwgZmluYWxpemUgZmluYWxpemVyIGZpbmFsbHkgZmxhZ3MgZm9yIGZvcndhcmQgZnJvbSBmdW5jdGlvbiBmdXR1cmUgZ2xvYmFsIGdyb3VwIGhhcyBpZiBpbXBsZW1lbnRhdGlvbiBpbXBsZW1lbnRzIGltcGxpZXMgaW4gaW5kZXggaW5oZXJpdGVkICcrXG4gICAgJ2lubGluZSBpbnRlcmZhY2UgaW50byBpbnZhcmlhbnRzIGlzIGl0ZXJhdG9yIGpvaW4gbG9ja2VkIGxvY2tpbmcgbG9vcCBtYXRjaGluZyBtZXRob2QgbW9kIG1vZHVsZSBuYW1lc3BhY2UgbmVzdGVkIG5ldyBuaWwgbm90IG5vdGlmeSBudWxsYWJsZSBvZiAnK1xuICAgICdvbGQgb24gb3BlcmF0b3Igb3Igb3JkZXIgb3V0IG92ZXJyaWRlIHBhcmFsbGVsIHBhcmFtcyBwYXJ0aWFsIHBpbm5lZCBwcml2YXRlIHByb2NlZHVyZSBwcm9wZXJ0eSBwcm90ZWN0ZWQgcHVibGljIHF1ZXJ5YWJsZSByYWlzZSByZWFkIHJlYWRvbmx5ICcrXG4gICAgJ3JlY29yZCByZWludHJvZHVjZSByZW1vdmUgcmVwZWF0IHJlcXVpcmUgcmVzdWx0IHJldmVyc2Ugc2VhbGVkIHNlbGVjdCBzZWxmIHNlcXVlbmNlIHNldCBzaGwgc2hyIHNraXAgc3RhdGljIHN0ZXAgc29mdCB0YWtlIHRoZW4gdG8gdHJ1ZSB0cnkgdHVwbGUgJytcbiAgICAndHlwZSB1bmlvbiB1bml0IHVuc2FmZSB1bnRpbCB1c2VzIHVzaW5nIHZhciB2aXJ0dWFsIHJhaXNlcyB2b2xhdGlsZSB3aGVyZSB3aGlsZSB3aXRoIHdyaXRlIHhvciB5aWVsZCBhd2FpdCBtYXBwZWQgZGVwcmVjYXRlZCBzdGRjYWxsIGNkZWNsIHBhc2NhbCAnK1xuICAgICdyZWdpc3RlciBzYWZlY2FsbCBvdmVybG9hZCBsaWJyYXJ5IHBsYXRmb3JtIHJlZmVyZW5jZSBwYWNrZWQgc3RyaWN0IHB1Ymxpc2hlZCBhdXRvcmVsZWFzZXBvb2wgc2VsZWN0b3Igc3Ryb25nIHdlYWsgdW5yZXRhaW5lZCc7XG4gIHZhciBDVVJMWV9DT01NRU5UID0gIGhsanMuQ09NTUVOVChcbiAgICAneycsXG4gICAgJ30nLFxuICAgIHtcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH1cbiAgKTtcbiAgdmFyIFBBUkVOX0NPTU1FTlQgPSBobGpzLkNPTU1FTlQoXG4gICAgJ1xcXFwoXFxcXConLFxuICAgICdcXFxcKlxcXFwpJyxcbiAgICB7XG4gICAgICByZWxldmFuY2U6IDEwXG4gICAgfVxuICApO1xuICB2YXIgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcXCcnLCBlbmQ6ICdcXCcnLFxuICAgIGNvbnRhaW5zOiBbe2JlZ2luOiAnXFwnXFwnJ31dXG4gIH07XG4gIHZhciBDSEFSX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLCBiZWdpbjogJygjXFxcXGQrKSsnXG4gIH07XG4gIHZhciBGVU5DVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgYmVnaW5LZXl3b3JkczogJ2Z1bmN0aW9uIGNvbnN0cnVjdG9yIGRlc3RydWN0b3IgcHJvY2VkdXJlIG1ldGhvZCcsIGVuZDogJ1s6O10nLFxuICAgIGtleXdvcmRzOiAnZnVuY3Rpb24gY29uc3RydWN0b3J8MTAgZGVzdHJ1Y3RvcnwxMCBwcm9jZWR1cmV8MTAgbWV0aG9kfDEwJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5USVRMRV9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICBiZWdpbjogJ1xcXFwoJywgZW5kOiAnXFxcXCknLFxuICAgICAgICBrZXl3b3JkczogT1hZR0VORV9LRVlXT1JEUyxcbiAgICAgICAgY29udGFpbnM6IFtTVFJJTkcsIENIQVJfU1RSSU5HXVxuICAgICAgfSxcbiAgICAgIENVUkxZX0NPTU1FTlQsIFBBUkVOX0NPTU1FTlRcbiAgICBdXG4gIH07XG4gIHJldHVybiB7XG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBsZXhlbWVzOiAvXFwuP1xcdysvLFxuICAgIGtleXdvcmRzOiBPWFlHRU5FX0tFWVdPUkRTLFxuICAgIGlsbGVnYWw6ICcoXCJ8XFxcXCRbRy1aZy16XXxcXFxcL1xcXFwqfDwvfD0+fC0+KScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIENVUkxZX0NPTU1FTlQsIFBBUkVOX0NPTU1FTlQsIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIFNUUklORywgQ0hBUl9TVFJJTkcsXG4gICAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgICAgRlVOQ1RJT04sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW46ICc9XFxcXGJjbGFzc1xcXFxiJywgZW5kOiAnZW5kOycsXG4gICAgICAgIGtleXdvcmRzOiBPWFlHRU5FX0tFWVdPUkRTLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIFNUUklORywgQ0hBUl9TVFJJTkcsXG4gICAgICAgICAgQ1VSTFlfQ09NTUVOVCwgUEFSRU5fQ09NTUVOVCwgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIEZVTkNUSU9OXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/oxygene.js\n");

/***/ })

}]);