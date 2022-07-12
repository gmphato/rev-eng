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

const doc = document.getElementById('root');
const root = ReactDOM.createRoot(doc);
const element = e(LikeButton); // create a a huge object of react elements
console.log(element);
console.log(root.render)
root.render(element);