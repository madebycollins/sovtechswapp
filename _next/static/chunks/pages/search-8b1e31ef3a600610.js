(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{8161:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return r(9505)}])},3844:function(n,e,r){"use strict";r.d(e,{Z:function(){return s}});var t=r(5893),i=r(1664),a=r(9004);function s(n){return(0,t.jsx)("div",{style:n.style,className:"card is-8",children:(0,t.jsxs)("div",{className:"card-content",children:[(0,t.jsx)("div",{className:"media",children:(0,t.jsx)("div",{className:"media-content",children:(0,t.jsx)("p",{className:"title is-4",children:n.person.name})})}),(0,t.jsx)("div",{className:"content",children:(0,t.jsx)(i.default,{href:"/detail/"+n.person.name,children:(0,t.jsx)(a.zx,{color:"primary",children:"View Detail"})})})]})})}},2788:function(n,e,r){"use strict";var t=r(9844);function i(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function a(){var n=i(["\n    query People($page: Int) {\n        people(page: $page) {\n            name\n            height\n            mass\n            gender\n            homeworld\n        }\n        people_has_next(page: $page)\n    }\n"]);return a=function(){return n},n}function s(){var n=i(["\n    query GetPerson($name: String!) {\n        person(name: $name) {\n            name\n            height\n            mass\n            gender\n            homeworld\n        }\n    }\n"]);return s=function(){return n},n}var o=t.gql(a()),c=t.gql(s());n.exports={GET_PERSON:c,GET_PEOPLE:o}},9505:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var t=r(5893),i=r(3359),a=r(2788),s=r(7294),o=r(3844);function c(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=[],t=!0,i=!1,a=void 0;try{for(var s,o=n[Symbol.iterator]();!(t=(s=o.next()).done)&&(r.push(s.value),!e||r.length!==e);t=!0);}catch(c){i=!0,a=c}finally{try{t||null==o.return||o.return()}finally{if(i)throw a}}return r}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(){var n=(0,s.useState)(""),e=n[0],r=n[1],l=c((0,i.t)(a.GET_PERSON),2),u=l[0],d=l[1],f=d.loading,h=d.error,p=d.data;if(f)return(0,t.jsx)("p",{children:"Loading ..."});if(h)return"Error! ".concat(h);return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"between"},children:[(0,t.jsx)("input",{className:"input",type:"text",value:e,onChange:function(n){r(n.target.value)},placeholder:"Search..."}),(0,t.jsx)("div",{style:{marginLeft:"20px"},className:"field is-grouped",children:(0,t.jsx)("div",{className:"control",children:(0,t.jsx)("button",{className:"button is-link",onClick:function(){return u({variables:{name:e}}),f?"Loading...":h?(console.log("error",h),"Error! ".concat(h)):void 0},children:"Submit"})})})]}),(0,t.jsx)("br",{}),p?p.person.map((function(n,e){return(0,t.jsx)(o.Z,{person:n},e)})):(0,t.jsx)("div",{})]})}}},function(n){n.O(0,[4,774,888,179],(function(){return e=8161,n(n.s=e);var e}));var e=n.O();_N_E=e}]);