(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}function i(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p="./assets/posts/",h=function(t){a(o,React.Component);var n=c(o);function o(){var t;e(this,o);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return u(s(t=n.call.apply(n,[this].concat(a))),"state",{currentTab:1,openedTabs:[{title:"Main",id:1,content:[]}],highestTabIdAssigned:1}),u(s(t),"handlePostLinkClick",(function(e){t.state.openedTabs.length>=6?alert("You have to close one tab in order to open a new tab"):fetch(p+e.title+".md").then((function(t){return t.text()})).then((function(n){t.setState((function(t){var r=Object.assign({},t);return r.currentTab=++r.highestTabIdAssigned,r.openedTabs.push({title:e.title,meta:{writtenOn:e.writtenOn},id:r.highestTabIdAssigned,content:n}),r}))})).catch((function(t){return console.log("Error while fetching post: ",t)}))})),u(s(t),"handleTabButtonClick",(function(e){t.setState({currentTab:e})})),u(s(t),"handleTabButtonClose",(function(e){t.setState((function(t){var n=t.openedTabs.findIndex((function(t){return t.id===e}));if(-1===n)return t;var r=Object.assign({},t);return e===r.currentTab&&(r.currentTab=1),r.openedTabs.splice(n,1),r}))})),t}return r(o,[{key:"componentDidMount",value:function(){var t=this;fetch("./assets/data.json").then((function(t){return t.json()})).then((function(e){return t.setState({currentTab:1,highestTabIdAssigned:1,openedTabs:[{title:"Main",id:1,content:e}]})}))}},{key:"render",value:function(){return React.createElement(React.Fragment,null,React.createElement(C,null,React.createElement("h1",null," Welcome to my blog! "),React.createElement("p",null," This is my writing place! I will write some random things in here!!")),React.createElement(d,{currentTab:this.state.currentTab,openedTabs:this.state.openedTabs,handlePostLinkClick:this.handlePostLinkClick,handleTabButtonClick:this.handleTabButtonClick,handleTabButtonClose:this.handleTabButtonClose}))}}]),o}(),d=function(t){a(o,React.Component);var n=c(o);function o(){return e(this,o),n.apply(this,arguments)}return r(o,[{key:"render",value:function(){var t=this,e=this.props.openedTabs.find((function(e){return e.id===t.props.currentTab}));return React.createElement(React.Fragment,null,React.createElement(f,{currentTab:this.props.currentTab,openedTabs:this.props.openedTabs,handleTabButtonClick:this.props.handleTabButtonClick,handleTabButtonClose:this.props.handleTabButtonClose}),React.createElement(m,{tabData:e,handlePostLinkClick:this.props.handlePostLinkClick}))}}]),o}(),f=function(t){a(o,React.Component);var n=c(o);function o(){return e(this,o),n.apply(this,arguments)}return r(o,[{key:"render",value:function(){var t=this,e=this.props.openedTabs.map((function(e){return React.createElement(b,{key:e.id,title:e.title,id:e.id,isClosable:1!==e.id,onFocus:t.props.currentTab===e.id,handleTabButtonClick:t.props.handleTabButtonClick,handleTabButtonClose:t.props.handleTabButtonClose})}));return React.createElement("div",{className:"row bg-primary"},e)}}]),o}(),b=function(t){a(o,React.Component);var n=c(o);function o(){var t;e(this,o);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return u(s(t=n.call.apply(n,[this].concat(a))),"handleTabButtonClick",(function(e){t.props.handleTabButtonClick(t.props.id)})),u(s(t),"handleTabButtonClose",(function(e){t.props.handleTabButtonClose(t.props.id)})),t}return r(o,[{key:"render",value:function(){var t,e="overflow-hidden btn col-2 "+(this.props.onFocus?"btn-light":"btn-secondary text-white");return React.createElement("a",(u(t={className:"btn btn-light"},"className",e),u(t,"style",{height:"2.2em"}),t),this.props.isClosable&&React.createElement("button",{className:"close",onClick:this.handleTabButtonClose},"×")," ",React.createElement("div",{onClick:this.handleTabButtonClick},this.props.title))}}]),o}(),m=function(t){a(o,React.Component);var n=c(o);function o(){return e(this,o),n.apply(this,arguments)}return r(o,[{key:"render",value:function(){var t=1===this.props.tabData.id?React.createElement(k,{tabData:this.props.tabData,handlePostLinkClick:this.props.handlePostLinkClick}):React.createElement(y,{tabData:this.props.tabData});return React.createElement("div",{className:"pt-3"},React.createElement("div",{className:"container"},t))}}]),o}(),y=function(t){a(o,React.Component);var n=c(o);function o(){return e(this,o),n.apply(this,arguments)}return r(o,[{key:"render",value:function(){return React.createElement("article",{dangerouslySetInnerHTML:{__html:marked.parse(this.props.tabData.content)}})}}]),o}(),k=function(t){a(o,React.Component);var n=c(o);function o(){return e(this,o),n.apply(this,arguments)}return r(o,[{key:"render",value:function(){var t=this;return this.props.tabData.content.map((function(e){return React.createElement(v,{key:e.category,data:e,handlePostLinkClick:t.props.handlePostLinkClick})}))}}]),o}(),v=function(t){a(o,React.Component);var n=c(o);function o(){return e(this,o),n.apply(this,arguments)}return r(o,[{key:"render",value:function(){return React.createElement("div",{className:"card"},React.createElement("p",{className:"card-header","data-toggle":"collapse",href:"#"+this.props.data.category},this.props.data.category," ",React.createElement("span",{className:"badge badge-pill badge-primary"},this.props.data.posts.length)),React.createElement("div",{className:"card-body collapse",id:this.props.data.category},React.createElement(R,{posts:this.props.data.posts,handlePostLinkClick:this.props.handlePostLinkClick})))}}]),o}(),R=function(t){a(o,React.Component);var n=c(o);function o(){return e(this,o),n.apply(this,arguments)}return r(o,[{key:"render",value:function(){var t=this;return React.createElement("ul",null,this.props.posts.map((function(e){return React.createElement("li",{key:e.title},React.createElement(T,{postData:e,handlePostLinkClick:t.props.handlePostLinkClick}))})))}}]),o}(),T=function(t){a(o,React.Component);var n=c(o);function o(){var t;e(this,o);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return u(s(t=n.call.apply(n,[this].concat(a))),"handlePostLinkClick",(function(e){t.props.handlePostLinkClick(t.props.postData)})),t}return r(o,[{key:"render",value:function(){var t=this.props.postData.tags.map((function(t){return React.createElement("span",{key:t}," ",React.createElement("span",{className:"badge badge-pill badge-info"}," ",t," ")," ")}));return React.createElement("p",null,React.createElement("a",{href:"#",className:"link-primary",onClick:this.handlePostLinkClick},this.props.postData.title)," ",t)}}]),o}();function C(t){return React.createElement("header",{className:"jumbotron bg-primary text-white mb-0 rounded-0"},t.children)}const g=h;ReactDOM.createRoot(document.getElementById("content")).render(React.createElement(g,null))})();