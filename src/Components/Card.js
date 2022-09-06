import React from 'react'
function Card({ val, Heading, content }) {
  return (
    <div className="card"><img src={val} alt="" />
      <div className='cardContent'>
        <h4>{Heading}</h4>
        <p>{content} </p>
      </div>
    </div>

  )
}

export default Card