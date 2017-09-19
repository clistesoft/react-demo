import React, { PureComponent } from 'react';
import '../assets/stylesheets/default.scss'

import AppSideBar from '../component/common/appSideBar'

class AppContainer extends PureComponent {
  render() {
    return (
      <section className="rd-container">
        <AppSideBar />
        { this.props.children }
      </section>
    );
  }
}

export default AppContainer;
