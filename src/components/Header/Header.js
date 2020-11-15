import React from 'react';
import {Link} from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <Link to={'/'} className={'create-test-link'}>
                <div className="header-logo">
                    <h1>React PHPUnit Parser</h1>
                </div>
            </Link>

            <Link to={'/create'} className={'create-test-link'}>
                <div className="add-test-link">
                    <h3>
                        ADD A NEW TEST
                    </h3>
                </div>
            </Link>
        </div>

    )
}

export default Header
