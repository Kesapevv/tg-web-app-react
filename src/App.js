import './App.css';
import React, { useContext, useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import { useGlobalData } from './hooks/GlobalDataProvider';
import Coin from "./components/Coin/Coin";

function App() {
    const {user, onClose, tg} = useTelegram();

    const { totalScore, onTap } = useGlobalData();
    useEffect(() => {
        tg.ready();
    }, [])

    return (
            <div className="App">
                <Header/>
                <Coin onClick={onTap} />
            </div>
    );
}

export default App;