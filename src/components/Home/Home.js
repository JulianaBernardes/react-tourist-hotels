import React from 'react';
import './Home.scss';
import homeVideo from '../Video/homeVideo.mp4'
import logoHome from '../../logo.png'


export default function Home() {

    const videoStyle = {
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1"
    }
    return (
    <header className="entrance">

        <video autoPlay loop muted style={videoStyle}>
            <source src={homeVideo} type="video/mp4"/>
        </video>

    <div className="banner">
    <img className='logoHome' src={logoHome} alt='tourist hotels logo' />
        <h1>tourist hotels</h1>
        <h2> Best memories start here</h2>
        <h3> See available hotels and make your reservation</h3>
    </div>
    </header>
    )
}

