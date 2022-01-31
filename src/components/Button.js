/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import React from 'react'

const Button = ({text, onClick, btnColor, showAdd}) => {

    return (
        <button style={{backgroundColor: btnColor, color: "white"}} className="btn" onClick={() => showAdd()} >
            {text}
        </button>
    )
}

Button.defaultProps = {
    btnColor: "rgb(66, 103, 184)",
    text: "Add"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button
