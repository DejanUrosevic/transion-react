import React from 'react'
import PropTypes from 'prop-types'

const LoginError = ({ text }) =>{
    return (
        <span>
            <p styles="{{ color:'red' }}">{text}</p>
        </span>
    )
}

LoginError.propTypes = {
    text: PropTypes.string.isRequireds
}

export default LoginError;