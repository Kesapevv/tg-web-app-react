import './App.css';
import React, { useContext, useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import { GlobalDataContext, GlobalDataProvider } from './hooks/GlobalDataProvider';
import { useGlobalData } from './hooks/GlobalDataProvider';

function App() {
    const {user, onClose, tg} = useTelegram();
    const { totalScore, onTap } = useGlobalData();
    useEffect(() => {
        tg.ready();
    }, [])

    return (
            <div className="App">
                <Header/>
                <button onClick={onTap}>Увеличить счет</button> {/* Добавьте кнопку здесь */}
            </div>
    );
}

export default App;