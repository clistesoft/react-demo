import React, { PureComponent } from 'react';
import { Link } from 'react-router'
import './appNav.scss'


class AppNav extends PureComponent {
  render() {
    return (
      <nav className="rd-nav">
        <ul className="rd-nav__items">

          <li className="rd-nav__item"><Link to="/component" activeClassName={"active"} >Components</Link></li>
          <li className="rd-nav__item"><Link to="/marts" activeClassName={"active"} >Link 1</Link></li>

          <li className="rd-nav__item"><a href="#">Link 2</a></li>
          <li className="rd-nav__item"><a href="#">Link 3</a></li>
          <li className="rd-nav__item"><a href="#">Link 4</a></li>
        </ul>
      </nav>
    );
  }
}

export default AppNav;
