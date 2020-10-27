import React from 'react';
import './Home.scss';
import homeVideo from '../Video/homeVideo.mp4'


export default function Home() {
    return (
    <header className="entrance">

        <video autoPlay loop muted
        style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
        }}>
            <source src={homeVideo} type="video/mp4"/>
        </video>

    <div className="banner">
        <h1>tourist hotels</h1>
        <h2> Best memories start here</h2>
        <h3> See available hotels and make your reservation.</h3>
    </div>
</header>)
}

