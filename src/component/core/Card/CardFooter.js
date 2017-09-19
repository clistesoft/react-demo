import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

// import classNames from 'classnames/bind';

import './CardFooter.scss'

/**
 * CardBlock.
 */
class CardFooter extends PureComponent{
  
  render(){
    return (
      <div className="card-footer">
        {this.props.children}
      </div>
    );
  }
}

export default CardFooter;