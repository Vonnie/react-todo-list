(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),c=(n(19),n(11)),s=n(6),l=n(7),u=n(13),m=n(12),d=n(3),p=n(10),f=n(8),h=n(9);n(25);var v=function(e){var t=e.items.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(n){e.setUpdate(n.target.value,t.key)}}),r.a.createElement("span",null,r.a.createElement(f.a,{className:"faicons",onClick:function(){e.deleteItem(t.key)},icon:"trash"}))))}));return r.a.createElement("div",null,r.a.createElement(h.a,{duration:500,easing:"ease-in-out"},t))};n(26);d.b.add(p.a);var E=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleInput=function(e){a.setState({currentItem:{text:e.target.value,key:Date.now()}})},a.addItem=function(e){e.preventDefault();var t=a.state.currentItem;if(console.log(t),""!==t.text){var n=[].concat(Object(c.a)(a.state.items),[t]);a.setState({items:n,currentItem:{text:"",key:""}}),console.log(n),console.log(a.state.items)}},a.deleteItem=function(e){var t=a.state.items.filter((function(t){return t.key!==e}));a.setState({items:t})},a.setUpdate=function(e,t){a.state.items.map((function(n){n.key===t&&(n.text=e)}))},a.state={items:[],currentItem:{text:"",key:""}},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"Add")),r.a.createElement("p",null,this.state.items.text),r.a.createElement(v,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})),r.a.createElement("span",null))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.1b6051d8.chunk.js.map