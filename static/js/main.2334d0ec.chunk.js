(this["webpackJsonpreact-weather-app-hooks"]=this["webpackJsonpreact-weather-app-hooks"]||[]).push([[0],{14:function(e,t,a){e.exports=a(40)},19:function(e,t,a){},20:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(13),r=a.n(o),i=(a(19),a(20),a(3)),m=a(2),l=a.n(m),s=(a(38),function(e){return c.a.createElement("form",{onSubmit:e.getWeather},c.a.createElement("input",{name:"city",type:"text",onChange:function(t){e.setInputText(t.target.value)},placeholder:"Search by city..."}),c.a.createElement("button",null,"Search"))}),u=(a(39),function(e){var t=e.city,a=e.country,n=e.icon,o=e.temperature,r=e.min,i=e.max,m=e.condition;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"name"},t,",",a),c.a.createElement("div",{className:"weather-icon"},c.a.createElement("img",{src:"http://openweathermap.org/img/wn/"+n+"@2x.png"})),c.a.createElement("div",{className:"weather"},c.a.createElement("div",{className:"main-weather"},c.a.createElement("span",{className:"temperature"},o,"\xb0")),c.a.createElement("div",{className:"minmax"},c.a.createElement("span",{className:"min-max"},"Min ",r,"\xb0",c.a.createElement("i",{className:"wi wi-celsius"}),c.a.createElement("br",null),"Max ",i,"\xb0",c.a.createElement("i",{className:"wi wi-celsius"})))),c.a.createElement("div",{className:"condition"},m))}),d=function(e){var t=e-273;return Math.floor(1.8*t+32)},p=function(){var e="ce06c3f81e1990453b38833c502026cb",t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],r=a[1],m=Object(n.useState)({}),p=Object(i.a)(m,2),h=p[0],g=p[1];Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){console.log("this is the position"+t.coords.latitude+t.coords.longitude);var a="https://api.openweathermap.org/data/2.5/weather?lat=".concat(t.coords.latitude,"&lon=").concat(t.coords.longitude,"&appid=").concat(e);l.a.get(a).then((function(e){return g({city:e.data.name,country:e.data.sys.country,temperature:d(e.data.main.temp),max:d(e.data.main.temp_max),min:d(e.data.main.temp_min),condition:e.data.weather[0].description,icon:e.data.weather[0].icon})})).then((function(e){return console.log(e)}))}))}),[]);return c.a.createElement("div",null,c.a.createElement(s,{setInputText:r,getWeather:function(t){t.preventDefault(),l.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(o,"&appid=").concat(e)).then((function(e){return g({city:e.data.name,country:e.data.sys.country,temperature:d(e.data.main.temp),max:d(e.data.main.temp_max),min:d(e.data.main.temp_min),condition:e.data.weather[0].description,icon:e.data.weather[0].icon})})).then((function(e){return console.log(e)}))}}),c.a.createElement(u,{city:h.city,country:h.country,temperature:h.temperature,max:h.max,min:h.min,condition:h.condition,icon:h.icon}))};var h=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.2334d0ec.chunk.js.map