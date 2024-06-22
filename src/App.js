import './App.css';
import React, {useContext, useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Coin from "./components/Coin/Coin";
import {GlobalDataContext, GlobalDataProvider} from './hooks/GlobalDataProvider';

function App() {

    const {user, onClose, tg} = useTelegram();

    // const { onTap, totalScore } = useContext(GlobalDataContext);

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <GlobalDataProvider>
            <div className="App">
                <Header/>
                {/*<button onClick={onTap}>click me</button>*/}
            </div>
        </GlobalDataProvider>
    );
}

export default App;