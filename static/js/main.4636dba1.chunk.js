(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t(5),s=t.n(c),r=(t(14),t(15),t(4)),h=t(6),o=t(7),i=t(2),d=t(9),j=t(8),l=t(0);var b=function(e){return Object(l.jsxs)("main",{children:[Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",name:"firstName",value:e.data.firstName,onChange:e.handleChange,placeholder:"First Name"})," ",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",name:"lastName",value:e.data.lastName,onChange:e.handleChange,placeholder:"Last Name"})," ",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",name:"age",value:e.data.age,onChange:e.handleChange,placeholder:"Age"})," ",Object(l.jsx)("br",{}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",name:"gender",value:"male",checked:"male"===e.data.gender,onChange:e.handleChange})," Male"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",name:"gender",value:"female",checked:"female"===e.data.gender,onChange:e.handleChange})," Female"]}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:"location:"}),Object(l.jsxs)("select",{value:e.data.location,name:"location",onChange:e.handleChange,children:[Object(l.jsx)("option",{value:"moscow",children:"Moscow"}),Object(l.jsx)("option",{value:"kazan",children:"Kazan"}),Object(l.jsx)("option",{value:"volgograd",children:"Volgograd"})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",name:"isVegan",checked:e.data.isVegan,onChange:e.handleChange}),"Vegan"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",name:"isRowFood",checked:e.data.isRowFood,onChange:e.handleChange}),"Row food"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",name:"isBreatharian",checked:e.data.isBreatharian,onChange:e.handleChange}),"Breatharian"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",name:"isKosher",checked:e.data.isKosher,onChange:e.handleChange}),"Kosher"]}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{children:"Submit"})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("h2",{children:"Entered information:"}),Object(l.jsxs)("p",{children:["Your name: ",e.data.firstName," ",e.data.lastName]}),Object(l.jsxs)("p",{children:["Your age: ",e.data.age]}),Object(l.jsxs)("p",{children:["Your gender: ",e.data.gender]}),Object(l.jsxs)("p",{children:["Your destination: ",e.data.location]}),Object(l.jsx)("p",{children:"Your dietary restrictions: "}),Object(l.jsxs)("p",{children:["Vegan: ",e.data.isVegan?"yes":"no"]}),Object(l.jsxs)("p",{children:["Row food: ",e.data.isRowFood?"yes":"no"]}),Object(l.jsxs)("p",{children:["Breatharian: ",e.data.isBreatharian?"yes":"no"]}),Object(l.jsxs)("p",{children:["Kosher: ",e.data.isKosher?"yes":"no"]})]})},x=function(e){Object(d.a)(t,e);var a=Object(j.a)(t);function t(){var e;return Object(h.a)(this,t),(e=a.call(this)).state={firstName:"",lastName:"",age:"",gender:"",location:"",isVegan:!1,isRowFood:!1,isBreatharian:!1,isKosher:!1},e.handleChange=e.handleChange.bind(Object(i.a)(e)),e}return Object(o.a)(t,[{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value,c=a.type,s=a.checked;"checkbox"===c?this.setState(Object(r.a)({},t,s)):this.setState(Object(r.a)({},t,n))}},{key:"render",value:function(){return Object(l.jsx)(b,{handleChange:this.handleChange,data:this.state})}}]),t}(n.Component);var g=function(){return Object(l.jsx)(x,{})};t(17);s.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4636dba1.chunk.js.map