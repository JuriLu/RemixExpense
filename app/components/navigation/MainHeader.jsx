import {Form, Link, NavLink, useLoaderData} from '@remix-run/react';
import Logo from '../util/Logo';
import {FaUserAlt} from "react-icons/fa";

function MainHeader() {

    const user = useLoaderData()
    const userId = user.id
    const userEmail = user.email

    return (
        <header id="main-header">
            <Logo/>
            <nav id="main-nav">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pricing">Pricing</NavLink>
                    </li>
                </ul>
            </nav>
            <nav id="cta-nav">
                <div className='cta'>
                    <span><FaUserAlt className='userIconPadding'/> {userEmail}</span>
                </div>
            </nav>
            <nav id="cta-nav">
                <ul>
                    <li>
                        {userId && (
                            <Form method="delete" action="/logout" id="logout-form">
                                <button className="cta">Logout</button>
                            </Form>
                        )}
                        {!userId && (
                            <Link to="/auth" className="cta">
                                Login
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;
