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

function List() {
    return React.createElement('div', {},
        React.createElement('h1', {}, 'My favorite ice cream flavors'),
        React.createElement('ul', {},
        [
            React.createElement('li', { className: 'brown', key:'1' }, 'Chocolate'),
            React.createElement('li', { className: 'white', key:'2' }, 'Vanilla'),
            React.createElement('li', { className: 'yellow', key:'3' }, 'Banana')
        ]
        )
    );
}

function Button() {
    return e('button', {}, 'Click here!')
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(e(App, {
    name: "Saeloun blog",
    callback: () => console.log("Blog rendered")
}));

root.render(e(List));

root.render(e(Button));
