import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

function Button ({ onclick, type, children }) {
  return <button onClick={onclick} className={"btn btn-" + type}>{children}</button>
}

Button.defaultProps = {
  onclick: () => null
}

Button.propTypes = {
  onclick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.string
}

export default Button;
