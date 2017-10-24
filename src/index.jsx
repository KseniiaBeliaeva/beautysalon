import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App.jsx';


class World extends React.Component {
    render() {
        return (
            <h1>Hello World</h1>
        )
    };
}

ReactDOM.render(<World />, document.getElementById('root'));
