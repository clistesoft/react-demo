import React, { PureComponent } from 'react';
import { Link } from 'react-router'

import './appSiderBar.scss'

import reactDemoLogo from '../../assets/images/react-logo.svg';
import AppNav from './appNav'

class AppSideBar extends PureComponent {
  render() {
    return (
      <aside className="rd-sidebar">
        <header className="rd-sidebar__header">
          <Link to="/" title="Brand" className="rd-sidebar__logo-container" ><img src={ reactDemoLogo } className="rd-sidebar__logo" alt="Brand Here" /> React Demo</Link>
        </header>

        <AppNav />

        <footer className="rd-sidebar__footer">
          <p>copyright Cliste Software</p>
        </footer>
      </aside>
    );
  }
}

export default AppSideBar;
