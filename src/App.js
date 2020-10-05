import React, {useState} from 'react';
import './App.css';
import TvFrameImage from './tv.png';
import ChannelButtonImage from './button.png';

/**
 * The total number of channels.
 */
const MAX_CHANNELS = 6;

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
            <ChannelButton callback={changeChannel} channelNum={channelNum}/>
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
const ChannelButton = ({callback, channelNum}) => {
    const rotationStyle = "rotate(" + String(channelNum * 360 / MAX_CHANNELS) + "deg)";
    return (
        <img src={ChannelButtonImage} alt="channel button" className="Channel-button" style={{transform: rotationStyle}} onClick={() => callback()}/>
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
