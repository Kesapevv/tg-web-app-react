import React from 'react';
import './Coin.css';

const Coin = (props) => {
    return (
        <button {...props} className={'coin ' + props.className}/>
    );
};

export default Coin;