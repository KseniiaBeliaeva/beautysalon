import React from 'react';
import styles from './components/footer.css';

class Footer extends React.Component {
    render() {
        return (
            <button className="bottomButton">
                <a href="#top"><i className="material-icons">arrow_upward</i>
                </a>
            </button>
        );
    }
}

export default Footer;