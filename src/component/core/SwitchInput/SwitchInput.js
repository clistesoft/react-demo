import React, { PureComponent } from 'react';

import './SwitchInput.css'

/**
 * Switch.
 */

class SwitchInput extends PureComponent{
  
  render(){
    return (
      <div className="switch">
        <label>
          <input type="checkbox"/>
          <span className="switch__label">
            <span className="switch__label-on">{this.props.inactiveValue}</span>
            <span className="switch__label-off">{this.props.activeValue}</span>
            <span className="switch__circle"/>
          </span>
        </label>
      </div>
      
    );
  }
}


export default SwitchInput;
