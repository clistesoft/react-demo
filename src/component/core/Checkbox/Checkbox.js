import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import './Checkbox.scss'
/**
 * Checkbox.
 */

class Checkbox extends PureComponent{
  
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
    
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  };
  
  handleCheckboxChange() {
    this.setState({
      checked: !this.state.checked,
    });
  };
  
  render(){
    
    const { disabled } = this.props;
    const { checked } = this.state;
    
    const classes = classNames(
      'checkbox',
      (this.props.className) ? this.props.className : ''
    );
    
    return (
  
      <div className={classes} >
        <input type="checkbox"
               id={this.props.name}
               className="checkbox--input"
               checked={checked}
               disabled={disabled}
               onChange={this.handleCheckboxChange}
        />
        <label htmlFor={this.props.name}>{this.props.label}</label>
      </div>
    
    );
  }
}


Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
};

export default Checkbox;
