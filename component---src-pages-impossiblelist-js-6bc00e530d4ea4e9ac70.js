(self.webpackChunkdtc_website=self.webpackChunkdtc_website||[]).push([[438],{2580:function(e,t,n){n(65743),e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",s="hour",u="day",o="week",l="month",c="quarter",f="year",h="date",m="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:p,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,l),a=n-i<0,s=t.clone().add(r+(a?-1:1),l);return+(-(r+(n-i)/(a?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:f,w:o,d:u,D:h,h:s,m:a,s:i,ms:r,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",M={};M[y]=$;var S=function(e){return e instanceof k},E=function(e,t,n){var r;if(!e)return y;if("string"==typeof e)M[e]&&(r=e),t&&(M[e]=t,r=e);else{var i=e.name;M[i]=e,r=i}return!n&&r&&(y=r),r||!n&&y},w=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},D=v;D.l=E,D.i=S,D.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function $(e){this.$L=E(e.locale,null,!0),this.parse(e)}var p=$.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(d);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return D},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},p.isAfter=function(e,t){return w(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<w(e)},p.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var n=this,r=!!D.u(t)||t,c=D.p(e),m=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(u)},d=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,$=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case f:return r?m(1,0):m(31,11);case l:return r?m(1,$):m(0,$+1);case o:var y=this.$locale().weekStart||0,M=(g<y?g+7:g)-y;return m(r?p-M:p+(6-M),$);case u:case h:return d(v+"Hours",0);case s:return d(v+"Minutes",1);case a:return d(v+"Seconds",2);case i:return d(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,t){var n,o=D.p(e),c="set"+(this.$u?"UTC":""),m=(n={},n[u]=c+"Date",n[h]=c+"Date",n[l]=c+"Month",n[f]=c+"FullYear",n[s]=c+"Hours",n[a]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[o],d=o===u?this.$D+(t-this.$W):t;if(o===l||o===f){var g=this.clone().set(h,1);g.$d[m](d),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else m&&this.$d[m](d);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[D.p(e)]()},p.add=function(r,c){var h,m=this;r=Number(r);var d=D.p(c),g=function(e){var t=w(m);return D.w(t.date(t.date()+Math.round(e*r)),m)};if(d===l)return this.set(l,this.$M+r);if(d===f)return this.set(f,this.$y+r);if(d===u)return g(1);if(d===o)return g(7);var $=(h={},h[a]=t,h[s]=n,h[i]=e,h)[d]||1,p=this.$d.getTime()+r*$;return D.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,s=this.$m,u=this.$M,o=n.weekdays,l=n.months,c=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].substr(0,a)},f=function(e){return D.s(a%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},d={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:D.s(u+1,2,"0"),MMM:c(n.monthsShort,u,l,3),MMMM:c(l,u),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,o,2),ddd:c(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(a),HH:D.s(a,2,"0"),h:f(1),hh:f(2),a:h(a,s,!0),A:h(a,s,!1),m:String(s),mm:D.s(s,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||d[e]||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,h,m){var d,g=D.p(h),$=w(r),p=($.utcOffset()-this.utcOffset())*t,v=this-$,y=D.m(this,$);return y=(d={},d[f]=y/12,d[l]=y,d[c]=y/3,d[o]=(v-p)/6048e5,d[u]=(v-p)/864e5,d[s]=v/n,d[a]=v/t,d[i]=v/e,d)[g]||v,m?y:D.a(y)},p.daysInMonth=function(){return this.endOf(l).$D},p.$locale=function(){return M[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=E(e,t,!0);return r&&(n.$L=r),n},p.clone=function(){return D.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},$}(),b=k.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",a],["$H",s],["$W",u],["$M",l],["$y",f],["$D",h]].forEach((function(e){b[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,k,w),e.$i=!0),w},w.locale=E,w.isDayjs=S,w.unix=function(e){return w(1e3*e)},w.en=M[y],w.Ls=M,w.p={},w}()},66297:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(80936),i=n(53715),a=n(62185),s=n(67294),u=n(60454),o=n(2580),l=n.n(o),c=(0,a.Z)({root:{"& ul":{listStyleType:"disc",marginTop:5,"& li":{marginBottom:5}}}}),f=function(e){var t=e.value,n=e.edits.find((function(e){return e.value<=t}));return s.createElement("li",null,n?s.createElement(s.Fragment,null,s.createElement("s",null,"≤ ",h(t),"s")," — Accomplished on ",m(n.date)," with a time of ",s.createElement("strong",null,h(n.value),"s"),n.link&&s.createElement(s.Fragment,null," (Check on ",s.createElement("a",{href:n.link,target:"_blank",rel:"noopener noreferrer"},"Strava"),")"),n.links&&s.createElement(s.Fragment,null," — ",s.createElement("a",{href:n.links[0],target:"_blank",rel:"noopener noreferrer"},"Swimming Segment")," | ",s.createElement("a",{href:n.links[1],target:"_blank",rel:"noopener noreferrer"},"Cycling Segment")," | ",s.createElement("a",{href:n.links[2],target:"_blank",rel:"noopener noreferrer"},"Running Segment"))):"≤ "+h(t)+"s")},h=function(e){var t=~~(e/3600),n=~~(e%3600/60),r=+(e%60).toFixed(2),i="";return t>0&&(i+=(t<10?"0":"")+t+":"),n>0&&(i+=(n<10?"0":"")+n+"'"),i+=(r<10?"0":"")+r},m=function(e){var t=l()(e);return s.createElement("span",null,t.date(),s.createElement("sup",null,d(t.date())),t.format(" MMMM YYYY"))},d=function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},g=function(e){var t=e.goal,n=c(),r=t.edits||[],i=r[r.length-1],a=t.subgoals||[];switch(t.type){case 0:return s.createElement("li",{className:n.root},i?s.createElement(s.Fragment,null,s.createElement("s",null,t.name)," — Best time: ",s.createElement("strong",null,h(i.value),"s")," on ",m(i.date),i.link&&s.createElement(s.Fragment,null," (Check on ",s.createElement("a",{href:i.link,target:"_blank",rel:"noopener noreferrer"},"Strava"),")"),i.links&&s.createElement(s.Fragment,null," — ",s.createElement("a",{href:i.links[0],target:"_blank",rel:"noopener noreferrer"},"Swimming Segment")," | ",s.createElement("a",{href:i.links[1],target:"_blank",rel:"noopener noreferrer"},"Cycling Segment")," | ",s.createElement("a",{href:i.links[2],target:"_blank",rel:"noopener noreferrer"},"Running Segment"))):t.name,a.length>0&&s.createElement("ul",null,a.map((function(e){return s.createElement(f,{key:e,value:e,edits:r})}))));case 1:case 2:return s.createElement("li",null,i?s.createElement(s.Fragment,null,s.createElement("s",null,t.name)," (",s.createElement("strong",null,1===t.type?m(i.date):i.date),")"):t.name);default:return s.createElement("li",null,"Error: Unknown type")}},$=(0,a.Z)((function(e){return{root:{"& a":{textDecoration:"none",color:"#037daf"},"& li":Object.assign({},e.typography.body2)},title:{marginBottom:15}}})),p=function(e){var t=e.category,n=$();return s.createElement("div",{className:n.root},s.createElement(u.Z,{variant:"h5",className:n.title},t.name),s.createElement("ul",null,t.goals.map((function(e){return s.createElement(g,{goal:e,key:e.name})}))))},v=n(69931),y=n.n(v),M=n(58797),S=(0,a.Z)((function(e){var t;return{root:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},container:(t={marginBottom:50,marginTop:50,width:"90%",maxWidth:1280},t[e.breakpoints.down("sm")]={width:"85%"},t.textAlign="center",t),picture:{margin:"auto",width:100,borderRadius:100},text:{color:"white"},title:{fontSize:"4rem",marginTop:30,marginBottom:10},subtitle:{fontSize:"1.5rem"}}})),E=function(){var e=S();return s.createElement("div",{className:e.root},s.createElement("div",{className:e.container},s.createElement(M.Z,{className:e.picture}),s.createElement(u.Z,{variant:"h1",className:y()(e.text,e.title)},"Impossible List"),s.createElement(u.Z,{variant:"h4",className:y()(e.text,e.subtitle)},"By Diogo Correia")))},w=n(30677),D=n(36179),k=(0,a.Z)((function(e){return{section:{background:"#fff",paddingTop:50,paddingBottom:24,boxShadow:e.shadows[2]}}})),b=function(e){var t=e.data,n=k();return s.createElement(w.Z,null,s.createElement(D.Z,{title:"Impossible List"}),s.createElement(E,null),s.createElement(r.Z,{className:n.section},s.createElement(i.Z,null,t.json.nodes.map((function(e){return s.createElement(p,{category:e,key:e.name})})))))}}}]);
//# sourceMappingURL=component---src-pages-impossiblelist-js-6bc00e530d4ea4e9ac70.js.map