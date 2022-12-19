import"../stylesheets/footer.css"
import React from "react"
import {SocialIcon} from 'react-social-icons'
export default function Footer(){

    return(
        <div className="footer">
            <ul className="link-container">
                <li>
                    <SocialIcon url="https://www.facebook.com/RedLightningHandles" fgColor="white"/>
                </li>
                <li>
                <SocialIcon url="https://www.tiktok.com/@r_kelly85" fgColor="white"/>
                </li>
                <li>
                    <SocialIcon network="instagram" fgColor="white"/>
                </li>
                <li>
                    <SocialIcon network="email" fgColor="white"/>
                </li>
                <li>
                    <SocialIcon network="youtube" fgColor="white"/>
                </li>
            </ul>
        </div>
    )
}