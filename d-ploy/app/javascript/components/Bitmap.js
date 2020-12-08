import React from 'react'
import img1 from '../images/doox.png'
import img2 from '../images/mautic.png'
import img3 from '../images/owncloud.png'
import img4 from '../images/rocket.png'

export default function Bitmap() {
    return (
        <div className="bitmap">
            <img src={img4} alt="rocket-logo"/>
            <img src={img2} alt="mautic-logo"/>
            <img src={img3} className="owncloud" alt="owncloud-logo"/>
            <img src={img1} alt="doox-logo"/>
        </div>
    )
}