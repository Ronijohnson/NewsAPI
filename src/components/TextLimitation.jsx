import React from 'react'
import PropTypes from 'prop-types'

const TextLimitation = (text,TextLimit) =>{
    if (text && text.length > TextLimit){


        return text.slice(0,TextLimit)+ "....";
        
    }
 
}

export default TextLimitation