(this["webpackJsonpweb3-sign-message"]=this["webpackJsonpweb3-sign-message"]||[]).push([[0],{230:function(e,n){},239:function(e,n){},257:function(e,n){},259:function(e,n){},279:function(e,n){},281:function(e,n){},285:function(e,n){},286:function(e,n){},322:function(e,n){},324:function(e,n){},369:function(e,n){},370:function(e,n){},440:function(e,n){},442:function(e,n){},447:function(e,n){},449:function(e,n){},456:function(e,n){},468:function(e,n){},471:function(e,n){},476:function(e,n){},511:function(e,n,t){"use strict";t.r(n);var c=t(10),r=t.n(c),a=t(206),s=t.n(a),i=(t(217),t(22)),u=t.n(i),o=t(81),j=t(45),b=t(207),l=t.n(b),h=t(515),d=t(516),f=t(517),O=t(518),x=t(519),p=t(520),v=t(521),g=t(522),w=t(523),m=t(524),k=t(12);var C=function(){var e=Object(c.useState)(null),n=Object(j.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),s=Object(j.a)(a,2),i=s[0],b=s[1],C=Object(c.useState)("Confirm ownership"),S=Object(j.a)(C,1)[0],y=Object(c.useState)("Confirm ownership"),A=Object(j.a)(y,2),F=A[0],R=A[1],M=Object(c.useState)(""),q=Object(j.a)(M,2),B=q[0],I=q[1],J=Object(c.useState)(""),L=Object(j.a)(J,2),P=L[0],T=L[1],D=function(){var e=Object(o.a)(u.a.mark((function e(){var n,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=12;break}return n=new l.a(window.ethereum),e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return r(n),e.next=7,n.eth.getAccounts();case 7:t=e.sent,b(t[0]),window.ethereum.on("accountsChanged",(function(e){b(e[0])})),e.next=13;break;case 12:alert("Kh\xf4ng ph\xe1t hi\u1ec7n \u0111\u01b0\u1ee3c v\xed.");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.eth.personal.sign(S,i);case 3:n=e.sent,I(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("err: ",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(o.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.eth.personal.ecRecover(S,F);case 3:n=e.sent,T(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("err: ",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{className:"App",children:[!t&&Object(k.jsx)(h.a,{children:Object(k.jsx)(d.a,{onClick:function(){return D()},children:"Connect wallet"})}),Object(k.jsxs)(f.a,{children:[Object(k.jsx)(O.a,{md:"6",children:Object(k.jsxs)(x.a,{children:[Object(k.jsx)(p.a,{children:"Sign message"}),Object(k.jsxs)(v.a,{children:[Object(k.jsx)(g.a,{children:"Message: "}),Object(k.jsx)(w.a,{type:"text",value:S,disabled:!0}),Object(k.jsx)(d.a,{onClick:function(){return E()},disabled:!t,children:"Sign"})]}),Object(k.jsxs)(m.a,{children:[Object(k.jsx)(g.a,{children:"Result: "}),Object(k.jsx)("p",{children:B})]})]})}),Object(k.jsx)(O.a,{md:"6",children:Object(k.jsxs)(x.a,{children:[Object(k.jsx)(p.a,{children:"Recover message"}),Object(k.jsxs)(v.a,{children:[Object(k.jsx)(g.a,{children:"Message: "}),Object(k.jsx)(w.a,{type:"text",value:S,disabled:!0}),Object(k.jsx)(g.a,{children:"Signature: "}),Object(k.jsx)(w.a,{type:"text",value:F,onChange:function(e){return R(e.target.value)}}),Object(k.jsx)(d.a,{onClick:function(){return K()},children:"Recover"})]}),Object(k.jsxs)(m.a,{children:[Object(k.jsx)(g.a,{children:"Address owner: "}),Object(k.jsx)("p",{children:P})]})]})})]})]})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,525)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(C,{})}),document.getElementById("root")),S()}},[[511,1,2]]]);
//# sourceMappingURL=main.1459c2ad.chunk.js.map