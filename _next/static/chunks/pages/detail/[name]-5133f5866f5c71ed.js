(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[359],{1777:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail/[name]",function(){return s(6392)}])},2788:function(e,n,s){"use strict";var r=s(9844);function t(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function a(){var e=t(["\n    query People($page: Int) {\n        people(page: $page) {\n            name\n            height\n            mass\n            gender\n            homeworld\n        }\n        people_has_next(page: $page)\n    }\n"]);return a=function(){return e},e}function i(){var e=t(["\n    query GetPerson($name: String!) {\n        person(name: $name) {\n            name\n            height\n            mass\n            gender\n            homeworld\n        }\n    }\n"]);return i=function(){return e},e}var l=r.gql(a()),c=r.gql(i());e.exports={GET_PERSON:c,GET_PEOPLE:l}},6392:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return h}});var r=s(5893),t=s(1163),a=s(1641),i=s(2788);function l(e){return(0,r.jsxs)("div",{style:{width:"100%"},children:[(0,r.jsx)("h1",{className:"title",children:e.person.name}),(0,r.jsxs)("nav",{className:"level",children:[(0,r.jsx)("div",{className:"level-item has-text-centered",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"heading",children:"Height"}),(0,r.jsx)("p",{className:"title",children:e.person.height})]})}),(0,r.jsx)("div",{className:"level-item has-text-centered",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"heading",children:"Mass"}),(0,r.jsx)("p",{className:"title",children:e.person.mass})]})}),(0,r.jsx)("div",{className:"level-item has-text-centered",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"heading",children:"Gender"}),(0,r.jsx)("p",{className:"title",children:e.person.gender})]})}),(0,r.jsx)("div",{className:"level-item has-text-centered",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"heading",children:"Home World"}),(0,r.jsx)("p",{className:"title",children:e.person.homeworld})]})})]})]})}var c=s(7294),d=s(1664),o=s(9004);function h(){var e=(0,c.useState)(0),n=e[0],s=e[1];(0,c.useEffect)((function(){s(parseInt(window.sessionStorage.getItem("page")))}));var h=(0,t.useRouter)().query.name,u=(0,a.a)(i.GET_PERSON,{variables:{name:h}}),p=u.loading,m=u.error,x=u.data;if(p)return"Loading...";if(m)return"Error! ".concat(m.message);return(0,r.jsxs)("div",{style:{width:"50%"},children:[x?x.person.map((function(e,n){return(0,r.jsx)(l,{person:e},n)})):(0,r.jsx)("div",{}),(0,r.jsx)("div",{style:{display:"grid"},children:(0,r.jsx)(d.default,{href:"/?page="+n,children:(0,r.jsx)(o.zx,{style:{marginTop:"50px"},color:"",children:"Back"})})})]})}},1163:function(e,n,s){e.exports=s(387)}},function(e){e.O(0,[4,774,888,179],(function(){return n=1777,e(e.s=n);var n}));var n=e.O();_N_E=n}]);