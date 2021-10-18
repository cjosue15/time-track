import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile/Profile';
import './Dashboard.css';
import Card from '../components/Card/Card';
import { ICard } from '../models/card.model';

const Dashboard = () => {
    const [cards, setCards] = useState<ICard[] | []>([]);

    const getData = async () => {
        const response = await fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        const data: ICard[] = await response.json();

        setCards(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='dashboard'>
            <Profile />
            {cards && cards.map((card) => <Card key={card.id} card={card} />)}
        </div>
    );
};

export default Dashboard;
