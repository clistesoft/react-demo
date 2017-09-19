import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

// import classNames from 'classnames/bind';

import './Card.scss'

/**
 * Card.
 */
class Card extends PureComponent{
  
  render(){
    return (
      <div className="card">
        {this.props.children}
      </div>
    );
  }
}

export default Card;