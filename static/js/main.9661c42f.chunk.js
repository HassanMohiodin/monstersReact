(this["webpackJsonpreact-2.1"]=this["webpackJsonpreact-2.1"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(12),n(3)),i=n(4),u=n(6),l=n(5),m=(n(13),n(14),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null,e.monster.name))}),h=function(e){return r.a.createElement("div",{className:"grid"},e.monsters.map((function(e){return r.a.createElement(m,{key:e.id,monster:e})})))},f=(n(15),function(e){return r.a.createElement("div",null,r.a.createElement("input",{className:"search-input",placeholder:"Search Monster",type:"search",onChange:e.getInput}))}),d=(n(16),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).setSearchState=function(t){e.setState({searchFeild:t.target.value})},e.state={monsters:[],searchFeild:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"filterState",value:function(){var e=this;return this.state.monsters.filter((function(t){return t.name.toLowerCase().includes(e.state.searchFeild.toLowerCase())}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{getInput:this.setSearchState}),r.a.createElement(h,{monsters:this.filterState()}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.9661c42f.chunk.js.map