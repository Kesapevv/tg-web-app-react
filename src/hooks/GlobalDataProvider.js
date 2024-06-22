import React, { createContext, useContext, useState } from 'react';

// Создание контекста
export const GlobalDataContext = createContext();

// Компонент провайдера, который будет обертывать ваше приложение
export const GlobalDataProvider = ({ children }) => {
    const [totalScore, setTotalScore] = useState(0);

    // Функция для обновления счета
    const onTap = () => {
        setTotalScore(prevTotalScore => prevTotalScore + 1);
    };

    return (
        <GlobalDataContext.Provider value={{ totalScore, onTap }}>
            {children}
        </GlobalDataContext.Provider>
    );
};

// Хук для использования контекста в компонентах
export const useGlobalData = () => useContext(GlobalDataContext);
