import React from 'react';
// import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
    return (
        <>
            <div className="footer" style={{position: 'absolute',bottom:'0'}}>
                <div className="note__footer-links">
                    {/* <FiFacebook />
                    <FiTwitter />
                    <FiInstagram /> */}
                </div>
            </div>

            <div className="footer__copyright">
                <p className="text-white text-center">&copy; 2023 iNote-Book. All Rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
