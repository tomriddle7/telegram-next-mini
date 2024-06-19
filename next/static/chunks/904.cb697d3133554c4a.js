"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[904],{1904:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(9775);t.default=o.WebApp},9775:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.WebApp=void 0,r(498);var o=window;t.WebApp=o.Telegram.WebApp},498:function(){!function(){var e={},t="";try{t=location.hash.toString()}catch(e){}var r=p(t),o=f("initParams");if(o)for(var n in o)void 0===r[n]&&(r[n]=o[n]);d("initParams",r);var i,a=!1;try{if(a=null!=window.parent&&window!=window.parent){window.addEventListener("message",function(e){if(e.source===window.parent){try{var t=JSON.parse(e.data)}catch(e){return}if(t&&t.eventType){if("set_custom_style"==t.eventType)"https://web.telegram.org"===e.origin&&(i.innerHTML=t.eventData);else if("reload_iframe"==t.eventType){try{window.parent.postMessage(JSON.stringify({eventType:"iframe_will_reload"}),"*")}catch(e){}location.reload()}else c(t.eventType,t.eventData)}}}),i=document.createElement("style"),document.head.appendChild(i);try{window.parent.postMessage(JSON.stringify({eventType:"iframe_ready",eventData:{reload_supported:!0}}),"*")}catch(e){}}}catch(e){}function s(e){try{return e=e.replace(/\+/g,"%20"),decodeURIComponent(e)}catch(t){return e}}function p(e){e=e.replace(/^#/,"");var t={};if(!e.length)return t;if(0>e.indexOf("=")&&0>e.indexOf("?"))return t._path=s(e),t;var r=e.indexOf("?");if(r>=0){var o=e.substr(0,r);t._path=s(o),e=e.substr(r+1)}var n=l(e);for(var i in n)t[i]=n[i];return t}function l(e){var t,r,o,n,i={};if(!e.length)return i;var a=e.split("&");for(t=0;t<a.length;t++)o=s((r=a[t].split("="))[0]),n=null==r[1]?null:s(r[1]),i[o]=n;return i}function c(e,t){console.log("[Telegram.WebView] < receiveEvent",e,t),u(e,function(r){r(e,t)})}function u(t,r){var o=e[t];if(void 0!==o&&o.length)for(var n=0;n<o.length;n++)try{r(o[n])}catch(e){}}function d(e,t){try{return window.sessionStorage.setItem("__telegram__"+e,JSON.stringify(t)),!0}catch(e){}return!1}function f(e){try{return JSON.parse(window.sessionStorage.getItem("__telegram__"+e))}catch(e){}return null}window.Telegram||(window.Telegram={}),window.Telegram.WebView={initParams:r,isIframe:a,onEvent:function(t,r){void 0===e[t]&&(e[t]=[]),-1===e[t].indexOf(r)&&e[t].push(r)},offEvent:function(t,r){if(void 0!==e[t]){var o=e[t].indexOf(r);-1!==o&&e[t].splice(o,1)}},postEvent:function(e,t,r){if(t||(t=function(){}),void 0===r&&(r=""),console.log("[Telegram.WebView] > postEvent",e,r),void 0!==window.TelegramWebviewProxy)TelegramWebviewProxy.postEvent(e,JSON.stringify(r)),t();else if(window.external&&"notify"in window.external)window.external.notify(JSON.stringify({eventType:e,eventData:r})),t();else if(a)try{var o="https://web.telegram.org";o="*",window.parent.postMessage(JSON.stringify({eventType:e,eventData:r}),o),t()}catch(e){t(e)}else t({notAvailable:!0})},receiveEvent:c,callEventCallbacks:u},window.Telegram.Utils={urlSafeDecode:s,urlParseQueryString:l,urlParseHashParams:p,urlAppendHashParams:function(e,t){var r=e.indexOf("#");if(r<0)return e+"#"+t;var o=e.substr(r+1);return o.indexOf("=")>=0||o.indexOf("?")>=0?e+"&"+t:o.length>0?e+"?"+t:e+t},sessionStorageSet:d,sessionStorageGet:f},window.TelegramGameProxy_receiveEvent=c,window.TelegramGameProxy={receiveEvent:c}}(),function(){var e=window.Telegram.Utils,t=window.Telegram.WebView,r=t.initParams,o=t.isIframe,n={},i="",a={},s={},p="light",l="6.0",c="unknown";if(r.tgWebAppData&&r.tgWebAppData.length)for(var u in i=r.tgWebAppData,a=e.urlParseQueryString(i)){var d=a[u];try{("{"==d.substr(0,1)&&"}"==d.substr(-1)||"["==d.substr(0,1)&&"]"==d.substr(-1))&&(a[u]=JSON.parse(d))}catch(e){}}if(r.tgWebAppThemeParams&&r.tgWebAppThemeParams.length){var f=r.tgWebAppThemeParams;try{var b=JSON.parse(f);b&&A(b)}catch(e){}}var b=e.sessionStorageGet("themeParams");b&&A(b),r.tgWebAppVersion&&(l=r.tgWebAppVersion),r.tgWebAppPlatform&&(c=r.tgWebAppPlatform);var v=window.innerHeight;function g(e){v!=window.innerHeight&&(v=window.innerHeight,h("viewportChanged",{isStateStable:!0}))}function m(e){return e.toString().replace(/^\s+|\s+$/g,"")}function h(e){var r=Array.prototype.slice.call(arguments);e=r.shift(),t.callEventCallbacks("webview:"+e,function(e){e.apply(n,r)})}function _(e,r){t.onEvent("webview:"+e,r)}function w(e,r){t.offEvent("webview:"+e,r)}function y(e,t){var r=document.documentElement;r&&r.style&&r.style.setProperty&&r.style.setProperty("--tg-"+e,t)}function A(t){var r;for(var o in"#1c1c1d"==t.bg_color&&t.bg_color==t.secondary_bg_color&&(t.secondary_bg_color="#2c2c2e"),t)(r=N(t[o]))&&(s[o]=r,"bg_color"==o&&y("color-scheme",p=!function(e){3==(e=e.replace(/[\s#]/g,"")).length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e.substr(0,2),16),r=parseInt(e.substr(2,2),16),o=parseInt(e.substr(4,2),16);return 120>Math.sqrt(t*t*.299+r*r*.587+o*o*.114)}(r)?"light":"dark"),y(o="theme-"+o.split("_").join("-"),r));e.sessionStorageSet("themeParams",s)}var E={};function W(e){for(var t=100;--t;){for(var r="",o="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n=o.length,i=0;i<e;i++)r+=o[Math.floor(Math.random()*n)];if(!E[r])return E[r]={},r}throw Error("WebAppCallbackIdGenerateFailed")}var P=!1,T=!1,k=!0;function x(e){var t,r;void 0!==e&&(k=!!e.is_expanded,P=e.height,e.is_state_stable&&(T=e.height),h("viewportChanged",{isStateStable:!!e.is_state_stable})),t=!1!==P?P-L+"px":L?"calc(100vh - "+L+"px)":"100vh",r=!1!==T?T-L+"px":L?"calc(100vh - "+L+"px)":"100vh",y("viewport-height",t),y("viewport-stable-height",r)}var C=!1,I="bg_color",S=null,O=null,D=null;function M(){(O!=I||D!=S)&&(O=I,(D=S)?t.postEvent("web_app_set_header_color",!1,{color:S}):t.postEvent("web_app_set_header_color",!1,{color_key:I}))}var q="bg_color";function B(){return"secondary_bg_color"==q?s.secondary_bg_color:"bg_color"==q?s.bg_color:q}var j=null;function U(){var e=B();j!=e&&(j=e,t.postEvent("web_app_set_background_color",!1,{color:e}))}function N(e){if(e+="",t=/^\s*#([0-9a-f]{6})\s*$/i.exec(e))return"#"+t[1].toLowerCase();if(t=/^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(e))return("#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]).toLowerCase();if(t=/^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(e)){var t,r=parseInt(t[1]),o=parseInt(t[2]),n=parseInt(t[3]);return"#"+(r=(r<16?"0":"")+r.toString(16))+(o=(o<16?"0":"")+o.toString(16))+(n=(n<16?"0":"")+n.toString(16))}return!1}function H(e){return function(e,t){"string"!=typeof e&&(e=""),"string"!=typeof t&&(t=""),e=e.replace(/^\s+|\s+$/g,"").split("."),t=t.replace(/^\s+|\s+$/g,"").split(".");var r,o,n,i=Math.max(e.length,t.length);for(r=0;r<i;r++)if((o=parseInt(e[r])||0)!=(n=parseInt(t[r])||0)){if(o>n)return 1;return -1}return 0}(l,e)>=0}var F=function(){var e=!1,r={};Object.defineProperty(r,"isVisible",{set:function(e){a({is_visible:e})},get:function(){return e},enumerable:!0});var o=null;function n(){return{is_visible:e}}function i(){return!!H("6.1")||(console.warn("[Telegram.WebApp] BackButton is not supported in version "+l),!1)}function a(a){var s,p,l;return i()&&(void 0!==a.is_visible&&(e=!!a.is_visible),void 0===(s=p=n())&&(s=n()),l=JSON.stringify(s),o!==l&&(o=l,t.postEvent("web_app_setup_back_button",!1,p))),r}return t.onEvent("back_button_pressed",function(){h("backButtonClicked")}),r.onClick=function(e){return i()&&_("backButtonClicked",e),r},r.offClick=function(e){return i()&&w("backButtonClicked",e),r},r.show=function(){return a({is_visible:!0})},r.hide=function(){return a({is_visible:!1})},r}(),L=0,J=function(){var e=!1,o=!0,n=!1,i="CONTINUE",a=!1,p=!1,l={};Object.defineProperty(l,"text",{set:function(e){l.setParams({text:e})},get:function(){return i},enumerable:!0}),Object.defineProperty(l,"color",{set:function(e){l.setParams({color:e})},get:function(){return a||s.button_color||"#2481cc"},enumerable:!0}),Object.defineProperty(l,"textColor",{set:function(e){l.setParams({text_color:e})},get:function(){return p||s.button_text_color||"#ffffff"},enumerable:!0}),Object.defineProperty(l,"isVisible",{set:function(e){l.setParams({is_visible:e})},get:function(){return e},enumerable:!0}),Object.defineProperty(l,"isProgressVisible",{get:function(){return n},enumerable:!0}),Object.defineProperty(l,"isActive",{set:function(e){l.setParams({is_active:e})},get:function(){return o},enumerable:!0});var c=null;t.onEvent("main_button_pressed",b);var u=null,d={};if(r.tgWebAppDebug){for(var f in u=document.createElement("tg-main-button"),d={font:"600 14px/18px sans-serif",display:"none",width:"100%",height:"48px",borderRadius:"0",background:"no-repeat right center",position:"fixed",left:"0",right:"0",bottom:"0",margin:"0",padding:"15px 20px",textAlign:"center",boxSizing:"border-box",zIndex:"10000"})u.style[f]=d[f];document.addEventListener("DOMContentLoaded",function e(t){document.removeEventListener("DOMContentLoaded",e),document.body.appendChild(u),u.addEventListener("click",b,!1)})}function b(){o&&h("mainButtonClicked")}function v(){var t=l.color,r=l.textColor;return e?{is_visible:!0,is_active:o,is_progress_visible:n,text:i,color:t,text_color:r}:{is_visible:!1}}function g(){var e,o=v(),n=(void 0===(e=o)&&(e=v()),JSON.stringify(e));c!==n&&(c=n,t.postEvent("web_app_setup_main_button",!1,o),r.tgWebAppDebug&&(o.is_visible?(u.style.display="block",L=48,u.style.opacity=o.is_active?"1":"0.8",u.style.cursor=o.is_active?"pointer":"auto",u.disabled=!o.is_active,u.innerText=o.text,u.style.backgroundImage=o.is_progress_visible?"url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewport%3D%220%200%2048%2048%22%20width%3D%2248px%22%20height%3D%2248px%22%3E%3Ccircle%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222.25%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22%20stroke-dashoffset%3D%22106%22%20r%3D%229%22%20stroke-dasharray%3D%2256.52%22%20rotate%3D%22-90%22%3E%3Canimate%20attributeName%3D%22stroke-dashoffset%22%20attributeType%3D%22XML%22%20dur%3D%22360s%22%20from%3D%220%22%20to%3D%2212500%22%20repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%3CanimateTransform%20attributeName%3D%22transform%22%20attributeType%3D%22XML%22%20type%3D%22rotate%22%20dur%3D%221s%22%20from%3D%22-90%2024%2024%22%20to%3D%22630%2024%2024%22%20repeatCount%3D%22indefinite%22%3E%3C%2FanimateTransform%3E%3C%2Fcircle%3E%3C%2Fsvg%3E')":"none",u.style.backgroundColor=o.color,u.style.color=o.text_color):(u.style.display="none",L=0),document.documentElement&&(document.documentElement.style.boxSizing="border-box",document.documentElement.style.paddingBottom=L+"px"),x()))}return l.setText=function(e){return l.setParams({text:e})},l.onClick=function(e){return _("mainButtonClicked",e),l},l.offClick=function(e){return w("mainButtonClicked",e),l},l.show=function(){return l.setParams({is_visible:!0})},l.hide=function(){return l.setParams({is_visible:!1})},l.enable=function(){return l.setParams({is_active:!0})},l.disable=function(){return l.setParams({is_active:!1})},l.showProgress=function(e){return o=!!e,n=!0,g(),l},l.hideProgress=function(){return l.isActive||(o=!0),n=!1,g(),l},l.setParams=function(t){if(void 0!==t.text){var r=m(t.text);if(!r.length)throw console.error("[Telegram.WebApp] Main button text is required",t.text),Error("WebAppMainButtonParamInvalid");if(r.length>64)throw console.error("[Telegram.WebApp] Main button text is too long",r),Error("WebAppMainButtonParamInvalid");i=r}if(void 0!==t.color){if(!1===t.color||null===t.color)a=!1;else{var n=N(t.color);if(!n)throw console.error("[Telegram.WebApp] Main button color format is invalid",t.color),Error("WebAppMainButtonParamInvalid");a=n}}if(void 0!==t.text_color){if(!1===t.text_color||null===t.text_color)p=!1;else{var s=N(t.text_color);if(!s)throw console.error("[Telegram.WebApp] Main button text color format is invalid",t.text_color),Error("WebAppMainButtonParamInvalid");p=s}}if(void 0!==t.is_visible){if(t.is_visible&&!l.text.length)throw console.error("[Telegram.WebApp] Main button text is required"),Error("WebAppMainButtonParamInvalid");e=!!t.is_visible}return void 0!==t.is_active&&(o=!!t.is_active),g(),l},l}(),V=function(){var e=!1,r={};Object.defineProperty(r,"isVisible",{set:function(e){a({is_visible:e})},get:function(){return e},enumerable:!0});var o=null;function n(){return{is_visible:e}}function i(){return!!H("6.10")||(console.warn("[Telegram.WebApp] SettingsButton is not supported in version "+l),!1)}function a(a){var s,p,l;return i()&&(void 0!==a.is_visible&&(e=!!a.is_visible),void 0===(s=p=n())&&(s=n()),l=JSON.stringify(s),o!==l&&(o=l,t.postEvent("web_app_setup_settings_button",!1,p))),r}return t.onEvent("settings_button_pressed",function(){h("settingsButtonClicked")}),r.onClick=function(e){return i()&&_("settingsButtonClicked",e),r},r.offClick=function(e){return i()&&w("settingsButtonClicked",e),r},r.show=function(){return a({is_visible:!0})},r.hide=function(){return a({is_visible:!1})},r}(),Q=function(){var e={};function r(r){if(!H("6.1"))return console.warn("[Telegram.WebApp] HapticFeedback is not supported in version "+l),e;if("impact"==r.type){if("light"!=r.impact_style&&"medium"!=r.impact_style&&"heavy"!=r.impact_style&&"rigid"!=r.impact_style&&"soft"!=r.impact_style)throw console.error("[Telegram.WebApp] Haptic impact style is invalid",r.impact_style),Error("WebAppHapticImpactStyleInvalid")}else if("notification"==r.type){if("error"!=r.notification_type&&"success"!=r.notification_type&&"warning"!=r.notification_type)throw console.error("[Telegram.WebApp] Haptic notification type is invalid",r.notification_type),Error("WebAppHapticNotificationTypeInvalid")}else if("selection_change"==r.type);else throw console.error("[Telegram.WebApp] Haptic feedback type is invalid",r.type),Error("WebAppHapticFeedbackTypeInvalid");return t.postEvent("web_app_trigger_haptic_feedback",!1,r),e}return e.impactOccurred=function(e){return r({type:"impact",impact_style:e})},e.notificationOccurred=function(e){return r({type:"notification",notification_type:e})},e.selectionChanged=function(){return r({type:"selection_change"})},e}(),R=function(){var e={};function t(t,r,o){if(!H("6.9"))throw console.error("[Telegram.WebApp] CloudStorage is not supported in version "+l),Error("WebAppMethodUnsupported");return Z(t,r,o),e}return e.setItem=function(e,r,o){return t("saveStorageValue",{key:e,value:r},o)},e.getItem=function(t,r){return e.getItems([t],r?function(e,o){e?r(e):r(null,o[t])}:null)},e.getItems=function(e,r){return t("getStorageValues",{keys:e},r)},e.removeItem=function(t,r){return e.removeItems([t],r)},e.removeItems=function(e,r){return t("deleteStorageValues",{keys:e},r)},e.getKeys=function(e){return t("getStorageKeys",{},e)},e}(),z={},$=!1,G=!1,K=!1,X=!1;function Z(e,r,o){if(!H("6.9"))throw console.error("[Telegram.WebApp] Method invokeCustomMethod is not supported in version "+l),Error("WebAppMethodUnsupported");var n=W(16);E[n]={callback:o},t.postEvent("web_app_invoke_custom_method",!1,{req_id:n,method:e,params:r||{}})}window.Telegram||(window.Telegram={}),Object.defineProperty(n,"initData",{get:function(){return i},enumerable:!0}),Object.defineProperty(n,"initDataUnsafe",{get:function(){return a},enumerable:!0}),Object.defineProperty(n,"version",{get:function(){return l},enumerable:!0}),Object.defineProperty(n,"platform",{get:function(){return c},enumerable:!0}),Object.defineProperty(n,"colorScheme",{get:function(){return p},enumerable:!0}),Object.defineProperty(n,"themeParams",{get:function(){return s},enumerable:!0}),Object.defineProperty(n,"isExpanded",{get:function(){return k},enumerable:!0}),Object.defineProperty(n,"viewportHeight",{get:function(){return(!1===P?window.innerHeight:P)-L},enumerable:!0}),Object.defineProperty(n,"viewportStableHeight",{get:function(){return(!1===T?window.innerHeight:T)-L},enumerable:!0}),Object.defineProperty(n,"isClosingConfirmationEnabled",{set:function(e){!function(e){if(!H("6.2")){console.warn("[Telegram.WebApp] Closing confirmation is not supported in version "+l);return}C=!!e,t.postEvent("web_app_setup_closing_behavior",!1,{need_confirmation:C})}(e)},get:function(){return C},enumerable:!0}),Object.defineProperty(n,"headerColor",{set:function(e){!function(e){if(!H("6.1")){console.warn("[Telegram.WebApp] Header color is not supported in version "+l);return}!H("6.9")&&(s.bg_color&&s.bg_color==e?e="bg_color":s.secondary_bg_color&&s.secondary_bg_color==e&&(e="secondary_bg_color"));var t=null,r=null;if("bg_color"==e||"secondary_bg_color"==e)r=e;else if(H("6.9")&&!(t=N(e)))throw console.error("[Telegram.WebApp] Header color format is invalid",e),Error("WebAppHeaderColorInvalid");if(!H("6.9")&&"bg_color"!=r&&"secondary_bg_color"!=r)throw console.error("[Telegram.WebApp] Header color key should be one of Telegram.WebApp.themeParams.bg_color, Telegram.WebApp.themeParams.secondary_bg_color, 'bg_color', 'secondary_bg_color'",e),Error("WebAppHeaderColorKeyInvalid");I=r,S=t,M()}(e)},get:function(){return"secondary_bg_color"==I?s.secondary_bg_color:"bg_color"==I?s.bg_color:S},enumerable:!0}),Object.defineProperty(n,"backgroundColor",{set:function(e){!function(e){var t;if(!H("6.1")){console.warn("[Telegram.WebApp] Background color is not supported in version "+l);return}if("bg_color"==e||"secondary_bg_color"==e)t=e;else if(!(t=N(e)))throw console.error("[Telegram.WebApp] Background color format is invalid",e),Error("WebAppBackgroundColorInvalid");q=t,U()}(e)},get:function(){return B()},enumerable:!0}),Object.defineProperty(n,"BackButton",{value:F,enumerable:!0}),Object.defineProperty(n,"MainButton",{value:J,enumerable:!0}),Object.defineProperty(n,"SettingsButton",{value:V,enumerable:!0}),Object.defineProperty(n,"HapticFeedback",{value:Q,enumerable:!0}),Object.defineProperty(n,"CloudStorage",{value:R,enumerable:!0}),n.setHeaderColor=function(e){n.headerColor=e},n.setBackgroundColor=function(e){n.backgroundColor=e},n.enableClosingConfirmation=function(){n.isClosingConfirmationEnabled=!0},n.disableClosingConfirmation=function(){n.isClosingConfirmationEnabled=!1},n.isVersionAtLeast=function(e){return H(e)},n.onEvent=function(e,t){_(e,t)},n.offEvent=function(e,t){w(e,t)},n.sendData=function(e){if(!e||!e.length)throw console.error("[Telegram.WebApp] Data is required",e),Error("WebAppDataInvalid");if(function(e){if(window.Blob)try{return new Blob([e]).size}catch(e){}for(var t=e.length,r=e.length-1;r>=0;r--){var o=e.charCodeAt(r);o>127&&o<=2047?t++:o>2047&&o<=65535&&(t+=2),o>=56320&&o<=57343&&r--}return t}(e)>4096)throw console.error("[Telegram.WebApp] Data is too long",e),Error("WebAppDataInvalid");t.postEvent("web_app_data_send",!1,{data:e})},n.switchInlineQuery=function(e,o){if(!H("6.6"))throw console.error("[Telegram.WebApp] Method switchInlineQuery is not supported in version "+l),Error("WebAppMethodUnsupported");if(!r.tgWebAppBotInline)throw console.error("[Telegram.WebApp] Inline mode is disabled for this bot. Read more about inline mode: https://core.telegram.org/bots/inline"),Error("WebAppInlineModeDisabled");if((e=e||"").length>256)throw console.error("[Telegram.WebApp] Inline query is too long",e),Error("WebAppInlineQueryInvalid");var n=[];if(o){if(!Array.isArray(o))throw console.error("[Telegram.WebApp] Choose chat types should be an array",o),Error("WebAppInlineChooseChatTypesInvalid");for(var i={users:1,bots:1,groups:1,channels:1},a=0;a<o.length;a++){var s=o[a];if(!i[s])throw console.error("[Telegram.WebApp] Choose chat type is invalid",s),Error("WebAppInlineChooseChatTypeInvalid");2!=i[s]&&(i[s]=2,n.push(s))}}t.postEvent("web_app_switch_inline_query",!1,{query:e,chat_types:n})},n.openLink=function(e,r){var o=document.createElement("A");if(o.href=e,"http:"!=o.protocol&&"https:"!=o.protocol)throw console.error("[Telegram.WebApp] Url protocol is not supported",e),Error("WebAppTgUrlInvalid");var e=o.href;r=r||{},H("6.1")?t.postEvent("web_app_open_link",!1,{url:e,try_instant_view:H("6.4")&&!!r.try_instant_view}):window.open(e,"_blank")},n.openTelegramLink=function(e){var r=document.createElement("A");if(r.href=e,"http:"!=r.protocol&&"https:"!=r.protocol)throw console.error("[Telegram.WebApp] Url protocol is not supported",e),Error("WebAppTgUrlInvalid");if("t.me"!=r.hostname)throw console.error("[Telegram.WebApp] Url host is not supported",e),Error("WebAppTgUrlInvalid");var n=r.pathname+r.search;o||H("6.1")?t.postEvent("web_app_open_tg_link",!1,{path_full:n}):location.href="https://t.me"+n},n.openInvoice=function(e,r){var o,n,i=document.createElement("A");if(i.href=e,"http:"!=i.protocol&&"https:"!=i.protocol||"t.me"!=i.hostname||!(o=i.pathname.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/))||!(n=o[2]))throw console.error("[Telegram.WebApp] Invoice url is invalid",e),Error("WebAppInvoiceUrlInvalid");if(!H("6.1"))throw console.error("[Telegram.WebApp] Method openInvoice is not supported in version "+l),Error("WebAppMethodUnsupported");if(z[n])throw console.error("[Telegram.WebApp] Invoice is already opened"),Error("WebAppInvoiceOpened");z[n]={url:e,callback:r},t.postEvent("web_app_open_invoice",!1,{slug:n})},n.showPopup=function(e,r){if(!H("6.2"))throw console.error("[Telegram.WebApp] Method showPopup is not supported in version "+l),Error("WebAppMethodUnsupported");if($)throw console.error("[Telegram.WebApp] Popup is already opened"),Error("WebAppPopupOpened");var o="",n="",i=[],a={};if(void 0!==e.title){if((o=m(e.title)).length>64)throw console.error("[Telegram.WebApp] Popup title is too long",o),Error("WebAppPopupParamInvalid");o.length>0&&(a.title=o)}if(void 0!==e.message&&(n=m(e.message)),!n.length)throw console.error("[Telegram.WebApp] Popup message is required",e.message),Error("WebAppPopupParamInvalid");if(n.length>256)throw console.error("[Telegram.WebApp] Popup message is too long",n),Error("WebAppPopupParamInvalid");if(a.message=n,void 0!==e.buttons){if(!Array.isArray(e.buttons))throw console.error("[Telegram.WebApp] Popup buttons should be an array",e.buttons),Error("WebAppPopupParamInvalid");for(var s=0;s<e.buttons.length;s++){var p=e.buttons[s],c={},u="";if(void 0!==p.id&&(u=p.id.toString()).length>64)throw console.error("[Telegram.WebApp] Popup button id is too long",u),Error("WebAppPopupParamInvalid");c.id=u;var d=p.type;if(void 0===d&&(d="default"),c.type=d,"ok"==d||"close"==d||"cancel"==d);else if("default"==d||"destructive"==d){var f="";if(void 0!==p.text&&(f=m(p.text)),!f.length)throw console.error("[Telegram.WebApp] Popup button text is required for type "+d,p.text),Error("WebAppPopupParamInvalid");if(f.length>64)throw console.error("[Telegram.WebApp] Popup button text is too long",f),Error("WebAppPopupParamInvalid");c.text=f}else throw console.error("[Telegram.WebApp] Popup button type is invalid",d),Error("WebAppPopupParamInvalid");i.push(c)}}else i.push({id:"",type:"close"});if(i.length<1)throw console.error("[Telegram.WebApp] Popup should have at least one button"),Error("WebAppPopupParamInvalid");if(i.length>3)throw console.error("[Telegram.WebApp] Popup should not have more than 3 buttons"),Error("WebAppPopupParamInvalid");a.buttons=i,$={callback:r},t.postEvent("web_app_open_popup",!1,a)},n.showAlert=function(e,t){n.showPopup({message:e},t?function(){t()}:null)},n.showConfirm=function(e,t){n.showPopup({message:e,buttons:[{type:"ok",id:"ok"},{type:"cancel"}]},t?function(e){t("ok"==e)}:null)},n.showScanQrPopup=function(e,r){if(!H("6.4"))throw console.error("[Telegram.WebApp] Method showScanQrPopup is not supported in version "+l),Error("WebAppMethodUnsupported");if(G)throw console.error("[Telegram.WebApp] Popup is already opened"),Error("WebAppScanQrPopupOpened");var o="",n={};if(void 0!==e.text){if((o=m(e.text)).length>64)throw console.error("[Telegram.WebApp] Scan QR popup text is too long",o),Error("WebAppScanQrPopupParamInvalid");o.length>0&&(n.text=o)}G={callback:r},t.postEvent("web_app_open_scan_qr_popup",!1,n)},n.closeScanQrPopup=function(){if(!H("6.4"))throw console.error("[Telegram.WebApp] Method closeScanQrPopup is not supported in version "+l),Error("WebAppMethodUnsupported");G=!1,t.postEvent("web_app_close_scan_qr_popup",!1)},n.readTextFromClipboard=function(e){if(!H("6.4"))throw console.error("[Telegram.WebApp] Method readTextFromClipboard is not supported in version "+l),Error("WebAppMethodUnsupported");var r=W(16);E[r]={callback:e},t.postEvent("web_app_read_text_from_clipboard",!1,{req_id:r})},n.requestWriteAccess=function(e){if(!H("6.9"))throw console.error("[Telegram.WebApp] Method requestWriteAccess is not supported in version "+l),Error("WebAppMethodUnsupported");if(K)throw console.error("[Telegram.WebApp] Write access is already requested"),Error("WebAppWriteAccessRequested");K={callback:e},t.postEvent("web_app_request_write_access")},n.requestContact=function(e){if(!H("6.9"))throw console.error("[Telegram.WebApp] Method requestContact is not supported in version "+l),Error("WebAppMethodUnsupported");if(X)throw console.error("[Telegram.WebApp] Contact is already requested"),Error("WebAppContactRequested");X={callback:e},t.postEvent("web_app_request_phone")},n.invokeCustomMethod=function(e,t,r){Z(e,t,r)},n.ready=function(){t.postEvent("web_app_ready")},n.expand=function(){t.postEvent("web_app_expand")},n.close=function(){t.postEvent("web_app_close")},window.Telegram.WebApp=n,M(),U(),x(),r.tgWebAppShowSettings&&V.show(),window.addEventListener("resize",g),o&&document.addEventListener("click",function(e){if(!e.metaKey&&!e.ctrlKey){for(var t=e.target;"A"!=t.tagName&&t.parentNode;)t=t.parentNode;"A"==t.tagName&&"_blank"!=t.target&&("http:"==t.protocol||"https:"==t.protocol)&&"t.me"==t.hostname&&(n.openTgLink(t.href),e.preventDefault())}}),t.onEvent("theme_changed",function(e,t){t.theme_params&&(A(t.theme_params),window.Telegram.WebApp.MainButton.setParams({}),U(),h("themeChanged"))}),t.onEvent("viewport_changed",function(e,t){t.height&&(window.removeEventListener("resize",g),x(t))}),t.onEvent("invoice_closed",function(e,t){if(t.slug&&z[t.slug]){var r=z[t.slug];delete z[t.slug],r.callback&&r.callback(t.status),h("invoiceClosed",{url:r.url,status:t.status})}}),t.onEvent("popup_closed",function(e,t){if($){var r=$;$=!1;var o=null;void 0!==t.button_id&&(o=t.button_id),r.callback&&r.callback(o),h("popupClosed",{button_id:o})}}),t.onEvent("qr_text_received",function(e,r){if(G){var o=G,n=null;void 0!==r.data&&(n=r.data),o.callback&&o.callback(n)&&(G=!1,t.postEvent("web_app_close_scan_qr_popup",!1)),h("qrTextReceived",{data:n})}}),t.onEvent("scan_qr_popup_closed",function(e,t){G=!1}),t.onEvent("clipboard_text_received",function(e,t){if(t.req_id&&E[t.req_id]){var r=E[t.req_id];delete E[t.req_id];var o=null;void 0!==t.data&&(o=t.data),r.callback&&r.callback(o),h("clipboardTextReceived",{data:o})}}),t.onEvent("write_access_requested",function(e,t){if(K){var r=K;K=!1,r.callback&&r.callback("allowed"==t.status),h("writeAccessRequested",{status:t.status})}}),t.onEvent("phone_requested",function(t,r){if(X){var o,n,i,a,s,p=X;X=!1;var l="sent"==r.status,c={status:r.status};l?(o=function(t){if(t&&t.length)for(var r in c.response=t,c.responseUnsafe=e.urlParseQueryString(t),c.responseUnsafe){var o=c.responseUnsafe[r];try{("{"==o.substr(0,1)&&"}"==o.substr(-1)||"["==o.substr(0,1)&&"]"==o.substr(-1))&&(c.responseUnsafe[r]=JSON.parse(o))}catch(e){}}p.callback&&p.callback(l,c),h("contactRequested",c)},a=0,s=function(){Z("getRequestedContact",{},function(e,t){t&&t.length?(clearTimeout(i),o(t)):(a+=50,n=setTimeout(s,a))})},i=setTimeout(function(){clearTimeout(n),o("")},3e3),s()):(p.callback&&p.callback(l,c),h("contactRequested",c))}}),t.onEvent("custom_method_invoked",function(e,t){if(t.req_id&&E[t.req_id]){var r=E[t.req_id];delete E[t.req_id];var o=null,n=null;void 0!==t.result&&(o=t.result),void 0!==t.error&&(n=t.error),r.callback&&r.callback(n,o)}}),t.postEvent("web_app_request_theme"),t.postEvent("web_app_request_viewport")}()}}]);