import React, { Component } from 'react';
import {
    NavLink
  } from 'react-router-dom'

class SideNav extends Component {
    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                <li><NavLink exact to="/" activeClassName="active"><i className="fa fa-home" aria-hidden="true"></i><span>Home</span></NavLink></li>
                <li><NavLink exact to="/solution" activeClassName="active"><i className="fa fa-cog" aria-hidden="true"></i><span>Solution</span></NavLink></li>
                <li><NavLink exact to="/template"  activeClassName="active"><i className="fa fa-th-large" aria-hidden="true"></i><span>Template</span></NavLink></li>
                <li><NavLink exact to="/querybuilder" activeClassName="active"><i className="fa fa-pencil" aria-hidden="true"></i><span>Graph</span></NavLink></li>
                </ul>
            </div>
        );
    }
}

export default SideNav;
