(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3678)}])},3844:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var a=r(5893),t=r(1664),i=r(9004);function s(e){return(0,a.jsx)("div",{style:e.style,className:"card is-8",children:(0,a.jsxs)("div",{className:"card-content",children:[(0,a.jsx)("div",{className:"media",children:(0,a.jsx)("div",{className:"media-content",children:(0,a.jsx)("p",{className:"title is-4",children:e.person.name})})}),(0,a.jsx)("div",{className:"content",children:(0,a.jsx)(t.default,{href:"/detail/"+e.person.name,children:(0,a.jsx)(i.zx,{color:"primary",children:"View Detail"})})})]})})}},6494:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var a=r(5893);function t(){return(0,a.jsx)("div",{className:"loader"})}},2788:function(e,n,r){"use strict";var a=r(9844);function t(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function i(){var e=t(["\n    query People($page: Int) {\n        people(page: $page) {\n            name\n            height\n            mass\n            gender\n            homeworld\n        }\n        people_has_next(page: $page)\n    }\n"]);return i=function(){return e},e}function s(){var e=t(["\n    query GetPerson($name: String!) {\n        person(name: $name) {\n            name\n            height\n            mass\n            gender\n            homeworld\n        }\n    }\n"]);return s=function(){return e},e}var c=a.gql(i()),o=a.gql(s());e.exports={GET_PERSON:o,GET_PEOPLE:c}},3678:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var a=r(5893),t=r(1641),i=r(2788),s=r(3844),c=r(6494),o=r(1163),l=r(1664),u=r(7294);function d(){var e=(0,o.useRouter)().query.page;e=Number.parseInt(e)||1,(0,u.useEffect)((function(){window.sessionStorage.setItem("page",e)}));var n=(0,t.a)(i.GET_PEOPLE,{variables:{page:e}}),r=n.loading,d=n.error,p=n.data;if(r)return(0,a.jsx)(c.Z,{});if(d)return"Error! ".concat(d.message);var f={width:"300px",marginTop:"10px",marginBottom:"10px",marginLeft:"2px",marginRight:"2px"};return(0,a.jsxs)("div",{style:{width:"95%"},className:"",children:[(0,a.jsx)("div",{style:{display:"inline-flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"flex-start"},children:p.people.map((function(n,r){return(0,a.jsx)(s.Z,{style:f,page:e,person:n},r)}))}),(0,a.jsxs)("nav",{className:"pagination",role:"navigation","aria-label":"pagination",children:[1===e?(0,a.jsx)("div",{}):(0,a.jsx)(l.default,{href:"/?page="+(e-1),children:(0,a.jsx)("a",{className:"pagination-previous",children:"Previous"})}),p&&p.people_has_next?(0,a.jsx)(l.default,{href:"/?page="+(e+1),children:(0,a.jsx)("a",{className:"pagination-next",children:"Next page"})}):(0,a.jsx)("div",{})]})]})}},1163:function(e,n,r){e.exports=r(387)}},function(e){e.O(0,[4,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);