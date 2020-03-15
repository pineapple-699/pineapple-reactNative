import React from 'react';
import PropTypes from 'prop-types';
import {
  StatusBar as SB
} from 'react-native';

export default function StatusBar({statusbarStyle}) {
  return <SB barStyle={statusbarStyle} />;
}

Button.defaultProps = {
  statusbarStyle: "light-conent",
};

Button.propTypes = {
  statusbarStyle: PropTypes.string,
};
