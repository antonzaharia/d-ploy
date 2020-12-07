import React from 'react'
import logo from '../images/dploy-logo.svg'

export default function Header() {
    return (
        <>
            <div className="header-item logo"><img className="logo-img" src={logo} alt="dploy-logo"/></div>
            <div  className="header-item head-links">
                <a href="/marketplace">Marketplace</a>
                <a href="/pricing">Pricing</a>
                <a href="/how-it-works">How it works</a>
            </div>
            <div className="header-item">
                <a href="/" className="login-btn">Login</a>
                <a  href="/" className="dev-btn">For Developers</a>
            </div>
        </>
    )
}