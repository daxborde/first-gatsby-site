(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"96em":function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"id":"18e80ea9-b192-594c-bf65-2eb987d50b56","childImageSharp":{"id":"58e1649d-92cf-5a15-bbdf-bc5354d59407","fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAARABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMCBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB9PozOSqqs4CwX//EAB0QAAIBBAMAAAAAAAAAAAAAAAACAQMEITIRIjH/2gAIAQEAAQUCmcw2O468lvoNrT8P/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8BI//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAICAwAAAAAAAAAAAAAAAAAQAREhMUH/2gAIAQEABj8CyuFmlL//xAAeEAABBAEFAAAAAAAAAAAAAAABABARIXExQVGRof/aAAgBAQABPyEhSCNyeFJbBlGIUoWqHMDPbeBauW//2gAMAwEAAgADAAAAEHffQP/EABgRAAIDAAAAAAAAAAAAAAAAAABBARAR/9oACAEDAQE/EIYwdf/EABYRAQEBAAAAAAAAAAAAAAAAABEBIP/aAAgBAgEBPxBKY//EAB4QAQABAwUBAAAAAAAAAAAAAAERACExEEFRYaHw/9oACAEBAAE/EJkrzh26KgBZ4ZaL0Lwr+UaIDScx1QQKblRndOnoV9nRp//Z","aspectRatio":1.179746835443038,"src":"/static/db528a105a46d2d9c0bdb1e513ee928a/b3cab/squidward-dab.jpg","srcSet":"/static/db528a105a46d2d9c0bdb1e513ee928a/af138/squidward-dab.jpg 75w,\\n/static/db528a105a46d2d9c0bdb1e513ee928a/62067/squidward-dab.jpg 150w,\\n/static/db528a105a46d2d9c0bdb1e513ee928a/b3cab/squidward-dab.jpg 300w,\\n/static/db528a105a46d2d9c0bdb1e513ee928a/4507f/squidward-dab.jpg 450w,\\n/static/db528a105a46d2d9c0bdb1e513ee928a/60699/squidward-dab.jpg 466w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),d=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},A=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(A);if(-1!==t)return e[t]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,S=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function B(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',d=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+d+s+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,d=l.default.createElement(O,(0,o.default)({src:t},i,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),d):d},O=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,d=e.onLoad,c=e.onError,u=e.loading,A=e.draggable,f=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":f,sizes:a,srcSet:r,src:i},g,{onLoad:d,onError:c,ref:t,loading:u,draggable:A,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,d.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,d=e.imgStyle,s=void 0===d?{}:d,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,S=e.itemProp,w=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,o.default)({opacity:R?1:0,transition:C?"opacity "+b+"ms":"none"},s),Q="boolean"==typeof m?"lightgray":m,x={transitionDelay:b+"ms"},z=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&x,{},s,{},A),V={title:t,alt:this.state.isVisible?"":a,style:z,className:f,itemProp:S};if(p){var P=p,Y=g(p);return l.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(Y.srcSet)},l.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/Y.aspectRatio+"%"}}),Q&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&x)}),Y.base64&&l.default.createElement(L,{ariaHidden:!0,src:Y.base64,spreadProps:V,imageVariants:P,generateSources:B}),Y.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,src:Y.tracedSVG,spreadProps:V,imageVariants:P,generateSources:v}),this.state.isVisible&&l.default.createElement("picture",null,y(P),l.default.createElement(O,{alt:a,title:t,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,o.default)({alt:a,title:t,loading:w},Y,{imageVariants:P}))}}))}if(h){var q=h,T=g(h),G=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete G.display,l.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},Q&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:Q,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},C&&x)}),T.base64&&l.default.createElement(L,{ariaHidden:!0,src:T.base64,spreadProps:V,imageVariants:q,generateSources:B}),T.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,src:T.tracedSVG,spreadProps:V,imageVariants:q,generateSources:v}),this.state.isVisible&&l.default.createElement("picture",null,y(q),l.default.createElement(O,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,o.default)({alt:a,title:t,loading:w},T,{imageVariants:q}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),Q=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});C.propTypes={resolutions:N,sizes:Q,fixed:c.default.oneOfType([N,c.default.arrayOf(N)]),fluid:c.default.oneOfType([Q,c.default.arrayOf(Q)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var x=C;t.default=x},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",d=!0;n in[]&&Array(1)[n]((function(){d=!1})),r(r.P+r.F*d,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),d=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(d,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),d=a("Bl7J"),s=a("96em"),o=a("9eSz"),l=a.n(o),c=function(){var e=s.data;return i.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid})},u=a("vrFN");t.default=function(){return i.a.createElement(d.a,null,i.a.createElement(u.a,{title:"Home"}),i.a.createElement("h1",null,"Sup gamers"),i.a.createElement("p",null,"Welcome to the bungus zone."),i.a.createElement("p",null,"Be excellent to each other, and party on dudes."),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(c,null)),i.a.createElement(n.Link,{to:"/page-2/"},"Go to page 2"))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4921f3c8455205f0b372.js.map