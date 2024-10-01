// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t={all:["bool","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["bool","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],boolean:["bool"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]},n=/_and_generic$/;function i(){return function(){var i,e,l,o,u;return 0===arguments.length?t.all.slice():(l=!1,i=arguments[0],n.test(i)&&(o=n,u="","all"!==(i=i.replace(o,u))&&(l=!0)),e=(e=t[i])?e.slice():[],l&&e.length>0&&e.push("generic"),e)}("signed_integer")}export{i as default};
//# sourceMappingURL=mod.js.map
