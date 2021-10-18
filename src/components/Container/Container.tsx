import React from 'react';
import { Props } from '../../models/props.models';
import './Container.css';

const Container = ({ children }: Props) => {
    return <div className='container'>{children}</div>;
};

export default Container;
