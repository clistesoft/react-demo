import React, { PureComponent } from 'react';


import AppHeader from '../component/common/appHeader'

class AppLayoutContainer extends PureComponent {
  render() {
    return (
      <section className="rd-content">
        <AppHeader pageTitle={this.props.children.props.route.title} />
        <div className="rd-page">
          { this.props.children }
        </div>
      </section>
    );
  }
}

export default AppLayoutContainer;
