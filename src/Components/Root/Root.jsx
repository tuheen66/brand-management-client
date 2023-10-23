import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useState, useEffect } from 'react';
import './Root.css';



const Root = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


    return (

        <div className="w-10/12 mx-auto font-arOne ">
            <div className={`App ${theme}`}>
                <button className="btn btn-ghost" onClick={toggleTheme}>Light / Dark</button>
            </div>

            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Root;