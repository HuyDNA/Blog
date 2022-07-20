"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var root = ReactDOM.createRoot(document.getElementById("content"));

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      "data": []
    });

    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("data.json").then(function (reponse) {
        return reponse.json();
      }).then(function (reponse) {
        return _this2.setState({
          "data": reponse
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement(PostSection, {
        data: this.state.data
      })));
    }
  }]);

  return App;
}(React.Component);

;

var PostSection = /*#__PURE__*/function (_React$Component2) {
  _inherits(PostSection, _React$Component2);

  var _super2 = _createSuper(PostSection);

  function PostSection() {
    _classCallCheck(this, PostSection);

    return _super2.apply(this, arguments);
  }

  _createClass(PostSection, [{
    key: "render",
    value: function render() {
      return this.props.data.map(function (categoryData) {
        return /*#__PURE__*/React.createElement(CategoryPostSection, {
          key: categoryData.category,
          data: categoryData
        });
      });
    }
  }]);

  return PostSection;
}(React.Component);

;

var CategoryPostSection = /*#__PURE__*/function (_React$Component3) {
  _inherits(CategoryPostSection, _React$Component3);

  var _super3 = _createSuper(CategoryPostSection);

  function CategoryPostSection() {
    _classCallCheck(this, CategoryPostSection);

    return _super3.apply(this, arguments);
  }

  _createClass(CategoryPostSection, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "card"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-header"
      }, /*#__PURE__*/React.createElement("a", {
        className: "text-decoration-none",
        "data-toggle": "collapse",
        href: "#" + this.props.data.category
      }, this.props.data.category, " "), " ", /*#__PURE__*/React.createElement("span", {
        className: "badge badge-pill badge-primary"
      }, this.props.data.posts.length)), /*#__PURE__*/React.createElement("div", {
        className: "card-body collapse",
        id: this.props.data.category
      }, /*#__PURE__*/React.createElement(CategoryPostList, {
        posts: this.props.data.posts
      })));
    }
  }]);

  return CategoryPostSection;
}(React.Component);

;

var CategoryPostList = /*#__PURE__*/function (_React$Component4) {
  _inherits(CategoryPostList, _React$Component4);

  var _super4 = _createSuper(CategoryPostList);

  function CategoryPostList() {
    _classCallCheck(this, CategoryPostList);

    return _super4.apply(this, arguments);
  }

  _createClass(CategoryPostList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("ul", null, this.props.posts.map(function (post) {
        return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(PostLink, {
          key: post.title,
          postData: post
        }));
      }));
    }
  }]);

  return CategoryPostList;
}(React.Component);

var PostLink = /*#__PURE__*/function (_React$Component5) {
  _inherits(PostLink, _React$Component5);

  var _super5 = _createSuper(PostLink);

  function PostLink() {
    _classCallCheck(this, PostLink);

    return _super5.apply(this, arguments);
  }

  _createClass(PostLink, [{
    key: "render",
    value: function render() {
      var tags = this.props.postData.tags.map(function (tag) {
        return /*#__PURE__*/React.createElement("span", null, " ", /*#__PURE__*/React.createElement("span", {
          className: "badge badge-pill badge-info"
        }, " ", tag, " "), " ");
      });
      var id = this.props.postData.title.replace(/[\s'&()\?]/g, '');
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
        "data-toggle": "collapse",
        href: "#" + id
      }, this.props.postData.title), " ", tags), /*#__PURE__*/React.createElement("div", {
        className: "collapse",
        id: id
      }, /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("h2", null, this.props.postData.title), /*#__PURE__*/React.createElement("p", null, "Created on: ", this.props.postData.writtenOn))));
    }
  }]);

  return PostLink;
}(React.Component);

function Header(props) {
  return /*#__PURE__*/React.createElement("header", {
    className: "jumbotron bg-primary text-white"
  }, /*#__PURE__*/React.createElement("h1", null, " Welcome to my blog! "), /*#__PURE__*/React.createElement("p", null, " This is my writing place! I will write some random things in here!!"));
}

root.render( /*#__PURE__*/React.createElement(App, null));