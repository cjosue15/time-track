import React, { useContext } from 'react';
import './Card.css';
import ellipsis from '../../assets/images/icon-ellipsis.svg';
import { ICard } from '../../models/card.model';
import { transformTitleToClassName, changeTimeText } from '../../utils/utils';
import CategoryContext from '../../context/CategoryContext';

const Card = ({ card }: { card: ICard }) => {
    const { menuSelected } = useContext(CategoryContext);

    const { title, timeframes } = card;
    const { current, previous } = timeframes[menuSelected];
    return (
        <div className={`card ${transformTitleToClassName(title)}`}>
            <div className='card__banner'></div>
            <div className='card__body'>
                <div className='card__header'>
                    <h2 className='card__header-title'>{title}</h2>
                    <picture className='card__header-options'>
                        <img src={ellipsis} alt='Options' />
                    </picture>
                </div>
                <div className='card__time'>
                    <span className='card__hours'>{current}hrs</span>
                    <small className='card__description'>
                        Last {changeTimeText(menuSelected)} - {previous}hrs
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Card;
