!function(e){var o={};function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,o,t){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,o){if(1&o&&(e=r(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)r.d(t,n,function(o){return e[o]}.bind(null,n));return t},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="",r(r.s=0)}([function(e,o,r){r(1)},function(e,o,r){var t=r(2);t.upper,t.isString},function(e,o){jQuery(document).ready((function(e){jQuery("body.woocommerce-checkout form.woocommerce-checkout").on("change","input.qty",(function(){e.ajax({url:woocommerce_params.ajax_url,data:{action:"ffw_change_quantity_on_checkout","woocommerce-process-checkout-nonce":wc_checkout_params.update_order_review_nonce,form_value:jQuery(this).closest("form").serialize()},success:function(e){"success"===e.result?jQuery("body").trigger("update_checkout"):alert(e.message)},error:function(e){console.log(e)}})}))}))}]);