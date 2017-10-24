import React from 'react';

let topMenuList = [
    {
        name: "Home",
        link: "index.html",
    },
    {
        name: "Our services",
        link: "services.html",
    }, {
        name: "Photos",
        link: "photos.html",
    }, {
        name: "About me",
        link: "aboutme.html",
    },
    {
        name: "Contact details",
        link: "contactdetails.html",
    },
]

// style = "font-size:24px
/*{MENU}*/
/********/

export default class Menu extends React.Component {
    render() {
        let topMenuSection = topMenuList.map(menuItem =>
            <li key={menuItem.name} className="topMenuItem">
                <a href={menuItem.link} className="topMenuLink">
                    {menuItem.name}
                </a>
            </li>);
        return (
            <div>
            <ul className="topMenu">
                {topMenuSection}
            </ul>
            <button className="top-navigation"><i className="material-icons">menu</i></button>
            </div>    
        );
    }
}
