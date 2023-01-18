import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <footer>
            <div className="footer-link">
                <Link to="/">
                    About
                </Link>
                <Link to="/">
                    Contacts
                </Link>
                <Link to="/">
                    Terms and Conditions
                </Link>
            </div>
            <div className="quick-links">
                    <a href="https://github.com/Adisa-Shobi/X-lease" target="_blank" rel="noreferrer">GitHub</a>
                    <div className="divider"></div>
                    <Link to="/">Blog</Link>
            </div>
            <div className="copyright"><p>copyright &#169; 2023 X-Lease</p></div>
        </footer>
     );
}
 
export default Footer;