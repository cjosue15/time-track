import { Menu, MenuEnum, TitleEnum } from '../models/menu.constant';
export const transformTitleToClassName = (text: string): string => {
    return text.toLowerCase().replaceAll(' ', '-');
};

export const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

export const changeTimeText = (text: Menu) =>
    text === MenuEnum.WEEKLY ? TitleEnum.WEEK : text === MenuEnum.DAILY ? TitleEnum.DAY : TitleEnum.MONTH;
