import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div>
                <Link to={'/'}>
                <img src="solara.png" alt="Solara" className="h-25" />
                </Link>
            </div>
        </header>
    );
};

export default Header;