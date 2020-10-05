import React, {useState} from 'react';
import './App.css';
import TvFrameImage from './tv.png';
import ChannelButtonImage from './button.png';

/**
 * The container component for everything in the TV (screen, frame, button).
 */
const Tv = () => {
    const [channelNum, setChannelNum] = useState(0);
    const changeChannel = () => {
        setChannelNum(channelNum + 1);
    }

    return (
        <div className="Tv">
            <Screen channelNum={channelNum}></Screen>
            <TvFrame />
            <ChannelButton callback={changeChannel}/>
        </div>
    )
}

/**
 * The screen that displays the current channel's video.
 */
const Screen = ({channelNum}) => {
    return (
        <div className="Screen">Channel {channelNum}</div>
    );
}

/**
 * A static image that frames the screen and the button.
 */
const TvFrame = () => {
    return (
        <img src={TvFrameImage} alt="tv frame" className="Tv-frame" />
    );
}

/**
 * A button to change the channel on the tv.
 */
const ChannelButton = ({callback}) => {
    return (
        <img src={ChannelButtonImage} alt="channel button" className="Channel-button" onClick={() => callback()}/>
    );
}

const App = () => {
    return (
        <div className="App">
            <Tv />
        </div>
    );
}

export default App;
