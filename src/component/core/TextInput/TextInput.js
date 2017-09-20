import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import './TextInput.css'

/**
 * TextInput.
 */
class TextInput extends PureComponent{
  
  render(){
  
    const classes = classNames(
      'form-control',
      (this.props.className) ? this.props.className : ''
    );
    
    if(this.props.type === 'file'){
      return (
        <div>
          <label className="file-control">
            <input className={classes} {...this.props} />
            <span className="form-control--file"/>
          </label>
        </div>
        
      );
    }else {
      return (
        <input className={classes} {...this.props} />
      );
    }
  }
}



TextInput.defaultProps = {
  type: 'text'
};


TextInput.propTypes = {
  /** Type of input tag */
  type: PropTypes.string.isRequired
};

export default TextInput;
