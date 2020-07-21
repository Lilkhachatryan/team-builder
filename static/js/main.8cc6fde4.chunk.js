(this["webpackJsonpteam-builder"]=this["webpackJsonpteam-builder"]||[]).push([[0],{117:function(e,t,a){e.exports=a(176)},122:function(e,t,a){},123:function(e,t,a){},174:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(41),o=a.n(c),l=(a(122),a(123),a(104));function i(){var e=Object(l.a)(["\n    margin-top: 60px;\n    padding: 10px 40px;\n"]);return i=function(){return e},e}var s=a(105).a.div(i()),m=a(22),u=a(8),p=a(59),d=function(e){return console.warn(e)},f={},E=function(e){try{return sessionStorage.getItem(e)}catch(t){return d("Error on getting sessionStorage by name ".concat(e," (").concat(t,")")),f[e]||null}},v=function(e){try{delete f[e],sessionStorage.removeItem(e)}catch(t){d("Error on removing sessionStorage by ".concat(e," key!"))}},h=a(47),b=function(e,t,a,n){return h.NotificationManager.success(e,t,a,n)},g=a(141).create({baseURL:"https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/"});g.interceptors.request.use((function(e){var t=E("token");return t&&(e.headers.token=t),e}));var y=g,N=a(15),j=a(16),S=a(19),O=a(17),C=a(25),w=function(e){return y.post("users/register",e)},x=function(){return y.get("companies")};function k(){return function(e){return y.get("users/logout").then((function(e){if(200!==e.status)throw Error(e.statusText);return b("Logout success"),console.log("response users",e),e})).catch((function(e){return console.log(e)}))}}var T=function(e){Object(S.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isMobile:null,isOpen:!1,sources:[],show:!1,search:""},e.attemptLogout=function(){e.props.logout().then((function(t){t&&(v("token"),e.props.history.push(ie.Login))}))},e.renderNavItems=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.c,{to:ie.Home,className:"nav-link",activeClassName:"active"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.c,{to:ie.Topics,className:"nav-link",activeClassName:"active"},"Topics")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.c,{to:ie.Projects,className:"nav-link",activeClassName:"active"},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.c,{to:ie.Profile,className:"nav-link",activeClassName:"active"},"Profile"))),r.a.createElement("button",{onClick:e.attemptLogout,type:"button",className:"btn btn-info"},"Logout"))},e}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"fixed-top"},r.a.createElement("nav",{className:"navbar navbar-light",style:{backgroundColor:"#e3f2fd"}},this.renderNavItems()))}}]),a}(n.Component),D=Object(u.g)(Object(C.b)(null,(function(e){return{logout:function(){return e(k())}}}))(T));function _(e){return{type:"USER_FETCH_SUCCESS",user:e}}function U(){return function(e){return y.get("users").then((function(e){if(200!==e.status)throw Error(e.statusText);return console.log("response users",e),e})).then((function(t){return e(_(t.data))}))}}function q(e){return function(t){var a;(a=e,y.put("users/update",a)).then((function(e){if(200!==e.status)throw Error(e.statusText);return b("User updated successfully"),e})).then((function(e){return t(_(e.data))}))}}var I=Object(u.g)(Object(C.b)((function(e){return{user:e.user}}),(function(e){return{fetchUser:function(){return e(U())}}}))((function(e){var t=e.guard,a=e.component,n=e.fetchUser,c=e.user,o=Object(p.a)(e,["guard","component","fetchUser","user"]),l=!!E("token");return t?l?o.path===ie.Root?r.a.createElement(u.a,{to:ie.Home}):(Object.keys(c).length||n(),r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(u.b,Object.assign({},o,{component:a})))):r.a.createElement(u.a,{to:ie.Login}):l?r.a.createElement(u.a,{to:ie.Home}):r.a.createElement(u.b,Object.assign({component:a},o))}))),P=function(e){Object(S.a)(a,e);var t=Object(O.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Home")}}]),a}(n.Component),F=a(5),A=function(e){var t=e.id,a=e.name,n=(e.className,e.label),c=Object(p.a)(e,["id","name","className","label"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"radio"===c.type?t:a},n),r.a.createElement(F.b,Object.assign({name:a,className:{radio:"form-check-input",checkbox:"form-check-input"}[c.type]||"form-control",id:t},c)),r.a.createElement(F.a,{component:"div",name:a,className:"text-error"}))},M=a(4),L=function(e){var t=e.history,a=M.d().shape({email:M.e().email("Email should be valid email").required("Email is required"),password:M.e().required("Password is required")});return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.d,{initialValues:{email:"",password:""},validationSchema:a,onSubmit:function(e){var a;(a=e,y.post("users/login",a)).then((function(e){200===e.status&&(console.log("res reg",e.data),function(e,t){try{f[e]=t,sessionStorage.setItem(e,t)}catch(a){d("Error on setting sessionStorage by ".concat(e," key!"))}}("token",e.data.token),t.push("/home"))})).catch((function(e){console.log(e)}))}},r.a.createElement(F.c,null,r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(A,{name:"email",label:"Email",placeholder:"Enter Email"}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(A,{name:"password",label:"Password",type:"password",placeholder:"Enter password"}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement("button",{type:"submit",className:"btn btn-info float-right"},"Login"))))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6 d-flex align-items-center"},r.a.createElement("div",null,"Don't have account, go to"),r.a.createElement(m.b,{to:ie.SignUp},r.a.createElement("button",{className:"btn btn-link float-right"},"Register")))))},V=a(6),R=a(113),H=a.n(R),J=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";return H()(e).format(t)},B=function(e){var t=e.name,a=e.className,n=e.label,c=e.options,o=Object(p.a)(e,["name","className","label","options"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:t},n),r.a.createElement(F.b,Object.assign({as:"select",name:t,className:a||"form-control"},o),r.a.createElement("option",{value:""},"Default select"),c.map((function(e,t){return r.a.createElement("option",{value:e.id,key:e.id+t},e.name)}))),r.a.createElement(F.a,{component:"div",name:t,className:"text-error"}))},Y=a(116),G=a(114),W=a.n(G),z=function(e){var t=Object.assign({},e),a=Object(F.f)().setFieldValue,n=Object(F.e)(t),c=Object(Y.a)(n,1)[0];return r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("label",{htmlFor:t.name},t.label),r.a.createElement(W.a,Object.assign({},c,t,{selected:c.value&&new Date(c.value)||"",onChange:function(e){a(c.name,e)}})),r.a.createElement(F.a,{component:"div",name:t.name,className:"text-error"}))},K=function(e){Object(S.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={companies:[],rememberMe:!1},e.initialValues={email:"",password:"",firstName:"",lastName:"",birthDate:new Date,sex:"male",avatarUrl:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",jsExperience:0,reactExperience:0,companyId:""},e.SIGNUP_VALIDATION_SCHEMA=M.d().shape({firstName:M.e().required("First name is required"),lastName:M.e().required("Last name is required"),birthDate:M.a().min(new Date(1900,0,1)).required("Birth date is required"),sex:M.b().oneOf(["male","female"]),avatarUrl:M.e().required("Avatar is required"),jsExperience:M.c().required("JS experience is required"),reactExperience:M.c().required("React experience is required"),companyId:M.c().required("Company is required"),email:M.e().email("Email should be valid email").required("Email is required"),password:M.e().required("Password is required")}),e.onRememberMeChange=function(t){var a=t.value;e.setState({rememberMe:a})},e.attemptSignUp=function(t){var a=Object(V.a)(Object(V.a)({},t),{},{companyId:Number(t.companyId),birthDate:J(t.birthDate)});w(a).then((function(t){200===t.status&&(b("Sign up completed successfully"),e.props.history.push("/login"))})).catch((function(e){console.log(e)}))},e.getCompaniesFromServer=function(){x().then((function(t){e.setState({companies:t.data})})).catch((function(e){console.log(e)}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getCompaniesFromServer()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.d,{initialValues:this.initialValues,validationSchema:this.SIGNUP_VALIDATION_SCHEMA,onSubmit:this.attemptSignUp},(function(t){return r.a.createElement(F.c,{onSubmit:t.handleSubmit},r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(A,{name:"firstName",label:"First name",placeholder:"Enter first name"}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(A,{name:"lastName",label:"Last name",placeholder:"Enter Last name"}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(z,{name:"birthDate",id:"birthDate",label:"Birth date"}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement("div",{className:"form-check d-flex"},r.a.createElement(A,{id:"male",label:"Male",type:"radio",value:"male",name:"sex",checked:"male"===t.values.sex})),r.a.createElement("div",{className:"form-check d-flex"},r.a.createElement(A,{value:"female",label:"Female",type:"radio",name:"sex",id:"female",checked:"female"===t.values.sex})))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(A,{name:"email",label:"Email",placeholder:"Enter Email"}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(A,{name:"password",label:"Password",type:"password",placeholder:"Enter password"}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(A,{name:"jsExperience",label:"JS experience",type:"number",placeholder:"Enter your JS experience in month"}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(A,{name:"reactExperience",label:"React experience",type:"number",placeholder:"Enter your React experience in month"}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(B,{name:"companyId",label:"Company",options:e.state.companies}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{value:e.state.rememberMe,onChange:e.onRememberMeChange,type:"checkbox",name:"rememberMe",id:"rememberMe","aria-label":"..."}),r.a.createElement("label",{htmlFor:"rememberMe",className:"form-check-label"},"Remember me")))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement("button",{onClick:t.handleSubmit,type:"submit",className:"btn btn-info float-right"},"Sign up"))))})),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6 d-flex align-items-center"},r.a.createElement("div",null,"Already have account, go to"),r.a.createElement(m.b,{to:ie.Login},r.a.createElement("button",{className:"btn btn-link float-right"},"Login")))))}}]),a}(n.Component);function $(){return function(e){return y.get("topics").then((function(t){200===t.status&&e({type:"TOPICS_FETCH_SUCCESS",topics:t.data})})).catch((function(e){return console.log(e)}))}}function Q(e){return function(t){var a;(a=e,y.post("topics",a)).then((function(e){200===e.status&&(t({type:"TOPIC_ADD_SUCCESS",topic:e.data}),t($()),b("Topic added successfully"))})).catch((function(e){return console.log(e)}))}}function X(e,t){return function(a){(function(e,t){return y.post("topics/".concat(e,"/voting"),t)})(e,t).then((function(e){200===e.status&&(console.log("add topic",e.data),a({type:"TOPIC_VOTED_SUCCESS",topic:e.data}),b("Topic voted successfully"),a($()))})).catch((function(e){return console.log(e)}))}}function Z(e){return function(t){(function(e){return y.delete("topics/".concat(e))})(e).then((function(e){200===e.status&&(console.log("add topic",e.data),t(function(e){return{type:"TOPIC_DELETE_SUCCESS",id:e}}(e.data)),b("Topic deleted successfully"),t($()))})).catch((function(e){return console.log(e)}))}}var ee=function(e){Object(S.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).initialValues={title:""},e.TOPIC_VALIDATION_SCHEMA=M.d().shape({title:M.e().required("Topic title is required")}),e.attemptAdd=function(t){e.props.addTopic(t)},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.props.getTopics()}},{key:"render",value:function(){var e=this;console.log("this.props.topics",this.props.topics);var t=this.props.topics;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.d,{initialValues:this.initialValues,validationSchema:this.TOPIC_VALIDATION_SCHEMA,onSubmit:this.attemptAdd},r.a.createElement(F.c,null,r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(A,{name:"title",type:"text"})),r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement("button",{type:"submit",className:"btn btn-info float-right mt-3"},"Add"))))),r.a.createElement("ul",{className:"list-group"},t.map((function(t){return r.a.createElement("li",{className:"list-group-item",key:t.id},t.title,r.a.createElement("button",{onClick:function(){return e.props.voteTopic(t.id,{type:t.votedByMe?"unlike":"like"})},type:"submit",className:"btn btn-info float-right"},t.votedByMe?"UnVote":"Vote"),t.canDelete&&r.a.createElement("button",{onClick:function(){return e.props.deleteTopic(t.id)},type:"submit",className:"btn btn-info float-right"},"Delete"))}))))}}]),a}(n.Component),te=Object(C.b)((function(e){return{topics:e.topics.topics}}),(function(e){return{getTopics:function(){return e($())},deleteTopic:function(t){return e(Z(t))},voteTopic:function(t,a){return e(X(t,a))},addTopic:function(t){return e(Q(t))}}}))(ee),ae=(n.Component,function(e){Object(S.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={companies:[]},e.initialValues={email:"",firstName:"Lil",lastName:"Kh",birthDate:new Date,sex:"male",avatarUrl:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",jsExperience:0,reactExperience:0,companyId:""},e.USER_VALIDATION_SCHEMA=M.d().shape({firstName:M.e().required("First name is required"),lastName:M.e().required("Last name is required"),birthDate:M.a().min(new Date(1900,0,1)).required("Birth date is required"),sex:M.b().oneOf(["male","female"]),avatarUrl:M.e().required("Avatar is required"),jsExperience:M.c().required("JS experience is required"),reactExperience:M.c().required("React experience is required"),companyId:M.c().required("Company is required"),email:M.e().email("Email should be valid email").required("Email is required")}),e.attemptUpdate=function(t){var a=Object(V.a)(Object(V.a)({},t),{},{companyId:Number(t.companyId),birthDate:J(t.birthDate)});e.props.editUser(a)},e.getCompaniesFromServer=function(){x().then((function(t){e.setState({companies:t.data})})).catch((function(e){console.log(e)}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getCompaniesFromServer()}},{key:"render",value:function(){var e=this,t=this.props.user;return Object.keys(t).length?(t=Object(V.a)(Object(V.a)({},t),{},{birthDate:new Date(t.birthDate)}),r.a.createElement(r.a.Fragment,null,r.a.createElement(F.d,{initialValues:t,validateOnMount:!1,validationSchema:this.USER_VALIDATION_SCHEMA,onSubmit:this.attemptUpdate},(function(t){return r.a.createElement(F.c,{onSubmit:t.handleSubmit},r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(A,{name:"firstName",label:"First name",placeholder:"Enter first name"}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(A,{name:"lastName",label:"Last name",placeholder:"Enter Last name"}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(z,{name:"birthDate",id:"birthDate",label:"Birth date"}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement("div",{className:"form-check d-flex"},r.a.createElement(A,{id:"male",label:"Male",type:"radio",value:"male",name:"sex",checked:"male"===t.values.sex})),r.a.createElement("div",{className:"form-check d-flex"},r.a.createElement(A,{value:"female",label:"Female",type:"radio",name:"sex",id:"female",checked:"female"===t.values.sex})))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(A,{name:"email",label:"Email",placeholder:"Enter Email"}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(A,{name:"jsExperience",label:"JS experience",type:"number",placeholder:"Enter your JS experience in month"}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(A,{name:"reactExperience",label:"React experience",type:"number",placeholder:"Enter your React experience in month"}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement(B,{name:"companyId",label:"Company",options:e.state.companies}))),r.a.createElement("div",{className:"form-group row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-6"},r.a.createElement("button",{onClick:t.handleSubmit,type:"submit",className:"btn btn-info float-right"},"Update"))))})))):r.a.createElement("div",null,"Lodaing...")}}]),a}(n.Component)),ne=Object(C.b)((function(e){return{user:e.user}}),(function(e){return{editUser:function(t){return e(q(t))}}}))(ae);function re(){return function(e){return y.get("projects").then((function(t){200===t.status&&(console.log("response.data",t.data),e({type:"PROJECTS_FETCH_SUCCESS",projects:t.data}))}))}}function ce(e,t){return function(a){(function(e,t){return y.post("projects/".concat(e,"/voting"),t)})(e,t).then((function(e){200===e.status&&(console.log("add topic",e.data),a({type:"PROJECT_VOTED_SUCCESS",data:e.data}),a(re()),b("Topic added successfully"))}))}}var oe=function(e){Object(S.a)(a,e);var t=Object(O.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this;console.log("this.props.topics",this.props.topics);var t=this.props.projects;return console.log("projects",t),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"list-group"},t.map((function(t){return r.a.createElement("li",{className:"list-group-item",key:t.id},t.title,r.a.createElement("button",{onClick:function(){return e.props.voteProject(t.id,{type:t.votedByMe?"unlike":"like"})},type:"submit",className:"btn btn-info float-right"},t.votedByMe?"UnVote":"Vote"))}))))}}]),a}(n.Component),le=Object(C.b)((function(e){return{projects:e.projects.projects}}),(function(e){return{getProjects:function(){return e(re())},voteProject:function(t,a){return e(ce(t,a))}}}))(oe),ie=Object.freeze({Root:"/team-builder/",Home:"/home",Profile:"/profile",Projects:"/projects",Topics:"/topics",Login:"/login",SignUp:"/sign-up",NotFoundPage:"*"}),se=function(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement("strong",null,"Error!")," No route found matching:",r.a.createElement("div",null,r.a.createElement("code",null,t.pathname)))};var me=function(){return r.a.createElement(m.a,null,r.a.createElement(u.d,null,r.a.createElement(I,{path:ie.Login,component:L}),r.a.createElement(I,{path:ie.SignUp,component:K}),r.a.createElement(I,{guard:!0,path:ie.Home,component:P}),r.a.createElement(I,{guard:!0,path:ie.Topics,component:te}),r.a.createElement(I,{guard:!0,path:ie.Profile,component:ne}),r.a.createElement(I,{guard:!0,path:ie.Projects,component:le}),r.a.createElement(I,{exact:!0,guard:!0,path:ie.Root,component:P}),r.a.createElement(I,{path:ie.NotFoundPage,component:se})))};var ue=function(){return r.a.createElement(s,null,r.a.createElement(me,null),r.a.createElement(h.NotificationContainer,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(174);var pe=a(44),de=a(115);var fe={topics:[],topic:{}};var Ee={projects:[],project:{}};var ve=Object(pe.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_FETCH_SUCCESS":return t.user;default:return e}},topics:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOPICS_FETCH_SUCCESS":return Object(V.a)(Object(V.a)({},e),{},{topics:t.topics});case"TOPIC_ADD_SUCCESS":case"TOPIC_VOTED_SUCCESS":return Object(V.a)(Object(V.a)({},e),{},{topic:t.topic});case"TOPIC_DELETE_SUCCESS":return Object(V.a)(Object(V.a)({},e),{},{id:t.id});default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROJECTS_FETCH_SUCCESS":return Object(V.a)(Object(V.a)({},e),{},{projects:t.projects});case"PRODUCTS_VOTED_SUCCESS":return Object(V.a)(Object(V.a)({},e),{},{project:t.project});default:return e}}});a(175);var he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(pe.a)(de.a);return Object(pe.d)(ve,e,t)}();o.a.render(r.a.createElement(C.a,{store:he},r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[117,1,2]]]);
//# sourceMappingURL=main.8cc6fde4.chunk.js.map