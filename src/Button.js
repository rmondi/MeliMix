import React from 'react'
import PropTypes from 'prop-types'

function Button ({ onclick, type, children }) {
  return <button onClick={onclick} className={"btn btn-" + type}>{children}</button>
}

Button.defaultProps = {
  onClick: () => null
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.string
}

export default Button;
