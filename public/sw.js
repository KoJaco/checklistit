if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let t={};const d=e=>n(e,a),r={module:{uri:a},exports:t,require:d};i[a]=Promise.all(s.map((e=>r[e]||d(e)))).then((e=>(c(...e),t)))}}define(["./workbox-2780d724"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Nm-yKQdN51f_1veKWGoZH/_buildManifest.js",revision:"55a39f365c00201663e80a05fc0f56ca"},{url:"/_next/static/Nm-yKQdN51f_1veKWGoZH/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/Nm-yKQdN51f_1veKWGoZH/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-4d427f09a15204a4.js",revision:"4d427f09a15204a4"},{url:"/_next/static/chunks/252f366e-74213b8bfebc534f.js",revision:"74213b8bfebc534f"},{url:"/_next/static/chunks/290-a453e6af43b9a0e6.js",revision:"a453e6af43b9a0e6"},{url:"/_next/static/chunks/d7eeaac4-db36c19e96fc6cfe.js",revision:"db36c19e96fc6cfe"},{url:"/_next/static/chunks/fc83e031-82084bbb42527497.js",revision:"82084bbb42527497"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-e380ed469c5a0a07.js",revision:"e380ed469c5a0a07"},{url:"/_next/static/chunks/pages/_app-6d312a12d9e0ca22.js",revision:"6d312a12d9e0ca22"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/index-3d893768f8afc0c0.js",revision:"3d893768f8afc0c0"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-fd82975a6094609f.js",revision:"fd82975a6094609f"},{url:"/_next/static/css/6794f84b9c4be28d.css",revision:"6794f84b9c4be28d"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"169d85d0a1d7aab4de66432972109656"},{url:"/icon-256x256.png",revision:"b550bee01ced8941183b6b0173e12668"},{url:"/icon-384x384.png",revision:"8bb2a866aca300a87feff2fc07d14cca"},{url:"/icon-512x512.png",revision:"650252261ed21868167c563458b7fee6"},{url:"/manifest.json",revision:"867e9a741d6d7c3c918dc3760a20bf0d"},{url:"/tinymce/icons/default/icons.min.js",revision:"18db240f0fcf5635332dbadd948cc500"},{url:"/tinymce/langs/README.md",revision:"a803b8446c1cdbaa1984d49b92bb8001"},{url:"/tinymce/license.txt",revision:"5f3d874e2822450a6077fe87dd8c9297"},{url:"/tinymce/models/dom/model.min.js",revision:"3a71e1e4a228b77af336947a24acc8aa"},{url:"/tinymce/plugins/advlist/plugin.min.js",revision:"817ae27100528cccbd98015f2186a116"},{url:"/tinymce/plugins/anchor/plugin.min.js",revision:"19e57ad5e28a85f0a2e40a921fce048d"},{url:"/tinymce/plugins/autolink/plugin.min.js",revision:"979e4a19ed7d9b5a5230c7cb0bd3cefc"},{url:"/tinymce/plugins/autoresize/plugin.min.js",revision:"ccf5ea32d3f05f60d16fa6b5a2a5ca87"},{url:"/tinymce/plugins/autosave/plugin.min.js",revision:"38b4706643138c7704dc601ec67ef981"},{url:"/tinymce/plugins/charmap/plugin.min.js",revision:"a81e7d4174c087d88b354bc8100d9ec4"},{url:"/tinymce/plugins/code/plugin.min.js",revision:"bbb505b32af16b46b32141fdd579fd4d"},{url:"/tinymce/plugins/codesample/plugin.min.js",revision:"553bcadf08f5ae909a58649a933da6a1"},{url:"/tinymce/plugins/directionality/plugin.min.js",revision:"d85dabbd7322deb6d42b6c641bc486ce"},{url:"/tinymce/plugins/emoticons/js/emojiimages.js",revision:"1ab2fd097df3919a141b411bb0b053b8"},{url:"/tinymce/plugins/emoticons/js/emojiimages.min.js",revision:"d3b2eef2f78cde4a29db5afc18223611"},{url:"/tinymce/plugins/emoticons/js/emojis.js",revision:"7fa1cc8fdcb750daad96da33821c5263"},{url:"/tinymce/plugins/emoticons/js/emojis.min.js",revision:"74f5f8072608c3281eede313c2234f6a"},{url:"/tinymce/plugins/emoticons/plugin.min.js",revision:"51d5de343db449b22cd0e305523caca2"},{url:"/tinymce/plugins/fullscreen/plugin.min.js",revision:"ee00501305071b2e890deef912ffe6ec"},{url:"/tinymce/plugins/help/plugin.min.js",revision:"55a0bdb04ce8d6c90988eedb45b23610"},{url:"/tinymce/plugins/image/plugin.min.js",revision:"4e10257aa1df2702bf88296aba411dae"},{url:"/tinymce/plugins/importcss/plugin.min.js",revision:"f1d11a0423500107292a681d248cc8f6"},{url:"/tinymce/plugins/insertdatetime/plugin.min.js",revision:"333a6f32d5cbd1c700d5ab69c23413c6"},{url:"/tinymce/plugins/link/plugin.min.js",revision:"6f464814db0940117ac0d8f7e986fee9"},{url:"/tinymce/plugins/lists/plugin.min.js",revision:"f0852ada1d9a2db144c0bc6a9e41ce35"},{url:"/tinymce/plugins/media/plugin.min.js",revision:"55570efc4fd6c1165e43a5c13c6ba303"},{url:"/tinymce/plugins/nonbreaking/plugin.min.js",revision:"27054d0ebd4dda9592d34085161b5334"},{url:"/tinymce/plugins/pagebreak/plugin.min.js",revision:"f771f405a9052abda2c0f12bdf64f010"},{url:"/tinymce/plugins/preview/plugin.min.js",revision:"59f8c70d55eaa05be90236b0ec66d9da"},{url:"/tinymce/plugins/quickbars/plugin.min.js",revision:"db32b1c565c009e6a3703117efc7783d"},{url:"/tinymce/plugins/save/plugin.min.js",revision:"3609f091f07093ffddbabbd24386badc"},{url:"/tinymce/plugins/searchreplace/plugin.min.js",revision:"82e1e8f292a4d2e1a9fe93b97a1081c9"},{url:"/tinymce/plugins/table/plugin.min.js",revision:"2689cf923f9966ba69117cbdd7b0a8ab"},{url:"/tinymce/plugins/template/plugin.min.js",revision:"1034f26c3921e1ddc6539fbfedf9ed80"},{url:"/tinymce/plugins/visualblocks/plugin.min.js",revision:"c4618d7b59d2fd6d60a2c5b5ad719c9f"},{url:"/tinymce/plugins/visualchars/plugin.min.js",revision:"03a2af392530bb9b3c320354a6bed155"},{url:"/tinymce/plugins/wordcount/plugin.min.js",revision:"bb19f966741f7584dfad6f0bfade3a6f"},{url:"/tinymce/skins/content/dark/content.min.css",revision:"8be098c8a09616b6f37f8ed7c963ebca"},{url:"/tinymce/skins/content/default/content.min.css",revision:"e7448307845064b6e567dabdf0edd81a"},{url:"/tinymce/skins/content/document/content.min.css",revision:"6cb27dc9ba941235eb2b074c9cbf7126"},{url:"/tinymce/skins/content/tinymce-5-dark/content.min.css",revision:"4e7d595a3352a317ac5457e1544dd018"},{url:"/tinymce/skins/content/tinymce-5/content.min.css",revision:"e7448307845064b6e567dabdf0edd81a"},{url:"/tinymce/skins/content/writer/content.min.css",revision:"5647767d1db4e7cbfe47ab7510c8aeea"},{url:"/tinymce/skins/ui/oxide-dark/content.inline.min.css",revision:"8ef1c9b48cfd420834dbee6ba7c0f538"},{url:"/tinymce/skins/ui/oxide-dark/content.min.css",revision:"c9a0d254edb0395d7e3857de22cd1bc3"},{url:"/tinymce/skins/ui/oxide-dark/skin.min.css",revision:"062de51e08c17c3971a51e1a0280647e"},{url:"/tinymce/skins/ui/oxide-dark/skin.shadowdom.min.css",revision:"1448b0502cbc52a71d7b2a5eaa9f3847"},{url:"/tinymce/skins/ui/oxide/content.inline.min.css",revision:"8ef1c9b48cfd420834dbee6ba7c0f538"},{url:"/tinymce/skins/ui/oxide/content.min.css",revision:"b9f716cc5ed0644e4ae9e20d6eb82cd9"},{url:"/tinymce/skins/ui/oxide/skin.min.css",revision:"66545211a9f0432db97fae4240cc1506"},{url:"/tinymce/skins/ui/oxide/skin.shadowdom.min.css",revision:"1448b0502cbc52a71d7b2a5eaa9f3847"},{url:"/tinymce/skins/ui/tinymce-5-dark/content.inline.min.css",revision:"8ef1c9b48cfd420834dbee6ba7c0f538"},{url:"/tinymce/skins/ui/tinymce-5-dark/content.min.css",revision:"c9a0d254edb0395d7e3857de22cd1bc3"},{url:"/tinymce/skins/ui/tinymce-5-dark/skin.min.css",revision:"2fe4ec48b37680c0ef6c5e8bf0577d77"},{url:"/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.min.css",revision:"1448b0502cbc52a71d7b2a5eaa9f3847"},{url:"/tinymce/skins/ui/tinymce-5/content.inline.min.css",revision:"8ef1c9b48cfd420834dbee6ba7c0f538"},{url:"/tinymce/skins/ui/tinymce-5/content.min.css",revision:"b9f716cc5ed0644e4ae9e20d6eb82cd9"},{url:"/tinymce/skins/ui/tinymce-5/skin.min.css",revision:"1e79e749070ee8252e563ae578447d21"},{url:"/tinymce/skins/ui/tinymce-5/skin.shadowdom.min.css",revision:"1448b0502cbc52a71d7b2a5eaa9f3847"},{url:"/tinymce/themes/silver/theme.min.js",revision:"bd7c2d5762df9ee718c8e1568afa9e07"},{url:"/tinymce/tinymce.d.ts",revision:"9d7efb2af2d21d5998d5a4c6517a299f"},{url:"/tinymce/tinymce.min.js",revision:"8037225b7d4bc85302f5869c69863886"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:n,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
