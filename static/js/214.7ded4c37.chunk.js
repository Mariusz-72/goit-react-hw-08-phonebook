"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[214],{9214:function(e,a,n){n.r(a),n.d(a,{default:function(){return _}});var t=n(4420),r=n(9766),i=n(1413),l=n(158),s={name:"",email:"",password:""},o=n(1523),u={name:{type:"text",name:"name",required:!0,autoFocus:!0,label:"User name",placeholder:" Enter name"},email:{type:"email",name:"email",required:!0,label:"User email",placeholder:" Enter email"},password:{type:"passwrod",name:"password",required:!0,label:"User password",placeholder:"Enter password"}},c=n(7670),m={form:"registerForm_form__8tKcV",title_wrap:"registerForm_title_wrap__tu+v5",homepage_title:"registerForm_homepage_title__zGxAI",button_wrap:"registerForm_button_wrap__6N4yv"},d=n(184),h=function(e){var a=e.onSubmit,n=(0,l.Z)({initialState:s,onSubmit:a}),t=n.state,r=n.handleChange,h=n.handleSubmit,p=t.name,_=t.email,f=t.password;return(0,d.jsxs)("div",{className:m.homepage_wrap,children:[(0,d.jsx)("div",{className:m.title_wrap,children:(0,d.jsx)("h2",{className:m.homepage_title,children:"Create account"})}),(0,d.jsxs)("form",{onSubmit:h,className:m.form,children:[(0,d.jsx)(o.Z,(0,i.Z)({value:p,handleChange:r},u.name)),(0,d.jsx)(o.Z,(0,i.Z)({value:_,handleChange:r},u.email)),(0,d.jsx)("div",{children:(0,d.jsx)(o.Z,(0,i.Z)({value:f,handleChange:r},u.password))}),(0,d.jsx)("div",{className:m.button_wrap,children:(0,d.jsx)(c.Z,{children:" Register "})})]})]})},p="registerPage_container__JnUn+",_=function(){var e=(0,t.I0)();return(0,d.jsx)("div",{className:p,children:(0,d.jsx)(h,{onSubmit:function(a){e((0,r.IU)(a))}})})}},1523:function(e,a,n){n.d(a,{Z:function(){return u}});var t=n(1413),r=n(4925),i=n(2791),l={field:"formField_field__JeLem"},s=n(184),o=["label","handleChange"],u=function(e){var a=e.label,n=e.handleChange,u=(0,r.Z)(e,o),c=(0,i.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,a){return e+((a&=63)<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a>62?"-":"_")}),"")}()}),[]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("label",{htmlFor:c,className:l.label,children:[a,(0,s.jsx)("input",(0,t.Z)((0,t.Z)({id:c,onChange:n},u),{},{className:l.field}))]})})}},7670:function(e,a,n){n.d(a,{Z:function(){return i}});var t={},r=n(184),i=function(e){var a=e.children,n=e.type,i=void 0===n?"submit":n;return(0,r.jsx)("button",{type:i,className:t.button,children:a})}},158:function(e,a,n){var t=n(4942),r=n(1413),i=n(9439),l=n(2791);a.Z=function(e){var a=e.initialState,n=e.onSubmit,s=(0,l.useState)((0,r.Z)({},a)),o=(0,i.Z)(s,2),u=o[0],c=o[1],m=(0,l.useCallback)((function(e){var a=e.target,n=a.name,i=a.value;c((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,t.Z)({},n,i))}))}),[c]);return{state:u,setState:c,handleChange:m,handleSubmit:function(e){e.preventDefault(),n((0,r.Z)({},u)),c((0,r.Z)({},a))}}}}}]);
//# sourceMappingURL=214.7ded4c37.chunk.js.map