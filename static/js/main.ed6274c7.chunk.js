(window.webpackJsonptest=window.webpackJsonptest||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),i=n(4),l=n(6),u=n(5),m=n(7),h=(n(14),n(15),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=120x160")}),r.a.createElement("h4",null," ",e.monster.name," ",e.children," x "),r.a.createElement("p",null,e.monster.email))}),d=function(e){return console.log(e),r.a.createElement("div",{className:"card-list"},e.monster.map(function(e){return r.a.createElement(h,{key:e.id,monster:e}," id=",e.id)}))},f=(n(16),function(e){var t=e.placeholder,n=e.handlechange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(17),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={greeting:"Greeting, react world",monsters:[],searchvalue:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({monsters:t}),console.log(t)})}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchvalue,a=t.monsters.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,this.state.greeting),r.a.createElement("h1",null,"filter = ",a.map(function(e){return e.name+","})),r.a.createElement(f,{placeholder:"search monster",handlechange:function(t){e.setState({searchvalue:t.target.value})}}),r.a.createElement("button",{onClick:function(){return e.setState({greeting:"hello clicked"})}},"click to change greeting"),r.a.createElement(d,{monster:a})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.ed6274c7.chunk.js.map