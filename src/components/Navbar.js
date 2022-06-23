import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Navbar() {

    const location = useLocation();

    const openRoutes = [
        '/',
    ];

    const isMainPage = openRoutes.includes(location.pathname);

    return (
        <div>

            {isMainPage &&
                <div className="navbar">
                    <div className="navbar-item ">
                        <Link to={'/contact'}>
                            <p className="navbar-text">Contact</p>
                        </Link>
                    </div>
                    <div className="navbar-item ">
                        <a href="https://media-exp1.licdn.com/dms/document/C4D2DAQFkdR1leemrSg/profile-treasury-document-pdf-analyzed/0/1655800588755?e=1656547200&v=beta&t=NoUVa-irrcJTuSlVNJ_bHkF0-62C4g-Qpwgofl7dcPI">
                            <p className="navbar-text">CV</p>
                        </a>
                    </div>
                </div>
            }

            {!isMainPage &&
                <div className="navbar">
                    <div className="navbar-item ">
                        <Link to={'/'}>
                            <p className="navbar-text">Main Page</p>
                        </Link>
                    </div>
                    <div className="navbar-item ">
                    <a href="https://media-exp1.licdn.com/dms/document/C4D2DAQFkdR1leemrSg/profile-treasury-document-pdf-analyzed/0/1655800588755?e=1656547200&v=beta&t=NoUVa-irrcJTuSlVNJ_bHkF0-62C4g-Qpwgofl7dcPI">
                            <p className="navbar-text">CV</p>
                        </a>
                    </div>
                </div>
            }
        </div>
    )

    return (

        <>
            <div className="navbar">
                <div className="navbar-item ">
                    <Link to={'/contact'}>
                        <p className="navbar-text">Contact</p>
                    </Link>
                </div>
                <div className="navbar-item ">
                    <Link to={'/cv'}>
                        <p className="navbar-text">CV</p>
                    </Link>
                </div>
            </div>
        </>
    )

}

export default Navbar;