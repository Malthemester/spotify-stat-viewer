(this["webpackJsonpspotify-stat-viewer"]=this["webpackJsonpspotify-stat-viewer"]||[]).push([[0],{33:function(e,t,o){},34:function(e,t,o){},37:function(e,t,o){"use strict";o.r(t);var c=o(2),n=o.n(c),s=o(18),i=o.n(s),a=(o(33),o(3)),r=(o(34),o(1)),l="8388f4a4228342fa9111a25e71147bdd",u="https://accounts.spotify.com/authorize",j="https://malthemester.github.io/spotify-stat-viewer/",d=["playlist-read-private","user-read-private","user-top-read"].join("%20");var p=function(){return console.log("".concat(u,"?client_id=").concat(l,"&redirect_uri=").concat(j,"&scope=").concat(d,"&response_type=token&show_dialog=true")),Object(c.useEffect)((function(){if(window.location.hash){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var o=t.split("="),c=Object(a.a)(o,2),n=c[0],s=c[1];return e[n]=s,e}),{}),t=e.access_token,o=e.expires_in,c=e.token_type;localStorage.setItem("accessToken",t),localStorage.setItem("tokenType",c),localStorage.setItem("expiresIn",(new Date).getTime()+1e3*(o-300)),console.log(window.origin),window.location="https://malthemester.github.io/spotify-stat-viewer/"}})),Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)("h1",{children:"You need to login to Spotify to view your stats"}),Object(r.jsx)("button",{className:"button-33",onClick:function(){return function(){var e="".concat(u,"?client_id=").concat(l,"&redirect_uri=").concat(j,"&scope=").concat(d,"&response_type=token&show_dialog=true");window.location=e}()},children:"Login to spotify"})]})},h=o.p+"static/media/Followers.1e8b3e63.png";o(10),o(12),o(28),o(22);var b=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),o=t[0];return t[1],Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"selectText",children:Object(r.jsxs)("div",{className:"line",children:[Object(r.jsxs)("p",{children:["Your's top",Object(r.jsxs)("select",{onChange:function(e){e.target.value},name:"Time period",id:"time_period",placeholder:"Source Type",children:[Object(r.jsx)("option",{value:"tracks",children:"tracks"}),Object(r.jsx)("option",{value:"artists",children:"artists"})]})," for a",Object(r.jsxs)("select",{onChange:function(e){e.target.value},name:"Time period",id:"time_period",placeholder:"Source Type",children:[Object(r.jsx)("option",{value:"long_term",children:"long period"}),Object(r.jsx)("option",{value:"medium_term",children:"medium period"}),Object(r.jsx)("option",{value:"short_term",children:"short period"})]})]}),Object(r.jsx)("button",{className:"buttonStart",onClick:function(){},children:"Show"})]})}),Object(r.jsx)("div",{className:"maskTop",children:o})]})};var m=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),o=t[0],n=t[1],s=Object(c.useState)("Your username"),i=Object(a.a)(s,2),l=i[0],u=i[1],j=Object(c.useState)(0),d=Object(a.a)(j,2),p=d[0],m=d[1];return console.log("go1"),Object(c.useEffect)((function(){var e=localStorage.getItem("accessToken");console.log("fetch"),fetch("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),u(e.display_name),m(e.followers.total),n(e.images[0].url)})).catch((function(e){console.log(e)}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("img",{alt:"userImg",className:"userImage",src:o}),Object(r.jsx)("h1",{children:l}),Object(r.jsx)("img",{alt:"follwerImg",className:"followerImage",src:h}),Object(r.jsx)("p",{className:"followerText",children:p})]}),Object(r.jsx)(b,{})]})};var f=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),o=t[0],n=t[1];return Object(c.useEffect)((function(){var e=new Date(Number(localStorage.getItem("expiresIn")));console.log(new Date<e),new Date<e&&n(!0)}),[]),Object(r.jsx)("div",{children:o?Object(r.jsx)(m,{}):Object(r.jsx)(p,{})})},g=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,38)).then((function(t){var o=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;o(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),g()}},[[37,1,2]]]);
//# sourceMappingURL=main.fdb142c7.chunk.js.map