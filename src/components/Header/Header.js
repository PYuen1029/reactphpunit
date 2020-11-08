import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <h1>React PHPUnit Parser</h1>
            </div>

            <div className="add-test">
                {/*// @todo: @pyuen, make this a link*/}
                <h3>
                    ADD A NEW TEST
                </h3>
            </div>
        </div>

    )
}

export default Header
