import React, { PureComponent } from 'react';
import './appHeader.scss'

import { APP_TITLE_prefix } from '../../utils/constant'

import AppUser from './appUser';

class AppHeader extends PureComponent {

  componentDidMount() {
    document.title = this.props.pageTitle + APP_TITLE_prefix ;
  }

  componentDidUpdate() {
    document.title = this.props.pageTitle + APP_TITLE_prefix ;
  }

  render() {
    const { pageTitle } = this.props;
    return (
      <header className="rd-header">
        <h1>{pageTitle}</h1>
        <AppUser />
      </header>
    );
  }
}

export default AppHeader;
