import React, { PureComponent } from 'react';
import './appUser.scss'

import Avatar from '../core/Avatar'

class AppUser extends PureComponent {
  render() {
    return (
      <div className="rd-user-block">
        <div className="rd-user-block__name">
          <strong>SuperAdmin</strong>
          xyz@example.com
        </div>

        <Avatar size="lg" initial="SA" />

      </div>
    );
  }
}

export default AppUser;
