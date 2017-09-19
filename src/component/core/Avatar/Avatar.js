import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import './Avatar.scss'

/**
 * Avatar.
 */
export default function Avatar({ initial, image, size }) {

  let classes = classNames(
    'avatar',
    {[`avatar--${size}`]: size }
  );

  if (image) {
    return (
      <p className={classes} data-initial={initial}>
        <img alt="avatar" src={image} />
      </p>
    );
  }else {
    return (
      <p className={classes} data-initial={initial} />
    );
  }

};

Avatar.propTypes = {
  /** User Initials for the Avatar */
  initial: PropTypes.string.isRequired,
  /** The size of the Avatar */
  size: PropTypes.oneOf(['', 'xs', 'sm', 'lg', 'xls']),
  /** The profile picture of the Avatar (image url ['https://cdn.dribbble.com/users/1673663/avatars/normal/3c63e526fcf7479c6f971bf0371416ce.jpg?1491214887'])  */
  image: PropTypes.string
};
