(this.webpackJsonpurspecial=this.webpackJsonpurspecial||[]).push([[0],{292:function(e,a,t){},295:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t.n(n),r=t(69),i=t.n(r),o=(t(77),t(20)),u=t(19),c=t.n(u),m=(t(292),t(70)),s=t.n(m),d=t(71);function p(){return l.a.createElement("div",{className:"spinner",id:"container"},l.a.createElement("svg",{viewBox:"0 0 100 100"},l.a.createElement("defs",null,l.a.createElement("filter",{id:"shadow"},l.a.createElement("feDropShadow",{dx:"0",dy:"0",stdDeviation:"1.5","flood-color":"#fc6767"}))),l.a.createElement("circle",{id:"spinner",style:{fill:"transparent",stroke:"#fc6767",strokeWidth:"2px",strokeLinecap:"round",filter:"url(#shadow)"},cx:"50",cy:"50",r:"45"})))}function h(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{className:"form",onSubmit:function(e){return function(e){e.preventDefault(),localStorage.setItem("myName",t),r(""),window.location.reload()}(e)}},l.a.createElement("label",{htmlFor:"name"},"Siapa Kamu?"),l.a.createElement("input",{className:"inputan",onChange:function(e){return function(e){r(e.target.value)}(e)},type:"text",name:"name",id:"name"}),l.a.createElement("button",{className:"button",type:"submit"})),l.a.createElement("div",{className:"form-footer"},"Kenalan dulu yuk!"))}function E(e){var a=e.name,t=Object(n.useState)(new Date),r=Object(o.a)(t,2),i=r[0],u=r[1],c=function(){u(new Date)};Object(n.useEffect)((function(){setInterval(c,1e3)}),[i]);var m=Object(n.useState)({}),p=Object(o.a)(m,2),h=p[0],E=p[1];Object(n.useEffect)((function(){fetch("http://api.quotable.io/random").then((function(e){return e.json()})).then((function(e){return E(e)}))}),[]);var b=i.getHours(),f=i.getMinutes(),v=i.getSeconds();return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content"},l.a.createElement("h1",{style:{fontSize:"4rem"}},b%24,":",f<10?"0"+f:f,":",v<10?"0"+v:v),l.a.createElement("div",{className:"row-content"},b%24>=19&&l.a.createElement("h1",null,"Selamat Malam, ",a),b%24>=15&&b<=19&&l.a.createElement("h1",null,"Selamat Sore, ",a),b%24>=11&&b<=15&&l.a.createElement("h1",null,"Selamat Siang, ",a),b%24>=3&&b<=11&&l.a.createElement("h1",null,"Selamat Pagi, ",a),b%24>=0&&b<=3&&l.a.createElement("h1",null,"Selamat Petang, ",a),l.a.createElement("img",{src:s.a,width:"20px",alt:"more",className:"more","data-tip":"React-tooltip"})),l.a.createElement(d.a,{place:"top",type:"light",effect:"float",multiline:!0},l.a.createElement(k,{h:b}))),l.a.createElement("div",{className:"footer"},l.a.createElement("p",{className:"quote"},h.content),l.a.createElement("p",null,"~",h.author)))}function b(e){var a=e.children,t=(new Date).getHours();return l.a.createElement("div",{id:t%24>=19||t%24<3?"app-night":t%24>=3&&t%24<11?"app-morning":t%24>=11&&t%24<15?"app-noon":t%24>=15&&t%24<19&&"app-evening",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},l.a.createElement("div",{style:{position:"fixed !important",top:0,left:0,width:"100%",height:"100%"}},t%24>=19||t%24<3?l.a.createElement(f,null):t%24>=3&&t%24<11?l.a.createElement(v,null):t%24>=11&&t%24<15?l.a.createElement(g,null):t%24>=15&&t%24<19&&l.a.createElement(y,null),l.a.createElement("div",null,a)))}var f=function(){return l.a.createElement(c.a,{params:{particles:{number:{value:400,density:{enable:!0,value_area:1500}},line_linked:{enable:!1,opacity:.02},move:{direction:"right",speed:.05},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}})},v=function(){return l.a.createElement(c.a,{params:{particles:{number:{value:200,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:400,duration:4}}}}})},g=function(){return l.a.createElement(c.a,{params:{particles:{number:{value:150,density:{enable:!1}},size:{value:10,random:!0,anim:{speed:.5,size_min:.3}},move:{direction:"right",out_mode:"out"},line_linked:{enable:!1}},interactivity:{events:{onclick:{enable:!0,mode:"remove"}},modes:{remove:{particles_nb:10}}}}})},y=function(){return l.a.createElement(c.a,{params:{particles:{number:{value:80},size:{value:2,random:!0},move:{direction:"left",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}})},k=function(e){var a=e.h;return a%24>=0&&a%24<2?l.a.createElement("p",null,"Kok belum tidur? Sudah malem lo.... ",l.a.createElement("br",null),"Kesehatannya dijaga dong. Jangan begadang terus..."):a%24>=2&&a%24<4?l.a.createElement("p",null,"Sholat tahajud dulu yuk..."):a%24>=4&&a%24<5?l.a.createElement("p",null,"Sudah sholat subuh belum? Kalo belum sholat dulu ya!"):a%24>=5&&a%24<6?l.a.createElement("p",null,"Selamat pagi! Semangat jalani harinya"):a%24>=7&&a%24<9?l.a.createElement("p",null,"Ayo sholat dhuha biar dipermudah segala urusannya! ",l.a.createElement("br",null)," Jangan lupa sarapan juga!"," "):a%24>=9&&a%24<11?l.a.createElement("p",null,"Selamat Beraktifitas !"):a%24>=11&&a%24<15?l.a.createElement("p",null,"Sholat zuhur yuk! udah masuk waktunya nih! ",l.a.createElement("br",null)," Jangan lupa makan siang juga ya"," "):a%24>=15&&a%24<16?l.a.createElement("p",null,"Sudah masuk waktu ashar nih! Sholat yuk! habis itu main lagi"):a%24>=16&&a%24<18?l.a.createElement("p",null,"Mandi sana bau ih...."):a%24>=18&&a%24<19?l.a.createElement("p",null,"Maghrib woy!!"):a%24>=19&&a%24<20?l.a.createElement("p",null,"Isya telah datang! Sholat dulu yuk biar nanti malem nggak kelupaan"):a%24>=20&&a%24<22?l.a.createElement("p",null,"Lagi ngapain nih? Udah makan apa belum? ",l.a.createElement("br",null)," Kalo belum makan dulu ya?"):a%24>=22&&a%24<24?l.a.createElement("p",null,"Tidur dong udah jam ",a%12," nih! jangan begadang ya?"):l.a.createElement("p",null,"Hai!!")},S=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){return r(localStorage.getItem("myName"))}),[]),t?t?l.a.createElement(b,null,l.a.createElement(E,{name:t})):l.a.createElement(p,null):l.a.createElement(b,null,l.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,a,t){e.exports=t.p+"static/media/more.8a645233.svg"},72:function(e,a,t){e.exports=t(295)},77:function(e,a,t){}},[[72,1,2]]]);
//# sourceMappingURL=main.33c0404c.chunk.js.map