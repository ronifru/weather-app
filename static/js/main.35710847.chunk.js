(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{119:function(e,t,a){},130:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=(a(92),a(93),a(55)),o=a(176),i=(a(94),a(49)),l=a.n(i),u="https://dataservice.accuweather.com/",s="kSZfDL3Ikfj4DKCR31Uz3nQFap1mG9xU";function m(e){return function(t){return console.log("in dispatch"),l.a.get("".concat(u,"locations/v1/cities/autocomplete"),{params:{apikey:s,q:e}}).then((function(e){return t({type:"ON_AUTOCOMPLETE_SUCCESS",data:e.data})})).catch((function(e){t({type:"ON_REQUEST_FAILED"})}))}}function E(e){return function(t){return l.a.get("".concat(u,"currentconditions/v1/").concat(e),{params:{apikey:s}}).then((function(e){return t({type:"ON_GET_CURRENT_WEATHER_SUCCESS",data:e.data})})).catch((function(e){t({type:"ON_REQUEST_FAILED"})}))}}function f(e){return function(t){return l.a.get("".concat(u,"forecasts/v1/daily/5day/").concat(e),{params:{apikey:s,metric:!0}}).then((function(e){return t({type:"ON_GET_FIVE_DAY_FORECAST_SUCCESS",data:e.data})})).catch((function(e){t({type:"ON_REQUEST_FAILED"})}))}}function d(e){return function(t){return t({type:"CHANGE_CURRENT_LOCATION",data:e})}}function v(e){return function(t){return t({type:"CHANGE_VIEW",data:e})}}var O=a(16),p=a(177);a(119);var N=function(e){return c.a.createElement("div",{className:"day-forecast-card"},c.a.createElement("div",{className:"day-and-date"},c.a.createElement("div",{className:"date-string"},function(){var t=new Date(e.day);return"".concat(t.getDate(),"-").concat(t.getMonth()+1,"-").concat(t.getFullYear())}()),c.a.createElement("div",{className:"day-string"},Intl.DateTimeFormat("en-US",{weekday:"long"}).format(new Date(e.day)))),c.a.createElement("img",{className:"day-weather-icon",src:"".concat("/Roni-Frumovich-16-06-2020","/weatherIcons/").concat(e.icon,".png")}),c.a.createElement("div",{className:"day-temperature"},"".concat(e.minTemperature,"\xb0C/").concat(e.maxTemperature,"\xb0C")))},b=a(76),h=a.n(b),_=a(41),C=a.n(_),R=a(174),T=a(52),j=(a(120),a(75)),g=a.n(j);var y=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.error})),a=Object(O.c)((function(e){return e.locationOptions})),i=Object(O.c)((function(e){return e.currentWeather})),l=Object(O.c)((function(e){return e.fiveDayForecast})),u=Object(O.c)((function(e){return e.favorites})),s=Object(O.c)((function(e){return e.currentLocation})),v=Object(n.useState)(u.map((function(e){return e.LocalizedName}))),b=Object(r.a)(v,2),_=b[0],j=(b[1],Object(n.useState)(s?_.includes(s.LocalizedName):null)),y=Object(r.a)(j,2),S=y[0],A=y[1];Object(n.useEffect)((function(){console.log("in use effect"),console.log(t);var a=s?s.LocalizedName:"Tel Aviv",n=s?s.Key:"215854";e(m(a)),e(E(n)),e(f(n))}),[]);var L=Object(n.useCallback)(g()((function(t){e(m(t))}),500),[]),w=Object(n.useCallback)((function(){t&&T.b.error("An error has occurred. Please try again later.")}),[t]);function F(e){L(e.target.value)}var I=S?"remove from favorites":"add to favorites",D=S?c.a.createElement(C.a,null):c.a.createElement(h.a,null);return s||a&&e(d(a[0])),w(),c.a.createElement("div",{className:"home-container"},c.a.createElement(p.a,{className:"search-bar",id:"combo-box-demo",options:a||[],getOptionLabel:function(e){return"".concat(e.LocalizedName,", ").concat(e.Country.LocalizedName)},onChange:function(t,a){return function(t,a){a&&(e(d(a)),e(E(a.Key)),e(f(a.Key)),A(_.includes(a.LocalizedName)))}(0,a)},renderInput:function(e){return c.a.createElement(o.a,Object.assign({},e,{label:"Search",variant:"outlined",onChange:F}))}}),c.a.createElement("div",{className:"weather-view"},c.a.createElement(T.a,{position:"top-center",hideProgressBar:!0,autoClose:!1,closeOnClick:!0,rtl:!1,draggable:!0,closeButton:function(t){t.closeToast;return c.a.createElement("i",{className:"material-icons",onClick:function(){return e((function(e){return console.log("in clear"),e({type:"CLEAR_ERROR"})}))}},"delete")}}),c.a.createElement("div",{className:"weather-view-header"},c.a.createElement("div",{className:"title"},s?s.LocalizedName:null,c.a.createElement("img",{className:"weather-icon",src:i?"".concat("/Roni-Frumovich-16-06-2020","/weatherIcons/").concat(i[0].WeatherIcon,".png"):null})),c.a.createElement(R.a,{title:I,arrow:!0},c.a.createElement("div",{className:"add-to-favorites-btn",onClick:function(){var t;e(S?function(e){return function(t){return t({type:"ON_REMOVE_FROM_FAVORITES",data:e})}}(s):(t=s,function(e){return e({type:"ON_ADD_TO_FAVORITES",data:t})})),A(!S)}},D))),c.a.createElement("div",{className:"current-weather-text"},i?"".concat(i[0].WeatherText):null,c.a.createElement("span",{className:"current-weather-temperature"},i?" /".concat(i[0].Temperature.Metric.Value,"\xb0C"):null)),c.a.createElement("div",{className:"five-days-forecast-container"},l?function(){var e=[];return l.DailyForecasts.map((function(t){return e.push(c.a.createElement(N,{day:t.Date,minTemperature:t.Temperature.Minimum.Value,maxTemperature:t.Temperature.Maximum.Value,icon:t.Day.Icon}))})),e}():null)))},S=a(178),A=a(175),L=a(79),w=a.n(L),F=(a(130),a(12));var I=function(e){var t=Object(O.b)(),a=Object(F.f)(),r=Object(O.c)((function(e){return e.currentWeather}));return Object(n.useEffect)((function(){t(E(e.favorite.Key))}),[r]),c.a.createElement("div",{className:"favorite-card",onClick:function(){return t(d(e.favorite)),t(v("home")),void a.push("/")}},c.a.createElement("div",{className:"favorite-name"},e.favorite.LocalizedName),c.a.createElement("img",{className:"favorite-weather-icon",src:r?"".concat("/Roni-Frumovich-16-06-2020","/weatherIcons/").concat(r[0].WeatherIcon,".png"):null}),c.a.createElement("div",{className:"favorite-current-temperature"},r?"".concat(r[0].Temperature.Metric.Value,"\xb0"):null))};a(132);var D=function(){var e=Object(O.c)((function(e){return e.favorites}));return c.a.createElement("div",{className:"favorites-container"},e.map((function(e){return c.a.createElement(I,{favorite:e})})))},U=a(35);var V=function(){var e=Object(O.c)((function(e){return e.activeView})),t=Object(O.b)();return c.a.createElement(U.a,null,c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"app-title-and-icon"},c.a.createElement("img",{className:"app-icon",src:"".concat("/Roni-Frumovich-16-06-2020","/app-icon.png")}),c.a.createElement("div",{className:"app-title"},"HEROLO WEATHER APP")),c.a.createElement(S.a,{className:"nav-btns",exclusive:!0,onChange:function(e,a){return function(e,a){t(v(a))}(0,a)}},c.a.createElement(A.a,{value:"home",selected:"home"===e},c.a.createElement(U.b,{className:"toggle-btn",to:"/"},c.a.createElement(w.a,null))),c.a.createElement(A.a,{value:"favorites",selected:"favorites"===e},c.a.createElement(U.b,{className:"toggle-btn",to:"/Favorites"},c.a.createElement(C.a,null))))),c.a.createElement("div",{className:"view-container"},c.a.createElement(F.c,null,c.a.createElement(F.a,{path:"/Favorites"},c.a.createElement(D,null)),c.a.createElement(F.a,{path:"/"},c.a.createElement(y,null))))))},k=a(32),M=a(10),W=a(14),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{favorites:[],activeView:"home"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON_AUTOCOMPLETE_SUCCESS":return Object(W.a)(Object(W.a)({},e),{},{locationOptions:t.data});case"ON_REQUEST_FAILED":return console.log("ON_AUTOCOMPLETE_ERROR"),Object(W.a)(Object(W.a)({},e),{},{error:!0});case"CLEAR_ERROR":return console.log("ON_AUTOCOMPLETE_ERROR_CLEAR"),Object(W.a)(Object(W.a)({},e),{},{error:!1});case"ON_GET_CURRENT_WEATHER_SUCCESS":return Object(W.a)(Object(W.a)({},e),{},{currentWeather:t.data});case"ON_GET_FIVE_DAY_FORECAST_SUCCESS":return Object(W.a)(Object(W.a)({},e),{},{fiveDayForecast:t.data});case"ON_ADD_TO_FAVORITES":var a=e.favorites.push(t.data);return Object(W.a)(Object(W.a)({},e),{},{FavoritesWithNewSelection:a});case"ON_REMOVE_FROM_FAVORITES":var n=e.favorites.filter((function(e){return e.LocalizedName!=t.data.LocalizedName}));return Object(W.a)(Object(W.a)({},e),{},{favorites:n});case"CHANGE_CURRENT_LOCATION":return Object(W.a)(Object(W.a)({},e),{},{currentLocation:t.data});case"CHANGE_VIEW":return Object(W.a)(Object(W.a)({},e),{},{activeView:t.data});default:return e}},x=a(80),G=Object(k.c)(z,Object(k.a)(x.a));Object(M.render)(c.a.createElement(O.a,{store:G},c.a.createElement(V,null)),document.getElementById("root"))},90:function(e,t,a){e.exports=a(133)},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.35710847.chunk.js.map