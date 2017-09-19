import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

// import classNames from 'classnames/bind';

import './CardBlock.scss'

/**
 * CardBlock.
 */
class CardBlock extends PureComponent{
  
  render(){
    return (
      <div className="card-block">
        {this.props.children}
      </div>
    );
  }
}

export default CardBlock;