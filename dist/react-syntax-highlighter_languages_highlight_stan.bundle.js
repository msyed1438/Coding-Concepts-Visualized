(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_stan"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/stan.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/stan.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  return {\n    contains: [\n      hljs.HASH_COMMENT_MODE,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      {\n        begin: hljs.UNDERSCORE_IDENT_RE,\n        lexemes: hljs.UNDERSCORE_IDENT_RE,\n        keywords: {\n          // Stan's keywords\n          name:\n            'for in while repeat until if then else',\n          // Stan's probablity distributions (less beta and gamma, as commonly\n          // used for parameter names). So far, _log and _rng variants are not\n          // included\n          symbol:\n            'bernoulli bernoulli_logit binomial binomial_logit '               +\n            'beta_binomial hypergeometric categorical categorical_logit '      +\n            'ordered_logistic neg_binomial neg_binomial_2 '                    +\n            'neg_binomial_2_log poisson poisson_log multinomial normal '       +\n            'exp_mod_normal skew_normal student_t cauchy double_exponential '  +\n            'logistic gumbel lognormal chi_square inv_chi_square '             +\n            'scaled_inv_chi_square exponential inv_gamma weibull frechet '     +\n            'rayleigh wiener pareto pareto_type_2 von_mises uniform '          +\n            'multi_normal multi_normal_prec multi_normal_cholesky multi_gp '   +\n            'multi_gp_cholesky multi_student_t gaussian_dlm_obs dirichlet '    +\n            'lkj_corr lkj_corr_cholesky wishart inv_wishart',\n          // Stan's data types\n          'selector-tag':\n            'int real vector simplex unit_vector ordered positive_ordered '    +\n            'row_vector matrix cholesky_factor_corr cholesky_factor_cov '      +\n            'corr_matrix cov_matrix',\n          // Stan's model blocks\n          title:\n            'functions model data parameters quantities transformed '          +\n            'generated',\n          literal:\n            'true false'\n        },\n        relevance: 0\n      },\n      // The below is all taken from the R language definition\n      {\n        // hex value\n        className: 'number',\n        begin: \"0[xX][0-9a-fA-F]+[Li]?\\\\b\",\n        relevance: 0\n      },\n      {\n        // hex value\n        className: 'number',\n        begin: \"0[xX][0-9a-fA-F]+[Li]?\\\\b\",\n        relevance: 0\n      },\n      {\n        // explicit integer\n        className: 'number',\n        begin: \"\\\\d+(?:[eE][+\\\\-]?\\\\d*)?L\\\\b\",\n        relevance: 0\n      },\n      {\n        // number with trailing decimal\n        className: 'number',\n        begin: \"\\\\d+\\\\.(?!\\\\d)(?:i\\\\b)?\",\n        relevance: 0\n      },\n      {\n        // number\n        className: 'number',\n        begin: \"\\\\d+(?:\\\\.\\\\d*)?(?:[eE][+\\\\-]?\\\\d*)?i?\\\\b\",\n        relevance: 0\n      },\n      {\n        // number with leading decimal\n        className: 'number',\n        begin: \"\\\\.\\\\d+(?:[eE][+\\\\-]?\\\\d*)?i?\\\\b\",\n        relevance: 0\n      }\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9zdGFuLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc3Rhbi5qcz9lYjZhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgICAgbGV4ZW1lczogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgIC8vIFN0YW4ncyBrZXl3b3Jkc1xuICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAnZm9yIGluIHdoaWxlIHJlcGVhdCB1bnRpbCBpZiB0aGVuIGVsc2UnLFxuICAgICAgICAgIC8vIFN0YW4ncyBwcm9iYWJsaXR5IGRpc3RyaWJ1dGlvbnMgKGxlc3MgYmV0YSBhbmQgZ2FtbWEsIGFzIGNvbW1vbmx5XG4gICAgICAgICAgLy8gdXNlZCBmb3IgcGFyYW1ldGVyIG5hbWVzKS4gU28gZmFyLCBfbG9nIGFuZCBfcm5nIHZhcmlhbnRzIGFyZSBub3RcbiAgICAgICAgICAvLyBpbmNsdWRlZFxuICAgICAgICAgIHN5bWJvbDpcbiAgICAgICAgICAgICdiZXJub3VsbGkgYmVybm91bGxpX2xvZ2l0IGJpbm9taWFsIGJpbm9taWFsX2xvZ2l0ICcgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAnYmV0YV9iaW5vbWlhbCBoeXBlcmdlb21ldHJpYyBjYXRlZ29yaWNhbCBjYXRlZ29yaWNhbF9sb2dpdCAnICAgICAgK1xuICAgICAgICAgICAgJ29yZGVyZWRfbG9naXN0aWMgbmVnX2Jpbm9taWFsIG5lZ19iaW5vbWlhbF8yICcgICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICduZWdfYmlub21pYWxfMl9sb2cgcG9pc3NvbiBwb2lzc29uX2xvZyBtdWx0aW5vbWlhbCBub3JtYWwgJyAgICAgICArXG4gICAgICAgICAgICAnZXhwX21vZF9ub3JtYWwgc2tld19ub3JtYWwgc3R1ZGVudF90IGNhdWNoeSBkb3VibGVfZXhwb25lbnRpYWwgJyAgK1xuICAgICAgICAgICAgJ2xvZ2lzdGljIGd1bWJlbCBsb2dub3JtYWwgY2hpX3NxdWFyZSBpbnZfY2hpX3NxdWFyZSAnICAgICAgICAgICAgICtcbiAgICAgICAgICAgICdzY2FsZWRfaW52X2NoaV9zcXVhcmUgZXhwb25lbnRpYWwgaW52X2dhbW1hIHdlaWJ1bGwgZnJlY2hldCAnICAgICArXG4gICAgICAgICAgICAncmF5bGVpZ2ggd2llbmVyIHBhcmV0byBwYXJldG9fdHlwZV8yIHZvbl9taXNlcyB1bmlmb3JtICcgICAgICAgICAgK1xuICAgICAgICAgICAgJ211bHRpX25vcm1hbCBtdWx0aV9ub3JtYWxfcHJlYyBtdWx0aV9ub3JtYWxfY2hvbGVza3kgbXVsdGlfZ3AgJyAgICtcbiAgICAgICAgICAgICdtdWx0aV9ncF9jaG9sZXNreSBtdWx0aV9zdHVkZW50X3QgZ2F1c3NpYW5fZGxtX29icyBkaXJpY2hsZXQgJyAgICArXG4gICAgICAgICAgICAnbGtqX2NvcnIgbGtqX2NvcnJfY2hvbGVza3kgd2lzaGFydCBpbnZfd2lzaGFydCcsXG4gICAgICAgICAgLy8gU3RhbidzIGRhdGEgdHlwZXNcbiAgICAgICAgICAnc2VsZWN0b3ItdGFnJzpcbiAgICAgICAgICAgICdpbnQgcmVhbCB2ZWN0b3Igc2ltcGxleCB1bml0X3ZlY3RvciBvcmRlcmVkIHBvc2l0aXZlX29yZGVyZWQgJyAgICArXG4gICAgICAgICAgICAncm93X3ZlY3RvciBtYXRyaXggY2hvbGVza3lfZmFjdG9yX2NvcnIgY2hvbGVza3lfZmFjdG9yX2NvdiAnICAgICAgK1xuICAgICAgICAgICAgJ2NvcnJfbWF0cml4IGNvdl9tYXRyaXgnLFxuICAgICAgICAgIC8vIFN0YW4ncyBtb2RlbCBibG9ja3NcbiAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICdmdW5jdGlvbnMgbW9kZWwgZGF0YSBwYXJhbWV0ZXJzIHF1YW50aXRpZXMgdHJhbnNmb3JtZWQgJyAgICAgICAgICArXG4gICAgICAgICAgICAnZ2VuZXJhdGVkJyxcbiAgICAgICAgICBsaXRlcmFsOlxuICAgICAgICAgICAgJ3RydWUgZmFsc2UnXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIC8vIFRoZSBiZWxvdyBpcyBhbGwgdGFrZW4gZnJvbSB0aGUgUiBsYW5ndWFnZSBkZWZpbml0aW9uXG4gICAgICB7XG4gICAgICAgIC8vIGhleCB2YWx1ZVxuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogXCIwW3hYXVswLTlhLWZBLUZdK1tMaV0/XFxcXGJcIixcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBoZXggdmFsdWVcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IFwiMFt4WF1bMC05YS1mQS1GXStbTGldP1xcXFxiXCIsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gZXhwbGljaXQgaW50ZWdlclxuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogXCJcXFxcZCsoPzpbZUVdWytcXFxcLV0/XFxcXGQqKT9MXFxcXGJcIixcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBudW1iZXIgd2l0aCB0cmFpbGluZyBkZWNpbWFsXG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiBcIlxcXFxkK1xcXFwuKD8hXFxcXGQpKD86aVxcXFxiKT9cIixcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBudW1iZXJcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IFwiXFxcXGQrKD86XFxcXC5cXFxcZCopPyg/OltlRV1bK1xcXFwtXT9cXFxcZCopP2k/XFxcXGJcIixcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBudW1iZXIgd2l0aCBsZWFkaW5nIGRlY2ltYWxcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IFwiXFxcXC5cXFxcZCsoPzpbZUVdWytcXFxcLV0/XFxcXGQqKT9pP1xcXFxiXCIsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/stan.js\n");

/***/ })

}]);