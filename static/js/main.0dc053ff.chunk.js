(this["webpackJsonpspotify-stat-viewer"]=this["webpackJsonpspotify-stat-viewer"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(18),o=n.n(s),r=(n(33),n(4)),i=(n(34),n(2));["playlist-read-private","user-read-private","user-top-read"].join("%20");var l=n.p+"static/media/Followers.1e8b3e63.png";n(10),n(12),n(22),n(23);var u=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("Your username"),o=Object(r.a)(s,2),u=o[0],j=o[1],f=Object(c.useState)(0),b=Object(r.a)(f,2),p=b[0],g=b[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("accessToken");console.log("fetch"),fetch("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),j(e.display_name),g(e.followers.total),a(e.images[0].url)})).catch((function(e){console.log(e)}))}),[]),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("img",{className:"userImage",src:n}),Object(i.jsx)("h1",{children:u}),Object(i.jsx)("img",{className:"followerImage",src:l}),Object(i.jsx)("p",{className:"followerText",children:p})]})})};var j=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=(t[0],t[1]);return Object(c.useEffect)((function(){var e=new Date(Number(localStorage.getItem("expiresIn")));console.log(new Date<e),new Date<e&&n(!0)})),Object(i.jsx)(u,{})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),f()}},[[37,1,2]]]);
//# sourceMappingURL=main.0dc053ff.chunk.js.map