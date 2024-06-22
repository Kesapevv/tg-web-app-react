import './TabBar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const TabBar = () => {
    return (
        <div className="tabbar">
            <NavLink to="/" className="nav-link" activeClassName="active">Главная</NavLink>
            <NavLink to="/tasks" className="nav-link" activeClassName="active">Задачи</NavLink>
            <NavLink to="/rating" className="nav-link" activeClassName="active">Рейтинг</NavLink>
        </div>
    );
};

export default TabBar;
// <Button onClick={onClose}>Закрыть</Button>