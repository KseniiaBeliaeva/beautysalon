import React from 'react';
import styles from './components/promotions.css';

class Promotions extends React.Component {
    render() {
        let specialPromo = this.props.promotion;
        return (
            <div className="promo__wrapper">
                <h5 className="promo__header">{specialPromo.promoName}</h5>
                <img className="promo__img" src={specialPromo.img} alt={specialPromo.hiddenText} />
                <p className="promo__text">{specialPromo.promoText}</p>
            </div>
        );
    }
}

export default Promotions;
