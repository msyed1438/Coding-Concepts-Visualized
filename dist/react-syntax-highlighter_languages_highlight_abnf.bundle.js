(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_abnf"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/abnf.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/abnf.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n    var regexes = {\n        ruleDeclaration: \"^[a-zA-Z][a-zA-Z0-9-]*\",\n        unexpectedChars: \"[!@#$^&',?+~`|:]\"\n    };\n\n    var keywords = [\n        \"ALPHA\",\n        \"BIT\",\n        \"CHAR\",\n        \"CR\",\n        \"CRLF\",\n        \"CTL\",\n        \"DIGIT\",\n        \"DQUOTE\",\n        \"HEXDIG\",\n        \"HTAB\",\n        \"LF\",\n        \"LWSP\",\n        \"OCTET\",\n        \"SP\",\n        \"VCHAR\",\n        \"WSP\"\n    ];\n\n    var commentMode = hljs.COMMENT(\";\", \"$\");\n\n    var terminalBinaryMode = {\n        className: \"symbol\",\n        begin: /%b[0-1]+(-[0-1]+|(\\.[0-1]+)+){0,1}/\n    };\n\n    var terminalDecimalMode = {\n        className: \"symbol\",\n        begin: /%d[0-9]+(-[0-9]+|(\\.[0-9]+)+){0,1}/\n    };\n\n    var terminalHexadecimalMode = {\n        className: \"symbol\",\n        begin: /%x[0-9A-F]+(-[0-9A-F]+|(\\.[0-9A-F]+)+){0,1}/,\n    };\n\n    var caseSensitivityIndicatorMode = {\n        className: \"symbol\",\n        begin: /%[si]/\n    };\n\n    var ruleDeclarationMode = {\n        begin: regexes.ruleDeclaration + '\\\\s*=',\n        returnBegin: true,\n        end: /=/,\n        relevance: 0,\n        contains: [{className: \"attribute\", begin: regexes.ruleDeclaration}]\n    };\n\n    return {\n      illegal: regexes.unexpectedChars,\n      keywords: keywords.join(\" \"),\n      contains: [\n          ruleDeclarationMode,\n          commentMode,\n          terminalBinaryMode,\n          terminalDecimalMode,\n          terminalHexadecimalMode,\n          caseSensitivityIndicatorMode,\n          hljs.QUOTE_STRING_MODE,\n          hljs.NUMBER_MODE\n      ]\n    };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9hYm5mLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYWJuZi5qcz85NGM0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICAgIHZhciByZWdleGVzID0ge1xuICAgICAgICBydWxlRGVjbGFyYXRpb246IFwiXlthLXpBLVpdW2EtekEtWjAtOS1dKlwiLFxuICAgICAgICB1bmV4cGVjdGVkQ2hhcnM6IFwiWyFAIyReJicsPyt+YHw6XVwiXG4gICAgfTtcblxuICAgIHZhciBrZXl3b3JkcyA9IFtcbiAgICAgICAgXCJBTFBIQVwiLFxuICAgICAgICBcIkJJVFwiLFxuICAgICAgICBcIkNIQVJcIixcbiAgICAgICAgXCJDUlwiLFxuICAgICAgICBcIkNSTEZcIixcbiAgICAgICAgXCJDVExcIixcbiAgICAgICAgXCJESUdJVFwiLFxuICAgICAgICBcIkRRVU9URVwiLFxuICAgICAgICBcIkhFWERJR1wiLFxuICAgICAgICBcIkhUQUJcIixcbiAgICAgICAgXCJMRlwiLFxuICAgICAgICBcIkxXU1BcIixcbiAgICAgICAgXCJPQ1RFVFwiLFxuICAgICAgICBcIlNQXCIsXG4gICAgICAgIFwiVkNIQVJcIixcbiAgICAgICAgXCJXU1BcIlxuICAgIF07XG5cbiAgICB2YXIgY29tbWVudE1vZGUgPSBobGpzLkNPTU1FTlQoXCI7XCIsIFwiJFwiKTtcblxuICAgIHZhciB0ZXJtaW5hbEJpbmFyeU1vZGUgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJzeW1ib2xcIixcbiAgICAgICAgYmVnaW46IC8lYlswLTFdKygtWzAtMV0rfChcXC5bMC0xXSspKyl7MCwxfS9cbiAgICB9O1xuXG4gICAgdmFyIHRlcm1pbmFsRGVjaW1hbE1vZGUgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJzeW1ib2xcIixcbiAgICAgICAgYmVnaW46IC8lZFswLTldKygtWzAtOV0rfChcXC5bMC05XSspKyl7MCwxfS9cbiAgICB9O1xuXG4gICAgdmFyIHRlcm1pbmFsSGV4YWRlY2ltYWxNb2RlID0ge1xuICAgICAgICBjbGFzc05hbWU6IFwic3ltYm9sXCIsXG4gICAgICAgIGJlZ2luOiAvJXhbMC05QS1GXSsoLVswLTlBLUZdK3woXFwuWzAtOUEtRl0rKSspezAsMX0vLFxuICAgIH07XG5cbiAgICB2YXIgY2FzZVNlbnNpdGl2aXR5SW5kaWNhdG9yTW9kZSA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInN5bWJvbFwiLFxuICAgICAgICBiZWdpbjogLyVbc2ldL1xuICAgIH07XG5cbiAgICB2YXIgcnVsZURlY2xhcmF0aW9uTW9kZSA9IHtcbiAgICAgICAgYmVnaW46IHJlZ2V4ZXMucnVsZURlY2xhcmF0aW9uICsgJ1xcXFxzKj0nLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgZW5kOiAvPS8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFt7Y2xhc3NOYW1lOiBcImF0dHJpYnV0ZVwiLCBiZWdpbjogcmVnZXhlcy5ydWxlRGVjbGFyYXRpb259XVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWxsZWdhbDogcmVnZXhlcy51bmV4cGVjdGVkQ2hhcnMsXG4gICAgICBrZXl3b3Jkczoga2V5d29yZHMuam9pbihcIiBcIiksXG4gICAgICBjb250YWluczogW1xuICAgICAgICAgIHJ1bGVEZWNsYXJhdGlvbk1vZGUsXG4gICAgICAgICAgY29tbWVudE1vZGUsXG4gICAgICAgICAgdGVybWluYWxCaW5hcnlNb2RlLFxuICAgICAgICAgIHRlcm1pbmFsRGVjaW1hbE1vZGUsXG4gICAgICAgICAgdGVybWluYWxIZXhhZGVjaW1hbE1vZGUsXG4gICAgICAgICAgY2FzZVNlbnNpdGl2aXR5SW5kaWNhdG9yTW9kZSxcbiAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgIGhsanMuTlVNQkVSX01PREVcbiAgICAgIF1cbiAgICB9O1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/abnf.js\n");

/***/ })

}]);