import React, { useState } from 'react';
import copy from 'copy-to-clipboard';

import CopyShortlinkSvg from '../assets/icons/CopyShortlinkSvg';
const getShortlink = __PLAYROOM_GLOBAL__GET_SHORTLINK__;

export default ({ className, url, ...rest }) => {
  const handleClick = async event => {
    event.preventDefault();

    const shortlink = await getShortlink(url);
    copy(shortlink);
  };

  return (
    <React.Fragment>
      <CopyShortlinkSvg
        title="Copy shortlink"
        className={className}
        onClick={handleClick}
      />
    </React.Fragment>
  );
};
