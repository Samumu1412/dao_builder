(this.webpackJsonpmydao=this.webpackJsonpmydao||[]).push([[1],{164:function(e,t,n){},169:function(e,t){},214:function(e,t){},240:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(141),s=n.n(o),a=(n(164),n(86)),i=n(60),l=n(4),d=n.n(l),u=n(16),b=n(100),j=n(142),p=n(68),h=n(20),f=new j.a("rinkeby"),O=f.getBundleDropModule("0xe2B23c6A54cEd8305eFb7e315eD2D20AdeA44D0d"),m=f.getTokenModule("0x2a69989E6749477b5E5b1C2BDa4c1c051f491aD9"),x=f.getVoteModule("0x7898E6a71E46706FDD72A4F7A364f498081cd435"),v=function(){var e=Object(b.b)(),t=e.connectWallet,n=e.address,r=e.error,o=e.provider;console.log("\ud83d\udc4b Address:",n);var s=o?o.getSigner():void 0,l=Object(c.useState)(!1),j=Object(i.a)(l,2),v=j[0],g=j[1],y=Object(c.useState)(!1),k=Object(i.a)(y,2),A=k[0],w=k[1];Object(c.useEffect)((function(){f.setProviderOrSigner(s)}),[s]),Object(c.useEffect)((function(){if(n)return O.balanceOf(n,"0").then((function(e){e.gt(0)?(g(!0),console.log("\ud83c\udf1f this user has a membership NFT!")):(g(!1),console.log("\ud83d\ude2d this user doesn't have a membership NFT."))})).catch((function(e){g(!1),console.error("failed to nft balance",e)}))}),[n]);var E=Object(c.useState)({}),I=Object(i.a)(E,2),S=I[0],D=I[1],M=Object(c.useState)([]),N=Object(i.a)(M,2),C=N[0],B=N[1];Object(c.useEffect)((function(){v&&O.getAllClaimerAddresses("0").then((function(e){console.log("\ud83d\ude80 Members addresses",e),B(e)})).catch((function(e){console.error("failed to get member list",e)}))}),[v]),Object(c.useEffect)((function(){v&&m.getAllHolderBalances().then((function(e){console.log("\ud83d\udc5c Amounts",e),D(e)})).catch((function(e){console.error("failed to get token amounts",e)}))}),[v]);var F=Object(c.useMemo)((function(){return C.map((function(e){return{address:e,tokenAmount:u.a.utils.formatUnits(S[e]||0,18)}}))}),[C,S]),P=Object(c.useState)([]),T=Object(i.a)(P,2),V=T[0],R=T[1],U=Object(c.useState)(!1),J=Object(i.a)(U,2),W=J[0],H=J[1],L=Object(c.useState)(!1),Y=Object(i.a)(L,2),Z=Y[0],q=Y[1];return Object(c.useEffect)((function(){v&&x.getAll().then((function(e){R(e),console.log("\ud83c\udf08 Proposals:",e)})).catch((function(e){console.error("failed to get proposals",e)}))}),[v]),Object(c.useEffect)((function(){v&&V.length&&x.hasVoted(V[0].proposalId,n).then((function(e){q(e),e?console.log("\ud83e\udd75 User has already voted"):console.log("\ud83d\ude42 User has not voted yet")})).catch((function(e){console.error("failed to check if wallet has voted",e)}))}),[v,V,n]),r instanceof p.a?Object(h.jsxs)("div",{className:"unsupported-network",children:[Object(h.jsx)("h2",{children:"Please connect to Rinkeby"}),Object(h.jsx)("p",{children:"This dapp only works on the Rinkeby network, please switch networks in your connected wallet."})]}):n?v?Object(h.jsxs)("div",{className:"member-page",children:[Object(h.jsx)("h1",{children:"BarDAO Member Page\ud83c\udf7a"}),Object(h.jsx)("p",{children:"Congratulations on being a member"}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Member List"}),Object(h.jsxs)("table",{className:"card",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Address"}),Object(h.jsx)("th",{children:"Token Amount"})]})}),Object(h.jsx)("tbody",{children:F.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:(t=e.address,t.substring(0,6)+"..."+t.substring(t.length-4))}),Object(h.jsx)("td",{children:e.tokenAmount})]},e.address);var t}))})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Active Proposals"}),Object(h.jsxs)("form",{onSubmit:function(){var e=Object(a.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),H(!0),c=V.map((function(e){var t={proposalId:e.proposalId,vote:2};return e.votes.forEach((function(n){document.getElementById(e.proposalId+"-"+n.type).checked&&(t.vote=n.type)})),t})),e.prev=4,e.next=7,m.getDelegationOf(n);case 7:if(e.sent!==u.a.constants.AddressZero){e.next=11;break}return e.next=11,m.delegateTo(n);case 11:return e.prev=11,e.next=14,Promise.all(c.map(function(){var e=Object(a.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get(t.proposalId);case 2:if(1!==e.sent.state){e.next=5;break}return e.abrupt("return",x.vote(t.proposalId,t.vote));case 5:return e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 14:return e.prev=14,e.next=17,Promise.all(c.map(function(){var e=Object(a.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get(t.proposalId);case 2:if(4!==e.sent.state){e.next=5;break}return e.abrupt("return",x.execute(t.proposalId));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 17:q(!0),console.log("successfully voted"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(14),console.error("failed to execute votes",e.t0);case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(11),console.error("failed to vote",e.t1);case 29:e.next=34;break;case 31:e.prev=31,e.t2=e.catch(4),console.error("failed to delegate tokens");case 34:return e.prev=34,H(!1),e.finish(34);case 37:case"end":return e.stop()}}),e,null,[[4,31,34,37],[11,26],[14,21]])})));return function(t){return e.apply(this,arguments)}}(),children:[V.map((function(e,t){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("h5",{children:e.description}),Object(h.jsx)("div",{children:e.votes.map((function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"radio",id:e.proposalId+"-"+t.type,name:e.proposalId,value:t.type,defaultChecked:2===t.type}),Object(h.jsx)("label",{htmlFor:e.proposalId+"-"+t.type,children:t.label})]},t.type)}))})]},e.proposalId)})),Object(h.jsx)("button",{disabled:W||Z,type:"submit",children:W?"Voting...":Z?"You Already Voted":"Submit Votes"}),Object(h.jsx)("small",{children:"This will trigger multiple transactions that you will need to sign."})]})]})]})]}):Object(h.jsxs)("div",{className:"mint-nft",children:[Object(h.jsx)("h1",{children:"Mint your free \ud83c\udf6aDAO Membership NFT"}),Object(h.jsx)("button",{disabled:A,onClick:function(){return w(!0),void O.claim("0",1).catch((function(e){console.error("failed to claim",e),w(!1)})).finally((function(){w(!1),g(!0),console.log("Successfully Minted! Check it our on OpenSea: https://testnets.opensea.io/assets/".concat(O.address,"/0"))}))},children:A?"Minting...":"Mint your nft (FREE)"})]}):Object(h.jsxs)("div",{className:"landing",children:[Object(h.jsx)("h1",{children:"Welcome to BarDAO"}),Object(h.jsx)("button",{onClick:function(){return t("injected")},className:"btn-hero",children:"Connect your wallet"})]})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(b.a,{connectors:{injected:{}},supportedChainIds:[4],children:Object(h.jsx)(v,{})})}),document.getElementById("root"))}},[[240,2,3]]]);
//# sourceMappingURL=main.04a82316.chunk.js.map