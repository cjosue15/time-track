import { createContext } from 'react';
import { Menu, MenuEnum } from '../models/menu.constant';

const CategoryContext = createContext<{
    menuSelected: Menu;
    setmenuSelected: React.Dispatch<React.SetStateAction<Menu>> | null;
}>({ menuSelected: MenuEnum.WEEKLY, setmenuSelected: null });

export default CategoryContext;
