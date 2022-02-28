(this["webpackJsonpspotify-stat-viewer"]=this["webpackJsonpspotify-stat-viewer"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(18),i=c.n(s),r=(c(32),c(4)),o=(c(33),c(2)),l=["playlist-read-private","user-read-private","user-top-read"].join("%20");var u=function(){return Object(n.useEffect)((function(){if(window.location.hash){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var c=t.split("="),n=Object(r.a)(c,2),a=n[0],s=n[1];return e[a]=s,e}),{}),t=e.access_token,c=e.expires_in,n=e.token_type;localStorage.setItem("accessToken",t),localStorage.setItem("tokenType",n),localStorage.setItem("expiresIn",(new Date).getTime()+1e3*(c-300)),window.location="https://malthemester.github.io/spotify-stat-viewer/"}})),Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)("h1",{children:"You need to login to Spotify to view your stats"}),Object(o.jsx)("button",{className:"button-33",onClick:function(){return function(){var e="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("8388f4a4228342fa9111a25e71147bdd","&redirect_uri=").concat("https://malthemester.github.io/spotify-stat-viewer/","&scope=").concat(l,"&response_type=token&show_dialog=true");window.location=e}()},children:"Login to spotify"})]})},j=c(22),h="long_term",m="tracks",d=!0;var p=function(){var e=Object(j.useSpring)({to:[{y:-720,opacity:0,immediate:d},{y:-600,delay:0,opacity:1,immediate:!1},{y:-480,delay:0},{y:-360,delay:350},{y:-240,delay:350},{y:-120,delay:350},{y:0,delay:350}],from:{opacity:0,immediate:d}}),t=Object(n.useState)(),c=Object(r.a)(t,2),a=c[0],s=c[1];function i(){var t=localStorage.getItem("accessToken"),c="https://api.spotify.com/v1/me/top/".concat(m,"?limit=5&time_range=").concat(h);fetch(c,{headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),s(function(t){var c=[];"tracks"===m?null===t||void 0===t||t.items.forEach((function(e,t){var n=[],a=[],s="";e.artists.forEach((function(e,t){s+=(t>0?", ":"")+e.name})),a.push(Object(o.jsx)("p",{className:"topNumber",children:t+1})),n.push(Object(o.jsx)("p",{children:e.name},t)),n.push(Object(o.jsx)("p",{children:s},"by"+t)),a.push(Object(o.jsx)("div",{className:"margin",children:n},"margin"+t)),a.push(Object(o.jsx)("img",{alt:"albumImg",className:"trackImage",src:e.album.images[1].url},"tImage"+t)),c.push(Object(o.jsx)("a",{href:e.external_urls.spotify,target:"_blank",rel:"noreferrer",className:"track",children:a},"a"+t))})):null===t||void 0===t||t.items.forEach((function(e,t){var n=[],a=[],s="";e.genres.forEach((function(e,t){s+=(t>0?", ":"")+e})),a.push(Object(o.jsx)("p",{className:"topNumber",children:t+1})),n.push(Object(o.jsx)("p",{children:e.name},t)),n.push(Object(o.jsx)("p",{children:s},"genres"+t)),a.push(Object(o.jsx)("div",{className:"margin",children:n},"margin"+t)),a.push(Object(o.jsx)("img",{alt:"artistImg",className:"trackImage",src:e.images[1].url},"tImage"+t)),c.push(Object(o.jsx)("a",{href:e.external_urls.spotify,target:"_blank",rel:"noreferrer",className:"track",children:a},"akey"+t))}));return Object(o.jsx)(j.animated.div,{className:"animTop",style:e,children:c},Math.random(1e3))}(t)),d=!1})).catch((function(e){console.log(e)}))}return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"selectText",children:Object(o.jsxs)("div",{className:"line",children:[Object(o.jsxs)("p",{children:["Your's top",Object(o.jsxs)("select",{onChange:function(e){m=e.target.value},name:"Time period",id:"time_period",placeholder:"Source Type",children:[Object(o.jsx)("option",{value:"tracks",children:"tracks"}),Object(o.jsx)("option",{value:"artists",children:"artists"})]})," for",Object(o.jsxs)("select",{onChange:function(e){h=e.target.value},name:"Time period",id:"time_period",placeholder:"Source Type",children:[Object(o.jsx)("option",{value:"long_term",children:"several years"}),Object(o.jsx)("option",{value:"medium_term",children:"6 monts"}),Object(o.jsx)("option",{value:"short_term",children:"4 weeks"})]})]}),Object(o.jsx)("button",{className:"buttonStart",onClick:function(){i()},children:"Show"})]})}),Object(o.jsx)("div",{className:"maskTop",children:a})]})};var b=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("Your username"),i=Object(r.a)(s,2),l=i[0],u=i[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("accessToken");fetch("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),u(e.display_name),a(e.images[0].url)})).catch((function(e){console.log(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("img",{alt:"userImg",className:"userImage",src:c}),Object(o.jsx)("h1",{children:l})]}),Object(o.jsx)(p,{})]})};var f=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){var e=new Date(Number(localStorage.getItem("expiresIn")));new Date<e&&a(!0)}),[]),Object(o.jsx)("div",{children:c?Object(o.jsx)(b,{}):Object(o.jsx)(u,{})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),g()}},[[36,1,2]]]);
//# sourceMappingURL=main.54fac192.chunk.js.map