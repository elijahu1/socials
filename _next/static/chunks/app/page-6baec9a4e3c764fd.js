(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7422:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,7970,23)),Promise.resolve().then(r.bind(r,5004)),Promise.resolve().then(r.bind(r,7793))},5004:(e,t,r)=>{"use strict";r.d(t,{CameraFlash:()=>a});var l=r(5155),s=r(2115);let a=()=>{let[e,t]=(0,s.useState)(!0);return((0,s.useEffect)(()=>{let e=setTimeout(()=>{t(!1)},3500);return()=>clearTimeout(e)},[]),e)?(0,l.jsxs)("div",{className:"fixed inset-0 pointer-events-none z-50","aria-hidden":"true",children:[(0,l.jsx)("div",{className:"absolute inset-0 animate-red-dot bg-red-800 opacity-0"}),(0,l.jsx)("div",{className:"absolute inset-0 animate-flash-1 bg-white opacity-0"})]}):null}},7793:(e,t,r)=>{"use strict";r.d(t,{EmailForm:()=>g});var l=r(5155),s=r(5828);let a=(0,s.createServerReference)("7f1821ee9e38b6bbf0e15b3dc49bbecf28723b6675",s.callServer,void 0,s.findSourceMapURL,"submitEmail"),i=(0,s.createServerReference)("7fd2980115630b72c8b250bcba1c77d2dbf87ba45f",s.callServer,void 0,s.findSourceMapURL,"redirectToProvider");var n=r(3415);let o=["amazon","deezer","apple","pandora","spotify","tidal","youtube","merch","resi"],d=n.z.object({email:n.z.string().email(),provider:n.z.enum(o)});n.z.object({provider:n.z.enum(o)});var c=r(2679),u=r(2115),p=r(3463),h=r(9795);function m(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,h.QP)((0,p.$)(t))}let f=e=>{let{children:t,...r}=e;return(0,l.jsx)("button",{...r,className:m("flex items-center rounded-lg justify-center p-4 bg-black/20",r.className),children:t})};var b=r(5565),v=r(972),x=r(1046);let g=e=>{let{justRedirect:t=!1}=e,[r,s]=(0,u.useState)("provider"),{form:n,handleSubmitWithAction:o}=(0,v.Nl)(a,(0,c.u)(d)),p=e=>async()=>{if((0,x.sendGAEvent)("event","providerSelected",{provider:e}),t)return i({provider:e});n.setValue("provider",e),s("email")};return(0,l.jsxs)("form",{method:"post",onSubmit:o,className:"grid w-full h-[554px]",children:[(0,l.jsxs)("div",{className:m("flex flex-col transition-opacity col-start-1 row-start-1 rounded-md px-2 py-1 gap-2",{"opacity-0 pointer-events-none":"provider"!==r}),children:[(0,l.jsx)(f,{className:"w-full",type:"button",onClick:p("apple"),children:(0,l.jsx)(b.default,{src:"/providers/music.png",alt:"Apple",width:100,height:24})}),(0,l.jsx)(f,{className:"w-full",type:"button",onClick:p("spotify"),children:(0,l.jsx)(b.default,{src:"/providers/spotify.png",alt:"Spotify",width:100,height:31})}),(0,l.jsx)(f,{className:"w-full",type:"button",onClick:p("youtube"),children:(0,l.jsx)(b.default,{src:"/providers/youtube.png",alt:"Youtube",width:100,height:23})}),(0,l.jsx)(f,{className:"w-full",type:"button",onClick:p("amazon"),children:(0,l.jsx)(b.default,{src:"/providers/amazon.png",alt:"Amazon",width:100,height:22})}),(0,l.jsx)(f,{className:"w-full",type:"button",onClick:p("deezer"),children:(0,l.jsx)(b.default,{src:"/providers/deezer.png",alt:"Deezer",width:100,height:20})}),(0,l.jsx)(f,{className:"w-full",type:"button",onClick:p("pandora"),children:(0,l.jsx)(b.default,{src:"/providers/pandora.png",alt:"Pandora",width:100,height:22})}),(0,l.jsx)(f,{className:"w-full",type:"button",onClick:p("tidal"),children:(0,l.jsx)(b.default,{src:"/providers/tidal.png",alt:"Tidal",width:100,height:14})}),(0,l.jsx)(f,{className:"w-full",type:"button",onClick:p("merch"),children:(0,l.jsx)(b.default,{src:"/providers/merch.png",alt:"Merch",width:88,height:18})}),(0,l.jsx)(f,{className:"w-full",type:"button",onClick:p("resi"),children:(0,l.jsx)(b.default,{src:"/resi.png",alt:"Residencia",width:328,height:46})})]}),(0,l.jsxs)("div",{className:m("flex flex-col gap-2 items-center justify-center transition-opacity col-start-1 row-start-1 bg-foreground rounded-md px-2 py-1",{"opacity-0 pointer-events-none":"email"!==r}),children:[(0,l.jsx)("input",{placeholder:"Email",type:"email",className:"w-full h-[64px] rounded-md border-4 border-foreground p-2 bg-texture placeholder:text-foreground uppercase font-bold",...n.register("email")}),(0,l.jsx)(f,{className:"w-full",type:"submit",children:(0,l.jsx)(b.default,{src:"/submit.png",alt:"Submit",width:100,height:18})})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[623,37,441,517,358],()=>t(7422)),_N_E=e.O()}]);