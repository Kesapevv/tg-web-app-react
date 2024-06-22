import React, { useContext } from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';
import { useGlobalData } from '../../hooks/GlobalDataProvider';

const Header = () => {
    const {user, onClose} = useTelegram();

    const { totalScore, onTap, referals } = useGlobalData();

    return (
        <div className="header">
            <span className="referals">Referals: {referals}</span>
            <span className="totalScore">Pedro Coins</span>
            <span className="score">{totalScore}</span>
            <span className="username">
                {user?.username}
            </span></div>
    );
};

export default Header;

// <Button onClick={onClose}>Закрыть</Button>