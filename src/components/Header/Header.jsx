import './Header.css';

function Header() {
  return (
    <nav>
                <div className="nav-main">
                    <div className="nav-logo">
                        <a href="index.html"><img src="https://rvs-hosterr-waitlist-page.vercel.app/Assets/Logo.svg" alt=""/> <span>Hosterr is hiring!</span></a>
                    </div>
                    <ul>
                        <li><a href="#">Plans</a></li>
                        <li><a href="#">Find Domain</a></li>
                        <li><a href="#">Why Hosterr</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Sign in</a></li>
                        <li><a href="#">Join Waitlist</a></li>
                    </ul>
                    <div className="nav-mobile-menu" id="nav-mobile-menu">
                        <img src="https://rvs-hosterr-waitlist-page.vercel.app/Assets/Hamburger-Menu.svg" alt=""/>
                    </div>
                </div>
    </nav>
  );
}

export default Header;