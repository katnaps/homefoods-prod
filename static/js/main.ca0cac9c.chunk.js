(this.webpackJsonphomefoods=this.webpackJsonphomefoods||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a.n(n),r=a(27),o=a.n(r),i=(a(79),a(12)),l=a(7),j=a(14),d=a.n(j),b=a(8),u=a(9),O=(a(25),a(20)),h=function(e){var t=e.setOpen,a=e.setLogin,s=e.openLogin,r=Object(n.useState)(""),o=Object(l.a)(r,2),i=o[0],j=o[1],h=Object(n.useState)(""),p=Object(l.a)(h,2),m=p[0],x=p[1],g=Object(n.useState)(""),f=Object(l.a)(g,2),v=f[0],y=f[1],S=Object(n.useState)(""),k=Object(l.a)(S,2),C=k[0],N=k[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),d.a.post("https://homefoods1.herokuapp.com/api/v1/users/",{username:i,email:m,password:v}).then((function(e){"failed"==e.data.status?O.b.error("\ud83e\udd6d Details not unique",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):(localStorage.setItem("token",e.data.token),t(!1),a(e.data.token),O.b.success("\ud83c\udf82 Successful signup!",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}))},className:"m-3",children:[Object(c.jsxs)(b.a.Group,{children:[Object(c.jsx)(b.a.Label,{children:"Username"}),Object(c.jsx)(b.a.Control,{type:"text",placeholder:"Username",onChange:function(e){j(e.target.value)},value:i})]}),Object(c.jsxs)(b.a.Group,{children:[Object(c.jsx)(b.a.Label,{children:"Email"}),Object(c.jsx)(b.a.Control,{type:"email",placeholder:"Email",onChange:function(e){x(e.target.value)},value:m})]}),Object(c.jsxs)(b.a.Group,{children:[Object(c.jsx)(b.a.Label,{children:"Password"}),Object(c.jsx)(b.a.Control,{type:"password",placeholder:"Password",onChange:function(e){y(e.target.value)},value:v})]}),Object(c.jsxs)(b.a.Group,{children:[Object(c.jsx)(b.a.Label,{children:"Confirm Password"}),Object(c.jsx)(b.a.Control,{type:"password",placeholder:"Confirm Password",onChange:function(e){N(e.target.value)},value:C})]}),Object(c.jsx)(u.a,{type:"submit",variant:"primary",disabled:!m||!i||!v||!C||v!==C,children:"Sign Up"}),Object(c.jsxs)("p",{className:"forgot-password text-right",children:["Already registered?",Object(c.jsx)(u.a,{className:"ml-2",variant:"success",onClick:s,children:"Sign In"})]})]})})},p=a(59),m=function(e){var t=e.setLogin,a=e.setOpen,s=e.openSignUp,r=Object(n.useState)(""),o=Object(l.a)(r,2),i=o[0],j=o[1],h=Object(n.useState)(""),m=Object(l.a)(h,2),x=m[0],g=m[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),""!==i&&""!==x?d.a.post("https://homefoods1.herokuapp.com/api/v1/login/",{username:i,password:x}).then((function(e){"success"==e.data.status?(localStorage.setItem("token",e.data.token),a(!1),t(e.data.token),O.b.info("\ud83e\udd59 Welcome back!",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):O.b.error("\ud83c\udf4b Please Fill correct credentials",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).catch((function(e){console.log(e)})):O.b.error("\ud83e\udd57 Please Fill in credentials",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},className:"m-3",children:[Object(c.jsxs)(b.a.Group,{children:[Object(c.jsx)(b.a.Label,{children:"Username"}),Object(c.jsx)(b.a.Control,{type:"text",placeholder:"Username",onChange:function(e){j(e.target.value)},value:i})]}),Object(c.jsxs)(b.a.Group,{children:[Object(c.jsx)(b.a.Label,{children:"Password"}),Object(c.jsx)(b.a.Control,{type:"password",placeholder:"Password",onChange:function(e){g(e.target.value)},value:x})]}),Object(c.jsx)(u.a,{type:"submit",variant:"primary",children:"Login"}),Object(c.jsxs)("p",{className:"forgot-password text-right",children:["No account?",Object(c.jsx)(u.a,{className:"ml-2",variant:"success",onClick:s,children:"Sign up"})]})]}),Object(c.jsx)("p",{className:"text-center",style:{fontSize:"20px"},children:"OR"}),Object(c.jsx)("div",{className:"text-center",style:{paddingBottom:"10px"},children:Object(c.jsx)(p.GoogleAPI,{children:Object(c.jsx)(p.GoogleLogin,{disabled:!0})})})]})},x=Object(n.createContext)(),g=a(43),f=function(e){var t=e.children,a=Object(n.useState)(!1),s=Object(l.a)(a,2),r=s[0],o=s[1],i=Object(n.useState)(!0),j=Object(l.a)(i,2),d=j[0],b=j[1],O=Object(n.useState)(""),p=Object(l.a)(O,2),f=p[0],v=p[1],y=Object(n.useState)(localStorage.getItem("token")),S=Object(l.a)(y,2),k=S[0],C=S[1],N=function(){o(!1)},w=function(){o(!0),b(!0),v("Login")},I=function(){o(!0),b(!1),v("Sign Up")};return Object(c.jsxs)(x.Provider,{value:{openLogin:w,openSignUp:I,close:N,isLoggedIn:k,setLogin:C},children:[Object(c.jsxs)(g.a,{show:r,onHide:N,children:[Object(c.jsx)(g.a.Header,{closeButton:!0,children:Object(c.jsx)(g.a.Title,{children:f})}),d?Object(c.jsx)(m,{setLogin:C,setOpen:o,openSignUp:I}):Object(c.jsx)(h,{setLogin:C,setOpen:o,openLogin:w}),Object(c.jsx)(g.a.Footer,{children:Object(c.jsx)(u.a,{variant:"secondary",onClick:N,children:"Close"})})]}),t]})},v=a(16),y=a(44),S=a(40),k=function(){var e=Object(n.useContext)(x),t=e.openLogin,a=e.openSignUp,s=e.isLoggedIn,r=e.setLogin;return Object(c.jsxs)(y.a,{bg:"dark",variant:"dark",expand:"md",fixed:"top",children:[Object(c.jsx)(y.a.Brand,{children:Object(c.jsx)(v.b,{to:"/",style:{color:"white",textDecoration:"none"},children:"HomeFoods"})}),Object(c.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsxs)(y.a.Collapse,{id:"basic-navbar-nav",children:[s?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(S.a,{className:"mr-auto",children:[Object(c.jsx)(S.a.Link,{children:Object(c.jsx)(v.b,{to:"/users/me",style:{color:"#9A9DA0",textDecoration:"none"},children:"Profile"})}),Object(c.jsx)(S.a.Link,{children:Object(c.jsx)(v.b,{to:"/food/",style:{color:"#9A9DA0",textDecoration:"none"},children:"Upload Food Image"})})]}),Object(c.jsx)(u.a,{className:"mx-2 my-2",variant:"primary",children:Object(c.jsx)(v.b,{to:"/recipes/",style:{color:"white",textDecoration:"none"},children:"Search"})})]}):null,s?Object(c.jsx)(u.a,{className:"mx-2 my-2",variant:"danger",onClick:function(){localStorage.removeItem("token"),r(!1),O.b.info("\ud83c\udf2e You have successfully logged out!",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:"Logout"}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u.a,{variant:"primary",onClick:t,className:"mx-2",children:"Login"}),Object(c.jsx)(u.a,{variant:"success",onClick:a,className:"mx-2",children:"Sign Up"})]})]})]})},C=a(11),N=a(37),w=a(31),I=a(18),L=function(e){var t=e.random;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(w.a,{className:"justify-content-center mt-4",children:t.map((function(e){return Object(c.jsx)(I.a,{lg:"true",xs:"true",className:"mr-3 ml-3 mt-4",children:Object(c.jsx)(N.a,{children:Object(c.jsxs)(C.a,{bg:"dark",text:"light",style:{width:"18rem"},children:[Object(c.jsx)(C.a.Img,{variant:"top",src:e.image,className:"w-100"}),Object(c.jsxs)(C.a.Body,{children:[Object(c.jsx)(C.a.Title,{children:e.title.length<15?"".concat(e.title):"".concat(e.title.substring(0,20),"...")}),Object(c.jsx)(C.a.Text,{children:null==e.diets[0]?"no dietary info":e.diets[0]}),Object(c.jsx)(u.a,{variant:"primary",children:Object(c.jsx)(v.b,{to:{pathname:"/recipe/".concat(e.id),recipe:{id:e.id,title:e.title,image:e.image}},style:{color:"white"},children:"Get Recipe"})})]})]})})},e.id)}))})})},F=function(e){var t=e.showRand,a=e.setShowRand,s=Object(n.useState)([]),r=Object(l.a)(s,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){d.a.get("https://api.spoonacular.com/recipes/random?apiKey=".concat("5f3126868bf747ffbe6d340ce9c90f91","&number=10")).then((function(e){i(e.data.recipes)}))}),[t,a]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(L,{random:o})})},U=a(45),P=a(38),B=a(19),D=function(){var e=Object(n.useContext)(x).isLoggedIn,t=Object(i.g)().id,a=Object(n.useState)({}),s=Object(l.a)(a,2),r=s[0],o=s[1],j=Object(n.useState)(null),O=Object(l.a)(j,2),h=O[0],p=O[1],m=Object(n.useState)(""),g=Object(l.a)(m,2),f=g[0],v=g[1],y=Object(n.useState)(""),S=Object(l.a)(y,2),k=S[0],C=S[1],N=Object(n.useState)(""),w=Object(l.a)(N,2),L=w[0],F=w[1],D=Object(n.useState)(""),R=Object(l.a)(D,2),G=R[0],A=R[1];if(Object(n.useEffect)((function(){d.a.get("https://homefoods1.herokuapp.com/api/v1/users/me",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){o(Object(U.a)(Object(U.a)({},e.data),{},{profileImage:e.data.image_path}))})).catch((function(e){console.log(e)}))}),[t,r.image_path]),!e||"me"===t&&!localStorage.getItem("token"))return Object(c.jsx)(i.a,{to:"/"});return Object(c.jsx)("div",{children:r.id?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(B.a,{className:"mt-4",children:[Object(c.jsxs)(B.a,{className:"mt-4 d-flex",children:[Object(c.jsx)(P.a,{src:r.profileImage,width:"300",fluid:!0,className:"rounded d-print-block float-left mt-3 mb-3 mr-3"}),Object(c.jsxs)("h3",{className:"mt-auto",children:["Username: ",r.username]})]}),Object(c.jsxs)(b.a,{className:"mb-4",onSubmit:function(e){e.preventDefault();var t=e.target,a=new FormData;a.append("image",h),d.a.post("https://homefoods1.herokuapp.com/api/v1/images/",a,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){t.value=null;var a=Object(U.a)({},r);o({}),o(a)}))},children:[Object(c.jsx)(b.a.Group,{children:Object(c.jsx)(b.a.File,{type:"file",onChange:function(e){p(e.target.files[0])},label:"Update User Image Profile"})}),Object(c.jsx)(u.a,{variant:"primary",type:"submit",children:"Upload Image"})]}),Object(c.jsx)("h4",{children:"Update User Details:"}),Object(c.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),d.a.post("https://homefoods1.herokuapp.com/api/v1/users/".concat(t),{username:f,email:k,old_password:L,password:G},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){localStorage.setItem("token",e.data.token);var t=Object(U.a)({},r);o({}),o(t)}))},children:[Object(c.jsxs)(b.a.Row,{children:[Object(c.jsx)(I.a,{children:Object(c.jsx)(b.a.Control,{value:f,placeholder:r.username,type:"text",onChange:function(e){v(e.target.value)}})}),Object(c.jsx)(I.a,{children:Object(c.jsx)(b.a.Control,{value:k,placeholder:r.email,type:"email",onChange:function(e){C(e.target.value)}})}),Object(c.jsx)(I.a,{children:Object(c.jsx)(b.a.Control,{value:L,placeholder:"Old password",type:"password",onChange:function(e){F(e.target.value)}})}),Object(c.jsx)(I.a,{children:Object(c.jsx)(b.a.Control,{value:G,placeholder:"New password",type:"password",onChange:function(e){A(e.target.value)}})})]}),Object(c.jsx)(u.a,{variant:"primary",className:"mt-4",type:"submit",children:"Update"})]})]})}):null})},R=a(55),G=a(73),A=a(54),H=a.n(A),T=function(e){var t="5f3126868bf747ffbe6d340ce9c90f91",a=Object(n.useState)([]),s=Object(l.a)(a,2),r=s[0],o=s[1],j=Object(n.useState)(""),b=Object(l.a)(j,2),O=b[0],h=b[1],p=Object(n.useState)(""),m=Object(l.a)(p,2),x=m[0],g=m[1],f=Object(n.useState)(""),v=Object(l.a)(f,2),y=v[0],S=v[1],k=Object(n.useState)(""),N=Object(l.a)(k,2),w=N[0],I=N[1],L=Object(n.useState)(""),F=Object(l.a)(L,2),U=F[0],D=F[1],A=Object(i.g)().id;return Object(n.useEffect)((function(){d.a.get("https://api.spoonacular.com/recipes/".concat(A,"/information?apiKey=").concat(t)).then((function(e){h(e.data.image),g(e.data.title),S(e.data.sourceUrl),I(e.data.sourceName),D(e.data.cookingMinutes)})),d.a.get("https://api.spoonacular.com/recipes/".concat(A,"/analyzedInstructions?apiKey=").concat(t)).then((function(e){o(e.data[0].steps)}))}),[A]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(B.a,{className:"mt-4",children:[Object(c.jsxs)(R.a,{className:"bg-dark mt-4 text-light",children:[Object(c.jsx)("h1",{children:x}),Object(c.jsx)(P.a,{src:O,fluid:!0,className:" rounded d-block mx-auto mt-3 mb-3"}),Object(c.jsxs)("h3",{children:["Recipe Author: ",w]}),Object(c.jsxs)("p",{className:"font-weight-normal",children:["Duration to make: ",U," minutes"]}),Object(c.jsx)("p",{className:"mt-4",children:Object(c.jsx)(u.a,{variant:"primary",href:y,target:"_blank",children:"Learn more"})})]}),Object(c.jsx)(B.a,{className:"d-flex flex-column",children:r.map((function(e){return Object(c.jsx)(G.a,{className:"mb-3",children:Object(c.jsxs)(C.a,{bg:"dark",text:"light",border:"info",style:{width:"18rem"},children:[Object(c.jsxs)(C.a.Header,{children:["Step: ",e.number]}),Object(c.jsx)("h6",{className:"m-2",children:"Items:"}),Object(c.jsx)(B.a,{className:"d-flex flex-xl-row flex-lg-row flex-md-row flex-column",children:e.ingredients.map((function(e){return Object(c.jsx)(C.a.Body,{className:"p-1",children:Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:e.name})})},e.id)}))}),Object(c.jsx)(C.a.Footer,{children:Object(c.jsx)(C.a.Text,{className:"p-3",children:e.step})})]},e.number)})}))}),Object(c.jsx)(H.a,{showUnder:160,children:Object(c.jsx)(u.a,{variant:"danger",children:"UP"})})]})})},z=function(e){var t=e.isRecipes;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(w.a,{className:"justify-content-center mt-4",children:t.map((function(e){return Object(c.jsx)(I.a,{lg:"true",xs:"true",className:"mr-3 ml-3 mt-4 mb-4",children:Object(c.jsx)(N.a,{children:Object(c.jsxs)(C.a,{bg:"dark",text:"light",style:{width:"18rem"},children:[Object(c.jsx)(C.a.Img,{variant:"top",src:e.image,className:"w-100"}),Object(c.jsxs)(C.a.Body,{children:[Object(c.jsx)(C.a.Title,{children:e.title.length<15?"".concat(e.title):"".concat(e.title.substring(0,20),"...")}),Object(c.jsxs)(C.a.Text,{children:["Likes: ",e.likes]}),Object(c.jsx)(u.a,{variant:"primary",children:Object(c.jsx)(v.b,{to:{pathname:"/recipe/".concat(e.id),recipe:{id:e.id,title:e.title,image:e.image}},style:{color:"white"},children:"Get Recipe"})})]})]})})},e.id)}))})})},E=a(62),K=a(49),_=function(){var e="5f3126868bf747ffbe6d340ce9c90f91",t=Object(n.useContext)(x).isLoggedIn,a=Object(n.useState)(""),s=Object(l.a)(a,2),r=s[0],o=s[1],j=Object(n.useState)([]),h=Object(l.a)(j,2),p=h[0],m=h[1],g=Object(n.useState)(10),f=Object(l.a)(g,2),v=f[0],y=f[1],k=Object(n.useState)(!1),C=Object(l.a)(k,2),N=C[0],w=C[1];if(!t||!localStorage.getItem("token"))return Object(c.jsx)(i.a,{to:"/"});return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(B.a,{className:"mt-4",children:Object(c.jsx)(b.a,{onSubmit:function(t){t.preventDefault(),""!==r?d.a.get("https://api.spoonacular.com/recipes/findByIngredients?apiKey=".concat(e,"&ingredients=").concat(r,"&number=").concat(v)).then((function(e){m(e.data),w(!0)})):O.b.warn("Please fill in ingredient",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:Object(c.jsxs)(E.a,{className:"mb-3",children:[Object(c.jsx)(K.a,{className:"text-center",onChange:function(e){o(e.target.value)},placeholder:"Input Ingredient","aria-label":"Input Ingredient","aria-describedby":"basic-addon2"}),Object(c.jsx)(E.a.Append,{children:Object(c.jsx)(u.a,{variant:"success",type:"submit",children:"Look up recipe"})})]})})}),Object(c.jsx)(H.a,{showUnder:160,children:Object(c.jsx)(u.a,{variant:"danger",children:"UP"})}),Object(c.jsx)(z,{isRecipes:p}),Object(c.jsx)(B.a,{className:"mt-4",children:N?Object(c.jsx)(S.a,{className:"justify-content-center mb-4",children:Object(c.jsx)(u.a,{variant:"warning",onClick:function(){y(v+10),d.a.get("https://api.spoonacular.com/recipes/findByIngredients?apiKey=".concat(e,"&ingredients=").concat(r,"&number=").concat(v)).then((function(e){m(e.data)}))},children:"More"})}):null})]})},M=function(e){var t=e.foodRelation;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(w.a,{className:"justify-content-center mt-4",children:t.map((function(e){return Object(c.jsx)(I.a,{lg:"true",xs:"true",className:"mr-3 ml-3 mt-4",children:Object(c.jsx)(N.a,{children:Object(c.jsxs)(C.a,{bg:"dark",text:"light",style:{width:"18rem"},children:[Object(c.jsx)(C.a.Img,{variant:"top",src:"https://spoonacular.com/recipeImages/".concat(e.id,"-240x150.").concat(e.imageType),className:"w-100"}),Object(c.jsxs)(C.a.Body,{children:[Object(c.jsx)(C.a.Title,{children:e.title.length<15?"".concat(e.title):"".concat(e.title.substring(0,20),"...")}),Object(c.jsx)(u.a,{variant:"primary",href:e.url,target:"_blank",children:"Get Recipe Info"})]})]})})},e.id)}))})})},J=function(){var e=Object(n.useContext)(x).isLoggedIn,t=Object(n.useState)(null),a=Object(l.a)(t,2),s=a[0],r=a[1],o=Object(n.useState)(null),j=Object(l.a)(o,2),O=j[0],h=j[1],p=Object(n.useState)([]),m=Object(l.a)(p,2),g=m[0],f=m[1],v=Object(n.useState)(!1),y=Object(l.a)(v,2),S=y[0],k=y[1];if(!e||!localStorage.getItem("token"))return Object(c.jsx)(i.a,{to:"/"});return Object(c.jsxs)(B.a,{className:"mt-4",children:[Object(c.jsxs)(R.a,{className:"bg-dark mt-4 text-light",children:[Object(c.jsx)(P.a,{src:O,fluid:!0,className:" rounded d-block mx-auto mt-3 mb-3"}),Object(c.jsxs)(b.a,{onSubmit:function(e){e.preventDefault();var t=e.target,a=new FormData;a.append("file",s),d.a.post("https://api.spoonacular.com/food/images/analyze?apiKey=".concat("5f3126868bf747ffbe6d340ce9c90f91"),a).then((function(e){t.value=null,f(e.data.recipes),k(!0)}))},children:[Object(c.jsx)(b.a.Group,{children:Object(c.jsx)(b.a.File,{type:"file",onChange:function(e){h(URL.createObjectURL(e.target.files[0])),r(e.target.files[0])},label:"Analyze Food Image"})}),Object(c.jsx)(u.a,{variant:"primary",type:"submit",children:"Upload Image"})]})]}),S?Object(c.jsx)("h2",{children:"Related Food Recipes:"}):null,Object(c.jsx)(M,{foodRelation:g})]})};a(105),a(106);var q=function(){return Object(c.jsx)(B.a,{fluid:!0,children:Object(c.jsxs)(f,{children:[Object(c.jsx)(k,{}),Object(c.jsxs)(i.d,{children:[Object(c.jsx)(i.b,{exact:!0,path:"/",component:F}),Object(c.jsx)(i.b,{path:"/users/:id",component:D}),Object(c.jsx)(i.b,{path:"/recipes/",component:_}),Object(c.jsx)(i.b,{path:"/recipe/:id",component:T}),Object(c.jsx)(i.b,{path:"/food/",component:J})]}),Object(c.jsx)(O.a,{})]})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,110)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(v.a,{children:Object(c.jsx)(q,{})})}),document.getElementById("root")),W()},79:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.ca0cac9c.chunk.js.map