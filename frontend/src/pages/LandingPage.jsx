import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <div className="LandingPageContainer">
            <nav>
                <div className='navHeader'>
                    <h2>Nex-Meet Video Call</h2>
                </div>
                <div className='navList'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")
                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="LandingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span>
                        with your loved ones
                    </h1>
                    <p>Cover a distance by Nex-Meet video call</p>
                    <button className='btn'>
                        <Link to={"/auth"}>Get Started</Link>
                    </button>
                </div>
                <div>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>
        </div>
    )
}

