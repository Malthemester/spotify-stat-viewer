(this["webpackJsonpspotify-stat-viewer"]=this["webpackJsonpspotify-stat-viewer"]||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(18),r=a.n(c),i=(a(32),a(4)),o=(a(33),a(1)),l="https://malthemester.github.io/spotify-stat-viewer/",u=["playlist-read-private","user-read-private","user-top-read"].join("%20");var m=function(){return Object(n.useEffect)((function(){if(window.location.hash){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("="),n=Object(i.a)(a,2),s=n[0],c=n[1];return e[s]=c,e}),{}),t=e.access_token,a=e.expires_in,n=e.token_type;localStorage.setItem("accessToken",t),localStorage.setItem("tokenType",n),localStorage.setItem("expiresIn",(new Date).getTime()+1e3*(a-300)),window.location=l}})),Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)("h1",{children:"You need to login to Spotify to view your stats"}),Object(o.jsx)("button",{className:"button-33",onClick:function(){return function(){var e="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("8388f4a4228342fa9111a25e71147bdd","&redirect_uri=").concat(l,"&scope=").concat(u,"&response_type=token&show_dialog=true");window.location=e}()},children:"Login to spotify"})]})},h=a(22);function p(e){var t=[];return null===e||void 0===e||e.items.forEach((function(e,a){var n,s=[],c=[],r="";null===e||void 0===e||null===(n=e.artists)||void 0===n||n.forEach((function(e,t){r+=(t>0?", ":"")+e.name})),c.push(Object(o.jsx)("p",{className:"topNumber",children:a+1})),s.push(Object(o.jsx)("p",{children:e.name},a)),s.push(Object(o.jsx)("p",{children:r},"by"+a)),c.push(Object(o.jsx)("div",{className:"margin",children:s},"margin"+a)),c.push(Object(o.jsx)("img",{alt:"albumImg",className:"trackImage",src:e.album.images[1].url},"tImage"+a)),t.push(Object(o.jsx)("a",{href:e.external_urls.spotify,target:"_blank",rel:"noreferrer",className:"historyTrack",children:c},"a"+a))})),t}function j(e){var t=[];return null===e||void 0===e||e.items.forEach((function(e,a){var n,s=[],c=[],r="";null===e||void 0===e||null===(n=e.genres)||void 0===n||n.forEach((function(e,t){r+=(t>0?", ":"")+e})),c.push(Object(o.jsx)("p",{className:"topNumber",children:a+1})),s.push(Object(o.jsx)("p",{children:e.name},a)),s.push(Object(o.jsx)("p",{children:r},"genres"+a)),c.push(Object(o.jsx)("div",{className:"margin",children:s},"margin"+a)),c.push(Object(o.jsx)("img",{alt:"artistImg",className:"trackImage",src:e.images[1].url},"tImage"+a)),t.push(Object(o.jsx)("a",{href:e.external_urls.spotify,target:"_blank",rel:"noreferrer",className:"historyTrack",children:c},"akey"+a))})),t}var d=function(e,t,a){var n=[],s="tracks"===t?p:j;return console.log(t),console.log(a),e.forEach((function(e){e.Entrys.forEach((function(c){if(console.log(c),console.log(c.type),console.log(c.timeRange),c.type===t&&c.timeRange==a){var r=s(c.data);n.push(Object(o.jsxs)("div",{className:"historyChild",children:[e.Date,r]}))}}))})),console.log(n),Object(o.jsx)("div",{className:"historyContainter",children:n})},g="long_term",f="tracks",b="curent",v=!0;var O=function(){var e=Object(h.useSpring)({to:[{y:-720,opacity:0,immediate:v},{y:-600,delay:0,opacity:1,immediate:!1},{y:-480,delay:0},{y:-360,delay:350},{y:-240,delay:350},{y:-120,delay:350},{y:0,delay:350}],from:{opacity:0,immediate:v}}),t=Object(n.useState)(),a=Object(i.a)(t,2),s=a[0],c=a[1];function r(){var t=localStorage.getItem("accessToken"),a="https://api.spotify.com/v1/me/top/".concat(f,"?limit=5&time_range=").concat(g);fetch(a,{headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),c(function(t){var a=[];"tracks"===f?null===t||void 0===t||t.items.forEach((function(e,t){var n=[],s=[],c="";e.artists.forEach((function(e,t){c+=(t>0?", ":"")+e.name})),s.push(Object(o.jsx)("p",{className:"topNumber",children:t+1})),n.push(Object(o.jsx)("p",{children:e.name},t)),n.push(Object(o.jsx)("p",{children:c},"by"+t)),s.push(Object(o.jsx)("div",{className:"margin",children:n},"margin"+t)),s.push(Object(o.jsx)("img",{alt:"albumImg",className:"trackImage",src:e.album.images[1].url},"tImage"+t)),a.push(Object(o.jsx)("a",{href:e.external_urls.spotify,target:"_blank",rel:"noreferrer",className:"track",children:s},"a"+t))})):null===t||void 0===t||t.items.forEach((function(e,t){var n=[],s=[],c="";e.genres.forEach((function(e,t){c+=(t>0?", ":"")+e})),s.push(Object(o.jsx)("p",{className:"topNumber",children:t+1})),n.push(Object(o.jsx)("p",{children:e.name},t)),n.push(Object(o.jsx)("p",{children:c},"genres"+t)),s.push(Object(o.jsx)("div",{className:"margin",children:n},"margin"+t)),s.push(Object(o.jsx)("img",{alt:"artistImg",className:"trackImage",src:e.images[1].url},"tImage"+t)),a.push(Object(o.jsx)("a",{href:e.external_urls.spotify,target:"_blank",rel:"noreferrer",className:"track",children:s},"akey"+t))}));return Object(o.jsx)(h.animated.div,{className:"animTop",style:e,children:a},Math.random(1e3))}(t)),v=!1})).catch((function(e){console.log(e)}))}return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"selectText",children:Object(o.jsxs)("div",{className:"line",children:[Object(o.jsxs)("p",{children:["Your",Object(o.jsxs)("select",{onChange:function(e){console.log(e.target.value),b=e.target.value},name:"Curent",id:"time_period",placeholder:"Source Type",children:[Object(o.jsx)("option",{value:"curent",children:"curent"}),Object(o.jsx)("option",{value:"past",children:"past"})]})," top",Object(o.jsxs)("select",{onChange:function(e){f=e.target.value},name:"Type",id:"type",placeholder:"Source Type",children:[Object(o.jsx)("option",{value:"tracks",children:"tracks"}),Object(o.jsx)("option",{value:"artists",children:"artists"})]})," for",Object(o.jsxs)("select",{onChange:function(e){g=e.target.value},name:"Time period",id:"time_period",placeholder:"Source Type",children:[Object(o.jsx)("option",{value:"long_term",children:"several years"}),Object(o.jsx)("option",{value:"medium_term",children:"6 month"}),Object(o.jsx)("option",{value:"short_term",children:"4 weeks"})]})]}),Object(o.jsx)("button",{className:"buttonStart",onClick:function(){console.log(b),"curent"==b?r():function(){var e,t=null!==(e=JSON.parse(localStorage.getItem("history")))&&void 0!==e?e:[],a=!1;if(t.forEach((function(e){if(console.log(new Date(Date.now()).toDateString()),e.Date==new Date(Date.now()).toDateString())return c(d(t,f,g)),void(a=!0)})),!a){var n=localStorage.getItem("accessToken"),s=[],r=[];["https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=long_term","https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=medium_term","https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term","https://api.spotify.com/v1/me/top/artists?limit=5&time_range=long_term","https://api.spotify.com/v1/me/top/artists?limit=5&time_range=medium_term","https://api.spotify.com/v1/me/top/artists?limit=5&time_range=short_term"].forEach((function(e){r.push(fetch(e,{headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){f=e.includes("artists")?"artists":"tracks",g=e.includes("long_term")?"long_term":e.includes("medium_term")?"medium_term":"short_term",s.push({type:f,timeRange:g,data:t})})).catch((function(e){console.log(e)})))})),Promise.all(r).then((function(){var e,t=null!==(e=JSON.parse(localStorage.getItem("history")))&&void 0!==e?e:[],a=new Date(Date.now()).toDateString();t.push({Entrys:s,Date:a}),localStorage.setItem("history",JSON.stringify(t)),c(d(t,f,g))}))}}()},children:"Show"})]})}),Object(o.jsx)("div",{className:"maskTop",children:s})]})};var y=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)("Your username"),r=Object(i.a)(c,2),l=r[0],u=r[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("accessToken");fetch("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){u(e.display_name),s(e.images[0].url)})).catch((function(e){console.log(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("img",{alt:"userImg",className:"userImage",src:a}),Object(o.jsx)("h1",{children:l})]}),Object(o.jsx)(O,{})]})};var x=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){var e=new Date(Number(localStorage.getItem("expiresIn")));new Date<e&&s(!0)}),[]),Object(o.jsx)("div",{children:a?Object(o.jsx)(y,{}):Object(o.jsx)(m,{})})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),_()}},[[36,1,2]]]);
//# sourceMappingURL=main.42a90658.chunk.js.map