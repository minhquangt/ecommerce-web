import React from 'react';
import './footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="as">
                <h1>By Vilain A/S</h1>
                <p>CVR: 32063608</p>
                <p>Sankt Knudstorv 3b, St 8000 Aarhus C Denmark</p>
                <p>customerservice@byvilain.com</p>
                <p>© 2021, Byvilain.com Powered by Shopify</p>
            </div>
            <div className="as">
                <h1>Quick Links</h1>
                <ul>
                    <li>Search</li>
                    <li>Terms and Conditions</li>
                    <li>B2B login</li>
                    <li>Contact us</li>
                    <li>BY VILAIN</li>
                    <li>Terms of Service</li>
                    <li>Refund policy</li>
                </ul>
            </div>
            <div className="as">
                <h1>Newsletter</h1>
                <input type="text" placeholder="email@example.com" />
                <button>Subcribe</button>
            </div>
        </div>
    );
}

export default Footer;
