import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu/menu.jsx';
import Header from './components/header/header.jsx';
import Promotions from './components/promotions/promotions.jsx';
import Footer from './components/footer/footer.jsx';

class Body extends React.Component {
    render() {
        return (
            <div>
                <Header name={this.props.main.companyName} />
                <Menu />
                <div className="promotions__main-wrapper">
                    {this.props.main.promo.map(special =>
                        <Promotions promotion={special} key={special.promoName} />
                    )}
                </div>
                <Footer />
            </div>
        )
    };
}
let main = {
    companyName: "Maria beauty studio",
    promo:
    [
        {
            promoName: "Aenean id purus non nunc porta tincidunt!",
            promoText: "Nulla at purus id tellus consequat imperdiet." +
            " Suspendisse placerat volutpat lorem, a tristique nulla" +
            " tincidunt at. Donec at augue pulvinar dui maximus lobortis" +
            " nec et mauris. Nunc gravida at felis sed tristique. Class" +
            " aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            img: "img/promo1.jpg",
            hiddenText: "Photo by freestocks.org from Pexels" +
            " https://www.pexels.com/photo/close-up-of-woman-having-manicure-332046/",
        },
        {
            promoName: "Sed tincidunt ac massa quis sodales",
            promoText: "Curabitur mattis quis ligula sit amet tristique." +
            " Proin ligula risus, blandit a suscipit ut, gravida vel mauris." +
            " Fusce egestas ligula eget condimentum molestie.",
            img: "img/promo2.jpg",
        },
        {
            promoName: "Nam quis dui vel eros pharetra condimentum.",
            promoText: "Nam quis dui vel eros pharetra condimentum." +
            " Nullam euismod pulvinar urna, quis sodales magna dignissim" +
            "  in. Aliquam erat volutpat. Ut mollis maximus tortor." +
            " Integer vestibulum ligula et metus porttitor pulvinar." +
            "  Donec tincidunt non ante ut posuere. Sed dignissim ipsum " +
            " nunc, ac dictum quam aliquet eget.",
            img: "img/promo3.jpg",
            hiddenText: "Photo by Porapak Apichodilok from Pexels" +
            " https://www.pexels.com/photo/adult-birthday-birthday-gift-box-360624/",
        },
    ],        
}




ReactDOM.render(<Body main={main}/>, document.getElementById('root'));
