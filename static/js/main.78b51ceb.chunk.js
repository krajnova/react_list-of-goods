(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),s=n.n(r),a=n(3),o=n.n(a),c=n(1),u=n(4),i=n(5),l=n(7),b=n(6),m=(n(13),function(t){var e=t.goods;return s.a.createElement("ul",{className:"goods"},e.map((function(t){return s.a.createElement("li",{className:"good",key:t},t)})))}),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={startList:h,currentList:h,isShowed:!1},t.reset=function(){t.setState((function(t){return{currentList:t.startList}}))},t.reverse=function(){t.setState((function(t){return{currentList:Object(c.a)(t.currentList).reverse()}}))},t.sortByAlphabet=function(){t.setState((function(t){return{currentList:Object(c.a)(t.currentList).sort()}}))},t.sortByLength=function(){t.setState((function(t){return{currentList:Object(c.a)(t.currentList).sort((function(t,e){return t.length-e.length}))}}))},t.showList=function(){t.setState((function(){return{isShowed:!0}}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.currentList,n=t.isShowed;return s.a.createElement("div",{className:"App"},n?s.a.createElement(s.a.Fragment,null,s.a.createElement(m,{goods:e}),s.a.createElement("button",{type:"button",className:"button",onClick:this.reverse},"Reverse!"),s.a.createElement("button",{type:"button",className:"button",onClick:this.sortByAlphabet},"ABC sort!"),s.a.createElement("button",{type:"button",className:"button",onClick:this.reset},"Reset!"),s.a.createElement("button",{type:"button",className:"button",onClick:this.sortByLength},"Sort by length!")):s.a.createElement("button",{type:"button",className:"start-button",onClick:this.showList},"Start!"))}}]),n}(s.a.Component);o.a.render(s.a.createElement(f,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.78b51ceb.chunk.js.map