import React from 'react';
import logo from './logo.svg';
import './App.css';
import tv from './tv.png';

const App = () => {
    return (
        <div className="App">
            <div className="Tv">
                <div className="Screen">
                    Sup
                </div>
                <img src={tv} alt="tv frame" className="Tv-frame"/>
            </div>
        </div>
    );
}

export default App;
