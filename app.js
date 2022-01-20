var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo = function (_React$Component) {
  _inherits(Todo, _React$Component);

  function Todo(props) {
    _classCallCheck(this, Todo);

    // set done attribute and text attribute pass down
    var _this = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));

    _this.state = { done: _this.props.done == "true" && props.done,
      text: props.text
    };

    // click event call handleClick function of this class
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Todo, [{
    key: "handleClick",
    value: function handleClick(event) {
      // set checked box to the opposite of the current state (done)
      this.setState(function (state) {
        return {
          done: !state.done
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      // drawing a div with class todo and a checkbox inside with
      // the text attribute pass as the text
      // se inicializan en el constructor arriba
      return React.createElement(
        "div",
        { className: "todo" },
        React.createElement(
          "span",
          null,
          React.createElement("input", { type: "checkbox", checked: this.state.done, onClick: this.handleClick }),
          React.createElement("input", { type: "text", value: this.state.text })
        )
      );
    }
  }]);

  return Todo;
}(React.Component);

// Le digo que use el componente Todo para mostrar contenido en el div root


ReactDOM.render(
// passing text one for the checkbox and telling it is not checked
React.createElement(Todo, { text: "Todo one", done: "false" }), document.getElementById('root'));