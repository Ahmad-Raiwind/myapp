import './Footer.css';

function Footer() {
  return (
    <footer>
        <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram good</a></li>
            <li><a href="#">Twitter</a></li>
        </ul>
        <div className="user-content">
            <div className="user-img">
                <img src="https://rvs-hosterr-waitlist-page.vercel.app/Assets/Help-Avatar.svg" alt=""/>
            </div>
            <div className="user-details">
                <h5>Have any questions?</h5>
                <h4><a href="#">Talk to a specialist</a></h4>
            </div>
        </div>
    </footer>
  );
}

export default Footer;