(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(97)},39:function(e,t,a){},40:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(24),i=a.n(o),c=(a(39),a(25)),r=a(26),u=a(31),l=a(27),m=a(32),h=(a(40),a(11)),d=a(99),g=a(28),v=a.n(g),p=a(51),f=a(54).default.newClient({invokeUrl:"https://bvm2azi8h1.execute-api.us-east-1.amazonaws.com"}),k=p(),w={},b={},_={0:"Bot",1:"User"},y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={id_token:null,access_token:null,messages:[]},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=v.a.parse(this.props.location.hash),t=this.state;t.id_token=e.id_token,t.access_token=e.access_token,b.headers={Authorization:e.id_token}}},{key:"onMessageSubmit",value:function(e){var t=this,a=this.message;if(console.log(a),e.preventDefault(),!a.value)return!1;this.pushMessage(0,a.value);var n=(new Date).getTime(),s={messages:[{type:"type_a",unstructured:{id:k,text:a.value,timestamp:n}}]};return console.log(this.state.id_token),console.log(this.state.access_token),a.value="",f.invokeApi(w,"/dev/chatbot","POST",b,s).then(function(e){console.log(e),t.pushMessage(1,e.data.unstructured.text)}).catch(function(e){console.log(e)}),!0}},{key:"pushMessage",value:function(e,t){var a=this.state,n=new h.Message({id:e,message:t,senderName:_[e]});a.messages.push(n),this.setState(this.state)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"text-Center"},"Chatbot"),s.a.createElement("div",null,s.a.createElement(h.ChatFeed,{maxHeight:250,messages:this.state.messages,showSenderName:!0}),s.a.createElement("form",{onSubmit:function(t){return e.onMessageSubmit(t)}},s.a.createElement("input",{ref:function(t){e.message=t},placeholder:"Type a message...",className:"message-input"}))))}}]),t}(n.Component),E=Object(d.a)(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(98);i.a.render(s.a.createElement(M.a,null,s.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.2b3b8da7.chunk.js.map