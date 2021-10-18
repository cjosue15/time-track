import React, { useState } from 'react';
import Container from './components/Container/Container';
import Dashboard from './pages/Dashboard';
import CategoryContext from './context/CategoryContext';
import { Menu, MenuEnum } from './models/menu.constant';

const App = () => {
    const [menuSelected, setmenuSelected] = useState<Menu>(MenuEnum.WEEKLY);

    return (
        <CategoryContext.Provider value={{ menuSelected, setmenuSelected }}>
            <Container>
                <Dashboard />
            </Container>
        </CategoryContext.Provider>
    );
};

export default App;
