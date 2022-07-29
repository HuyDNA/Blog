/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage.js */ \"./src/mainPage.js\");\n/* harmony import */ var _postPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postPage.js */ \"./src/postPage.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar postPath = \"./assets/posts/\";\nvar maximumOpenedTabs = 6;\nvar mainPath = \"./assets/data.json\";\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      currentTab: 1,\n      //current navigated tab's id\n      openedTabs: [//list of opened tabs\n      {\n        title: \"Main\",\n        id: 1,\n        content: []\n      }],\n      highestTabIdAssigned: 1 //id generator\n      //increases every time a new tab is created and is assigned to that tab \n\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handlePostLinkClick\", function (postInfo) {\n      /*Handle clicks on post links in the Main page.\r\n      Given,\r\n          postInfo: containing the link-clicked post's metadata\r\n      --------------------------------------------------------\r\n      */\n      //only up to 6 tabs supported\n      //to be changed\n      if (_this.state.openedTabs.length >= maximumOpenedTabs) {\n        alert(\"You have to close one tab in order to open a new tab\");\n        return;\n      } //\n\n\n      _this.fetchPost(postInfo.title);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleTabButtonClick\", function (tabId) {\n      /*Handle clicks on tab buttons.\r\n      Given,\r\n          tabId: the clicked tab's id.\r\n      ---------------------------------------------------------\r\n      */\n      _this.setState({\n        currentTab: tabId\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleTabButtonClose\", function (tabId) {\n      /*Handle clicks on tab buttons' close box.\r\n      Given,\r\n          tabId: the about-to-closed tab's id.\r\n      ---------------------------------------------------------\r\n      */\n      _this.setState(function (prevState) {\n        var tabPosInArray = prevState.openedTabs.findIndex(function (tab) {\n          return tab.id === tabId;\n        });\n        if (tabPosInArray === -1) return prevState;\n        var stateCopy = Object.assign({}, prevState);\n        if (tabId === stateCopy.currentTab) stateCopy.currentTab = 1;\n        stateCopy.openedTabs.splice(tabPosInArray, 1);\n        return stateCopy;\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"fetchPost\",\n    value: function fetchPost(postTitle) {\n      var _this2 = this;\n\n      /*Fetch posts in markdown format located in postPath.\r\n        Then updating App's state accordingly.\r\n      Given,\r\n          postTitle: the about-to-fetched post's title.\r\n      Return,\r\n          A promise.\r\n      ---------------------------------------------------------\r\n      */\n      return fetch(postPath + postTitle + \".md\").then(function (reponse) {\n        return reponse.text();\n      }).then(function (reponse) {\n        return _this2.setState(function (prevState) {\n          var stateCopy = Object.assign({}, prevState);\n          stateCopy.currentTab = ++stateCopy.highestTabIdAssigned;\n          stateCopy.openedTabs.push({\n            title: postTitle,\n            id: stateCopy.highestTabIdAssigned,\n            content: reponse\n          });\n          return stateCopy;\n        });\n      })[\"catch\"](function (error) {\n        return console.log(\"Error while fetching post: \", error);\n      });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this3 = this;\n\n      /* After App is successfully mounted, the expected behaviour is:\r\n          fetch data.json from mainPath to render the main page.\r\n          fetch all posts whose titles are cached in localStorage.\r\n              if fetching any one of these posts fail (maybe because it has been deleted),\r\n              it will be ignored.\r\n              if cached local state is corrupted, **MAYBE** it will just be ignored.\r\n      --------------------------------------------------------\r\n      */\n\n      /*#########Cases that problems arise:\r\n          - Cached local state is corrupted\r\n      */\n      fetch(mainPath).then(function (reponse) {\n        return reponse.json();\n      }).then(function (reponse) {\n        return _this3.setState({\n          currentTab: 1,\n          highestTabIdAssigned: 1,\n          openedTabs: [{\n            title: \"Main\",\n            id: 1,\n            content: reponse\n          }]\n        });\n      }).then(function (reponse) {\n        var cachedLocalState = JSON.parse(localStorage.getItem(\"localBlogStorage\"));\n        Promise.allSettled(cachedLocalState.openedPosts.map(function (postTitle) {\n          return _this3.fetchPost(postTitle);\n        })).then(function (reponse) {\n          return _this3.setState({\n            currentTab: cachedLocalState.currentPost\n          });\n        });\n      })[\"catch\"](function (reason) {\n        return console.log(\"componentDidMount: \", reason);\n      });\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      //Reparse Maths when display updated\n      MathJax.Hub.Typeset(); //Cache the App's state (currently opened tabs and navigated tab) to localStorage\n      //#################partial validity checking will be added later\n\n      localStorage.setItem(\"localBlogStorage\", JSON.stringify(this.getPostState()));\n    }\n  }, {\n    key: \"getPostState\",\n    value: function getPostState() {\n      var _this4 = this;\n\n      /* Return an object of the following form \r\n          {\r\n              currentPost: <Number>\r\n              openedPosts: [...<post's title>]\r\n          }\r\n      -------------------------------------------------------\r\n      */\n      var stateObj = {\n        currentPost: 1,\n        openedPosts: []\n      };\n      this.state.openedTabs.forEach(function (tab, tabPosInArray) {\n        if (tab.id === 1) return;\n        if (tab.id === _this4.state.currentTab) stateObj.currentPost = tabPosInArray + 1;\n        stateObj.openedPosts.push(tab.title);\n      });\n      return stateObj;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderBox, null, /*#__PURE__*/React.createElement(\"h1\", null, \" Welcome to my blog! \"), /*#__PURE__*/React.createElement(\"p\", null, \" This is my writing place! I will write some random things in here!!\")), /*#__PURE__*/React.createElement(TabbedSection, {\n        currentTab: this.state.currentTab,\n        openedTabs: this.state.openedTabs,\n        handlePostLinkClick: this.handlePostLinkClick,\n        handleTabButtonClick: this.handleTabButtonClick,\n        handleTabButtonClose: this.handleTabButtonClose\n      }));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n;\n\nvar TabbedSection = /*#__PURE__*/function (_React$Component2) {\n  _inherits(TabbedSection, _React$Component2);\n\n  var _super2 = _createSuper(TabbedSection);\n\n  function TabbedSection() {\n    _classCallCheck(this, TabbedSection);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(TabbedSection, [{\n    key: \"render\",\n    value: function render() {\n      var _this5 = this;\n\n      var currentTabData = this.props.openedTabs.find(function (tab) {\n        return tab.id === _this5.props.currentTab;\n      });\n      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TabBar, {\n        currentTab: this.props.currentTab,\n        openedTabs: this.props.openedTabs,\n        handleTabButtonClick: this.props.handleTabButtonClick,\n        handleTabButtonClose: this.props.handleTabButtonClose\n      }), /*#__PURE__*/React.createElement(TabbedContent, {\n        tabData: currentTabData,\n        handlePostLinkClick: this.props.handlePostLinkClick\n      }));\n    }\n  }]);\n\n  return TabbedSection;\n}(React.Component);\n\n;\n\nvar TabBar = /*#__PURE__*/function (_React$Component3) {\n  _inherits(TabBar, _React$Component3);\n\n  var _super3 = _createSuper(TabBar);\n\n  function TabBar() {\n    _classCallCheck(this, TabBar);\n\n    return _super3.apply(this, arguments);\n  }\n\n  _createClass(TabBar, [{\n    key: \"render\",\n    value: function render() {\n      var _this6 = this;\n\n      var tabs = this.props.openedTabs.map(function (tab) {\n        return /*#__PURE__*/React.createElement(TabButton, {\n          key: tab.id,\n          title: tab.title,\n          id: tab.id,\n          isClosable: tab.id !== 1,\n          onFocus: _this6.props.currentTab === tab.id,\n          handleTabButtonClick: _this6.props.handleTabButtonClick,\n          handleTabButtonClose: _this6.props.handleTabButtonClose\n        });\n      });\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"row bg-primary\"\n      }, tabs);\n    }\n  }]);\n\n  return TabBar;\n}(React.Component);\n\nvar TabButton = /*#__PURE__*/function (_React$Component4) {\n  _inherits(TabButton, _React$Component4);\n\n  var _super4 = _createSuper(TabButton);\n\n  function TabButton() {\n    var _this7;\n\n    _classCallCheck(this, TabButton);\n\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    _this7 = _super4.call.apply(_super4, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this7), \"handleTabButtonClick\", function (e) {\n      _this7.props.handleTabButtonClick(_this7.props.id);\n    });\n\n    _defineProperty(_assertThisInitialized(_this7), \"handleTabButtonClose\", function (e) {\n      _this7.props.handleTabButtonClose(_this7.props.id);\n    });\n\n    return _this7;\n  }\n\n  _createClass(TabButton, [{\n    key: \"render\",\n    value: function render() {\n      var _React$createElement;\n\n      var tabStyle = \"overflow-hidden btn col-2 \" + (this.props.onFocus ? \"btn-light\" : \"btn-secondary text-white\");\n      return /*#__PURE__*/React.createElement(\"a\", (_React$createElement = {\n        className: \"btn btn-light\"\n      }, _defineProperty(_React$createElement, \"className\", tabStyle), _defineProperty(_React$createElement, \"style\", {\n        height: \"2.2em\"\n      }), _React$createElement), this.props.isClosable && /*#__PURE__*/React.createElement(\"button\", {\n        className: \"close\",\n        onClick: this.handleTabButtonClose\n      }, \"\\xD7\"), \" \", /*#__PURE__*/React.createElement(\"div\", {\n        onClick: this.handleTabButtonClick\n      }, this.props.title));\n    }\n  }]);\n\n  return TabButton;\n}(React.Component);\n\nvar TabbedContent = /*#__PURE__*/function (_React$Component5) {\n  _inherits(TabbedContent, _React$Component5);\n\n  var _super5 = _createSuper(TabbedContent);\n\n  function TabbedContent() {\n    _classCallCheck(this, TabbedContent);\n\n    return _super5.apply(this, arguments);\n  }\n\n  _createClass(TabbedContent, [{\n    key: \"render\",\n    value: function render() {\n      var contentElem = this.props.tabData.id === 1 ? /*#__PURE__*/React.createElement(_mainPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        tabData: this.props.tabData,\n        handlePostLinkClick: this.props.handlePostLinkClick\n      }) : /*#__PURE__*/React.createElement(_postPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        tabData: this.props.tabData\n      });\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"pt-3\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"container\"\n      }, contentElem));\n    }\n  }]);\n\n  return TabbedContent;\n}(React.Component);\n\nfunction HeaderBox(props) {\n  return /*#__PURE__*/React.createElement(\"header\", {\n    className: \"jumbotron bg-primary text-white mb-0 rounded-0\"\n  }, props.children);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://blog/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n\nvar root = ReactDOM.createRoot(document.getElementById(\"content\"));\nroot.render( /*#__PURE__*/React.createElement(_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n\n//# sourceURL=webpack://blog/./src/index.js?");

/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* This module contains:\r\n        Components for rendering the main page.\r\n*/\nvar MainPage = /*#__PURE__*/function (_React$Component) {\n  _inherits(MainPage, _React$Component);\n\n  var _super = _createSuper(MainPage);\n\n  function MainPage() {\n    _classCallCheck(this, MainPage);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(MainPage, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return this.props.tabData.content.map(function (categoryData) {\n        return /*#__PURE__*/React.createElement(CategoryPostSection, {\n          key: categoryData.category,\n          data: categoryData,\n          handlePostLinkClick: _this.props.handlePostLinkClick\n        });\n      });\n    }\n  }]);\n\n  return MainPage;\n}(React.Component);\n\n;\n\nvar CategoryPostSection = /*#__PURE__*/function (_React$Component2) {\n  _inherits(CategoryPostSection, _React$Component2);\n\n  var _super2 = _createSuper(CategoryPostSection);\n\n  function CategoryPostSection() {\n    _classCallCheck(this, CategoryPostSection);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(CategoryPostSection, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"card\"\n      }, /*#__PURE__*/React.createElement(\"p\", {\n        className: \"card-header\"\n      }, this.props.data.category, \" \", /*#__PURE__*/React.createElement(\"span\", {\n        className: \"badge badge-pill badge-primary\"\n      }, this.props.data.posts.length)), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"card-body\"\n      }, /*#__PURE__*/React.createElement(CategoryPostList, {\n        posts: this.props.data.posts,\n        handlePostLinkClick: this.props.handlePostLinkClick\n      })));\n    }\n  }]);\n\n  return CategoryPostSection;\n}(React.Component);\n\n;\n\nvar CategoryPostList = /*#__PURE__*/function (_React$Component3) {\n  _inherits(CategoryPostList, _React$Component3);\n\n  var _super3 = _createSuper(CategoryPostList);\n\n  function CategoryPostList() {\n    _classCallCheck(this, CategoryPostList);\n\n    return _super3.apply(this, arguments);\n  }\n\n  _createClass(CategoryPostList, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/React.createElement(\"ul\", null, this.props.posts.map(function (post) {\n        return /*#__PURE__*/React.createElement(\"li\", {\n          key: post.title\n        }, /*#__PURE__*/React.createElement(PostLink, {\n          postInfo: post,\n          handlePostLinkClick: _this2.props.handlePostLinkClick\n        }));\n      }));\n    }\n  }]);\n\n  return CategoryPostList;\n}(React.Component);\n\nvar PostLink = /*#__PURE__*/function (_React$Component4) {\n  _inherits(PostLink, _React$Component4);\n\n  var _super4 = _createSuper(PostLink);\n\n  function PostLink() {\n    var _this3;\n\n    _classCallCheck(this, PostLink);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this3 = _super4.call.apply(_super4, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this3), \"handlePostLinkClick\", function (e) {\n      _this3.props.handlePostLinkClick(_this3.props.postInfo);\n    });\n\n    return _this3;\n  }\n\n  _createClass(PostLink, [{\n    key: \"render\",\n    value: function render() {\n      var tags = this.props.postInfo.tags.map(function (tag) {\n        return /*#__PURE__*/React.createElement(\"span\", {\n          key: tag\n        }, \" \", /*#__PURE__*/React.createElement(\"span\", {\n          className: \"badge badge-pill badge-info\"\n        }, \" \", tag, \" \"), \" \");\n      });\n      return /*#__PURE__*/React.createElement(\"p\", null, /*#__PURE__*/React.createElement(\"a\", {\n        href: \"#\",\n        className: \"link-primary\",\n        onClick: this.handlePostLinkClick\n      }, this.props.postInfo.title), \" \", tags);\n    }\n  }]);\n\n  return PostLink;\n}(React.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);\n\n//# sourceURL=webpack://blog/./src/mainPage.js?");

/***/ }),

/***/ "./src/postPage.js":
/*!*************************!*\
  !*** ./src/postPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/*This module contains:\r\n    Components for rendering pages containing posts' content\r\n*/\nvar PostPage = /*#__PURE__*/function (_React$Component) {\n  _inherits(PostPage, _React$Component);\n\n  var _super = _createSuper(PostPage);\n\n  function PostPage() {\n    _classCallCheck(this, PostPage);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(PostPage, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"article\", {\n        dangerouslySetInnerHTML: {\n          __html: marked.parse(this.props.tabData.content)\n        }\n      });\n    }\n  }]);\n\n  return PostPage;\n}(React.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);\n\n//# sourceURL=webpack://blog/./src/postPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;