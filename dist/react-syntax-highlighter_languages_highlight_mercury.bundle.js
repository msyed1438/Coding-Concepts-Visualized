(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_mercury"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/mercury.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/mercury.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  var KEYWORDS = {\n    keyword:\n      'module use_module import_module include_module end_module initialise ' +\n      'mutable initialize finalize finalise interface implementation pred ' +\n      'mode func type inst solver any_pred any_func is semidet det nondet ' +\n      'multi erroneous failure cc_nondet cc_multi typeclass instance where ' +\n      'pragma promise external trace atomic or_else require_complete_switch ' +\n      'require_det require_semidet require_multi require_nondet ' +\n      'require_cc_multi require_cc_nondet require_erroneous require_failure',\n    meta:\n      // pragma\n      'inline no_inline type_spec source_file fact_table obsolete memo ' +\n      'loop_check minimal_model terminates does_not_terminate ' +\n      'check_termination promise_equivalent_clauses ' +\n      // preprocessor\n      'foreign_proc foreign_decl foreign_code foreign_type ' +\n      'foreign_import_module foreign_export_enum foreign_export ' +\n      'foreign_enum may_call_mercury will_not_call_mercury thread_safe ' +\n      'not_thread_safe maybe_thread_safe promise_pure promise_semipure ' +\n      'tabled_for_io local untrailed trailed attach_to_io_state ' +\n      'can_pass_as_mercury_type stable will_not_throw_exception ' +\n      'may_modify_trail will_not_modify_trail may_duplicate ' +\n      'may_not_duplicate affects_liveness does_not_affect_liveness ' +\n      'doesnt_affect_liveness no_sharing unknown_sharing sharing',\n    built_in:\n      'some all not if then else true fail false try catch catch_any ' +\n      'semidet_true semidet_false semidet_fail impure_true impure semipure'\n  };\n\n  var COMMENT = hljs.COMMENT('%', '$');\n\n  var NUMCODE = {\n    className: 'number',\n    begin: \"0'.\\\\|0[box][0-9a-fA-F]*\"\n  };\n\n  var ATOM = hljs.inherit(hljs.APOS_STRING_MODE, {relevance: 0});\n  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {relevance: 0});\n  var STRING_FMT = {\n    className: 'subst',\n    begin: '\\\\\\\\[abfnrtv]\\\\|\\\\\\\\x[0-9a-fA-F]*\\\\\\\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]',\n    relevance: 0\n  };\n  STRING.contains.push(STRING_FMT);\n\n  var IMPLICATION = {\n    className: 'built_in',\n    variants: [\n      {begin: '<=>'},\n      {begin: '<=', relevance: 0},\n      {begin: '=>', relevance: 0},\n      {begin: '/\\\\\\\\'},\n      {begin: '\\\\\\\\/'}\n    ]\n  };\n\n  var HEAD_BODY_CONJUNCTION = {\n    className: 'built_in',\n    variants: [\n      {begin: ':-\\\\|-->'},\n      {begin: '=', relevance: 0}\n    ]\n  };\n\n  return {\n    aliases: ['m', 'moo'],\n    keywords: KEYWORDS,\n    contains: [\n      IMPLICATION,\n      HEAD_BODY_CONJUNCTION,\n      COMMENT,\n      hljs.C_BLOCK_COMMENT_MODE,\n      NUMCODE,\n      hljs.NUMBER_MODE,\n      ATOM,\n      STRING,\n      {begin: /:-/} // relevance booster\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9tZXJjdXJ5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbWVyY3VyeS5qcz9iM2VlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDpcbiAgICAgICdtb2R1bGUgdXNlX21vZHVsZSBpbXBvcnRfbW9kdWxlIGluY2x1ZGVfbW9kdWxlIGVuZF9tb2R1bGUgaW5pdGlhbGlzZSAnICtcbiAgICAgICdtdXRhYmxlIGluaXRpYWxpemUgZmluYWxpemUgZmluYWxpc2UgaW50ZXJmYWNlIGltcGxlbWVudGF0aW9uIHByZWQgJyArXG4gICAgICAnbW9kZSBmdW5jIHR5cGUgaW5zdCBzb2x2ZXIgYW55X3ByZWQgYW55X2Z1bmMgaXMgc2VtaWRldCBkZXQgbm9uZGV0ICcgK1xuICAgICAgJ211bHRpIGVycm9uZW91cyBmYWlsdXJlIGNjX25vbmRldCBjY19tdWx0aSB0eXBlY2xhc3MgaW5zdGFuY2Ugd2hlcmUgJyArXG4gICAgICAncHJhZ21hIHByb21pc2UgZXh0ZXJuYWwgdHJhY2UgYXRvbWljIG9yX2Vsc2UgcmVxdWlyZV9jb21wbGV0ZV9zd2l0Y2ggJyArXG4gICAgICAncmVxdWlyZV9kZXQgcmVxdWlyZV9zZW1pZGV0IHJlcXVpcmVfbXVsdGkgcmVxdWlyZV9ub25kZXQgJyArXG4gICAgICAncmVxdWlyZV9jY19tdWx0aSByZXF1aXJlX2NjX25vbmRldCByZXF1aXJlX2Vycm9uZW91cyByZXF1aXJlX2ZhaWx1cmUnLFxuICAgIG1ldGE6XG4gICAgICAvLyBwcmFnbWFcbiAgICAgICdpbmxpbmUgbm9faW5saW5lIHR5cGVfc3BlYyBzb3VyY2VfZmlsZSBmYWN0X3RhYmxlIG9ic29sZXRlIG1lbW8gJyArXG4gICAgICAnbG9vcF9jaGVjayBtaW5pbWFsX21vZGVsIHRlcm1pbmF0ZXMgZG9lc19ub3RfdGVybWluYXRlICcgK1xuICAgICAgJ2NoZWNrX3Rlcm1pbmF0aW9uIHByb21pc2VfZXF1aXZhbGVudF9jbGF1c2VzICcgK1xuICAgICAgLy8gcHJlcHJvY2Vzc29yXG4gICAgICAnZm9yZWlnbl9wcm9jIGZvcmVpZ25fZGVjbCBmb3JlaWduX2NvZGUgZm9yZWlnbl90eXBlICcgK1xuICAgICAgJ2ZvcmVpZ25faW1wb3J0X21vZHVsZSBmb3JlaWduX2V4cG9ydF9lbnVtIGZvcmVpZ25fZXhwb3J0ICcgK1xuICAgICAgJ2ZvcmVpZ25fZW51bSBtYXlfY2FsbF9tZXJjdXJ5IHdpbGxfbm90X2NhbGxfbWVyY3VyeSB0aHJlYWRfc2FmZSAnICtcbiAgICAgICdub3RfdGhyZWFkX3NhZmUgbWF5YmVfdGhyZWFkX3NhZmUgcHJvbWlzZV9wdXJlIHByb21pc2Vfc2VtaXB1cmUgJyArXG4gICAgICAndGFibGVkX2Zvcl9pbyBsb2NhbCB1bnRyYWlsZWQgdHJhaWxlZCBhdHRhY2hfdG9faW9fc3RhdGUgJyArXG4gICAgICAnY2FuX3Bhc3NfYXNfbWVyY3VyeV90eXBlIHN0YWJsZSB3aWxsX25vdF90aHJvd19leGNlcHRpb24gJyArXG4gICAgICAnbWF5X21vZGlmeV90cmFpbCB3aWxsX25vdF9tb2RpZnlfdHJhaWwgbWF5X2R1cGxpY2F0ZSAnICtcbiAgICAgICdtYXlfbm90X2R1cGxpY2F0ZSBhZmZlY3RzX2xpdmVuZXNzIGRvZXNfbm90X2FmZmVjdF9saXZlbmVzcyAnICtcbiAgICAgICdkb2VzbnRfYWZmZWN0X2xpdmVuZXNzIG5vX3NoYXJpbmcgdW5rbm93bl9zaGFyaW5nIHNoYXJpbmcnLFxuICAgIGJ1aWx0X2luOlxuICAgICAgJ3NvbWUgYWxsIG5vdCBpZiB0aGVuIGVsc2UgdHJ1ZSBmYWlsIGZhbHNlIHRyeSBjYXRjaCBjYXRjaF9hbnkgJyArXG4gICAgICAnc2VtaWRldF90cnVlIHNlbWlkZXRfZmFsc2Ugc2VtaWRldF9mYWlsIGltcHVyZV90cnVlIGltcHVyZSBzZW1pcHVyZSdcbiAgfTtcblxuICB2YXIgQ09NTUVOVCA9IGhsanMuQ09NTUVOVCgnJScsICckJyk7XG5cbiAgdmFyIE5VTUNPREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBiZWdpbjogXCIwJy5cXFxcfDBbYm94XVswLTlhLWZBLUZdKlwiXG4gIH07XG5cbiAgdmFyIEFUT00gPSBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7cmVsZXZhbmNlOiAwfSk7XG4gIHZhciBTVFJJTkcgPSBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge3JlbGV2YW5jZTogMH0pO1xuICB2YXIgU1RSSU5HX0ZNVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46ICdcXFxcXFxcXFthYmZucnR2XVxcXFx8XFxcXFxcXFx4WzAtOWEtZkEtRl0qXFxcXFxcXFxcXFxcfCVbLSsjICouMC05XSpbZGlveFh1Y3NmZUVnR3BdJyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgU1RSSU5HLmNvbnRhaW5zLnB1c2goU1RSSU5HX0ZNVCk7XG5cbiAgdmFyIElNUExJQ0FUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge2JlZ2luOiAnPD0+J30sXG4gICAgICB7YmVnaW46ICc8PScsIHJlbGV2YW5jZTogMH0sXG4gICAgICB7YmVnaW46ICc9PicsIHJlbGV2YW5jZTogMH0sXG4gICAgICB7YmVnaW46ICcvXFxcXFxcXFwnfSxcbiAgICAgIHtiZWdpbjogJ1xcXFxcXFxcLyd9XG4gICAgXVxuICB9O1xuXG4gIHZhciBIRUFEX0JPRFlfQ09OSlVOQ1RJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46ICc6LVxcXFx8LS0+J30sXG4gICAgICB7YmVnaW46ICc9JywgcmVsZXZhbmNlOiAwfVxuICAgIF1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsnbScsICdtb28nXSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIElNUExJQ0FUSU9OLFxuICAgICAgSEVBRF9CT0RZX0NPTkpVTkNUSU9OLFxuICAgICAgQ09NTUVOVCxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBOVU1DT0RFLFxuICAgICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICAgIEFUT00sXG4gICAgICBTVFJJTkcsXG4gICAgICB7YmVnaW46IC86LS99IC8vIHJlbGV2YW5jZSBib29zdGVyXG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/mercury.js\n");

/***/ })

}]);