import React from 'react';
import styles from './components/header.css';

let companyName = {
    name: 'Maria beauty studio',
}
class Header extends React.Component {
    render() {
        return (
            <h1 className="header">{companyName.name}</h1>
        )
    };
}
export default Header;
