'use strict';
const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

function App({
    name,
    callback
  }) {
    return /*#__PURE__*/React.createElement("div", {
      ref: callback
    }, /*#__PURE__*/React.createElement("h1", null, name));
  }

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(e(App, {
    name: "Saeloun blog",
    callback: () => console.log("Blog rendered")
}));
