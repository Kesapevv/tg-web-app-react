import React, { useContext } from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';
import { GlobalDataContext } from '../../hooks/GlobalDataProvider';

const Header = () => {
    const {user, onClose} = useTelegram();

    const { totalScore } = useContext(GlobalDataContext);

    return (
        <div className="header">
            <span className="referals">Referals:</span>
            <span className="totalScore">Pedro Coins</span>
            <span className="score">{totalScore}</span>

        </div>
    );
};

export default Header;

// <span className="username">
//                 {user?.username}
//             </span>

// <Button onClick={onClose}>Закрыть</Button>