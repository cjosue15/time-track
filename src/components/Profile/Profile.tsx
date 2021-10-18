import React, { useContext } from 'react';
import './Profile.css';
import profile from '../../assets/images/image-jeremy.png';
import { Menu, MenuEnum } from '../../models/menu.constant';
import { capitalizeFirstLetter } from '../../utils/utils';
import CategoryContext from '../../context/CategoryContext';

const menu: Menu[] = [MenuEnum.WEEKLY, MenuEnum.DAILY, MenuEnum.MONTHLY];

const Profile = () => {
    const { menuSelected, setmenuSelected } = useContext(CategoryContext);

    const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, item: Menu) => {
        if (item === menuSelected) return;

        if (setmenuSelected) setmenuSelected(item);
    };

    return (
        <div className='profile'>
            <div className='profile__content'>
                <picture className='profile__picture'>
                    <img src={profile} width='80' height='80' alt='Jeremy' />
                </picture>
                <div className='profile__name'>
                    <span>Report for</span>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <ul className='profile__menu'>
                {menu &&
                    menu.map((element) => (
                        <li
                            className={menuSelected === element ? 'active' : ''}
                            key={element}
                            onClick={(event) => handleClick(event, element)}
                        >
                            <span>{capitalizeFirstLetter(element)}</span>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Profile;
