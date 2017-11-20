import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';
import Header from './header';
import Specials from './specials';


//РАБТТ ЭТА СТРН


class Hello extends React.Component {
    render() {
        return (
            <div>
            <Header/>
            <Menu />
            <div className="services">    
                    <img src={this.props.main.img} className="logo" />
            </div>        
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