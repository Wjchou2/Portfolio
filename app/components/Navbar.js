import "../global.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div id="logoArea">
                    <img id="imagelogo" src="/images/logo.webp"></img>
                    <a href="/home" id="NavBarLogo">
                        Endless
                    </a>
                </div>
                <div>
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}
