(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[745],{9155:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(1087),i="MoviesList_list__0Owr9",a="MoviesList_item__eePYv",s="MoviesList_title__PB2c8",o=n(2007),c=n.n(o),u=n(2128),p=n(184),l=function(e){var t=e.movies,n=e.location;return(0,p.jsx)("ul",{className:i,children:t&&t.map((function(e){return(0,p.jsx)("li",{className:a,children:(0,p.jsxs)(r.Link,{to:"/movies/".concat(e.id),state:{from:n},children:[(0,p.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):u,alt:e.title||e.name,width:"300",height:"450"}),(0,p.jsx)("h2",{className:s,children:e.title||e.name})]})},e.id)}))})};l.prototype={movies:c().shape({id:c().number.isRequired,poster_path:c().string.isRequired,name:c().string.isRequired,title:c().string.isRequired}).isRequired};var f=l},4745:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(9439),i=n(5861),a=n(7757),s=n.n(a),o=n(1243),c="https://api.themoviedb.org/3/",u="api_key=88faaf442f455e4d8446047507fe6e6c";function p(){return(p=(0,i.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(c,"search/movie?").concat(u,"&").concat(t),e.next=3,o.Z.get(n);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l="Search_wrapper__jC8nN",f="Search_input__PXR0c",h=n(2007),d=n.n(h),m=n(184),v=function(e){var t=e.value,n=e.onChange;return(0,m.jsx)("div",{className:l,children:(0,m.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)},className:f})})};v.prototype={value:d().string.isRequired,onChange:d().func.isRequired};var _=n(9155),g=n(2791),y=n(1087),x=n(7689),b=function(){var e,t=(0,g.useState)(),n=(0,r.Z)(t,2),i=n[0],a=n[1],s=(0,y.useSearchParams)(),o=(0,r.Z)(s,2),c=o[0],u=o[1],l=null!==(e=c.get("query"))&&void 0!==e?e:"",f=(0,x.TH)();return(0,g.useEffect)((function(){c&&function(e){return p.apply(this,arguments)}(c).then((function(e){return a(e)}))}),[c]),(0,m.jsxs)("div",{children:[(0,m.jsx)(v,{value:l,onChange:function(e){u(""!==e?{query:e}:{})}}),(0,m.jsx)(_.Z,{movies:i,location:f})]})}},888:function(e,t,n){"use strict";var r=n(9047);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,a,s){if(s!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2128:function(e,t,n){"use strict";e.exports=n.p+"static/media/movie-clip-art-28.cd9337714d1d1d00db46.png"}}]);
//# sourceMappingURL=745.538b5a0c.chunk.js.map