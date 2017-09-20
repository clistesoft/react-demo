import React, { PureComponent } from 'react';
import { Link } from 'react-router'
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import './Button.scss'

/**
 * Button.
 */
class Button extends PureComponent {

  render(){

    let { color, block, icon, ...attributes } = this.props;

    const classes = classNames(
      'button',
      {[`button--${color}`]: color },
      block ? 'button--block' : false,
      icon ? 'button--icon' : false,
      (this.props.className) ? this.props.className : ''
    );

    if(attributes.to){
      return(
        <Link {...attributes} className={classes}>
          {this.props.children}
        </Link>
      )
    }else{

      return(
        <button {...attributes} className={classes}>
          {this.props.children}
        </button>
      );
    }
  }
}

Button.propTypes = {
  /** The color of the Button */
  color: PropTypes.oneOf(['', 'default', 'primary']),
};

export default Button;
