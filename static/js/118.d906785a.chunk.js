(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[118],{9155:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(1087),i="MoviesList_list__0Owr9",s="MoviesList_item__eePYv",a="MoviesList_title__PB2c8",o=r(2007),c=r.n(o),u=r(2128),p=r(184),f=function(e){var t=e.movies,r=e.location;return(0,p.jsx)("ul",{className:i,children:t&&t.map((function(e){return(0,p.jsx)("li",{className:s,children:(0,p.jsxs)(n.Link,{to:"/movies/".concat(e.id),state:{from:r},children:[(0,p.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):u,alt:e.title||e.name,width:"300",height:"450"}),(0,p.jsx)("h2",{className:a,children:e.title||e.name})]})},e.id)}))})};f.prototype={movies:c().shape({id:c().number.isRequired,poster_path:c().string.isRequired,name:c().string.isRequired,title:c().string.isRequired}).isRequired};var l=f},2118:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(5861),i=r(9439),s=r(7757),a=r.n(s),o=r(1243),c="https://api.themoviedb.org/3/",u="api_key=88faaf442f455e4d8446047507fe6e6c";function p(){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(c,"trending/all/day?").concat(u),e.next=3,o.Z.get(t);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l=r(9155),d=r(7689),h=r(184),m=r(2791),v=m.useEffect,_=m.useState,y=function(){var e=_([]),t=(0,i.Z)(e,2),r=t[0],s=t[1],o=(0,d.TH)();return v((function(){var e=function(){var e=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,h.jsx)(l.Z,{movies:r,location:o})}},888:function(e,t,r){"use strict";var n=r(9047);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,s,a){if(a!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:i};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2128:function(e,t,r){"use strict";e.exports=r.p+"static/media/movie-clip-art-28.cd9337714d1d1d00db46.png"}}]);
//# sourceMappingURL=118.d906785a.chunk.js.map