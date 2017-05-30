webpackJsonp([1,2],{139:function(t,e){"undefined"==typeof document||"classList"in document.createElement("a")||function(t){"use strict";if("HTMLElement"in t||"Element"in t){var e="classList",o="prototype",i=(t.HTMLElement||t.Element)[o],n=Object,s=String[o].trim||function(){return this.replace(/^\s+|\s+$/g,"")},r=Array[o].indexOf||function(t){for(var e=0,o=this.length;e<o;e++)if(e in this&&this[e]===t)return e;return-1},a=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},c=function(t,e){if(""===e)throw new a("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new a("INVALID_CHARACTER_ERR","String contains an invalid character");return r.call(t,e)},u=function(t){for(var e=s.call(t.className),o=e?e.split(/\s+/):[],i=0,n=o.length;i<n;i++)this.push(o[i]);this._updateClassName=function(){t.className=this.toString()}},l=u[o]=[],d=function(){return new u(this)};if(a[o]=Error[o],l.item=function(t){return this[t]||null},l.contains=function(t){return t+="",c(this,t)!==-1},l.add=function(){var t,e=arguments,o=0,i=e.length,n=!1;do{t=e[o]+"",c(this,t)===-1&&(this.push(t),n=!0)}while(++o<i);n&&this._updateClassName()},l.remove=function(){var t,e=arguments,o=0,i=e.length,n=!1;do{t=e[o]+"";var s=c(this,t);s!==-1&&(this.splice(s,1),n=!0)}while(++o<i);n&&this._updateClassName()},l.toggle=function(t,e){t+="";var o=this.contains(t),i=o?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),o},l.toString=function(){return this.join(" ")},n.defineProperty){var f={get:d,enumerable:!0,configurable:!0};try{n.defineProperty(i,e,f)}catch(t){t.number===-2146823252&&(f.enumerable=!1,n.defineProperty(i,e,f))}}else n[o].__defineGetter__&&i.__defineGetter__(e,d)}}(self)},140:function(t,e,o){"use strict";var i=o(68),n=o(387),s=o(379),r=o.n(s),a=o(378),c=o.n(a),u=o(380),l=o.n(u),d=o(377),f=o.n(d);i.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"intro",component:r.a},{path:"/home",name:"home",component:c.a},{path:"/project/:id",name:"project",component:l.a},{path:"/about",name:"about",component:f.a}]})},142:function(t,e){},143:function(t,e,o){o(368);var i=o(47)(o(162),o(386),null,null);t.exports=i.exports},162:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(144),n=o.n(i),s=o(52);e.default={name:"app",created:function(){n.a.get("/static/data.json").then(function(t){s.a.setData(t.data.about,t.data.projects)}).catch(function(t){console.log("error",t)})},mounted:function(){}}},163:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(67),n=o.n(i),s=o(52),r=o(70),a=o(48),c=o(53),u=o(66);o.n(u);e.default={name:"AboutComponent",components:{Borders:n.a},data:function(){return{isLoaded:!1,about:null}},watch:{isLoaded:function(t){t===!0&&this.onLoad()}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;s.a.isDataLoaded()?(this.about=s.a.getAbout(),this.isLoaded=!0):setTimeout(function(){t.loadData()},300)},onLoad:function(){this.resetScroll(),a.a.setPlayHomeAnimation(!0),this.$nextTick(this.setTweens)},resetScroll:function(){window.scrollTo(0,0)},getBackground:function(t){return r.a.getAboutBackground(t)},getAssets:function(t){return r.a.getAssetInFolder(this.project.id,t)},goTo:function(t){var e=this;u.TweenMax.to(window,.3,{scrollTo:{y:0,autoKill:!1},onComplete:function(){e.$router.push({name:t})}})},setTweens:function(){var t=new TimelineMax;t.from(this.$refs.bannerMask,1,{opacity:0,force3D:!0},"tag"),t.from(this.$refs.title,1,{y:40,opacity:0,force3D:!0},"tag -= .75"),t.staggerFrom(".block",.5,{y:40,opacity:0,force3D:!0},.15,"tag -= .55"),t.from(this.$refs.container,1,{y:40,opacity:0,force3D:!0},"tag -= .05")},addEventListeners:function(){var t=this;c.a.$on("BACK_TO_HOME",function(){t.goTo("home")})}}}},164:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(48),n=o(53);e.default={name:"BordersComponent",data:function(){return{projects:null}},mounted:function(){"home"!==this.$route.name&&"project"!==this.$route.name||this.$refs.work.classList.add("active"),"about"===this.$route.name&&this.$refs.about.classList.add("active")},methods:{goToHome:function(){i.a.getIsInProject()?n.a.$emit("BACK_TO_HOME"):this.$router.push({name:"home"})},goToAbout:function(){this.$router.push({name:"about"})}}}},165:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(67),n=o.n(i),s=o(52),r=o(70),a=o(48),c=(o(53),o(66)),u=(o.n(c),o(369));o.n(u);e.default={name:"HomeComponent",components:{Borders:n.a},data:function(){return{isLoaded:!1,projects:null}},watch:{isLoaded:function(t){t===!0&&this.onLoad()}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;s.a.isDataLoaded()?(this.projects=s.a.getProjects(),this.isLoaded=!0):setTimeout(function(){t.loadData()},300)},onLoad:function(){this.resetScroll(),this.$nextTick(this.setTweens)},resetScroll:function(){window.scrollTo(0,0)},getCover:function(t){return r.a.getCover(t)},goToProject:function(t,e){var o=this,i=e.target.offsetTop-60,n=1.5*this.$refs.projects.offsetHeight;c.TweenMax.set(this.$refs.projects,{height:n});var s=i-window.scrollY,r=.5;s<100?r=.25:0===s&&(r=1e-5),c.TweenMax.to(window,r,{scrollTo:{y:i,onAutoKill:function(){c.TweenMax.set(o.$refs.projects,{height:"auto"})}},onComplete:function(){o.$router.push({name:"project",params:{id:t}})}})},overProject:function(t){var e=t.currentTarget.firstChild;c.TweenMax.to(e,.5,{x:15})},outProject:function(t){var e=t.currentTarget.firstChild;c.TweenMax.to(e,.3,{x:0})},setTweens:function(){var t=new TimelineMax;if(a.a.getPlayHomeAnimation())t.set(this.$refs.mask,{width:1}),t.to(this.$refs.mask,.5,{width:"180vw",ease:Power3.easeIn}),t.set(this.$refs.home,{background:"#F0F2FA"}),t.set(this.$refs.mask,{display:"none"}),t.set(this.$refs.projects,{visibility:"visible"}),t.staggerFrom("#projects ul li",1,{opacity:0,x:40,force3D:!0},.25,"tag"),t.staggerFrom("#projects ul li .wrapper",1,{opacity:0,x:80,force3D:!0},.25,"tag -= 1.5"),a.a.setPlayHomeAnimation(!1);else if(a.a.getIsInProject()){t.set(this.$refs.home,{background:"#F0F2FA"}),t.set(this.$refs.mask,{display:"none"}),t.set(this.$refs.projects,{visibility:"visible"});var e=document.getElementById(a.a.getIsInProject()),o=e.offsetTop-60;window.scrollTo(0,o),t.set("#projects ul li",{opacity:0}),t.set(e,{opacity:1}),t.to("#projects ul li",1,{opacity:1,force3D:!0}),t.staggerFrom("#projects ul li .wrapper",1,{opacity:0,x:80,force3D:!0},.25,"tag -= 1.5"),a.a.setIsInProject(null)}else t.set(this.$refs.home,{background:"#F0F2FA"}),t.set(this.$refs.mask,{display:"none"}),t.set(this.$refs.projects,{visibility:"visible"}),t.staggerFrom("#projects ul li .wrapper",1,{opacity:0,x:80,force3D:!0},.25,"tag -= 1.5")}}}},166:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(373),n=o.n(i),s=o(66),r=(o.n(s),o(48)),a=o(67),c=o.n(a);e.default={name:"IntroComponent",components:{Borders:c.a},mounted:function(){this.blockScroll(),this.launched=!1,this.addEventListeners(),this.setTweens()},beforeDestroy:function(){this.removeEventListeners(),this.unblockScroll()},methods:{goTo:function(){r.a.setPlayHomeAnimation(!0),this.$router.push({name:"home"})},blockScroll:function(){window.scrollTo(0,0),document.querySelector("body").style.overflow="hidden",document.querySelector("html").style.overflow="hidden"},unblockScroll:function(){document.querySelector("body").style.overflow="auto",document.querySelector("html").style.overflow="auto"},addEventListeners:function(){this.scrollListener=n.a.throttle(this.onScroll,200),window.addEventListener("wheel",this.scrollListener),window.addEventListener("touchmove",this.scrollListener)},removeEventListeners:function(){window.removeEventListener("mousewheel",this.scrollListener),window.removeEventListener("touchmove",this.scrollListener)},setTweens:function(){s.TweenMax.from(this.$refs.title,1,{y:50,opacity:0}),s.TweenMax.from(this.$refs.bar,1,{bottom:-50,opacity:0,delay:.5}),s.TweenMax.from(this.$refs.scroll,1,{opacity:0,delay:1.5})},onScroll:function(t){if(!this.launched&&(t.deltaY>1||t.changedTouches)){this.launched=!0,s.TweenMax.killAll(),s.TweenMax.set(this.$refs.title,{y:0,opacity:1}),s.TweenMax.set(this.$refs.bar,{opacity:1});var e=new TimelineMax({onComplete:this.goTo});e.to(this.$refs.title,1.75,{y:-1e3,opacity:0,ease:Power3.easeIn,force3D:!0},"tag"),e.to(this.$refs.scroll,.5,{y:-10,opacity:0},"tag"),e.to(this.$refs.bar,1.75,{height:"120vh",ease:Power3.easeIn},"tag"),e.to(this.$refs.bar,.5,{width:"100vw"}),e.set("#borders",{display:"block"}),e.fromTo("#borders .border-left",.5,{opacity:0},{opacity:1,force3D:!0},"tag2"),e.fromTo("#borders .border-bottom",.5,{opacity:0},{opacity:1,force3D:!0},"tag2")}}}}},167:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(67),n=o.n(i),s=o(52),r=o(70),a=o(48),c=o(53),u=o(66);o.n(u);e.default={name:"ProjectComponent",components:{Borders:n.a},data:function(){return{isLoaded:!1,project:null,vimeoURI:null,youtubeURI:null}},watch:{isLoaded:function(t){t===!0&&this.onLoad()}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;s.a.isDataLoaded()?(this.project=s.a.getProjectWithName(this.$route.params.id),this.isLoaded=!0):setTimeout(function(){t.loadData()},300)},onLoad:function(){this.resetScroll(),a.a.setPlayHomeAnimation(!1),this.$nextTick(this.setTweens),a.a.setIsInProject(this.project.id),this.addEventListeners()},resetScroll:function(){window.scrollTo(0,0)},getCover:function(t){return r.a.getCover(t)},getAssets:function(t){return r.a.getAssetInFolder(this.project.id,t)},goTo:function(t){var e=this;u.TweenMax.to(window,.5,{scrollTo:{y:0,autoKill:!1,ease:Power2.easeOut},onComplete:function(){e.$router.push({name:t})}})},setTweens:function(){var t=new TimelineMax;t.from(this.$refs.bannerMask,1,{opacity:0,force3D:!0},"tag"),t.from(this.$refs.title,1,{y:40,opacity:0,force3D:!0},"tag -= .75"),t.staggerFrom(".block",.5,{y:40,opacity:0,force3D:!0},.15,"tag -= .55"),t.from(this.$refs.container,1,{y:40,opacity:0,force3D:!0},"tag -= .05")},addEventListeners:function(){var t=this;c.a.$on("BACK_TO_HOME",function(){t.goTo("home")})}}}},363:function(t,e){},364:function(t,e){},365:function(t,e){},366:function(t,e){},367:function(t,e){},368:function(t,e){},375:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYWxxdWVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDMzLjkgOS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMy45IDkuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRjBGMkZBO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLDYuNWMxLDEuMywyLjUsMi43LDUsMi43YzMuNiwwLDUuMi0yLjIsNi41LTMuN0MyNC42LDQsMjUuNCwzLDI3LjIsM2MzLjIsMCwzLjcsMy41LDMuNywzLjZsMCwwLjVsMy0wLjEKCVY2LjVjMC0wLjktMS4zLTYuNS02LjctNi41Yy0zLjMsMC00LjgsMi02LjEsMy42QzIwLDUsMTkuMSw2LjEsMTcsNi4xYy0yLjIsMC0zLjItMi4yLTMuNS0zLjVsLTAuMi0wLjVsLTIuOCwwbC0wLjEsMC40CgljMCwwLjEtMC41LDMuNS00LDMuNUMzLjYsNi4xLDMuMSwzLjMsMywyLjdMMi45LDIuM0gwbDAsMC41YzAsMSwxLjEsNi40LDYuNSw2LjRDOS4zLDkuMSwxMSw3LjgsMTIsNi41eiIvPgo8L3N2Zz4K"},376:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYWxxdWVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDMzLjkgOS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMy45IDkuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMzQzNENEM7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTIsNi41YzEsMS4zLDIuNSwyLjcsNSwyLjdjMy42LDAsNS4yLTIuMiw2LjUtMy43QzI0LjYsNCwyNS40LDMsMjcuMiwzYzMuMiwwLDMuNywzLjUsMy43LDMuNmwwLDAuNWwzLTAuMQoJVjYuNWMwLTAuOS0xLjMtNi41LTYuNy02LjVjLTMuMywwLTQuOCwyLTYuMSwzLjZDMjAsNSwxOS4xLDYuMSwxNyw2LjFjLTIuMiwwLTMuMi0yLjItMy41LTMuNWwtMC4yLTAuNWwtMi44LDBsLTAuMSwwLjQKCWMwLDAuMS0wLjUsMy41LTQsMy41QzMuNiw2LjEsMy4xLDMuMywzLDIuN0wyLjksMi4zSDBsMCwwLjVjMCwxLDEuMSw2LjQsNi41LDYuNEM5LjMsOS4xLDExLDcuOCwxMiw2LjV6Ii8+Cjwvc3ZnPgo="},377:function(t,e,o){o(367);var i=o(47)(o(163),o(385),null,null);t.exports=i.exports},378:function(t,e,o){o(365);var i=o(47)(o(165),o(383),null,null);t.exports=i.exports},379:function(t,e,o){o(364);var i=o(47)(o(166),o(382),null,null);t.exports=i.exports},380:function(t,e,o){o(363);var i=o(47)(o(167),o(381),null,null);t.exports=i.exports},381:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.project?o("div",{attrs:{id:"project"}},[o("borders"),t._v(" "),o("div",{attrs:{id:"project-wrapper"}},[t.project.title?o("div",{attrs:{id:"header"}},[o("div",{style:{backgroundImage:"url("+t.getCover(t.project.background)+")"},attrs:{id:"banner"}}),t._v(" "),o("div",{ref:"bannerMask",attrs:{id:"banner-mask"}}),t._v(" "),o("h1",{ref:"title",staticClass:"title"},[t._v(t._s(t.project.title))])]):t._e(),t._v(" "),t.project.details?o("div",{attrs:{id:"details"}},[o("div",{staticClass:"what block"},[o("div",{staticClass:"title"},[t._v("What")]),t._v(" "),o("ul",{staticClass:"list"},t._l(t.project.details.what,function(e){return o("li",[t._v(t._s(e))])}))]),t._v(" "),o("div",{staticClass:"when block"},[o("div",{staticClass:"title"},[t._v("When")]),t._v("\n        "+t._s(t.project.details.when)+"\n\n      ")]),t._v(" "),o("div",{staticClass:"who block"},[o("div",{staticClass:"title"},[t._v("With")]),t._v(" "),o("ul",{staticClass:"list"},t._l(t.project.details.who,function(e){return o("li",[t._v(t._s(e))])}))])]):t._e(),t._v(" "),o("div",{ref:"container",attrs:{id:"container"}},t._l(t.project.content,function(e){return o("div",["text"==e.type?o("div",{staticClass:"text",domProps:{innerHTML:t._s(e.value)}}):t._e(),t._v(" "),"vimeoId"==e.type?o("div",{staticClass:"video"},[o("iframe",{attrs:{src:"https://player.vimeo.com/video/"+e.value,width:"640px",height:"360",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})],1):t._e(),t._v(" "),"youtubeId"==e.type?o("div",{staticClass:"video"},[o("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/"+e.value,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})],1):t._e(),t._v(" "),"photos"==e.type?o("div",{attrs:{id:"gallery"}},t._l(e.value,function(e){return o("div",[o("img",{attrs:{src:t.getAssets(e),alt:"Photo"}})])})):t._e()])}))])],1):t._e()},staticRenderFns:[]}},382:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"intro"}},[i("borders",{ref:"borders",attrs:{id:"borders"}}),t._v(" "),i("div",{attrs:{id:"intro-wrapper"}},[i("div",{ref:"title",staticClass:"center"},[i("h1",[t._v("sofia boggio")]),t._v(" "),i("img",{attrs:{src:o(376)}})]),t._v(" "),i("div",{ref:"scroll",attrs:{id:"scrollto"}},[i("router-link",{attrs:{to:"home"}},[t._v("scroll to discover")])],1),t._v(" "),i("div",{ref:"bar",attrs:{id:"bar"}})])],1)},staticRenderFns:[]}},383:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isLoaded?o("div",{ref:"home",attrs:{id:"home"}},[o("borders"),t._v(" "),o("div",{ref:"mask",attrs:{id:"mask"}}),t._v(" "),o("div",{ref:"projects",attrs:{id:"projects"}},[o("ul",t._l(t.projects,function(e){return o("li",{style:{backgroundImage:"url("+t.getCover(e.background)+")"},attrs:{id:e.id},on:{click:function(o){t.goToProject(e.id,o)},mouseover:function(e){t.overProject(e)},mouseout:function(e){t.outProject(e)}}},[o("div",{staticClass:"wrapper"},[o("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"type"},[t._v(t._s(e.type))]),t._v(" "),o("div",{staticClass:"date"},[t._v(t._s(e.date))])])])}))])],1):t._e()},staticRenderFns:[]}},384:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"borders"}},[i("div",{staticClass:"border-top horizontal-border"}),t._v(" "),i("div",{staticClass:"border-right vertical-border"}),t._v(" "),i("div",{staticClass:"border-bottom horizontal-border"},[t._v("\n    © Sofia Boggio - 2017\n\n\n  ")]),t._v(" "),i("div",{staticClass:"border-left vertical-border"},[i("img",{staticClass:"logo",attrs:{src:o(375),alt:""},on:{click:function(e){t.goToHome()}}}),t._v(" "),i("nav",[i("ul",[i("li",{ref:"about",attrs:{id:"nav-about"},on:{click:function(e){t.goToAbout()}}},[t._v("about & contact")]),t._v(" "),i("li",{ref:"work",attrs:{id:"nav-work"},on:{click:function(e){t.goToHome()}}},[t._v("work")])])])])])},staticRenderFns:[]}},385:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isLoaded?o("div",{attrs:{id:"about"}},[o("borders"),t._v(" "),o("div",{attrs:{id:"about-wrapper"}},[o("div",{attrs:{id:"header"}},[o("div",{style:{backgroundImage:"url("+t.getBackground("about.jpg")+")"},attrs:{id:"banner"}}),t._v(" "),o("div",{ref:"bannerMask",attrs:{id:"banner-mask"}}),t._v(" "),o("h1",{ref:"title",staticClass:"title",domProps:{innerHTML:t._s(t.about.head_title)}})]),t._v(" "),o("div",{ref:"container",attrs:{id:"container"}},[o("div",{attrs:{id:"description"},domProps:{innerHTML:t._s(t.about.description)}}),t._v(" "),o("div",{attrs:{id:"social"}},[o("ul",[o("li",[o("a",{attrs:{href:"mailto:"+t.about.mail}},[t._v("Mail")])]),t._v(" "),o("li",[o("a",{attrs:{href:t.about.facebookURL,target:"_blank"}},[t._v("Facebook")])]),t._v(" "),o("li",[o("a",{attrs:{href:t.about.twitterURL,target:"_blank"}},[t._v("Twitter")])]),t._v(" "),o("li",[o("a",{attrs:{href:t.about.behanceURL,target:"_blank"}},[t._v("Behance")])]),t._v(" "),o("li",[o("a",{attrs:{href:t.about.twitchURL,target:"_blank"}},[t._v("Twitch")])])])]),t._v(" "),t._m(0)])])],1):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"thanks"}},[t._v("Made with "),o("a",{attrs:{href:"https://jackyfong.com"}},[t._v("Jacky Fong")])])}]}},386:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},staticRenderFns:[]}},390:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(139),n=(o.n(i),o(141)),s=(o.n(n),o(68)),r=o(143),a=o.n(r),c=o(140),u=o(142);o.n(u);s.a.config.productionTip=!1,new s.a({el:"#app",router:c.a,template:"<App/>",components:{App:a.a}})},48:function(t,e,o){"use strict";var i=o(71),n=o.n(i),s=o(72),r=o.n(s),a=function(){function t(){if(n()(this,t),t.instance)return t.instance;t.instance=this,this.playHomeAnimation=!0,this.isInProject=null}return r()(t,[{key:"setPlayHomeAnimation",value:function(t){this.playHomeAnimation=t}},{key:"getPlayHomeAnimation",value:function(){return this.playHomeAnimation}},{key:"setIsInProject",value:function(t){this.isInProject=t}},{key:"getIsInProject",value:function(){return this.isInProject}}]),t}(),c=new a;e.a=c},52:function(t,e,o){"use strict";var i=o(71),n=o.n(i),s=o(72),r=o.n(s),a=function(){function t(){if(n()(this,t),t.instance)return t.instance;t.instance=this,this.dataLoaded=!1}return r()(t,[{key:"setData",value:function(t,e){this.about=t,this.projects=e,this.dataLoaded=!0}},{key:"isDataLoaded",value:function(){return this.dataLoaded}},{key:"getAbout",value:function(){return this.about}},{key:"getProjects",value:function(){return this.projects}},{key:"getProjectWithName",value:function(t){for(var e=0;e<this.projects.length;e++){var o=this.projects[e];if(o.id===t)return o}return!1}}]),t}(),c=new a;e.a=c},53:function(t,e,o){"use strict";var i=o(68),n=new i.a;e.a=n},67:function(t,e,o){o(366);var i=o(47)(o(164),o(384),null,null);t.exports=i.exports},70:function(t,e,o){"use strict";var i=o(71),n=o.n(i),s=o(72),r=o.n(s),a=function(){function t(){if(n()(this,t),t.instance)return t.instance;this.fromPhotos="../../../static/img/",this.fromCovers="../../../static/img/_covers/",t.instance=this}return r()(t,[{key:"getCover",value:function(t){return this.fromCovers+t}},{key:"getAboutBackground",value:function(t){return this.fromPhotos+"/about/"+t}},{key:"getPhoto",value:function(t){return this.fromPhotos+t+".png"}},{key:"getAssetInFolder",value:function(t,e){return this.fromPhotos+t+"/"+e}}]),t}(),c=new a;e.a=c}},[390]);
//# sourceMappingURL=app.ef8eff3719736cd1c873.js.map