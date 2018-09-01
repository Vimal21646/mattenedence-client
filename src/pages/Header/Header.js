import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <p className="header-info">
                    Employee Attendence App
                </p>
                <div className="menu">
                    <NavLink exact className="menu-link-item" activeClassName="active" to="/">Employee</NavLink>
                    <NavLink exact className="menu-link-item" activeClassName="active"
                             to="/departments">Department</NavLink>
                    <NavLink exact className="menu-link-item" activeClassName="active"
                             to="/about">Role</NavLink>
                    <NavLink exact className="menu-link-item" activeClassName="active"
                             to="/about">Attedence</NavLink>
                </div>
            </div>
        );
    }
};

export default Header;