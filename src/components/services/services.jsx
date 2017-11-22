import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu/menu.jsx';
import Header from './components/header/header.jsx';
import Promotions from './components/promotions/promotions.jsx';
import Footer from './components/footer/footer.jsx';
import Specials from './components/specials.jsx';
import './components/services.css';

class Hello extends React.Component {
    render() {
        return (
            <div>
            <Header/>
            <Menu />
             <img src={this.props.main.img} className="logo" />      
            <Specials />
            </div>
        );
    }
}

let main = {
    img: "img/logo.jpg",
}
ReactDOM.render(
    <Hello main={main} />,
    document.getElementById('root')
);














// ЭТО ПАПКА src/Services.jsx