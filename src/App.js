import React, {useState} from 'react';
import './App.css';
import TvFrameImage from './tv.png';
import ChannelButtonImage from './button.png';
import NoSignal from './channels/static_no_signal.gif';
import GrayNoSignal from './channels/static_no_signal_gray.gif';
import MetaTv from './channels/MetaTv.gif';

/**
 * A circular modulo function that always returns a value between 0 and n.
 */
Number.prototype.mod = function(n) {
    return ((this % n) + n) % n;
}

/**
 * The total number of channels.
 */
const CHANNELS = [GrayNoSignal, GrayNoSignal, GrayNoSignal, GrayNoSignal, GrayNoSignal, GrayNoSignal, MetaTv]
const MAX_CHANNELS = CHANNELS.length;

/**
 * The container component for everything in the TV (screen, frame, button).
 */
const Tv = () => {
    const [channelNum, setChannelNum] = useState(0);
    const changeChannel = (channelDir) => {
        setChannelNum(channelNum + channelDir);
    }

    return (
        <div className="Tv">
            <Screen channelNum={channelNum}></Screen>
            <TvFrame />
            <ChannelButtons channelChangeCallback={changeChannel} />
        </div>
    )
}

/**
 * The screen that displays the current channel's video.
 */
const Screen = ({channelNum}) => {
    return (
//        <div className="Screen">Channel {channelNum}</div>
        <div>
            <img src={CHANNELS[channelNum.mod(MAX_CHANNELS)]} className="Screen" />
        </div>
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
const ChannelButtons = ({channelChangeCallback}) => {
    const [topRotationClicks, setTopRotationClicks] = useState(0);
    const [bottomRotationClicks, setBottomRotationClicks] = useState(0);

    const topRotationStyle = "rotate(" + String(topRotationClicks * 360 / MAX_CHANNELS) + "deg)";
    const bottomRotationStyle = "rotate(" + String(bottomRotationClicks * 360 / MAX_CHANNELS) + "deg)";
    return (
        <div>
            <img src={ChannelButtonImage} className="Channel-button Channel-button-top" alt="Increment Channel"
                style={{transform: topRotationStyle}} onClick={ () => {
                    setTopRotationClicks(topRotationClicks + 1);
                    channelChangeCallback(1);
                }} />
            <img src={ChannelButtonImage} className="Channel-button Channel-button-bottom" alt="Decrement Channel"
                style={{transform: bottomRotationStyle}} onClick={() => {
                    setBottomRotationClicks(bottomRotationClicks - 1);
                    channelChangeCallback(-1);
                }} />
        </div>
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
