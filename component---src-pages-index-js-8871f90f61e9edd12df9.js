(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),l=a(227),c=a(159),o=a(148),s=a(151),m={container:{position:"relative",width:"100%",height:"100vh",overflow:"hidden"},image:{width:"100vw",height:"150vh",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://s3.amazonaws.com/bkmusic/splash.jpg)"},titleContainer:{position:"absolute",top:0,bottom:0,left:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},title:{color:"white",letterSpacing:11}},u=Object(s.withStyles)(m)(function(e){var t=e.classes;return i.a.createElement("div",{className:t.container},i.a.createElement(c.Parallax,{style:{margin:0},expanded:!0,offsetYMax:150,offsetYMin:-150,slowerScrollRate:!0,tag:"figure"},i.a.createElement("div",{className:t.image})),i.a.createElement("div",{className:t.titleContainer},i.a.createElement(o.n,{variant:"display1",className:t.title},"BRANDON NELSON")))}),d=Object(s.withStyles)({container:{}})(function(e){e.classes;return i.a.createElement(o.e,{container:!0,justify:"center"},i.a.createElement(o.e,{item:!0,xs:10,lg:7},i.a.createElement("iframe",{width:"100%",height:"600",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/214071001&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"})))}),g=Object(s.withStyles)({container:{height:"100vh",backgroundColor:"white"},titleContainer:{textAlign:"center"},title:{letterSpacing:11}})(function(e){var t=e.classes;return i.a.createElement(o.e,{container:!0,justify:"center",alignItems:"center",className:t.container},i.a.createElement(o.e,{item:!0,xs:12,className:t.titleContainer},i.a.createElement(d,null)))}),p=(a(51),a(152)),h=a(188),f=a.n(h),b=((n={btn:{float:"right"},dateSquareContainer:{marginRight:30},dateSquare:{height:80,width:80,backgroundColor:"#1f1f1f",borderRadius:4,color:"white",margin:0},bodyContainer:{paddingBottom:70}}).btn={marginTop:20},n),w=Object(s.withStyles)(b)(function(e){var t=e.classes,a=e.gig,n=f()(a.date).format("MMM D"),r=f()(a.date).format("h:mma");return i.a.createElement(o.e,{xs:12,item:!0,container:!0,wrap:"wrap"},i.a.createElement(o.e,{item:!0,xs:1,className:t.dateSquareContainer},i.a.createElement(o.j,{className:t.dateSquare},i.a.createElement(o.e,{justify:"center",alignItems:"center",container:!0,style:{height:"100%"}},i.a.createElement(o.n,{variant:"subheading",style:{color:"white",textAlign:"center"}},n)))),i.a.createElement(o.e,{item:!0,xs:2}),i.a.createElement(o.e,{item:!0,xs:6,className:t.bodyContainer},i.a.createElement(o.n,{variant:"display1"},a.title),i.a.createElement(o.n,null,a.venue),i.a.createElement(o.n,null,r),i.a.createElement(o.b,{to:a.path,component:p.Link,className:t.btn,variant:"contained"},"More Detail")))}),E=a(199),v=a.n(E),y=Object(s.withStyles)({container:{position:"relative",textAlign:"center"},title:{marginTop:"32vh",color:"white",letterSpacing:4}})(function(e){var t=e.classes,a=e.image,n=e.title;return i.a.createElement(c.ParallaxBanner,{className:t.banner,layers:[{image:a,amount:.4,slowerScrollRate:!0}],style:{height:"70vh"}},i.a.createElement(o.e,{container:!0,justify:"center",alignItems:"center"},i.a.createElement(o.e,{item:!0,xs:12,className:t.container},i.a.createElement(o.n,{variant:"display1",className:t.title},n.toUpperCase()))))}),x=a(520),C=a.n(x),_=Object(s.withStyles)({container:{height:"100%",backgroundColor:"white",paddingTop:30},link:{width:"100%"}})(function(e){var t=e.classes,a=e.edges;return i.a.createElement(r.Fragment,null,i.a.createElement(y,{image:C.a,title:"Performances"}),i.a.createElement("div",{className:t.container},i.a.createElement(o.e,{container:!0,justify:"center"},i.a.createElement(o.e,{item:!0,lg:9,xs:11,justify:"center",container:!0},a.map(function(e,t){var a=e.node.frontmatter;return i.a.createElement(r.Fragment,null,i.a.createElement(w,{key:a.id,gig:a}),i.a.createElement(v.a,null))})))))}),j=a(7),S=a.n(j),k=a(521),N=a.n(k),D=a(522),O=a.n(D),R=a(226),B=a.n(R),M=a(191),q=a.n(M),P=a(183),A=a.n(P),I=a(156),T=a.n(I);function L(){return Math.round(20*Math.random())-10}var G=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!1},t.handleOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t}return S()(t,e),t.prototype.render=function(){var e,t,a=this.props,n=a.classes,r=a.tile,l=a.i;return i.a.createElement("div",null,i.a.createElement(q.a,{key:r.img,cols:l%5==0||0==l?2:1},i.a.createElement("img",{src:r.img,alt:r.title})),i.a.createElement(T.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose},i.a.createElement("div",{style:(e=50+L(),t=50+L(),{top:e+"%",left:t+"%",transform:"translate(-"+e+"%, -"+t+"%)"}),className:n.paper},i.a.createElement(A.a,{variant:"h6",id:"modal-title"},"Text in a modal"),i.a.createElement(A.a,{variant:"subtitle1",id:"simple-modal-description"},"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."),i.a.createElement(F,null))))},t}(i.a.Component),F=Object(s.withStyles)(function(e){return{paper:{position:"absolute",width:50*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit}}})(G),Y=[{img:"https://scontent.cdninstagram.com/vp/6728af9a59a95284b1f89890ed8c8035/5C7EE7CD/t51.2885-15/sh0.08/e35/s640x640/44577679_290060278298520_6079540121383217451_n.jpg",cols:4,title:"flower"},{img:"https://scontent.cdninstagram.com/vp/cf51a3e68dc50f95c47367c11d1afb20/5C643A0C/t51.2885-15/sh0.08/e35/s640x640/44888741_507107033137848_4580092827142723854_n.jpg",cols:2,title:"flower"},{img:"https://scontent.cdninstagram.com/vp/717074c83a24e797e0f8c0d97b6ac47a/5BEDEFCB/t51.2885-15/e15/s640x640/44309792_354825895079738_5887274649713979559_n.jpg",cols:2,title:"flower"},{img:"https://scontent.cdninstagram.com/vp/d663bde870852ef9c45992767fc431d3/5C811BB5/t51.2885-15/sh0.08/e35/s640x640/43371747_301696240674049_6130414795380603724_n.jpg",cols:3,title:"flower"},{img:"https://scontent.cdninstagram.com/vp/ac2d5145a06ce46cb4a4ecf369aa4307/5C701E59/t51.2885-15/sh0.08/e35/s640x640/43985828_351414338755933_1668668365291858014_n.jpg",cols:1,title:"flower"},{img:"https://scontent.cdninstagram.com/vp/70d2baa4fe1dc3b79ad45119664b199f/5C64853B/t51.2885-15/sh0.08/e35/s640x640/43418865_124434991884714_2701863025478867269_n.jpg",cols:4,title:"flower"},{img:"https://scontent.cdninstagram.com/vp/4e391c9d6a1037b43c8e65c28123e8b7/5C68D763/t51.2885-15/sh0.08/e35/s640x640/44232811_255662881971905_3970715602287408752_n.jpg",cols:3,title:"flower"},{img:"https://scontent.cdninstagram.com/vp/5936b9b12b6f00c10daaa6df88bb32f6/5C788898/t51.2885-15/sh0.08/e35/s640x640/44685701_260437158152936_3640035113638259687_n.jpg",cols:1,title:"flower"},{img:"https://scontent.cdninstagram.com/vp/5fbf3f2c6562f39856e678fdd9e71e50/5C77F7D4/t51.2885-15/sh0.08/e35/s640x640/45448634_1695471830558985_6428830320967450095_n.jpg",cols:1,title:"flower"},{img:"https://scontent.cdninstagram.com/vp/57505c81e0de61e1c34aa9bec2b7db82/5BED678C/t51.2885-15/e15/s640x640/43087032_2713997002158773_4570227985402769654_n.jpg",cols:3,title:"flower"},{img:"https://scontent.cdninstagram.com/vp/1adbdd131bef7ec2309e15d7728c0f4d/5C898187/t51.2885-15/sh0.08/e35/s640x640/44513595_298134264358171_712579025945445542_n.jpg",cols:2,title:"flower"},{img:"https://scontent.cdninstagram.com/vp/7a5a5cbf2ad47270057abbd859d62128/5C6D39E2/t51.2885-15/sh0.08/e35/s640x640/42934514_142846436682019_5926366952924915051_n.jpg",cols:3,title:"flower"},{img:"https://scontent.cdninstagram.com/vp/755dc8653ccd4ec740da0dbd153c0bbb/5C6E8E96/t51.2885-15/sh0.08/e35/s640x640/44555784_573691456392833_5000620483165307494_n.jpg",cols:1,title:"flower"},{img:"https://scontent.cdninstagram.com/vp/0e1008024655d654c8c97539ebfe9ee8/5C8086F2/t51.2885-15/sh0.08/e35/s640x640/44368357_271587356895144_6545389112899230363_n.jpg",cols:2,title:"flower"},{img:"https://scontent.cdninstagram.com/vp/b17e6a152e2cc84336102ed02ef568a5/5C892C5C/t51.2885-15/sh0.08/e35/s640x640/43618510_284919435474428_5856747285038672440_n.jpg",cols:4,title:"flower"}];var z=Object(s.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},inner:{margin:"auto",padding:100},gridList:{width:"100%",height:"100%",transform:"translateZ(0)"}}})(function(e){var t,a=e.classes,n=e.imageData;return t=0!==n.length?n.map(function(e){return{img:e.images.standard_resolution.url,cols:Math.ceil(4*Math.random()),title:"flower"}}):Y,console.log(t),i.a.createElement("div",{className:a.root},i.a.createElement(o.e,{conainer:!0,justify:"center",alignContent:"center"},i.a.createElement(o.e,{className:a.inner,item:!0,xs:11,lg:9},i.a.createElement(B.a,{spacing:9,cellHeight:230,className:a.gridList,cols:3},t.map(function(e,t){return i.a.createElement(q.a,{key:e.img,cols:t%5==0||0==t?2:1},i.a.createElement("img",{src:e.img,alt:e.title}))})))))}),W=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={imageData:[]},t}S()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;new O.a({get:"user",userId:"286664193",accessToken:"286664193.1677ed0.d46b9c3d793745748af14e333fb0c25c",limit:15,sortBy:"most-recent",resolution:"standard_resolution",success:function(t){e.setState({imageData:t.data})}}).run()},a.render=function(){console.log(this.state);var e=this.props.classes;return i.a.createElement(r.Fragment,null,i.a.createElement(y,{image:N.a,title:"@brandonnelsonmusic"}),i.a.createElement("div",{className:e.container},i.a.createElement(z,{imageData:this.state.imageData}),i.a.createElement("div",{style:{display:"none"},id:"instafeed"})))},t}(r.Component),Q=Object(s.withStyles)({container:{height:"100%",width:"100vw",backgroundColor:"white",paddingTop:30},link:{width:"100%"}})(W),U=a(525),J=a.n(U),H=function(e){function t(){return e.apply(this,arguments)||this}return S()(t,e),t.prototype.render=function(){var e=this.props.classes;return i.a.createElement("form",{"data-netlify":"true"},i.a.createElement(o.e,{container:!0,justify:"center",alignItems:"center",className:e.container},i.a.createElement(o.e,{item:!0,xs:10,lg:5,className:e.border},i.a.createElement(o.d,{margin:"normal"},i.a.createElement(o.l,{label:"Name",variant:"outlined",fullWidth:!0})),i.a.createElement(o.d,{fullWidth:!0,margin:"normal"},i.a.createElement(o.l,{label:"Email",variant:"outlined",fullWidth:!0})),i.a.createElement(o.d,{fullWidth:!0,margin:"normal"},i.a.createElement(o.l,{label:"Message",variant:"outlined",fullWidth:!0,multiline:!0,rows:6,rowsMax:10})),i.a.createElement(o.d,{margin:"normal"},i.a.createElement(o.b,{type:"submit",variant:"outlined"},"Send")))))},t}(r.Component),Z=Object(s.withStyles)({container:{height:"80vh"},formContainer:{height:500,border:"1px solid black",padding:15,borderRadius:5},border:{height:500,padding:20}})(H),K=Object(s.withStyles)({container:{height:"100%",backgroundColor:"white",paddingTop:30},link:{width:"100%"}})(function(e){var t=e.classes;e.edges;return i.a.createElement(r.Fragment,null,i.a.createElement(y,{image:J.a,title:"Get in Touch"}),i.a.createElement("div",{className:t.container},i.a.createElement(Z,null)))}),V=a(218),X=(a(526),a(527)),$={container:{position:"relative",overflow:"hidden",width:"100%",height:"100vh"},image:{width:"100vw",height:"150vh",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url("+a.n(X).a+")"},children:{},title:{color:"white",letterSpacing:11}};Object(s.withStyles)($)(function(e){var t=e.classes,a=(e.image,e.min),n=e.max,r=e.children;return i.a.createElement("div",{className:t.container},i.a.createElement(c.Parallax,{offsetYMin:a,offsetYMax:n,slowerScrollRate:!0,style:!0},i.a.createElement("div",{className:t.image})),i.a.createElement("div",{className:t.children},r))});a.d(t,"query",function(){return ee});t.default=function(e){var t=e.data;return i.a.createElement(c.ParallaxProvider,null,i.a.createElement(l.a,{splash:!0}),i.a.createElement(u,null),i.a.createElement(g,null),i.a.createElement(_,{edges:t.allMarkdownRemark.edges}),i.a.createElement(Q,null),i.a.createElement(K,null),i.a.createElement(V.a,null))};var ee="3876341228"},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(149),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(160),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=a(37);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),g=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},160:function(e,t,a){var n;e.exports=(n=a(192))&&n.default||n},192:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},218:function(e,t,a){"use strict";a(262);var n=a(0),r=a.n(n),i=a(148),l=a(151),c=(a(152),a(263)),o=a(188),s=a.n(o);t.a=Object(l.withStyles)({container:{height:100,width:"100vw",backgroundColor:"#1f1f1f"},innnerContainer:{textAlign:"center"},icon:{fontSize:5},copyRight:{color:"white",textAlign:"center",marginTop:-20}})(function(e){var t=e.classes;e.splash;return r.a.createElement(i.e,{className:t.container,container:!0,justify:"center",alignItems:"center"},r.a.createElement(i.e,{container:!0,item:!0,xs:12,justify:"center",className:t.innnerContainer},r.a.createElement(i.f,{className:t.iconBtn},r.a.createElement(c.SocialIcon,{url:"https://www.facebook.com/Brandon.Loves.Pie",style:{height:30,width:30},color:"white"})),r.a.createElement(i.f,null,r.a.createElement(c.SocialIcon,{url:"https://soundcloud.com/brandon-nelson-75",style:{height:30,width:30},color:"white"})),r.a.createElement(i.f,null,r.a.createElement(c.SocialIcon,{url:"https://www.instagram.com/brandonnelsonmusic/",style:{height:30,width:30},color:"white"}))),r.a.createElement(i.e,{item:!0,xs:12},r.a.createElement(i.n,{variant:"caption",className:t.copyRight},"©",s()(Date.now()).format("YYYY")," by Brandon Nelson")))})},227:function(e,t,a){"use strict";var n,r=a(0),i=a.n(r),l=a(148),c=a(151),o=a(152),s=a(7),m=a.n(s),u=a(158),d=a.n(u),g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!1},t.toggleDrawer=function(e){console.log("toggling menu"),t.setState({open:e})},t}return m()(t,e),t.prototype.render=function(){var e=this,t=this.props.classes,a=i.a.createElement(l.g,null,i.a.createElement(l.h,{button:!0},i.a.createElement(l.i,{primary:"Music"})),i.a.createElement(l.h,{button:!0},i.a.createElement(l.i,{primary:"Performances"})),i.a.createElement(l.h,{button:!0},i.a.createElement(l.i,{primary:"About"})),i.a.createElement(l.h,{button:!0},i.a.createElement(l.i,{primary:"Contact"})));return i.a.createElement("div",null,i.a.createElement(l.f,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:function(){return e.toggleDrawer(!0)}},i.a.createElement(d.a,{fontSize:"large"})),i.a.createElement(l.k,{anchor:"right",open:this.state.open,onClose:function(){return e.toggleDrawer(!1)},onOpen:function(){return e.toggleDrawer(!0)}},a))},t}(i.a.Component),p=Object(c.withStyles)({menuButton:{marginLeft:-12,marginRight:20},menuList:{backgroundColor:"black"}})(g),h=((n={root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},bar:{background:"transparent",boxShadow:"none",color:"black"},title:{flexGrow:1,fontSize:20,letterSpacing:4},transparent:{opacity:0,flexGrow:1,fontSize:20,letterSpacing:4},white:{position:"absolute",background:"transparent",boxShadow:"none",color:"white"}}).menuButton={float:"right"},n);t.a=Object(c.withStyles)(h)(function(e){var t=e.classes,a=e.splash;return i.a.createElement("div",null,i.a.createElement(l.a,{className:a?t.white:t.bar,position:"static"},i.a.createElement(l.m,null,i.a.createElement(l.n,{to:"/",component:o.Link,color:"inherit",className:a?t.transparent:t.title},"BRANDON NELSON"),i.a.createElement(p,null))))})},520:function(e,t,a){e.exports=a.p+"static/smile-4c4a00651bf4ab146c206ca9f3584057.jpg"},521:function(e,t,a){e.exports=a.p+"static/quick-85cf24cad49772313dc54e0ead0215ac.jpg"},525:function(e,t,a){e.exports=a.p+"static/band-f3549719f47ff50cb686371eceabbd5c.jpg"},526:function(e,t,a){},527:function(e,t,a){e.exports=a.p+"static/smile-4c4a00651bf4ab146c206ca9f3584057.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-8871f90f61e9edd12df9.js.map