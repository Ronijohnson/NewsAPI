import React from 'react'
import PropTypes from 'prop-types'
import TextLimitation from './TextLimitation'

const Newcard1 = props => {
    console.log("props",props)
    // destructure methood.......
    const{value}=props    
    
  return (
    <div className='card1-cantainer bg-image hover-zoom'>
         <div key={value.url}>
          <div className="card" style={{ width: '18rem' }}>
            <img src={value.urlToImage} className="card-img-top" alt="Loading"  />
            <div className="card-body">
              <h5 className="card-title">{TextLimitation(value.title,20)}</h5>
              <p className="card-text">{TextLimitation(value.description,50)}</p>
            </div>
            <div className="card-body">
            <p className="card-text"> <strong>Date:</strong> {(value.publishedAt)}</p>
            <p className="card-text"><strong>Source:  </strong>{(value.source.name)}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

Newcard1.propTypes = {}

export default Newcard1