import './App.css';
import React, { useContext, useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import { useGlobalData } from './hooks/GlobalDataProvider';
import Coin from "./components/Coin/Coin";
import TabBar from "./components/TabBar/TabBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TasksList from "./components/TasksList/TasksList";

function App() {
    const {tg} = useTelegram();
    const { onTap } = useGlobalData();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={
                        <div className="HomeElements">
                            <Header />
                            <Coin onClick={onTap} />
                            <TabBar />
                        </div>
                    } />

                    <Route path="/tasks" element={
                        <>
                            <Header />
                            <TasksList />
                            <TabBar />
                        </>
                    } />

                    <Route path="/rating" element={
                        <>
                            <Header />
                            Рейтинга пока нет
                            <TabBar />
                        </>
                    } />

                </Routes>
            </div>
        </Router>
    );
}

export default App;