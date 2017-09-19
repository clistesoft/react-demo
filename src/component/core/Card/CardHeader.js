import React from 'react';

import './CardHeader.scss'

/*
*
* prop value takes value of header.
*
* */
const CardHeader = (props) => {
  
  return(
    <div className="card-header">
      <h3>{props.value}</h3>
    </div>
  )
};

export default CardHeader;