import React, { createContext, useState } from 'react';

export const GlobalDataContext = createContext();

export const GlobalDataProvider = ({ children }) => {
    const [totalScore, setTotalScore] = useState(3);

    function onTap() {
        setTotalScore(totalScore + 1);
    }

    return (
        <GlobalDataContext.Provider value={{ onTap, totalScore }}>
            {children}
        </GlobalDataContext.Provider>
    );
};