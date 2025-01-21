 import React from 'react'
 import './Footer.css'
 import footer_logo from '../Assets/n_logo.png'
 import instagram_icon from '../Assets/instagram_icon.png'
 import Facebook_icon from '../Assets/Facebook_icon.png'
 import whatsapp_icon from '../Assets/whatsapp_icon.png'
 
 const Footer = () => {
   return (
     <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt=''/>
            <p>"𝑀𝒶𝓃𝒾𝒶 𝒞𝓁𝑜𝓉𝒽𝒾𝓃𝑔 𝒲𝑒𝒶𝓇 𝒴𝑜𝓊𝓇 𝒫𝒶𝓈𝓈𝒾𝑜𝓃"</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon}alt=''/>
        </div>
        <div className="footer-icons-container">
            <img src={Facebook_icon}alt=''/>
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon}alt=''/>
        </div>
        </div>
        <div className="footer-copyright">
            <p>Copyright @ 2024-All Right Reserved</p>
        </div>
       
     </div>
   )
 }
 
 export default Footer
 