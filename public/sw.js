if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const t=e=>a(e,i),d={module:{uri:i},exports:r,require:t};s[i]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-e13f827e"],(function(e){"use strict";importScripts("fallback-z5dOPQKz_2u_zxp1rWD3H.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0c428ae2-0acca6174bd4b0b8.js",revision:"0acca6174bd4b0b8"},{url:"/_next/static/chunks/1a48c3c1-33141ca19de4d94a.js",revision:"33141ca19de4d94a"},{url:"/_next/static/chunks/1bfc9850-7e75717f479f85fb.js",revision:"7e75717f479f85fb"},{url:"/_next/static/chunks/205-911f6b2dabc1dc98.js",revision:"911f6b2dabc1dc98"},{url:"/_next/static/chunks/252f366e-7357cc0d88d0ae69.js",revision:"7357cc0d88d0ae69"},{url:"/_next/static/chunks/545f34e4-18bf6d6e1a17760b.js",revision:"18bf6d6e1a17760b"},{url:"/_next/static/chunks/653-c6f3a911b39a0207.js",revision:"c6f3a911b39a0207"},{url:"/_next/static/chunks/664-e2359597ac708d8d.js",revision:"e2359597ac708d8d"},{url:"/_next/static/chunks/7f0c75c1-c46b084edcd6d205.js",revision:"c46b084edcd6d205"},{url:"/_next/static/chunks/892-f4ffc65d98abca14.js",revision:"f4ffc65d98abca14"},{url:"/_next/static/chunks/a03c21c4-d99778b23f158055.js",revision:"d99778b23f158055"},{url:"/_next/static/chunks/ae51ba48-9e84ff9a7b616644.js",revision:"9e84ff9a7b616644"},{url:"/_next/static/chunks/b98bc7c3-3b2716b59bdfc294.js",revision:"3b2716b59bdfc294"},{url:"/_next/static/chunks/d64684d8-98e74fc7593a9a82.js",revision:"98e74fc7593a9a82"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-0bd9ec80e456f666.js",revision:"0bd9ec80e456f666"},{url:"/_next/static/chunks/pages/_app-f1c9a389a4e86570.js",revision:"f1c9a389a4e86570"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/_offline-dd9a66d014b17d89.js",revision:"dd9a66d014b17d89"},{url:"/_next/static/chunks/pages/dashboard-d586a8b2b81e6b5b.js",revision:"d586a8b2b81e6b5b"},{url:"/_next/static/chunks/pages/index-c66d413bbfe0868e.js",revision:"c66d413bbfe0868e"},{url:"/_next/static/chunks/pages/login-09f2bcf85b973d5a.js",revision:"09f2bcf85b973d5a"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/2d48025f3cb74b11.css",revision:"2d48025f3cb74b11"},{url:"/_next/static/media/HomePage.79a14dd3.png",revision:"ed0bbc1a32acd7cdc0800351deff6fde"},{url:"/_next/static/media/ai.7c7ac44d.webp",revision:"6ff9ad6718eb0e276cbda53334423b78"},{url:"/_next/static/media/cyberworld.d1d1cd83.jpg",revision:"df4b4acc6f4195508dd75137be26965b"},{url:"/_next/static/media/login.0fa77bb8.svg",revision:"2a692f91b00a6018fd7f0d962cb4cee8"},{url:"/_next/static/z5dOPQKz_2u_zxp1rWD3H/_buildManifest.js",revision:"4b776d7efd021b05b967cd1d0ba57d40"},{url:"/_next/static/z5dOPQKz_2u_zxp1rWD3H/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_offline",revision:"z5dOPQKz_2u_zxp1rWD3H"},{url:"/assets/images/HomePage.png",revision:"ed0bbc1a32acd7cdc0800351deff6fde"},{url:"/assets/images/IMG-20230212-WA0001-removebg-preview.png",revision:"22facc8307ea3b78f002ce7fd5d00651"},{url:"/assets/images/ai.webp",revision:"6ff9ad6718eb0e276cbda53334423b78"},{url:"/assets/images/aiultra.png",revision:"112f426449f840807cd27953d403466a"},{url:"/assets/images/cyberworld.jpg",revision:"df4b4acc6f4195508dd75137be26965b"},{url:"/assets/images/login.svg",revision:"2a692f91b00a6018fd7f0d962cb4cee8"},{url:"/assets/images/whyaiultra.png",revision:"6148addd05b153c92febea26e64ef179"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/logo.svg",revision:"52bc8c38a38ea08c795948bd3f80442e"},{url:"/logo16.png",revision:"fe175d29600ed07d5e557a40f45c2231"},{url:"/logo196.png",revision:"ed4ffb1495eeafe9a5ce01cf58bee87e"},{url:"/logo256.png",revision:"149d4c1e9fb4e79ed12037018f4cbef0"},{url:"/logo512.png",revision:"ef57aede7f73abb0ea2d566cc026b069"},{url:"/manifest.json",revision:"0a133d145b6a832ebc1804ed738b70fa"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));